// forms/group_0000-4000.js

// 用于记录A100000主表默认计算结果的缓存，实现“默认公式计算也可以手动填写”
let cache_A100 = { L1: 0, L2: 0, L4: 0, L5: 0, L7: 0, L16: 0, L17: 0, L20: 0, L21: 0, L26: 0, L31: 0, L34: 0, L35: 0 };

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
                    {type: 'label', value: '107 适用会计准则或会计制度（填写代码）', colspan: 2, style: 'text-align:left;'}, {key: 'L107', type: 'text'},
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
        logic: (db) => {}
    },

    // ==========================================
    // A100000 企业所得税年度纳税申报主表
    // ==========================================
    A100000: {
        schema: {
            id: 'A100000',
            title: '企业所得税年度纳税申报主表 (A100000)',
            columns: [
                { title: '行次', width: '8%', align: 'center' },
                { title: '项 目', width: '72%', align: 'center' },
                { title: '金 额', width: '20%', align: 'center' }
            ],
            rows: [
                { line: '1', text: '一、营业收入 (填写A101010/101020/103000)', key: 'L1' },
                { line: '2', text: '减：营业成本 (填写A102010/102020/103000)', key: 'L2', indent: 1 },
                { line: '3', text: '减：税金及附加', key: 'L3', indent: 1 },
                { line: '4', text: '减：销售费用 (填写A104000)', key: 'L4', indent: 1 },
                { line: '5', text: '减：管理费用 (填写A104000)', key: 'L5', indent: 1 },
                { line: '6', text: '减：研发费用 (填写A104000)', key: 'L6', indent: 1 },
                { line: '7', text: '减：财务费用 (填写A104000)', key: 'L7', indent: 1 },
                { line: '8', text: '加：其他收益', key: 'L8', indent: 1 },
                { line: '9', text: '加：投资收益 (损失以“-”号填列)', key: 'L9', indent: 1 },
                { line: '10', text: '加：净敞口套期收益 (损失以“-”号填列)', key: 'L10', indent: 1 },
                { line: '11', text: '加：公允价值变动收益 (损失以“-”号填列)', key: 'L11', indent: 1 },
                { line: '12', text: '加：信用减值损失 (损失以“-”号填列)', key: 'L12', indent: 1 },
                { line: '13', text: '加：资产减值损失 (损失以“-”号填列)', key: 'L13', indent: 1 },
                { line: '14', text: '加：资产处置收益 (损失以“-”号填列)', key: 'L14', indent: 1 },
                { line: '15', text: '二、营业利润 (亏损以“-”号填列)', key: 'L15', isBold: true, isReadonly: true },
                { line: '16', text: '加：营业外收入 (填写A101010/101020/103000)', key: 'L16', indent: 1 },
                { line: '17', text: '减：营业外支出 (填写A102010/102020/103000)', key: 'L17', indent: 1 },
                { line: '18', text: '三、利润总额 (15+16-17)', key: 'L18', isBold: true, isReadonly: true },
                { line: '19', text: '减：境外所得 (填写A108010)', key: 'L19', indent: 1 },
                { line: '20', text: '加：纳税调整增加额 (填写A105000)', key: 'L20', indent: 1 },
                { line: '21', text: '减：纳税调整减少额 (填写A105000)', key: 'L21', indent: 1 },
                { line: '22', text: '减：免税、减计收入及加计扣除 (22.1+22.2+…)', key: 'L22', indent: 1, isReadonly: true },
                { line: '22.1', text: '', isTextEditable: true, textKey: 'L22_1_name', textPlaceholder: '（填写优惠事项名称）', key: 'L22_1', indent: 2 },
                { line: '22.2', text: '', isTextEditable: true, textKey: 'L22_2_name', textPlaceholder: '（填写优惠事项名称）', key: 'L22_2', indent: 2 },
                { line: '23', text: '加：境外应税所得抵减境内亏损 (填写A108000)', key: 'L23', indent: 1 },
                { line: '24', text: '四、纳税调整后所得 (18-19+20-21-22+23)', key: 'L24', isBold: true, isReadonly: true },
                { line: '25', text: '减：所得减免 (填写A107020)', key: 'L25', indent: 1 },
                { line: '26', text: '减：弥补以前年度亏损 (填写A106000)', key: 'L26', indent: 1 },
                { line: '27', text: '减：抵扣应纳税所得额 (填写A107030)', key: 'L27', indent: 1 },
                { line: '28', text: '五、应纳税所得额 (24-25-26-27)', key: 'L28', isBold: true, isReadonly: true },
                { line: '29', text: '税率 (25%)', key: 'L29', indent: 1 },
                { line: '30', text: '六、应纳所得税额 (28×29)', key: 'L30', isBold: true, isReadonly: true },
                { line: '31', text: '减：减免所得税额 (31.1+31.2+…)', key: 'L31', indent: 1 },
                { line: '31.1', text: '', isTextEditable: true, textKey: 'L31_1_name', textPlaceholder: '（填写优惠事项名称）', key: 'L31_1', indent: 2 },
                { line: '31.2', text: '', isTextEditable: true, textKey: 'L31_2_name', textPlaceholder: '（填写优惠事项名称）', key: 'L31_2', indent: 2 },
                { line: '32', text: '减：抵免所得税额 (填写A107050)', key: 'L32', indent: 1 },
                { line: '33', text: '七、应纳税额 (30-31-32)', key: 'L33', isBold: true, isReadonly: true },
                { line: '34', text: '加：境外所得应纳所得税额 (填写A108000)', key: 'L34', indent: 1 },
                { line: '35', text: '减：境外所得抵免所得税额 (填写A108000)', key: 'L35', indent: 1 },
                { line: '36', text: '八、实际应纳所得税额 (33+34-35)', key: 'L36', isBold: true, isReadonly: true },
                { line: '37', text: '减：本年累计预缴所得税额', key: 'L37', indent: 1 },
                { line: '38', text: '九、本年应补（退）所得税额 (36-37)', key: 'L38', isBold: true, isReadonly: true },
                { line: '39', text: '其中：总机构分摊本年应补（退）所得税额 (填写A109000)', key: 'L39', indent: 1 },
                { line: '40', text: '财政集中分配本年应补（退）所得税额 (填写A109000)', key: 'L40', indent: 1 },
                { line: '41', text: '总机构主体生产经营部门分摊本年应补（退）所得税额 (填写A109000)', key: 'L41', indent: 1 },
                { line: '42', text: '减：民族自治地区企业所得税地方分享部分：(□免征 □减征: 减征幅度__%)', key: 'L42', indent: 1 },
                { line: '43', text: '减：稽查查补（退）所得税额', key: 'L43', indent: 1 },
                { line: '44', text: '减：特别纳税调整补（退）所得税额', key: 'L44', indent: 1 },
                { line: '45', text: '十、本年实际应补（退）所得税额 (38-42-43-44)', key: 'L45', isBold: true, isReadonly: true }
            ]
        },
        logic: (db) => {
            if (!db.A100000) return;
            const t = db.A100000;
            
            // 抓取基础与子表数据，生成默认公式计算结果
            const calcL1 = (db.A101010?.L1 || 0) + (db.A101020?.L1 || 0) + ((db.A103000?.L1 || 0) + (db.A103000?.L10 || 0));
            const calcL2 = (db.A102010?.L1 || 0) + (db.A102020?.L1 || 0) + ((db.A103000?.L18 || 0) + (db.A103000?.L24 || 0));
            const calcL4 = db.A104000?.L26_C1 || 0;
            const calcL5 = db.A104000?.L26_C3 || 0;
            const calcL7 = db.A104000?.L26_C5 || 0;

            const calcL16 = (db.A101010?.L16 || 0) + (db.A101020?.L35 || 0);
            const calcL17 = (db.A102010?.L16 || 0) + (db.A102020?.L33 || 0);
            
            // 关联 A105000 和 A106000 数据
            const calcL20 = db.A105000?.L46_C3 || 0;
            const calcL21 = db.A105000?.L46_C4 || 0;
            const calcL26 = db.A106000?.L11_C10 || 0;

            const calcL31 = (t.L31_1 || 0) + (t.L31_2 || 0);
            
            // 关联 A108000 数据（如果系统已初始化了该表）
            const calcL34 = db.A108000?.L10_C9 || 0;
            const calcL35 = db.A108000?.L10_C12 || 0;

            // 智能赋值：如果输入框的值等于上一次算出的结果，或者是初始的0/空（说明用户没有手动改过或已清空还原），则应用公式；
            // 否则保留用户手动输入的值，切断自动覆盖
            if (t.L1 === cache_A100.L1 || t.L1 === 0 || t.L1 === '') t.L1 = calcL1;
            if (t.L2 === cache_A100.L2 || t.L2 === 0 || t.L2 === '') t.L2 = calcL2;
            if (t.L4 === cache_A100.L4 || t.L4 === 0 || t.L4 === '') t.L4 = calcL4;
            if (t.L5 === cache_A100.L5 || t.L5 === 0 || t.L5 === '') t.L5 = calcL5;
            if (t.L7 === cache_A100.L7 || t.L7 === 0 || t.L7 === '') t.L7 = calcL7;
            
            if (t.L16 === cache_A100.L16 || t.L16 === 0 || t.L16 === '') t.L16 = calcL16;
            if (t.L17 === cache_A100.L17 || t.L17 === 0 || t.L17 === '') t.L17 = calcL17;
            
            if (t.L20 === cache_A100.L20 || t.L20 === 0 || t.L20 === '') t.L20 = calcL20;
            if (t.L21 === cache_A100.L21 || t.L21 === 0 || t.L21 === '') t.L21 = calcL21;
            if (t.L26 === cache_A100.L26 || t.L26 === 0 || t.L26 === '') t.L26 = calcL26;

            if (t.L31 === cache_A100.L31 || t.L31 === 0 || t.L31 === '') t.L31 = calcL31;
            if (t.L34 === cache_A100.L34 || t.L34 === 0 || t.L34 === '') t.L34 = calcL34;
            if (t.L35 === cache_A100.L35 || t.L35 === 0 || t.L35 === '') t.L35 = calcL35;

            // 更新缓存为最新计算值，作为下次比对的参照标准
            cache_A100.L1 = calcL1;
            cache_A100.L2 = calcL2;
            cache_A100.L4 = calcL4;
            cache_A100.L5 = calcL5;
            cache_A100.L7 = calcL7;
            cache_A100.L16 = calcL16;
            cache_A100.L17 = calcL17;
            cache_A100.L20 = calcL20;
            cache_A100.L21 = calcL21;
            cache_A100.L26 = calcL26;
            cache_A100.L31 = calcL31;
            cache_A100.L34 = calcL34;
            cache_A100.L35 = calcL35;
            
            // 优惠事项明细加总
            t.L22 = (t.L22_1 || 0) + (t.L22_2 || 0);

            // 表内利润及税额计算
            t.L15 = t.L1 - t.L2 - (t.L3 || 0) - t.L4 - t.L5 - (t.L6 || 0) - t.L7 + (t.L8 || 0) + (t.L9 || 0) + (t.L10 || 0) + (t.L11 || 0) + (t.L12 || 0) + (t.L13 || 0) + (t.L14 || 0);
            t.L18 = t.L15 + t.L16 - t.L17;
            t.L24 = t.L18 - (t.L19 || 0) + (t.L20 || 0) - (t.L21 || 0) - (t.L22 || 0) + (t.L23 || 0);
            t.L28 = t.L24 - (t.L25 || 0) - (t.L26 || 0) - (t.L27 || 0);
            t.L29 = 0.25; 
            
            // 30行限制：小于0时显示0
            const calcL30_temp = t.L28 * t.L29;
            t.L30 = calcL30_temp < 0 ? 0 : calcL30_temp;

            t.L33 = t.L30 - t.L31 - (t.L32 || 0);
            
            // 实际应纳税及补退税额计算
            t.L36 = t.L33 + t.L34 - t.L35;
            t.L38 = t.L36 - (t.L37 || 0);
            t.L45 = t.L38 - (t.L42 || 0) - (t.L43 || 0) - (t.L44 || 0);
        }
    },

    // ==========================================
    // A101010 一般企业收入明细表
    // ==========================================
    A101010: {
        schema: {
            id: 'A101010',
            title: '一般企业收入明细表 (A101010)',
            columns: [{title:'行次', width:'10%', align:'center'}, {title:'项 目', width:'60%', align:'center'}, {title:'金 额', width:'30%', align:'center'}],
            rows: [
                { line: '1', text: '一、营业收入 (2+9)', key: 'L1', isBold: true, isReadonly: true },
                { line: '2', text: '（一）主营业务收入 (3+5+6+7+8)', key: 'L2', indent: 1, isReadonly: true },
                { line: '3', text: '1. 销售商品收入', key: 'L3', indent: 2 },
                { line: '4', text: '其中：非货币性资产交换收入', key: 'L4', indent: 3 },
                { line: '5', text: '2. 提供劳务收入', key: 'L5', indent: 2 },
                { line: '6', text: '3. 建造合同收入', key: 'L6', indent: 2 },
                { line: '7', text: '4. 让渡资产使用权收入', key: 'L7', indent: 2 },
                { line: '8', text: '5. 其他', key: 'L8', indent: 2 },
                { line: '9', text: '（二）其他业务收入 (10+12+13+14+15)', key: 'L9', indent: 1, isReadonly: true },
                { line: '10', text: '1. 销售材料收入', key: 'L10', indent: 2 },
                { line: '11', text: '其中：非货币性资产交换收入', key: 'L11', indent: 3 },
                { line: '12', text: '2. 出租固定资产收入', key: 'L12', indent: 2 },
                { line: '13', text: '3. 出租无形资产收入', key: 'L13', indent: 2 },
                { line: '14', text: '4. 出租包装物和商品收入', key: 'L14', indent: 2 },
                { line: '15', text: '5. 其他', key: 'L15', indent: 2 },
                { line: '16', text: '二、营业外收入 (17至26之和)', key: 'L16', isBold: true, isReadonly: true },
                { line: '17', text: '（一）非流动资产处置利得', key: 'L17', indent: 1 },
                { line: '18', text: '（二）非货币性资产交换利得', key: 'L18', indent: 1 },
                { line: '19', text: '（三）债务重组利得', key: 'L19', indent: 1 },
                { line: '20', text: '（四）政府补助利得', key: 'L20', indent: 1 },
                { line: '21', text: '（五）盘盈利得', key: 'L21', indent: 1 },
                { line: '22', text: '（六）捐赠利得', key: 'L22', indent: 1 },
                { line: '23', text: '（七）罚没利得', key: 'L23', indent: 1 },
                { line: '24', text: '（八）确实无法偿付的应付款项', key: 'L24', indent: 1 },
                { line: '25', text: '（九）汇兑收益', key: 'L25', indent: 1 },
                { line: '26', text: '（十）其他', key: 'L26', indent: 1 }
            ]
        },
        logic: (db) => {
            if (!db.A101010) return;
            const t = db.A101010;
            t.L2 = (t.L3 || 0) + (t.L5 || 0) + (t.L6 || 0) + (t.L7 || 0) + (t.L8 || 0);
            t.L9 = (t.L10 || 0) + (t.L12 || 0) + (t.L13 || 0) + (t.L14 || 0) + (t.L15 || 0);
            t.L1 = t.L2 + t.L9;
            t.L16 = (t.L17 || 0) + (t.L18 || 0) + (t.L19 || 0) + (t.L20 || 0) + (t.L21 || 0) + (t.L22 || 0) + (t.L23 || 0) + (t.L24 || 0) + (t.L25 || 0) + (t.L26 || 0);
        }
    },

    // ==========================================
    // A102010 一般企业成本支出明细表
    // ==========================================
    A102010: {
        schema: {
            id: 'A102010',
            title: '一般企业成本支出明细表 (A102010)',
            columns: [{title:'行次', width:'10%', align:'center'}, {title:'项 目', width:'60%', align:'center'}, {title:'金 额', width:'30%', align:'center'}],
            rows: [
                { line: '1', text: '一、营业成本 (2+9)', key: 'L1', isBold: true, isReadonly: true },
                { line: '2', text: '（一）主营业务成本 (3+5+6+7+8)', key: 'L2', indent: 1, isReadonly: true },
                { line: '3', text: '1. 销售商品成本', key: 'L3', indent: 2 },
                { line: '4', text: '其中：非货币性资产交换成本', key: 'L4', indent: 3 },
                { line: '5', text: '2. 提供劳务成本', key: 'L5', indent: 2 },
                { line: '6', text: '3. 建造合同成本', key: 'L6', indent: 2 },
                { line: '7', text: '4.让渡资产使用权成本', key: 'L7', indent: 2 },
                { line: '8', text: '5. 其他', key: 'L8', indent: 2 },
                { line: '9', text: '（二）其他业务成本 (10+12+13+14+15)', key: 'L9', indent: 1, isReadonly: true },
                { line: '10', text: '1. 销售材料成本', key: 'L10', indent: 2 },
                { line: '11', text: '其中：非货币性资产交换成本', key: 'L11', indent: 3 },
                { line: '12', text: '2. 出租固定资产成本', key: 'L12', indent: 2 },
                { line: '13', text: '3. 出租无形资产成本', key: 'L13', indent: 2 },
                { line: '14', text: '4. 出租包装物和商品成本', key: 'L14', indent: 2 },
                { line: '15', text: '5. 其他', key: 'L15', indent: 2 },
                { line: '16', text: '二、营业外支出 (17至26之和)', key: 'L16', isBold: true, isReadonly: true },
                { line: '17', text: '（一）非流动资产处置损失', key: 'L17', indent: 1 },
                { line: '18', text: '（二）非货币性资产交换损失', key: 'L18', indent: 1 },
                { line: '19', text: '（三）债务重组损失', key: 'L19', indent: 1 },
                { line: '20', text: '（四）非常损失', key: 'L20', indent: 1 },
                { line: '21', text: '（五）捐赠支出', key: 'L21', indent: 1 },
                { line: '22', text: '（六）赞助支出', key: 'L22', indent: 1 },
                { line: '23', text: '（七）罚没支出', key: 'L23', indent: 1 },
                { line: '24', text: '（八）坏账损失', key: 'L24', indent: 1 },
                { line: '25', text: '（九）无法收回的债券股权投资损失', key: 'L25', indent: 1 },
                { line: '26', text: '（十）其他', key: 'L26', indent: 1 }
            ]
        },
        logic: (db) => {
            if (!db.A102010) return;
            const t = db.A102010;
            t.L2 = (t.L3 || 0) + (t.L5 || 0) + (t.L6 || 0) + (t.L7 || 0) + (t.L8 || 0);
            t.L9 = (t.L10 || 0) + (t.L12 || 0) + (t.L13 || 0) + (t.L14 || 0) + (t.L15 || 0);
            t.L1 = t.L2 + t.L9;
            t.L16 = (t.L17 || 0) + (t.L18 || 0) + (t.L19 || 0) + (t.L20 || 0) + (t.L21 || 0) + (t.L22 || 0) + (t.L23 || 0) + (t.L24 || 0) + (t.L25 || 0) + (t.L26 || 0);
        }
    },

    // ==========================================
    // A101020 金融企业收入明细表
    // ==========================================
    A101020: {
        schema: {
            id: 'A101020',
            title: '金融企业收入明细表 (A101020)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'60%'}, {title:'金 额', width:'30%'}],
            rows: [
                { line: '1', text: '一、营业收入 (2+18+27+32+33+34)', key: 'L1', isBold: true, isReadonly: true },
                { line: '2', text: '（一）银行业务收入 (3+10)', key: 'L2', indent: 1, isReadonly: true },
                { line: '3', text: '1. 利息收入 (4+5+6+7+8+9)', key: 'L3', indent: 2, isReadonly: true },
                { line: '4', text: '（1）存放同业', key: 'L4', indent: 3 },
                { line: '5', text: '（2）存放中央银行', key: 'L5', indent: 3 },
                { line: '6', text: '（3）拆出资金', key: 'L6', indent: 3 },
                { line: '7', text: '（4）发放贷款及垫资', key: 'L7', indent: 3 },
                { line: '8', text: '（5）买入返售金融资产', key: 'L8', indent: 3 },
                { line: '9', text: '（6）其他', key: 'L9', indent: 3 },
                { line: '10', text: '2. 手续费及佣金收入 (11+12+13+14+15+16+17)', key: 'L10', indent: 2, isReadonly: true },
                { line: '11', text: '（1）结算与清算手续费', key: 'L11', indent: 3 },
                { line: '12', text: '（2）代理业务手续费', key: 'L12', indent: 3 },
                { line: '13', text: '（3）信用承诺手续费及佣金', key: 'L13', indent: 3 },
                { line: '14', text: '（4）银行卡手续费', key: 'L14', indent: 3 },
                { line: '15', text: '（5）顾问和咨询费', key: 'L15', indent: 3 },
                { line: '16', text: '（6）托管及其他受托业务佣金', key: 'L16', indent: 3 },
                { line: '17', text: '（7）其他', key: 'L17', indent: 3 },
                { line: '18', text: '（二）证券业务收入 (19+26)', key: 'L18', indent: 1, isReadonly: true },
                { line: '19', text: '1. 证券业务手续费及佣金收入 (20+21+22+23+24+25)', key: 'L19', indent: 2, isReadonly: true },
                { line: '20', text: '（1）证券承销业务', key: 'L20', indent: 3 },
                { line: '21', text: '（2）证券经纪业务', key: 'L21', indent: 3 },
                { line: '22', text: '（3）受托客户资产管理业务', key: 'L22', indent: 3 },
                { line: '23', text: '（4）代理兑付证券', key: 'L23', indent: 3 },
                { line: '24', text: '（5）代理保管证券', key: 'L24', indent: 3 },
                { line: '25', text: '（6）其他', key: 'L25', indent: 3 },
                { line: '26', text: '2. 其他证券业务收入', key: 'L26', indent: 2 },
                { line: '27', text: '（三）已赚保费 (28-30-31)', key: 'L27', indent: 1, isReadonly: true },
                { line: '28', text: '1. 保险业务收入', key: 'L28', indent: 2 },
                { line: '29', text: '其中：分保费收入', key: 'L29', indent: 3 },
                { line: '30', text: '2. 分出保费', key: 'L30', indent: 2 },
                { line: '31', text: '3. 提取未到期责任准备金', key: 'L31', indent: 2 },
                { line: '32', text: '（四）其他金融业务收入', key: 'L32', indent: 1 },
                { line: '33', text: '（五）汇兑收益 (损失以“-”号填列)', key: 'L33', indent: 1 },
                { line: '34', text: '（六）其他业务收入', key: 'L34', indent: 1 },
                { line: '35', text: '二、营业外收入 (36+37+38+39+40+41+42)', key: 'L35', isBold: true, isReadonly: true },
                { line: '36', text: '（一）非流动资产处置利得', key: 'L36', indent: 1 },
                { line: '37', text: '（二）非货币性资产交换利得', key: 'L37', indent: 1 },
                { line: '38', text: '（三）债务重组利得', key: 'L38', indent: 1 },
                { line: '39', text: '（四）政府补助利得', key: 'L39', indent: 1 },
                { line: '40', text: '（五）盘盈利得', key: 'L40', indent: 1 },
                { line: '41', text: '（六）捐赠利得', key: 'L41', indent: 1 },
                { line: '42', text: '（七）其他', key: 'L42', indent: 1 }
            ]
        },
        logic: (db) => {
            if (!db.A101020) return;
            const t = db.A101020;
            t.L3 = (t.L4 || 0) + (t.L5 || 0) + (t.L6 || 0) + (t.L7 || 0) + (t.L8 || 0) + (t.L9 || 0);
            t.L10 = (t.L11 || 0) + (t.L12 || 0) + (t.L13 || 0) + (t.L14 || 0) + (t.L15 || 0) + (t.L16 || 0) + (t.L17 || 0);
            t.L2 = t.L3 + t.L10;
            t.L19 = (t.L20 || 0) + (t.L21 || 0) + (t.L22 || 0) + (t.L23 || 0) + (t.L24 || 0) + (t.L25 || 0);
            t.L18 = t.L19 + (t.L26 || 0);
            t.L27 = (t.L28 || 0) - (t.L30 || 0) - (t.L31 || 0);
            t.L1 = t.L2 + t.L18 + t.L27 + (t.L32 || 0) + (t.L33 || 0) + (t.L34 || 0);
            t.L35 = (t.L36 || 0) + (t.L37 || 0) + (t.L38 || 0) + (t.L39 || 0) + (t.L40 || 0) + (t.L41 || 0) + (t.L42 || 0);
        }
    },

    // ==========================================
    // A102020 金融企业支出明细表
    // ==========================================
    A102020: {
        schema: {
            id: 'A102020',
            title: '金融企业支出明细表 (A102020)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'60%'}, {title:'金 额', width:'30%'}],
            rows: [
                { line: '1', text: '一、营业支出 (2+15+25+31+32)', key: 'L1', isBold: true, isReadonly: true },
                { line: '2', text: '（一）银行业务支出 (3+11)', key: 'L2', indent: 1, isReadonly: true },
                { line: '3', text: '1. 银行利息支出 (4+5+6+7+8+9+10)', key: 'L3', indent: 2, isReadonly: true },
                { line: '4', text: '（1）同业存放', key: 'L4', indent: 3 },
                { line: '5', text: '（2）向中央银行借款', key: 'L5', indent: 3 },
                { line: '6', text: '（3）拆入资金', key: 'L6', indent: 3 },
                { line: '7', text: '（4）吸收存款', key: 'L7', indent: 3 },
                { line: '8', text: '（5）卖出回购金融资产', key: 'L8', indent: 3 },
                { line: '9', text: '（6）发行债券', key: 'L9', indent: 3 },
                { line: '10', text: '（7）其他', key: 'L10', indent: 3 },
                { line: '11', text: '2. 银行手续费及佣金支出 (12+13+14)', key: 'L11', indent: 2, isReadonly: true },
                { line: '12', text: '（1）手续费支出', key: 'L12', indent: 3 },
                { line: '13', text: '（2）佣金支出', key: 'L13', indent: 3 },
                { line: '14', text: '（3）其他', key: 'L14', indent: 3 },
                { line: '15', text: '（二）保险业务支出 (16+17-18+19-20+21+22-23+24)', key: 'L15', indent: 1, isReadonly: true },
                { line: '16', text: '1. 退保金', key: 'L16', indent: 2 },
                { line: '17', text: '2. 赔付支出', key: 'L17', indent: 2 },
                { line: '18', text: '减：摊回赔付支出', key: 'L18', indent: 3 },
                { line: '19', text: '3. 提取保险责任准备金', key: 'L19', indent: 2 },
                { line: '20', text: '减：摊回保险责任准备金', key: 'L20', indent: 3 },
                { line: '21', text: '4. 保单红利支出', key: 'L21', indent: 2 },
                { line: '22', text: '5. 分保费用', key: 'L22', indent: 2 },
                { line: '23', text: '减：摊回分保费用', key: 'L23', indent: 3 },
                { line: '24', text: '6. 保险业务手续费及佣金支出', key: 'L24', indent: 2 },
                { line: '25', text: '（三）证券业务支出 (26+30)', key: 'L25', indent: 1, isReadonly: true },
                { line: '26', text: '1. 证券业务手续费及佣金支出 (27+28+29)', key: 'L26', indent: 2, isReadonly: true },
                { line: '27', text: '（1）证券经纪业务手续费支出', key: 'L27', indent: 3 },
                { line: '28', text: '（2）佣金支出', key: 'L28', indent: 3 },
                { line: '29', text: '（3）其他', key: 'L29', indent: 3 },
                { line: '30', text: '2. 其他证券业务支出', key: 'L30', indent: 2 },
                { line: '31', text: '（四）其他金融业务支出', key: 'L31', indent: 1 },
                { line: '32', text: '（五）其他业务成本', key: 'L32', indent: 1 },
                { line: '33', text: '二、营业外支出 (34+35+36+37+38+39)', key: 'L33', isBold: true, isReadonly: true },
                { line: '34', text: '（一）非流动资产处置损失', key: 'L34', indent: 1 },
                { line: '35', text: '（二）非货币性资产交换损失', key: 'L35', indent: 1 },
                { line: '36', text: '（三）债务重组损失', key: 'L36', indent: 1 },
                { line: '37', text: '（四）捐赠支出', key: 'L37', indent: 1 },
                { line: '38', text: '（五）非常损失', key: 'L38', indent: 1 },
                { line: '39', text: '（六）其他', key: 'L39', indent: 1 }
            ]
        },
        logic: (db) => {
            if (!db.A102020) return;
            const t = db.A102020;
            t.L3 = (t.L4 || 0) + (t.L5 || 0) + (t.L6 || 0) + (t.L7 || 0) + (t.L8 || 0) + (t.L9 || 0) + (t.L10 || 0);
            t.L11 = (t.L12 || 0) + (t.L13 || 0) + (t.L14 || 0);
            t.L2 = t.L3 + t.L11;
            t.L15 = (t.L16 || 0) + (t.L17 || 0) - (t.L18 || 0) + (t.L19 || 0) - (t.L20 || 0) + (t.L21 || 0) + (t.L22 || 0) - (t.L23 || 0) + (t.L24 || 0);
            t.L26 = (t.L27 || 0) + (t.L28 || 0) + (t.L29 || 0);
            t.L25 = t.L26 + (t.L30 || 0);
            t.L1 = t.L2 + t.L15 + t.L25 + (t.L31 || 0) + (t.L32 || 0);
            t.L33 = (t.L34 || 0) + (t.L35 || 0) + (t.L36 || 0) + (t.L37 || 0) + (t.L38 || 0) + (t.L39 || 0);
        }
    },

    // ==========================================
    // A103000 事业单位、民间非营利组织收入、支出明细表
    // ==========================================
    A103000: {
        schema: {
            id: 'A103000',
            title: '事业单位、民间非营利组织收入、支出明细表 (A103000)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'60%'}, {title:'金 额', width:'30%'}],
            rows: [
                { line: '1', text: '一、事业单位收入 (2+3+4+5+6+7)', key: 'L1', isBold: true, isReadonly: true },
                { line: '2', text: '（一）财政补助收入', key: 'L2', indent: 1 },
                { line: '3', text: '（二）事业收入', key: 'L3', indent: 1 },
                { line: '4', text: '（三）上级补助收入', key: 'L4', indent: 1 },
                { line: '5', text: '（四）附属单位上缴收入', key: 'L5', indent: 1 },
                { line: '6', text: '（五）经营收入', key: 'L6', indent: 1 },
                { line: '7', text: '（六）其他收入 (8+9)', key: 'L7', indent: 1, isReadonly: true },
                { line: '8', text: '其中：投资收益', key: 'L8', indent: 2 },
                { line: '9', text: '其他', key: 'L9', indent: 2 },
                { line: '10', text: '二、民间非营利组织收入 (11+12+13+14+15+16+17)', key: 'L10', isBold: true, isReadonly: true },
                { line: '11', text: '（一）接受捐赠收入', key: 'L11', indent: 1 },
                { line: '12', text: '（二）会费收入', key: 'L12', indent: 1 },
                { line: '13', text: '（三）提供服务收入', key: 'L13', indent: 1 },
                { line: '14', text: '（四）商品销售收入', key: 'L14', indent: 1 },
                { line: '15', text: '（五）政府补助收入', key: 'L15', indent: 1 },
                { line: '16', text: '（六）投资收益', key: 'L16', indent: 1 },
                { line: '17', text: '（七）其他收入', key: 'L17', indent: 1 },
                { line: '18', text: '三、事业单位支出 (19+20+21+22+23)', key: 'L18', isBold: true, isReadonly: true },
                { line: '19', text: '（一）事业支出', key: 'L19', indent: 1 },
                { line: '20', text: '（二）上缴上级支出', key: 'L20', indent: 1 },
                { line: '21', text: '（三）对附属单位补助支出', key: 'L21', indent: 1 },
                { line: '22', text: '（四）经营支出', key: 'L22', indent: 1 },
                { line: '23', text: '（五）其他支出', key: 'L23', indent: 1 },
                { line: '24', text: '四、民间非营利组织支出 (25+26+27+28)', key: 'L24', isBold: true, isReadonly: true },
                { line: '25', text: '（一）业务活动成本', key: 'L25', indent: 1 },
                { line: '26', text: '（二）管理费用', key: 'L26', indent: 1 },
                { line: '27', text: '（三）筹资费用', key: 'L27', indent: 1 },
                { line: '28', text: '（四）其他费用', key: 'L28', indent: 1 }
            ]
        },
        logic: (db) => {
            if (!db.A103000) return;
            const t = db.A103000;
            t.L7 = (t.L8 || 0) + (t.L9 || 0);
            t.L1 = (t.L2 || 0) + (t.L3 || 0) + (t.L4 || 0) + (t.L5 || 0) + (t.L6 || 0) + t.L7;
            t.L10 = (t.L11 || 0) + (t.L12 || 0) + (t.L13 || 0) + (t.L14 || 0) + (t.L15 || 0) + (t.L16 || 0) + (t.L17 || 0);
            t.L18 = (t.L19 || 0) + (t.L20 || 0) + (t.L21 || 0) + (t.L22 || 0) + (t.L23 || 0);
            t.L24 = (t.L25 || 0) + (t.L26 || 0) + (t.L27 || 0) + (t.L28 || 0);
        }
    },

    // ==========================================
    // A104000 期间费用明细表
    // ==========================================
    A104000: {
        schema: {
            id: 'A104000',
            title: '期间费用明细表 (A104000)',
            columns: [
                { title: '行次', width: '5%', align: 'center' },
                { title: '项 目', width: '23%', align: 'center' },
                { title: '销售费用', width: '12%', align: 'center' },
                { title: '其中:境外支付', width: '12%', align: 'center' },
                { title: '管理费用', width: '12%', align: 'center' },
                { title: '其中:境外支付', width: '12%', align: 'center' },
                { title: '财务费用', width: '12%', align: 'center' },
                { title: '其中:境外支付', width: '12%', align: 'center' }
            ],
            rows: [
                { line: '1', text: '一、职工薪酬', inputs: [{key:'L1_C1'}, {isAsterisk:true}, {key:'L1_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '2', text: '二、劳务费', inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '3', text: '三、咨询顾问费', inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '4', text: '四、业务招待费', inputs: [{key:'L4_C1'}, {isAsterisk:true}, {key:'L4_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '5', text: '五、广告费和业务宣传费', inputs: [{key:'L5_C1'}, {isAsterisk:true}, {key:'L5_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '6', text: '六、佣金和手续费', inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {key:'L6_C5'}, {key:'L6_C6'}] },
                { line: '7', text: '七、资产折旧摊销费', inputs: [{key:'L7_C1'}, {isAsterisk:true}, {key:'L7_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '8', text: '八、财产损耗、盘亏及毁损损失', inputs: [{key:'L8_C1'}, {isAsterisk:true}, {key:'L8_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '9', text: '九、办公费', inputs: [{key:'L9_C1'}, {isAsterisk:true}, {key:'L9_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '10', text: '十、董事会费', inputs: [{key:'L10_C1'}, {isAsterisk:true}, {key:'L10_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '11', text: '十一、租赁费', inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '12', text: '十二、诉讼费', inputs: [{key:'L12_C1'}, {isAsterisk:true}, {key:'L12_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '13', text: '十三、差旅费', inputs: [{key:'L13_C1'}, {isAsterisk:true}, {key:'L13_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '14', text: '十四、保险费', inputs: [{key:'L14_C1'}, {isAsterisk:true}, {key:'L14_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '15', text: '十五、运输、仓储费', inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3'}, {key:'L15_C4'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '16', text: '十六、修理费', inputs: [{key:'L16_C1'}, {key:'L16_C2'}, {key:'L16_C3'}, {key:'L16_C4'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '17', text: '十七、包装费', inputs: [{key:'L17_C1'}, {isAsterisk:true}, {key:'L17_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '18', text: '十八、技术转让费', inputs: [{key:'L18_C1'}, {key:'L18_C2'}, {key:'L18_C3'}, {key:'L18_C4'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '19', text: '十九、研究费用', inputs: [{key:'L19_C1'}, {key:'L19_C2'}, {key:'L19_C3'}, {key:'L19_C4'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '20', text: '二十、各项税费', inputs: [{key:'L20_C1'}, {isAsterisk:true}, {key:'L20_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '21', text: '二十一、利息收支', inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L21_C5'}, {key:'L21_C6'}] },
                { line: '22', text: '二十二、汇兑差额', inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L22_C5'}, {key:'L22_C6'}] },
                { line: '23', text: '二十三、现金折扣', inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L23_C5'}, {isAsterisk:true}] },
                { line: '24', text: '二十四、党组织工作经费', inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L24_C3'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '25', text: '二十五、其他', inputs: [{key:'L25_C1'}, {key:'L25_C2'}, {key:'L25_C3'}, {key:'L25_C4'}, {key:'L25_C5'}, {key:'L25_C6'}] },
                { line: '26', text: '合计 (1+2+3+…+25)', isBold: true, inputs: [{key:'L26_C1', isReadonly:true}, {key:'L26_C2', isReadonly:true}, {key:'L26_C3', isReadonly:true}, {key:'L26_C4', isReadonly:true}, {key:'L26_C5', isReadonly:true}, {key:'L26_C6', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A104000) return;
            const t = db.A104000;
            const sumCol = (colIndex) => {
                let sum = 0;
                for (let i = 1; i <= 25; i++) {
                    sum += t[`L${i}_C${colIndex}`] || 0;
                }
                return sum;
            };
            t.L26_C1 = sumCol(1);
            t.L26_C2 = sumCol(2);
            t.L26_C3 = sumCol(3);
            t.L26_C4 = sumCol(4);
            t.L26_C5 = sumCol(5);
            t.L26_C6 = sumCol(6);
        }
    }
};