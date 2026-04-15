// js/app.js
import { createApp, ref, shallowRef, computed, markRaw } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { db, initFormState, injectFormulas, resetDB } from './engine.js'
import { exportToExcel } from './exporter.js'
import TaxTableRenderer from '../components/TaxTableRenderer.js'

const formToGroupMap = {
    'A000000': 'group_0000-4000', 'A100000': 'group_0000-4000', 'A101010': 'group_0000-4000', 
    'A101020': 'group_0000-4000', 'A102010': 'group_0000-4000', 'A102020': 'group_0000-4000', 
    'A103000': 'group_0000-4000', 'A104000': 'group_0000-4000',
    'A105000': 'group_5000-5070', 'A105010': 'group_5000-5070', 'A105020': 'group_5000-5070', 
    'A105030': 'group_5000-5070', 'A105040': 'group_5000-5070', 'A105050': 'group_5000-5070', 
    'A105060': 'group_5000-5070', 'A105070': 'group_5000-5070',
    'A105080': 'group_5080-7012', 'A105090': 'group_5080-7012', 'A105100': 'group_5080-7012', 
    'A105110': 'group_5080-7012', 'A105120': 'group_5080-7012', 'A106000': 'group_5080-7012', 
    'A107011': 'group_5080-7012', 'A107012': 'group_5080-7012',
    'A107020': 'group_7020-8020', 'A107030': 'group_7020-8020', 'A107041': 'group_7020-8020', 
    'A107042': 'group_7020-8020', 'A107050': 'group_7020-8020', 'A108000': 'group_7020-8020', 
    'A108010': 'group_7020-8020', 'A108020': 'group_7020-8020',
    'A108030': 'group_8030-9010', 'A109000': 'group_8030-9010', 'A109010': 'group_8030-9010'
}

const PlaceholderForm = {
    template: `<div class="form-card" style="text-align:center;padding:60px;"><h3>⚠️ 暂未配置该表单数据，请在对应的 group 文件中添加</h3></div>`
}

