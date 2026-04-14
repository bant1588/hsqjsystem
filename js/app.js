// js/app.js
// 引入 Vue 的核心方法，新增了 defineAsyncComponent (动态加载核心)
import { createApp, ref, shallowRef, computed, defineAsyncComponent } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// 1. 默认的占位组件 (容错机制)
// 当找不到对应的表单文件时，会优雅地显示这个界面，绝对不会白屏报错
const PlaceholderForm = {
    props: ['formId', 'formName'],
    template: `
        <div class="form-card" style="text-align: center; padding: 60px 20px;">
            <h2 style="color: #333; margin-bottom: 30px;">{{ formId }} - {{ formName }}</h2>
            <div style="display: inline-block; text-align: left; padding: 25px; background: #fffbe6; border: 1px solid #ffe58f; border-radius: 6px;">
                <h3 style="color: #faad14; margin-top: 0;">⚠️ 尚未找到表单文件</h3>
                <p style="color: #666; line-height: 1.6;">
                    系统尝试加载 <b>forms/{{ formId }}.js</b> 失败。<br>
                    请确认：<br>
                    1. <b>forms</b> 文件夹下是否已创建 <b>{{ formId }}.js</b> 文件？<br>
                    2. 文件名的大小写是否完全一致？<br>
                    3. 文件内是否正确写了 <code>export default { ... }</code> ？
                </p>
            </div>
        </div>
    `
}

// 2. 主程序
const App = {
    template: `
        <div v-if="!isFilling" class="directory-container">
            <div class="directory-header">
                <h2>企业所得税年度纳税申报表目录</h2>
                <button class="start-btn" @click="startFilling" :disabled="selectedIds.length === 0">
                    开始填报 (已选 {{ selectedIds.length }} 张表)
                </button>
            </div>
            <div class="directory-list">
                <label v-for="item in fullCatalog" :key="item.id" class="checkbox-item">
                    <input type="checkbox" :value="item.id" v-model="selectedIds">
                    <span class="form-id">{{ item.id }}</span>
                    <span class="form-name">{{ item.name }}</span>
                </label>
            </div>
        </div>

        <div v-else class="workspace">
            <div class="sidebar">
                <div class="sidebar-header">
                    <button class="back-btn" @click="isFilling = false">← 返回修改勾选</button>
                </div>
                <div v-for="item in selectedForms" :key="item.id"
                     class="menu-item"
                     :class="{ active: currentMenu === item.id }"
                     @click="switchTab(item)">
                    <div style="font-weight: bold; font-family: monospace; font-size: 15px;">{{ item.id }}</div>
                    <div style="font-size: 12px; margin-top: 6px; opacity: 0.8; line-height: 1.3;">{{ item.name }}</div>
                </div>
            </div>
            <div class="content">
                <component :is="currentView" :formId="currentMenu" :formName="currentFormName"></component>
            </div>
        </div>
    `,
    setup() {
        // 3. 完整目录数据字典
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
            { id: 'A105060', name: '广告费和业务宣传费等跨年度纳税调整明细表' },
            { id: 'A105070', name: '捐赠支出及纳税调整明细表' },
            { id: 'A105080', name: '资产折旧、摊销及纳税调整明细表' },
            { id: 'A105090', name: '资产损失税前扣除及纳税调整明细表' },
            { id: 'A105100', name: '企业重组及递延纳税事项纳税调整明细表' },
            { id: 'A105110', name: '政策性搬迁纳税调整明细表' },
            { id: 'A105120', name: '贷款损失准备金及纳税调整明细表' },
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

        // 状态管理
        const selectedIds = ref(['A000000', 'A100000']) // 默认打钩的两张表
        const isFilling = ref(false) // 是否在填报界面
        const currentMenu = ref('') // 当前菜单的ID
        const currentFormName = ref('') // 当前菜单的名字
        const currentView = shallowRef(null) // 右侧动态展示的组件

        // 根据勾选计算左侧列表
        const selectedForms = computed(() => {
            return fullCatalog.value.filter(item => selectedIds.value.includes(item.id))
        })

        // 点击开始填报
        const startFilling = () => {
            if (selectedForms.value.length > 0) {
                isFilling.value = true
                switchTab(selectedForms.value[0]) // 自动打开第一张表
            }
        }

        // 💡 核心黑科技：动态切换并加载表单文件
        const switchTab = (formItem) => {
            currentMenu.value = formItem.id
            currentFormName.value = formItem.name
            
            // 使用 Vue 的异步组件功能，去 forms 文件夹动态抓取 JS 文件
            currentView.value = defineAsyncComponent({
                // 动态拼接文件路径，例如 '../forms/A100000.js'
                loader: () => import(`../forms/${formItem.id}.js`),
                // 如果文件不存在、网速慢、或者代码写错了导致报错，统一显示容错的黄框组件！
                errorComponent: PlaceholderForm,
                timeout: 3000
            })
        }

        return {
            fullCatalog,
            selectedIds,
            isFilling,
            selectedForms,
            currentMenu,
            currentFormName,
            currentView,
            startFilling,
            switchTab
        }
    }
}

createApp(App).mount('#app')