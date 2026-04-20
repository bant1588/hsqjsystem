// forms/group_0000.js

// 自定义精美弹窗函数（模拟类似 Element UI 的风格）
const showCustomAlert = () => {
    // 避免重复弹窗
    if (document.getElementById('custom-micro-alert')) return;

    // 1. 创建遮罩层
    const overlay = document.createElement('div');
    overlay.id = 'custom-micro-alert';
    Object.assign(overlay.style, {
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)', zIndex: '9999',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        backdropFilter: 'blur(2px)', transition: 'all 0.3s'
    });

    // 2. 创建弹窗主体
    const modal = document.createElement('div');
    Object.assign(modal.style, {
        backgroundColor: '#fff', width: '480px', borderRadius: '4px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.15)', overflow: 'hidden',
        fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif'
    });

    // 3. 头部信息区
    const header = document.createElement('div');
    Object.assign(header.style, {
        padding: '20px 20px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    });
    header.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: bold; color: #303133;">
            <div style="background: #409EFF; color: #fff; width: 24px; height: 24px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 16px; font-weight: bold; font-family: serif; line-height: 1;">i</div>
            <span>信息</span>
        </div>
        <div style="cursor: pointer; color: #909399; font-size: 22px; font-weight: normal; line-height: 1; padding: 0 4px;" onmouseover="this.style.color='#f56c6c'" onmouseout="this.style.color='#909399'" onclick="document.getElementById('custom-micro-alert').remove()">×</div>
    `;

    // 4. 主体内容区
    const body = document.createElement('div');
    Object.assign(body.style, {
        padding: '10px 20px 20px', fontSize: '15px', color: '#606266', lineHeight: '1.8'
    });
    body.innerHTML = `
        根据您当前填报信息，属于小型微利企业，依据政策可免于填报：<br>
        《一般企业收入明细表》（A101010）<br>
        《金融企业收入明细表》（A101020）<br>
        《一般企业成本支出明细表》（A102010）<br>
        《金融企业支出明细表》（A102020）<br>
        《事业单位、民间非营利组织收入、支出明细表》（A103000）<br>
        《期间费用明细表》（A104000）<br>
        以及基础信息表“主要股东及分红情况”项目。
    `;

    // 5. 底部按钮区
    const footer = document.createElement('div');
    Object.assign(footer.style, {
        padding: '10px 20px 20px', display: 'flex', justifyContent: 'flex-end'
    });
    footer.innerHTML = `
        <button style="background: #409EFF; color: #fff; border: none; padding: 10px 24px; border-radius: 4px; font-size: 14px; cursor: pointer; transition: background 0.3s;" onmouseover="this.style.background='#66b1ff'" onmouseout="this.style.background='#409EFF'" onclick="document.getElementById('custom-micro-alert').remove()">确定</button>
    `;

    modal.appendChild(header);
    modal.appendChild(body);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
};

export const formBundle = {
    // ==========================================
    // A000000 企业所得税年度纳税申报基础信息表
    // ==========================================
    A000000: {
        schema: {
            id: 'A000000',
            title: '企业所得税年度纳税申报基础信息表 (A000000)',
            columns: [
                { width: '16%' }, { width: '14%' }, { width: '20%' },
                { width: '10%' }, { width: '25%' }, { width: '15%' }
            ],
            rows: [
                { inputs: [{type: 'label', value: '基本经营情况（必填项目）', colspan: 6, style: 'font-weight:bold;text-align:center;background-color:#fafafa;'}] },
                { inputs: [
                    {type: 'label', value: '101 纳税申报企业类型（填写代码）', colspan: 2, style: 'text-align:left;'}, 
                    {key: 'L101', type: 'select', options: [
                        '100-非跨地区经营企业',
                        '210-跨地区经营企业总机构/总机构（跨省）/适用《跨地区经营汇总纳税企业所得税征收管理办法》',
                        '220-跨地区经营企业总机构/总机构（跨省）/不适用《跨地区经营汇总纳税企业所得税征收管理办法》',
                        '230-总机构（省内）',
                        '311-跨地区经营企业分支机构/需进行完整年度纳税申报/支机构（须进行完整年度申报并按比例纳税）',
                        '312-跨地区经营企业分支机构/分支机构（须进行完整年度申报但不就地缴纳）'
                    ]},
                    {type: 'label', value: '102 分支机构就地纳税比例（%）', colspan: 2, style: 'text-align:left;'}, {key: 'L102', type: 'number'}
                ]},
                { inputs: [
                    {type: 'label', value: '103 资产总额（填写平均值，单位：万元）', colspan: 2, style: 'text-align:left;'}, {key: 'L103', type: 'number'},
                    {type: 'label', value: '104 从业人数（填写平均值，单位：人）', colspan: 2, style: 'text-align:left;'}, {key: 'L104', type: 'number'}
                ]},
                { inputs: [
                    {type: 'label', value: '105 所属国民经济行业（填写代码）', colspan: 2, style: 'text-align:left;'}, {key: 'L105', type: 'text'},
                    {type: 'label', value: '106 从事国家限制或禁止行业', colspan: 2, style: 'text-align:left;'}, {key: 'L106', type: 'radio', options: ['是', '否']}
                ]},
                { inputs: [
                    {type: 'label', value: '107 适用会计准则或会计制度（填写代码）', colspan: 2, style: 'text-align:left;'}, 
                    {key: 'L107', type: 'select', options: [
                        '110-企业会计准则-一般企业',
                        '120-企业会计准则-银行',
                        '130-企业会计准则-证券',
                        '140-企业会计准则-保险',
                        '150-企业会计准则-担保',
                        '200-小企业会计准则',
                        '300-企业会计制度',
                        '410-事业单位会计准则-事业单位会计制度',
                        '420-事业单位会计准则-科学事业单位会计制度',
                        '430-事业单位会计准则-医院会计制度',
                        '440-事业单位会计准则-高等学校会计制度',
                        '450-事业单位会计准则-中小学校会计制度',
                        '460-事业单位会计准则-彩票机构会计制度',
                        '500-民间非营利组织会计制度',
                        '600-农村集体经济组织会计制度',
                        '700-农民专业合作社财务会计制度（试行）',
                        '800-政府会计准则',
                        '999-其他'
                    ]},
                    {type: 'label', value: '108 采用一般企业财务报表格式（2019年版）', colspan: 2, style: 'text-align:left;'}, {key: 'L108', type: 'radio', options: ['是', '否']}
                ]},
                { inputs: [
                    {type: 'label', value: '109 小型微利企业', colspan: 2, style: 'text-align:left;'}, {key: 'L109', type: 'radio', options: ['是', '否']},
                    {type: 'label', value: '110 上市公司', style: 'text-align:left;'}, {key: 'L110', type: 'radio', options: ['是(境内)', '是(境外)', '否'], colspan: 2}
                ]},

                { inputs: [{type: 'label', value: '有关涉税事项情况（存在或者发生下列事项时必填）', colspan: 6, style: 'font-weight:bold;text-align:center;background-color:#fafafa;'}] },
                { inputs: [
                    {type: 'label', value: '201 从事股权投资业务', colspan: 2, style: 'text-align:left;'}, {key: 'L201', type: 'radio', options: ['是', '否']},
                    {type: 'label', value: '202 存在境外关联交易', colspan: 2, style: 'text-align:left;'}, {key: 'L202', type: 'radio', options: ['是', '否']}
                ]},
                { inputs: [
                    {type: 'label', value: '203 境外所得<br>信息', rowspan: 2, style: 'text-align:center;'},
                    {type: 'label', value: '203-1 选择采用的境外所得抵免方式', colspan: 2, style: 'text-align:left;'},
                    {key: 'L203_1', type: 'radio', options: ['分国(地区)不分项', '不分国(地区)不分项'], colspan: 3}
                ]},
                { inputs: [
                    {type: 'label', value: '203-2 新增境外直接投资信息', colspan: 2, style: 'text-align:left;'},
                    {key: 'L203_2', type: 'radio', options: ['是(旅游业)', '是(现代服务业)', '是(高新技术产业)', '否'], colspan: 3}
                ]},
                { inputs: [
                    {type: 'label', value: '204 有限合伙制创业投资企业的法人合伙人', colspan: 2, style: 'text-align:left;'}, {key: 'L204', type: 'radio', options: ['是']},
                    {type: 'label', value: '205 创业投资企业', colspan: 2, style: 'text-align:left;'}, {key: 'L205', type: 'radio', options: ['是']}
                ]},
                { inputs: [
                    {type: 'label', value: '206 技术先进型服务企业类型（填写代码）', colspan: 2, style: 'text-align:left;'}, {key: 'L206', type: 'text'},
                    {type: 'label', value: '207 非营利组织', colspan: 2, style: 'text-align:left;'}, {key: 'L207', type: 'radio', options: ['是']}
                ]},
                { inputs: [
                    {type: 'label', value: '208 软件、集成电路企业类型（填写代码）', colspan: 2, style: 'text-align:left;'}, {key: 'L208', type: 'text'},
                    {type: 'label', value: '209 集成电路生产项目类型', colspan: 2, style: 'text-align:left;'}, {key: 'L209', type: 'radio', options: ['130纳米', '65纳米', '28纳米']}
                ]},
                { inputs: [
                    {type: 'label', value: '210 科技型中<br>小企业', rowspan: 2, style: 'text-align:center;'},
                    {type: 'label', value: '210-1 __年（申报所属期年度）入库编号 1', colspan: 2, style: 'text-align:left;'}, {key: 'L210_1', type: 'text'},
                    {type: 'label', value: '210-2 入库时间 1', style: 'text-align:left;'}, {key: 'L210_2', type: 'text'}
                ]},
                { inputs: [
                    {type: 'label', value: '210-3 __年（所属期下一年度）入库编号 2', colspan: 2, style: 'text-align:left;'}, {key: 'L210_3', type: 'text'},
                    {type: 'label', value: '210-4 入库时间 2', style: 'text-align:left;'}, {key: 'L210_4', type: 'text'}
                ]},
                { inputs: [
                    {type: 'label', value: '211 高新技术<br>企业申报所<br>属期年度有<br>效的高新技<br>术企业证书', rowspan: 2, style: 'text-align:center;'},
                    {type: 'label', value: '211-1 证书编号 1', colspan: 2, style: 'text-align:left;'}, {key: 'L211_1', type: 'text'},
                    {type: 'label', value: '211-2 发证时间 1', style: 'text-align:left;'}, {key: 'L211_2', type: 'text'}
                ]},
                { inputs: [
                    {type: 'label', value: '211-3 证书编号 2', colspan: 2, style: 'text-align:left;'}, {key: 'L211_3', type: 'text'},
                    {type: 'label', value: '211-4 发证时间 2', style: 'text-align:left;'}, {key: 'L211_4', type: 'text'}
                ]},
                { inputs: [
                    {type: 'label', value: '212 重组事项税务处理方式', colspan: 2, style: 'text-align:left;'}, {key: 'L212', type: 'radio', options: ['一般性', '特殊性']},
                    {type: 'label', value: '213 重组交易类型（填写代码）', colspan: 2, style: 'text-align:left;'}, {key: 'L213', type: 'text'}
                ]},
                { inputs: [
                    {type: 'label', value: '214 重组当事方类型（填写代码）', colspan: 2, style: 'text-align:left;'}, {key: 'L214', type: 'text'},
                    {type: 'label', value: '215 政策性搬迁开始时间', colspan: 2, style: 'text-align:left;'}, {key: 'L215', type: 'text', placeholder: '年 月'}
                ]},
                { inputs: [
                    {type: 'label', value: '216 发生政策性搬迁且停止生产经营无所得年度', colspan: 2, style: 'text-align:left;'}, {key: 'L216', type: 'radio', options: ['是']},
                    {type: 'label', value: '217 政策性搬迁损失分期扣除年度', colspan: 2, style: 'text-align:left;'}, {key: 'L217', type: 'radio', options: ['是']}
                ]},
                { inputs: [
                    {type: 'label', value: '218 发生非货币性资产对外投资递延纳税事项', colspan: 2, style: 'text-align:left;'}, {key: 'L218', type: 'radio', options: ['是']},
                    {type: 'label', value: '219 非货币性资产对外投资转让所得递延纳税年度', colspan: 2, style: 'text-align:left;'}, {key: 'L219', type: 'radio', options: ['是']}
                ]},
                { inputs: [
                    {type: 'label', value: '220 发生技术成果投资入股递延纳税事项', colspan: 2, style: 'text-align:left;'}, {key: 'L220', type: 'radio', options: ['是']},
                    {type: 'label', value: '221 技术成果投资入股递延纳税年度', colspan: 2, style: 'text-align:left;'}, {key: 'L221', type: 'radio', options: ['是']}
                ]},
                { inputs: [
                    {type: 'label', value: '222 发生资产（股权）划转特殊性税务处理事项', colspan: 2, style: 'text-align:left;'}, {key: 'L222', type: 'radio', options: ['是']},
                    {type: 'label', value: '223 债务重组所得递延纳税年度', colspan: 2, style: 'text-align:left;'}, {key: 'L223', type: 'radio', options: ['是']}
                ]},
                { inputs: [
                    {type: 'label', value: '224 研发支出辅助账样式', colspan: 2, style: 'text-align:left;'}, {key: 'L224', type: 'radio', options: ['2015版', '2021版', '自行设计'], colspan: 4}
                ]},

                { inputs: [{type: 'label', value: '主要股东及分红情况（必填项目）', colspan: 6, style: 'font-weight:bold;text-align:center;background-color:#fafafa;'}] },
                { inputs: [
                    {type: 'label', value: '股东名称', style: 'text-align:center;font-weight:bold;'},
                    {type: 'label', value: '证件种类', style: 'text-align:center;font-weight:bold;'},
                    {type: 'label', value: '证件号码', style: 'text-align:center;font-weight:bold;'},
                    {type: 'label', value: '投资比例<br>(%)', style: 'text-align:center;font-weight:bold;'},
                    {type: 'label', value: '当年(决议日)分配的股息、红利等<br>权益性投资收益金额', style: 'text-align:center;font-weight:bold;'},
                    {type: 'label', value: '国籍(注<br>册地址)', style: 'text-align:center;font-weight:bold;'}
                ]},
                ...Array.from({length: 5}).map((_, i) => ({
                    inputs: [
                        {key:`L30${i+1}_1`, type:'text'}, {key:`L30${i+1}_2`, type:'text'}, {key:`L30${i+1}_3`, type:'text'},
                        {key:`L30${i+1}_4`, type:'number'}, {key:`L30${i+1}_5`, type:'number'}, {key:`L30${i+1}_6`, type:'text'}
                    ]
                })),
                { inputs: [
                    {type: 'label', value: '其余股东合计', style: 'text-align:center;font-weight:bold;'},
                    {type: 'label', value: '—', style: 'text-align:center;'},
                    {type: 'label', value: '—', style: 'text-align:center;'},
                    {key: 'L399_4', type: 'number'},
                    {key: 'L399_5', type: 'number'},
                    {type: 'label', value: '—', style: 'text-align:center;'}
                ]}
            ]
        },
        logic: (db) => {
            if (!db.A000000) return;
            const t = db.A000000;

            // 监听 L109 小型微利企业选项的变化
            if (t.L109 === '是' && !t._alert109Shown) {
                // 标记已弹窗，防止死循环
                t._alert109Shown = true;
                // 使用 setTimeout 将弹窗推出当前渲染流，防止阻塞 UI 更新
                setTimeout(() => {
                    showCustomAlert();
                }, 50);
            } else if (t.L109 === '否' || t.L109 === '') {
                // 当用户切回"否"或重置表单时，重置弹窗标志位，以便下次选择"是"时仍能正常弹窗
                t._alert109Shown = false;
            }
        }
    }
}