const App = {
    components: { TaxTableRenderer },
    template: `
        <div class="app-container">
            <div class="top-banner" style="position: fixed; top: 0; left: 0; width: 100%; background-color: #fff3cd; color: #856404; text-align: center; padding: 12px 0; font-weight: bold; z-index: 2000; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border-bottom: 1px solid #ffeeba; font-size: 14px; height: 48px; box-sizing: border-box;">
                💡 本系统属于模拟系统，仅用于学习交流，具体依税务实际征税为准! &nbsp; 加微信进群 13519445134
            </div>

            <div style="padding-top: 48px; min-height: 100vh;">
                <div v-if="!isFilling" class="directory-container">
                    <div class="directory-header" style="padding: 20px 0; border-bottom: 1px solid #eee;">
                        <h2>企业所得税申报系统</h2>
                        <div class="action-group">
                            <button class="btn default-btn" @click="selectAll">全选</button>
                            <button class="btn default-btn" @click="deselectAll">取消</button>
                            <button class="btn primary-btn" @click="startFilling" :disabled="selectedIds.length === 0">
                                进入填报 <span v-if="selectedIds.length > 0">({{ selectedIds.length }})</span>
                            </button>
                        </div>
                    </div>
                    <div class="directory-list" style="margin-top: 20px;">
                        <label v-for="item in fullCatalog" :key="item.id" class="checkbox-item">
                            <input type="checkbox" :value="item.id" v-model="selectedIds">
                            <span class="form-id">{{ item.id }}</span>
                            <span class="form-name">{{ item.name }}</span>
                        </label>
                    </div>
                </div>

                <div v-else class="workspace">
                    <div class="sidebar" style="display: flex; flex-direction: column; height: calc(100vh - 48px); position: sticky; top: 48px; background: #4285f4; color: #ffffff;">
                        
                        <div class="sidebar-menu-list" style="flex: 1; overflow-y: auto; padding: 10px 0;">
                            <div v-for="item in selectedForms" :key="item.id" 
                                 class="menu-item" :class="{ active: currentMenu === item.id }" @click="switchTab(item)">
                                <div style="font-weight:bold;">{{ item.id }}</div>
                                <div style="font-size:12px;opacity:0.9;line-height:1.4;">{{ item.name }}</div>
                            </div>
                        </div>

                        <div class="sidebar-footer" style="padding: 15px; border-top: 1px solid rgba(255, 255, 255, 0.2); background: #4285f4; flex-shrink: 0;">
                            <button class="back-btn" @click="isFilling = false" style="width: 100%; box-sizing: border-box; background: #ffffff; color: #4285f4; border: none; border-radius: 4px; padding: 10px 0; font-weight: bold; cursor: pointer; margin-bottom: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.15); transition: background 0.2s;">
                                ← 返回目录
                            </button>
                            
                            <button class="btn success-btn" @click="handleExport" :disabled="isExporting" style="width: 100%; margin-bottom: 12px; box-sizing: border-box; padding: 10px 0; font-weight: bold; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                {{ isExporting ? '导出中...' : '📥 导出到 Excel' }}
                            </button>
                            
                            <button class="btn danger-btn" @click="handleReset" style="width: 100%; box-sizing: border-box; padding: 10px 0; font-weight: bold; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                🗑️ 重置填写数据
                            </button>
                        </div>
                    </div>
                    
                    <div class="content" style="position: relative; flex: 1;">
                        <div class="workspace-actions" style="background: #ffffff; padding: 0 20px; border-bottom: 2px solid #4a90e2; display: flex; align-items: center; height: 60px; box-sizing: border-box;">
                            <div style="color: #333; font-size: 15px;">
                                当前填报表单：<strong style="color: #4a90e2; font-size: 16px;">{{ currentMenu }}</strong>
                            </div>
                        </div>

                        <div class="tax-table-container" style="padding: 20px;">
                            <TaxTableRenderer v-if="isCurrentFormConfig" :config="currentConfig" />
                            <component v-else :is="currentView" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    setup() {
        const fullCatalog = ref([
            { id: 'A000000', name: '企业所得税年度纳税申报基础信息表' },
            { id: 'A100000', name: '企业所得税年度纳税申报主表' },
            { id: 'A101010', name: '一般企业收入明细表' },
            { id: 'A101020', name: '金融企业收入明细表' },
            { id: 'A102010', name: '一般企业成本支出明细表' },
            { id: 'A102020', name: '金融企业支出明细表' },
            { id: 'A103000', name: '事业单位、民间非营利组织收入、支出明细表' },
            { id: 'A104000', name: '期间费用明细表' },
            { id: 'A105000', name: '纳税调整项目明细表' },
            { id: 'A105010', name: '视同销售和房地产开发企业特定业务纳税调整明细表' },
            { id: 'A105020', name: '未按权责发生制确认收入纳税调整明细表' },
            { id: 'A105030', name: '投资收益纳税调整明细表' },
            { id: 'A105040', name: '专项用途财政性资金纳税调整明细表' },
            { id: 'A105050', name: '职工薪酬支出及纳税调整明细表' },
            { id: 'A105060', name: '广告费和业务宣传费跨年度纳税调整明细表' },
            { id: 'A105070', name: '捐赠支出及纳税调整明细表' },
            { id: 'A105080', name: '资产折旧、摊销及纳税调整明细表' },
            { id: 'A105090', name: '资产损失税前扣除及纳税调整明细表' },
            { id: 'A105100', name: '企业重组及递延纳税事项纳税调整明细表' },
            { id: 'A105110', name: '政策性搬迁纳税调整明细表' },
            { id: 'A105120', name: '特殊行业准备金及纳税调整明细表' },
            { id: 'A106000', name: '企业所得税弥补亏损明细表' },
            { id: 'A107011', name: '符合条件的居民企业之间的股息、红利等权益性投资收益优惠明细表' },
            { id: 'A107012', name: '研发费用加计扣除优惠明细表' },
            { id: 'A107020', name: '所得减免优惠明细表' },
            { id: 'A107030', name: '抵扣应纳税所得额明细表' },
            { id: 'A107041', name: '高新技术企业优惠情况及明细表' },
            { id: 'A107042', name: '软件、集成电路企业优惠情况及明细表' },
            { id: 'A107050', name: '税额抵免优惠明细表' },
            { id: 'A108000', name: '境外所得税收抵免明细表' },
            { id: 'A108010', name: '境外所得纳税调整后所得明细表' },
            { id: 'A108020', name: '境外分支机构弥补亏损明细表' },
            { id: 'A108030', name: '跨年度结转抵免境外所得税明细表' },
            { id: 'A109000', name: '跨地区经营汇总纳税企业年度分摊企业所得税明细表' },
            { id: 'A109010', name: '企业所得税汇总纳税分支机构所得税分配表' }
        ])
        
        const selectedIds = ref(['A100000', 'A105000', 'A000000'])
        const isFilling = ref(false)
        const isExporting = ref(false)
        const currentMenu = ref('')
        const isCurrentFormConfig = ref(false)
        const currentConfig = ref(null)
        const currentView = shallowRef(null)
        const loadedLogics = new Set()

        const selectedForms = computed(() => fullCatalog.value.filter(i => selectedIds.value.includes(i.id)))

        const selectAll = () => { selectedIds.value = fullCatalog.value.map(i => i.id) }
        const deselectAll = () => { selectedIds.value = [] }

        const handleReset = () => {
            if (confirm('确认要清空所有已填报的数据吗？该操作不可撤销。')) {
                resetDB()
            }
        }

        const handleExport = async () => {
            isExporting.value = true
            try {
                await exportToExcel(selectedIds.value, formToGroupMap, db)
            } catch (err) {
                alert('导出失败，请检查控制台错误信息。')
            } finally {
                isExporting.value = false
            }
        }

        const startFilling = () => { isFilling.value = true; if (selectedForms.value[0]) switchTab(selectedForms.value[0]); }

        const switchTab = async (formItem) => {
            currentMenu.value = formItem.id
            const formId = formItem.id
            const groupName = formToGroupMap[formId]

            if (!groupName) {
                isCurrentFormConfig.value = false
                currentView.value = markRaw(PlaceholderForm)
                return
            }

            try {
                const groupModule = await import(`../forms/${groupName}.js`)
                const bundle = groupModule.formBundle || Object.values(groupModule)[0] 
                const target = bundle[formId]

                if (target) {
                    const fields = []
                    target.schema.rows.forEach(r => {
                        if (r.key) fields.push({ key: r.key, type: r.type || 'number' })
                        if (r.inputs) r.inputs.forEach(i => { 
                            if (i.key) fields.push({ key: i.key, type: i.type || 'number' }) 
                        })
                    })
                    initFormState(formId, fields)

                    if (target.logic && !loadedLogics.has(formId)) {
                        injectFormulas(target.logic)
                        loadedLogics.add(formId)
                    }

                    currentConfig.value = target.schema
                    isCurrentFormConfig.value = true
                } else {
                    isCurrentFormConfig.value = false
                    currentView.value = markRaw(PlaceholderForm)
                }
            } catch (e) {
                console.warn(`加载 ${groupName}.js 失败`, e)
                isCurrentFormConfig.value = false
                currentView.value = markRaw(PlaceholderForm)
            }
        }

        return { 
            fullCatalog, selectedIds, isFilling, selectedForms, currentMenu, 
            isCurrentFormConfig, currentConfig, currentView, isExporting,
            startFilling, switchTab, selectAll, deselectAll, handleReset, handleExport
        }
    }
}
createApp(App).mount('#app')