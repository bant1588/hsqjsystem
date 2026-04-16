// forms/group_7020-8020.js

export const formBundle = {
    // ==========================================
    // A107020 所得减免优惠明细表
    // ==========================================
    A107020: {
        schema: {
            id: 'A107020',
            title: '所得减免优惠明细表 (A107020)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '4%'},
                    {title: '减免项目', rowspan: 2, width: '12%'},
                    {title: '项目名称\\n1', rowspan: 2, width: '10%'},
                    {title: '优惠事项\\n名称\\n2', rowspan: 2, width: '10%'},
                    {title: '优惠\\n方式\\n3', rowspan: 2, width: '6%'},
                    {title: '项目收入\\n4', rowspan: 2, width: '8%'},
                    {title: '项目成本\\n5', rowspan: 2, width: '8%'},
                    {title: '相关税费\\n6', rowspan: 2, width: '8%'},
                    {title: '应分摊期\\n间费用\\n7', rowspan: 2, width: '8%'},
                    {title: '纳税调\\n整额\\n8', rowspan: 2, width: '8%'},
                    {title: '项目所得额', colspan: 2},
                    {title: '减免所得额\\n11 (9+10×50%)', rowspan: 2, width: '10%'}
                ],
                [
                    {title: '免税项目\\n9', width: '8%'},
                    {title: '减半项目\\n10', width: '8%'}
                ]
            ],
            rows: [
                { line: '1', text: '一、农、林、牧、渔业项目', textRowspan: 3, inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C2', type:'text'}, {key:'L1_C3', type:'text'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {key:'L1_C7'}, {key:'L1_C8'}, {key:'L1_C9'}, {key:'L1_C10'}, {key:'L1_C11', isReadonly:true}] },
                { line: '2', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2', type:'text'}, {key:'L2_C3', type:'text'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8'}, {key:'L2_C9'}, {key:'L2_C10'}, {key:'L2_C11', isReadonly:true}] },
                { line: '3', inputs: [{type:'label', value:'小计', style:'text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L3_C4', isReadonly:true}, {key:'L3_C5', isReadonly:true}, {key:'L3_C6', isReadonly:true}, {key:'L3_C7', isReadonly:true}, {key:'L3_C8', isReadonly:true}, {key:'L3_C9', isReadonly:true}, {key:'L3_C10', isReadonly:true}, {key:'L3_C11', isReadonly:true}] },
                { line: '4', text: '二、国家重点扶持的公共基础设施项目', textRowspan: 3, inputs: [{key:'L4_C1', type:'text'}, {key:'L4_C2', type:'text'}, {key:'L4_C3', type:'text'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6'}, {key:'L4_C7'}, {key:'L4_C8'}, {key:'L4_C9'}, {key:'L4_C10'}, {key:'L4_C11', isReadonly:true}] },
                { line: '5', inputs: [{key:'L5_C1', type:'text'}, {key:'L5_C2', type:'text'}, {key:'L5_C3', type:'text'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6'}, {key:'L5_C7'}, {key:'L5_C8'}, {key:'L5_C9'}, {key:'L5_C10'}, {key:'L5_C11', isReadonly:true}] },
                { line: '6', inputs: [{type:'label', value:'小计', style:'text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L6_C4', isReadonly:true}, {key:'L6_C5', isReadonly:true}, {key:'L6_C6', isReadonly:true}, {key:'L6_C7', isReadonly:true}, {key:'L6_C8', isReadonly:true}, {key:'L6_C9', isReadonly:true}, {key:'L6_C10', isReadonly:true}, {key:'L6_C11', isReadonly:true}] },
                { line: '7', text: '三、符合条件的环境保护、节能节水项目', textRowspan: 3, inputs: [{key:'L7_C1', type:'text'}, {key:'L7_C2', type:'text'}, {key:'L7_C3', type:'text'}, {key:'L7_C4'}, {key:'L7_C5'}, {key:'L7_C6'}, {key:'L7_C7'}, {key:'L7_C8'}, {key:'L7_C9'}, {key:'L7_C10'}, {key:'L7_C11', isReadonly:true}] },
                { line: '8', inputs: [{key:'L8_C1', type:'text'}, {key:'L8_C2', type:'text'}, {key:'L8_C3', type:'text'}, {key:'L8_C4'}, {key:'L8_C5'}, {key:'L8_C6'}, {key:'L8_C7'}, {key:'L8_C8'}, {key:'L8_C9'}, {key:'L8_C10'}, {key:'L8_C11', isReadonly:true}] },
                { line: '9', inputs: [{type:'label', value:'小计', style:'text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L9_C4', isReadonly:true}, {key:'L9_C5', isReadonly:true}, {key:'L9_C6', isReadonly:true}, {key:'L9_C7', isReadonly:true}, {key:'L9_C8', isReadonly:true}, {key:'L9_C9', isReadonly:true}, {key:'L9_C10', isReadonly:true}, {key:'L9_C11', isReadonly:true}] },
                { line: '10', text: '四、符合条件的技术转让项目', textRowspan: 3, inputs: [{key:'L10_C1', type:'text'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L10_C4'}, {key:'L10_C5'}, {key:'L10_C6'}, {key:'L10_C7'}, {key:'L10_C8'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '11', inputs: [{key:'L11_C1', type:'text'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L11_C4'}, {key:'L11_C5'}, {key:'L11_C6'}, {key:'L11_C7'}, {key:'L11_C8'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '12', inputs: [{type:'label', value:'小计', style:'text-align:center'}, {isAsterisk:true}, {key:'L12_C4', isReadonly:true}, {key:'L12_C5', isReadonly:true}, {key:'L12_C6', isReadonly:true}, {key:'L12_C7', isReadonly:true}, {key:'L12_C8', isReadonly:true}, {key:'L12_C9'}, {key:'L12_C10'}, {key:'L12_C11', isReadonly:true}] },
                { line: '13', text: '五、清洁发展机制项目', textRowspan: 3, inputs: [{key:'L13_C1', type:'text'}, {isAsterisk:true}, {key:'L13_C3', type:'text'}, {key:'L13_C4'}, {key:'L13_C5'}, {key:'L13_C6'}, {key:'L13_C7'}, {key:'L13_C8'}, {key:'L13_C9'}, {key:'L13_C10'}, {key:'L13_C11', isReadonly:true}] },
                { line: '14', inputs: [{key:'L14_C1', type:'text'}, {isAsterisk:true}, {key:'L14_C3', type:'text'}, {key:'L14_C4'}, {key:'L14_C5'}, {key:'L14_C6'}, {key:'L14_C7'}, {key:'L14_C8'}, {key:'L14_C9'}, {key:'L14_C10'}, {key:'L14_C11', isReadonly:true}] },
                { line: '15', inputs: [{type:'label', value:'小计', style:'text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L15_C4', isReadonly:true}, {key:'L15_C5', isReadonly:true}, {key:'L15_C6', isReadonly:true}, {key:'L15_C7', isReadonly:true}, {key:'L15_C8', isReadonly:true}, {key:'L15_C9', isReadonly:true}, {key:'L15_C10', isReadonly:true}, {key:'L15_C11', isReadonly:true}] },
                { line: '16', text: '六、符合条件的节能服务公司实施的合同能源管理项目', textRowspan: 3, inputs: [{key:'L16_C1', type:'text'}, {isAsterisk:true}, {key:'L16_C3', type:'text'}, {key:'L16_C4'}, {key:'L16_C5'}, {key:'L16_C6'}, {key:'L16_C7'}, {key:'L16_C8'}, {key:'L16_C9'}, {key:'L16_C10'}, {key:'L16_C11', isReadonly:true}] },
                { line: '17', inputs: [{key:'L17_C1', type:'text'}, {isAsterisk:true}, {key:'L17_C3', type:'text'}, {key:'L17_C4'}, {key:'L17_C5'}, {key:'L17_C6'}, {key:'L17_C7'}, {key:'L17_C8'}, {key:'L17_C9'}, {key:'L17_C10'}, {key:'L17_C11', isReadonly:true}] },
                { line: '18', inputs: [{type:'label', value:'小计', style:'text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L18_C4', isReadonly:true}, {key:'L18_C5', isReadonly:true}, {key:'L18_C6', isReadonly:true}, {key:'L18_C7', isReadonly:true}, {key:'L18_C8', isReadonly:true}, {key:'L18_C9', isReadonly:true}, {key:'L18_C10', isReadonly:true}, {key:'L18_C11', isReadonly:true}] },
                { line: '19', text: '七、线宽小于130纳米（含）的集成电路生产项目', textRowspan: 3, inputs: [{key:'L19_C1', type:'text'}, {isAsterisk:true}, {key:'L19_C3', type:'text'}, {key:'L19_C4'}, {key:'L19_C5'}, {key:'L19_C6'}, {key:'L19_C7'}, {key:'L19_C8'}, {key:'L19_C9'}, {key:'L19_C10'}, {key:'L19_C11', isReadonly:true}] },
                { line: '20', inputs: [{key:'L20_C1', type:'text'}, {isAsterisk:true}, {key:'L20_C3', type:'text'}, {key:'L20_C4'}, {key:'L20_C5'}, {key:'L20_C6'}, {key:'L20_C7'}, {key:'L20_C8'}, {key:'L20_C9'}, {key:'L20_C10'}, {key:'L20_C11', isReadonly:true}] },
                { line: '21', inputs: [{type:'label', value:'小计', style:'text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L21_C4', isReadonly:true}, {key:'L21_C5', isReadonly:true}, {key:'L21_C6', isReadonly:true}, {key:'L21_C7', isReadonly:true}, {key:'L21_C8', isReadonly:true}, {key:'L21_C9', isReadonly:true}, {key:'L21_C10', isReadonly:true}, {key:'L21_C11', isReadonly:true}] },
                { line: '22', text: '八、线宽小于65纳米（含）或投资额超过150亿元的集成电路生产项目', textRowspan: 3, inputs: [{key:'L22_C1', type:'text'}, {key:'L22_C2', type:'text'}, {key:'L22_C3', type:'text'}, {key:'L22_C4'}, {key:'L22_C5'}, {key:'L22_C6'}, {key:'L22_C7'}, {key:'L22_C8'}, {key:'L22_C9'}, {key:'L22_C10'}, {key:'L22_C11', isReadonly:true}] },
                { line: '23', inputs: [{key:'L23_C1', type:'text'}, {key:'L23_C2', type:'text'}, {key:'L23_C3', type:'text'}, {key:'L23_C4'}, {key:'L23_C5'}, {key:'L23_C6'}, {key:'L23_C7'}, {key:'L23_C8'}, {key:'L23_C9'}, {key:'L23_C10'}, {key:'L23_C11', isReadonly:true}] },
                { line: '24', inputs: [{type:'label', value:'小计', style:'text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L24_C4', isReadonly:true}, {key:'L24_C5', isReadonly:true}, {key:'L24_C6', isReadonly:true}, {key:'L24_C7', isReadonly:true}, {key:'L24_C8', isReadonly:true}, {key:'L24_C9', isReadonly:true}, {key:'L24_C10', isReadonly:true}, {key:'L24_C11', isReadonly:true}] },
                { line: '25', text: '九、线宽小于28纳米（含）的集成电路生产项目', textRowspan: 3, inputs: [{key:'L25_C1', type:'text'}, {isAsterisk:true}, {key:'L25_C3', type:'text'}, {key:'L25_C4'}, {key:'L25_C5'}, {key:'L25_C6'}, {key:'L25_C7'}, {key:'L25_C8'}, {key:'L25_C9'}, {key:'L25_C10'}, {key:'L25_C11', isReadonly:true}] },
                { line: '26', inputs: [{key:'L26_C1', type:'text'}, {isAsterisk:true}, {key:'L26_C3', type:'text'}, {key:'L26_C4'}, {key:'L26_C5'}, {key:'L26_C6'}, {key:'L26_C7'}, {key:'L26_C8'}, {key:'L26_C9'}, {key:'L26_C10'}, {key:'L26_C11', isReadonly:true}] },
                { line: '27', inputs: [{type:'label', value:'小计', style:'text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L27_C4', isReadonly:true}, {key:'L27_C5', isReadonly:true}, {key:'L27_C6', isReadonly:true}, {key:'L27_C7', isReadonly:true}, {key:'L27_C8', isReadonly:true}, {key:'L27_C9', isReadonly:true}, {key:'L27_C10', isReadonly:true}, {key:'L27_C11', isReadonly:true}] },
                { line: '28', text: '十、其他', textRowspan: 3, inputs: [{key:'L28_C1', type:'text'}, {key:'L28_C2', type:'text'}, {key:'L28_C3', type:'text'}, {key:'L28_C4'}, {key:'L28_C5'}, {key:'L28_C6'}, {key:'L28_C7'}, {key:'L28_C8'}, {key:'L28_C9'}, {key:'L28_C10'}, {key:'L28_C11', isReadonly:true}] },
                { line: '29', inputs: [{key:'L29_C1', type:'text'}, {key:'L29_C2', type:'text'}, {key:'L29_C3', type:'text'}, {key:'L29_C4'}, {key:'L29_C5'}, {key:'L29_C6'}, {key:'L29_C7'}, {key:'L29_C8'}, {key:'L29_C9'}, {key:'L29_C10'}, {key:'L29_C11', isReadonly:true}] },
                { line: '30', inputs: [{type:'label', value:'小计', style:'text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L30_C4', isReadonly:true}, {key:'L30_C5', isReadonly:true}, {key:'L30_C6', isReadonly:true}, {key:'L30_C7', isReadonly:true}, {key:'L30_C8', isReadonly:true}, {key:'L30_C9', isReadonly:true}, {key:'L30_C10', isReadonly:true}, {key:'L30_C11', isReadonly:true}] },
                { line: '31', text: '合计', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L31_C4', isReadonly:true}, {key:'L31_C5', isReadonly:true}, {key:'L31_C6', isReadonly:true}, {key:'L31_C7', isReadonly:true}, {key:'L31_C8', isReadonly:true}, {key:'L31_C9', isReadonly:true}, {key:'L31_C10', isReadonly:true}, {key:'L31_C11', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A107020) return;
            const t = db.A107020;
            const subtotalRows = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
            const colsToSum = [4, 5, 6, 7, 8, 9, 10, 11];

            // Calculate Col 11 for non-asterisk rows
            for (let r = 1; r <= 30; r++) {
                if (!subtotalRows.includes(r) && r !== 10 && r !== 11) {
                    t[`L${r}_C11`] = (t[`L${r}_C9`] || 0) + (t[`L${r}_C10`] || 0) * 0.5;
                }
            }

            // Calculate subtotals
            subtotalRows.forEach((subRow) => {
                colsToSum.forEach(c => {
                    t[`L${subRow}_C${c}`] = (t[`L${subRow-2}_C${c}`] || 0) + (t[`L${subRow-1}_C${c}`] || 0);
                });
            });

            // Calculate row 12 Col 11 manually since 10, 11 have asterisks in Col 11
            t['L12_C11'] = (t['L12_C9'] || 0) + (t['L12_C10'] || 0) * 0.5;

            // Calculate Grand Total (Row 31)
            colsToSum.forEach(c => {
                t[`L31_C${c}`] = subtotalRows.reduce((acc, r) => acc + (t[`L${r}_C${c}`] || 0), 0);
            });
        }
    },

    // ==========================================
    // A107030 抵扣应纳税所得额明细表
    // ==========================================
    A107030: {
        schema: {
            id: 'A107030',
            title: '抵扣应纳税所得额明细表 (A107030)',
            headers: [
                [
                    {title: '行次', width: '5%'},
                    {title: '项 目', width: '35%'},
                    {title: '合计金额\\n1=2+3', width: '20%'},
                    {title: '投资于未上市中小高新技术企业\\n2', width: '20%'},
                    {title: '投资于种子期、初创期科技型企业\\n3', width: '20%'}
                ]
            ],
            rows: [
                { text: '一、创业投资企业直接投资按投资额一定比例抵扣应纳税所得额', isBold: true, textColspan: 4 },
                { line: '1', text: '本年新增的符合条件的股权投资额', indent: 1, inputs: [{key:'L1_C1', isReadonly:true}, {key:'L1_C2'}, {key:'L1_C3'}] },
                { line: '2', text: '税收规定的抵扣率', indent: 1, inputs: [{type:'label', value:'70%'}, {type:'label', value:'70%'}, {type:'label', value:'70%'}] },
                { line: '3', text: '本年新增的可抵扣的股权投资额 (1×2)', indent: 1, inputs: [{key:'L3_C1', isReadonly:true}, {key:'L3_C2', isReadonly:true}, {key:'L3_C3', isReadonly:true}] },
                { line: '4', text: '以前年度结转的尚未抵扣的股权投资余额', indent: 1, inputs: [{key:'L4_C1'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '5', text: '本年可抵扣的股权投资额 (3+4)', indent: 1, inputs: [{key:'L5_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '6', text: '本年可用于抵扣的应纳税所得额', indent: 1, inputs: [{key:'L6_C1'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '7', text: '本年实际抵扣应纳税所得额', indent: 1, inputs: [{key:'L7_C1', isReadonly:true}, {key:'L7_C2'}, {key:'L7_C3'}] },
                { line: '8', text: '结转以后年度抵扣的股权投资余额', indent: 1, inputs: [{key:'L8_C1'}, {isAsterisk:true}, {isAsterisk:true}] },
                { text: '二、通过有限合伙制创业投资企业投资按一定比例抵扣分得的应纳税所得额', isBold: true, textColspan: 4 },
                { line: '9', text: '本年从有限合伙创投企业应分得的应纳税所得额', indent: 1, inputs: [{key:'L9_C1', isReadonly:true}, {key:'L9_C2'}, {key:'L9_C3'}] },
                { line: '10', text: '本年新增的可抵扣投资额', indent: 1, inputs: [{key:'L10_C1', isReadonly:true}, {key:'L10_C2'}, {key:'L10_C3'}] },
                { line: '11', text: '以前年度结转的可抵扣投资额余额', indent: 1, inputs: [{key:'L11_C1'}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '12', text: '本年可抵扣投资额 (10+11)', indent: 1, inputs: [{key:'L12_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '13', text: '本年实际抵扣应分得的应纳税所得额', indent: 1, inputs: [{key:'L13_C1', isReadonly:true}, {key:'L13_C2'}, {key:'L13_C3'}] },
                { line: '14', text: '结转以后年度抵扣的投资额余额', indent: 1, inputs: [{key:'L14_C1'}, {isAsterisk:true}, {isAsterisk:true}] },
                { text: '三、抵扣应纳税所得额合计', isBold: true, textColspan: 4 },
                { line: '15', text: '合计 (7+13)', indent: 1, inputs: [{key:'L15_C1', isReadonly:true}, {key:'L15_C2', isReadonly:true}, {key:'L15_C3', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A107030) return;
            const t = db.A107030;
            const sumCols = (r) => { t[`L${r}_C1`] = (t[`L${r}_C2`] || 0) + (t[`L${r}_C3`] || 0); };

            sumCols(1);
            t['L3_C2'] = (t['L1_C2'] || 0) * 0.7;
            t['L3_C3'] = (t['L1_C3'] || 0) * 0.7;
            sumCols(3);

            t['L5_C1'] = (t['L3_C1'] || 0) + (t['L4_C1'] || 0);
            sumCols(7);
            sumCols(9);
            sumCols(10);
            
            t['L12_C1'] = (t['L10_C1'] || 0) + (t['L11_C1'] || 0);
            sumCols(13);

            [1, 2, 3].forEach(c => {
                t[`L15_C${c}`] = (t[`L7_C${c}`] || 0) + (t[`L13_C${c}`] || 0);
            });
        }
    },

    // ==========================================
    // A107041 高新技术企业优惠情况及明细表
    // ==========================================
    A107041: {
        schema: {
            id: 'A107041',
            title: '高新技术企业优惠情况及明细表 (A107041)',
            headers: [[{title: '基本信息', colspan: 7}]],
            rows: [
                { inputs: [
                    {type: 'label', value: '1', style: 'text-align:center;width:5%;'}, 
                    {type: 'label', value: '高新技术企业证书编号', colspan: 2, style: 'text-align:center;width:25%;'}, 
                    {key: 'L1_C1', type: 'text', colspan: 2}, 
                    {type: 'label', value: '高新技术企业证书取得时间', style: 'text-align:center;width:20%;'}, 
                    {key: 'L1_C2', type: 'text'}
                ]},
                { inputs: [
                    {type: 'label', value: '2', rowspan: 2, style: 'text-align:center;'}, 
                    {type: 'label', value: '对企业主要产品（服务）发挥核心支持作用的技术所属范围', rowspan: 2, colspan: 2, style: 'text-align:center;padding:10px;'}, 
                    {type: 'label', value: '国家重点支持的高新技术领域', colspan: 4, style: 'text-align:center;'}
                ]},
                { inputs: [
                    {type: 'label', value: '一级领域', style: 'text-align:center;', colspan: 2}, 
                    {type: 'label', value: '二级领域', style: 'text-align:center;'}, 
                    {type: 'label', value: '三级领域', style: 'text-align:center;'}
                ]},
                { inputs: [{type: 'label', value: '3', style: 'text-align:center;'}, {type: 'label', value: '关键指标情况', colspan: 6, style: 'font-weight:bold;text-align:center;'}] },
                { inputs: [
                    {type: 'label', value: '4', style: 'text-align:center;'}, {type: 'label', value: '收入<br>指标', rowspan: 7, style: 'text-align:center;width:8%;'}, 
                    {type: 'label', value: '一、本年高新技术产品（服务）收入 (5+6)', style: 'text-align:left;'}, {key: 'L4_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}
                ]},
                { inputs: [{type: 'label', value: '5', style: 'text-align:center;'}, {type: 'label', value: '其中：产品（服务）收入', style: 'text-align:left;padding-left:30px;'}, {key: 'L5_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '6', style: 'text-align:center;'}, {type: 'label', value: '技术性收入', style: 'text-align:left;padding-left:30px;'}, {key: 'L6_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '7', style: 'text-align:center;'}, {type: 'label', value: '二、本年企业总收入 (8-9)', style: 'text-align:left;'}, {key: 'L7_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '8', style: 'text-align:center;'}, {type: 'label', value: '其中：收入总额', style: 'text-align:left;padding-left:30px;'}, {key: 'L8_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '9', style: 'text-align:center;'}, {type: 'label', value: '不征税收入', style: 'text-align:left;padding-left:30px;'}, {key: 'L9_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '10', style: 'text-align:center;'}, {type: 'label', value: '三、高新收入占总收入比例 (4÷7)', style: 'text-align:left;'}, {key: 'L10_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '11', style: 'text-align:center;'}, {type: 'label', value: '人员<br>指标', rowspan: 3, style: 'text-align:center;'}, {type: 'label', value: '四、本年科技人员数', style: 'text-align:left;'}, {key: 'L11_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '12', style: 'text-align:center;'}, {type: 'label', value: '五、本年职工总数', style: 'text-align:left;'}, {key: 'L12_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [{type: 'label', value: '13', style: 'text-align:center;'}, {type: 'label', value: '六、科技人员占比 (11÷12)', style: 'text-align:left;'}, {key: 'L13_C1', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { inputs: [
                    {type: 'label', value: '14', style: 'text-align:center;'}, {type: 'label', value: '高新创发费用归集年度', colspan: 2, style: 'text-align:center;font-weight:bold;'}, 
                    {type: 'label', value: '本年度<br>1', style: 'text-align:center;width:12%;'}, {type: 'label', value: '前一年度<br>2', style: 'text-align:center;width:12%;'}, {type: 'label', value: '前二年度<br>3', style: 'text-align:center;width:12%;'}, {type: 'label', value: '合计<br>4', style: 'text-align:center;width:12%;'}
                ]},
                { inputs: [{type: 'label', value: '15', style: 'text-align:center;'}, {type: 'label', value: '研发<br>费用<br>指标', rowspan: 14, style: 'text-align:center;'}, {type: 'label', value: '七、归集的高新研发费用金额 (16+25)', style: 'text-align:left;'}, {key: 'L15_C1', isReadonly:true}, {key: 'L15_C2', isReadonly:true}, {key: 'L15_C3', isReadonly:true}, {key: 'L15_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '16', style: 'text-align:center;'}, {type: 'label', value: '（一）内部研究开发投入 (17+..+22+24)', style: 'text-align:left;padding-left:20px;'}, {key: 'L16_C1', isReadonly:true}, {key: 'L16_C2', isReadonly:true}, {key: 'L16_C3', isReadonly:true}, {key: 'L16_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '17', style: 'text-align:center;'}, {type: 'label', value: '1. 人员人工费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L17_C1'}, {key: 'L17_C2'}, {key: 'L17_C3'}, {key: 'L17_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '18', style: 'text-align:center;'}, {type: 'label', value: '2. 直接投入费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L18_C1'}, {key: 'L18_C2'}, {key: 'L18_C3'}, {key: 'L18_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '19', style: 'text-align:center;'}, {type: 'label', value: '3. 折旧费用与长期待摊费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L19_C1'}, {key: 'L19_C2'}, {key: 'L19_C3'}, {key: 'L19_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '20', style: 'text-align:center;'}, {type: 'label', value: '4. 无形资产摊销费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L20_C1'}, {key: 'L20_C2'}, {key: 'L20_C3'}, {key: 'L20_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '21', style: 'text-align:center;'}, {type: 'label', value: '5. 设计费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L21_C1'}, {key: 'L21_C2'}, {key: 'L21_C3'}, {key: 'L21_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '22', style: 'text-align:center;'}, {type: 'label', value: '6. 装备调试费与试验费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L22_C1'}, {key: 'L22_C2'}, {key: 'L22_C3'}, {key: 'L22_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '23', style: 'text-align:center;'}, {type: 'label', value: '7. 其他费用', style: 'text-align:left;padding-left:40px;'}, {key: 'L23_C1'}, {key: 'L23_C2'}, {key: 'L23_C3'}, {key: 'L23_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '24', style: 'text-align:center;'}, {type: 'label', value: '其中：可计入研发费用的其他费用', style: 'text-align:left;padding-left:60px;'}, {key: 'L24_C1'}, {key: 'L24_C2'}, {key: 'L24_C3'}, {key: 'L24_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '25', style: 'text-align:center;'}, {type: 'label', value: '（二）委托外部研发费用 [(26+28)×80%]', style: 'text-align:left;padding-left:20px;'}, {key: 'L25_C1', isReadonly:true}, {key: 'L25_C2', isReadonly:true}, {key: 'L25_C3', isReadonly:true}, {key: 'L25_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '26', style: 'text-align:center;'}, {type: 'label', value: '1. 境内的外部研发费', style: 'text-align:left;padding-left:40px;'}, {key: 'L26_C1'}, {key: 'L26_C2'}, {key: 'L26_C3'}, {key: 'L26_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '27', style: 'text-align:center;'}, {type: 'label', value: '2. 境外的外部研发费', style: 'text-align:left;padding-left:40px;'}, {key: 'L27_C1'}, {key: 'L27_C2'}, {key: 'L27_C3'}, {key: 'L27_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '28', style: 'text-align:center;'}, {type: 'label', value: '其中：可计入研发费用的境外的外部研发费', style: 'text-align:left;padding-left:60px;'}, {key: 'L28_C1'}, {key: 'L28_C2'}, {key: 'L28_C3'}, {key: 'L28_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '29', style: 'text-align:center;'}, {type: 'label', value: '八、销售（营业）收入', colspan: 2, style: 'text-align:left;'}, {key: 'L29_C1'}, {key: 'L29_C2'}, {key: 'L29_C3'}, {key: 'L29_C4', isReadonly:true}] },
                { inputs: [{type: 'label', value: '30', style: 'text-align:center;'}, {type: 'label', value: '九、三年研发费用占销售收入比例', colspan: 2, style: 'text-align:left;'}, {key: 'L30_C4', isReadonly:true, colspan: 4}] },
                { inputs: [{type: 'label', value: '31', style: 'text-align:center;'}, {type: 'label', value: '减免<br>税额', rowspan: 2, style: 'text-align:center;'}, {type: 'label', value: '十、国家需要重点扶持的高新技术企业减免', style: 'text-align:left;'}, {key: 'L31_C4', colspan: 4}] },
                { inputs: [{type: 'label', value: '32', style: 'text-align:center;'}, {type: 'label', value: '十一、经济特区和上海浦东新区定期减免', style: 'text-align:left;'}, {key: 'L32_C4', colspan: 4}] }
            ]
        },
        logic: (db) => {
            if (!db.A107041) return;
            const t = db.A107041;
            t.L4_C1 = (t.L5_C1 || 0) + (t.L6_C1 || 0);
            t.L7_C1 = (t.L8_C1 || 0) - (t.L9_C1 || 0);
            t.L10_C1 = t.L7_C1 ? (t.L4_C1 / t.L7_C1).toFixed(4) : 0;
            t.L13_C1 = t.L12_C1 ? (t.L11_C1 / t.L12_C1).toFixed(4) : 0;

            for (let c = 1; c <= 3; c++) {
                t[`L16_C${c}`] = (t[`L17_C${c}`]||0) + (t[`L18_C${c}`]||0) + (t[`L19_C${c}`]||0) + (t[`L20_C${c}`]||0) + (t[`L21_C${c}`]||0) + (t[`L22_C${c}`]||0) + (t[`L24_C${c}`]||0);
                t[`L25_C${c}`] = ((t[`L26_C${c}`]||0) + (t[`L28_C${c}`]||0)) * 0.8;
                t[`L15_C${c}`] = (t[`L16_C${c}`]||0) + (t[`L25_C${c}`]||0);
            }
            for (let r = 15; r <= 29; r++) {
                if (r===23) continue;
                t[`L${r}_C4`] = (t[`L${r}_C1`] || 0) + (t[`L${r}_C2`] || 0) + (t[`L${r}_C3`] || 0);
            }
            t.L30_C4 = t.L29_C4 ? (t.L15_C4 / t.L29_C4).toFixed(4) : 0;
        }
    },

    // ==========================================
    // A107042 软件、集成电路企业优惠情况及明细表
    // ==========================================
    A107042: {
        schema: {
            id: 'A107042',
            title: '软件、集成电路企业优惠情况及明细表 (A107042)',
            columns: [
                {title: '行次', width: '10%'},
                {title: '项    目', width: '60%'},
                {title: '数量\\金额', width: '30%'}
            ],
            rows: [
                { inputs: [{type: 'label', value: '税收优惠基本信息', colspan: 3, style: 'font-weight:bold;text-align:center;background:#fafafa'}] },
                { inputs: [
                    {type: 'label', value: '选择适用优惠政策', style: 'text-align:center;font-weight:bold;'},
                    {key: 'policy_type', type: 'radio', options: ['延续适用原有优惠政策', '适用新出台优惠政策'], colspan: 2, style: 'justify-content:center;'}
                ]},
                { inputs: [
                    {type: 'label', value: '减免方式 1', style: 'text-align:center;font-weight:bold;'},
                    {type: 'label', value: '获利年度\\开始计算优惠期年度 1', style: 'text-align:center;'},
                    {key: 'year_1', type: 'text'}
                ]},
                { inputs: [
                    {type: 'label', value: '减免方式 2', style: 'text-align:center;font-weight:bold;'},
                    {type: 'label', value: '获利年度\\开始计算优惠期年度 2', style: 'text-align:center;'},
                    {key: 'year_2', type: 'text'}
                ]},
                { inputs: [{type: 'label', value: '税收优惠有关情况', colspan: 3, style: 'font-weight:bold;text-align:center;background:#fafafa'}] },
                
                { line: '1', text: '人员指标', textRowspan: 3, text2: '一、企业本年月平均职工总人数', align2: 'left', inputs: [{key: 'L1_C1'}] },
                { line: '2', text2: '其中：签订劳动合同关系且具有大学专科以上学历的职工人数', align2: 'left', indent: 1, inputs: [{key: 'L2_C1'}] },
                { line: '3', text2: '研究开发人员人数', align2: 'center', inputs: [{key: 'L3_C1'}] },
                
                { line: '4', text: '研发费用指标', textRowspan: 2, text2: '二、研发费用总额', align2: 'left', inputs: [{key: 'L4_C1'}] },
                { line: '5', text2: '其中：企业在中国境内发生的研发费用金额', align2: 'left', indent: 1, inputs: [{key: 'L5_C1'}] },
                
                { line: '6', text: '收入指标', textRowspan: 3, text2: '三、企业收入总额', align2: 'left', inputs: [{key: 'L6_C1'}] },
                { line: '7', text2: '四、符合条件的销售（营业）收入', align2: 'left', inputs: [{key: 'L7_C1'}] },
                { line: '8', text2: '其中：自主设计、自主开发销售及服务收入', align2: 'left', indent: 1, inputs: [{key: 'L8_C1'}] },
                
                { line: '9', text: '知识产权指标', textRowspan: 4, text2: '五、拥有核心关键技术和属于本企业的知识产权总数', align2: 'left', inputs: [{key: 'L9_C1'}] },
                { line: '10', text2: '其中：发明专利', align2: 'left', indent: 1, inputs: [{key: 'L10_C1'}] },
                { line: '11', text2: '集成电路布图设计登记', align2: 'center', inputs: [{key: 'L11_C1'}] },
                { line: '12', text2: '计算机 软件著作权', align2: 'center', inputs: [{key: 'L12_C1'}] },
                
                { line: '13', text: '业务类型及领域', textRowspan: 3, text2: '是否从事 8 英寸及以下集成电路生产', align2: 'left', inputs: [{key: 'L13_C1', type: 'radio', options: ['是', '否']}] },
                { line: '14', text2: '是否按照开发、销售嵌入式软件企业条件享受政策', align2: 'left', inputs: [{key: 'L14_C1', type: 'radio', options: ['是', '否']}] },
                { line: '15', text2: '重点集成电路设计领域和重点软件领域', align2: 'left', inputs: [{key: 'L15_C1', type: 'text', placeholder: '请选择所属领域'}] },
                
                { line: '16', text: '减免税额', textColspan: 2, isBold: true, inputs: [{key: 'L16_C1'}] }
            ]
        },
        logic: (db) => {
            // 本表多为基础信息录入，无复杂勾稽关系
        }
    },

    // ==========================================
    // A107050 税额抵免优惠明细表
    // ==========================================
    A107050: {
        schema: {
            id: 'A107050',
            title: '税额抵免优惠明细表 (A107050)',
            headers: [
                [
                    {title: '行次', width: '4%'},
                    {title: '类别', width: '6%'},
                    {title: '项目', width: '12%'},
                    {title: '年度\\n1', width: '8%'},
                    {title: '当年抵免前应纳税\\n额\\n2', width: '10%'},
                    {title: '当年允许抵免的专\\n用设备投资额\\n3', width: '10%'},
                    {title: '当年实际可抵免税\\n额\\n4', width: '10%'},
                    {title: '以前年度已抵免额\\n小计\\n5', width: '10%'},
                    {title: '本年实际抵免的各\\n年度税额\\n6', width: '10%'},
                    {title: '可结转以后年度抵\\n免的税额\\n7', width: '10%'}
                ]
            ],
            rows: [
                { inputs: [{type:'label', value:'1', style:'text-align:center'}, {type:'label', value:'抵免<br>情况', rowspan:6, style:'text-align:center'}, {type:'label', value:'前五年度', style:'text-align:center'}, {key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {isAsterisk:true}] },
                { inputs: [{type:'label', value:'2', style:'text-align:center'}, {type:'label', value:'前四年度', style:'text-align:center'}, {key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}] },
                { inputs: [{type:'label', value:'3', style:'text-align:center'}, {type:'label', value:'前三年度', style:'text-align:center'}, {key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6'}, {key:'L3_C7'}] },
                { inputs: [{type:'label', value:'4', style:'text-align:center'}, {type:'label', value:'前二年度', style:'text-align:center'}, {key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6'}, {key:'L4_C7'}] },
                { inputs: [{type:'label', value:'5', style:'text-align:center'}, {type:'label', value:'前一年度', style:'text-align:center'}, {key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6'}, {key:'L5_C7'}] },
                { inputs: [{type:'label', value:'6', style:'text-align:center'}, {type:'label', value:'本年度', style:'text-align:center'}, {key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {isAsterisk:true}, {key:'L6_C6'}, {key:'L6_C7'}] },
                { inputs: [{type:'label', value:'7', style:'text-align:center'}, {type:'label', value:'本年实际抵免税额合计', colspan:2, style:'font-weight:bold;text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L7_C6', isReadonly:true}, {isAsterisk:true}] },
                { inputs: [{type:'label', value:'8', style:'text-align:center'}, {type:'label', value:'可结转以后年度抵免的税额合计', colspan:2, style:'font-weight:bold;text-align:center'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L8_C7', isReadonly:true}] },
                { inputs: [
                    {type:'label', value:'9', rowspan:4, style:'text-align:center'}, {type:'label', value:'本年<br>允许<br>抵免<br>专用<br>设备<br>投资<br>情况', rowspan:4, style:'text-align:center'},
                    {type:'label', value:'投资类型', colspan:2, style:'text-align:center;font-weight:bold'}, {type:'label', value:'投资额', colspan:2, style:'text-align:center;font-weight:bold'},
                    {type:'label', value:'抵免比例', colspan:2, style:'text-align:center;font-weight:bold'}, {type:'label', value:'可抵免税额', colspan:2, style:'text-align:center;font-weight:bold'}
                ]},
                { inputs: [{type:'label', value:'9.1', style:'text-align:center'}, {key:'L9_1_C1', type:'text', colspan:2}, {key:'L9_1_C2', colspan:2}, {key:'L9_1_C3', colspan:2}, {key:'L9_1_C4', colspan:2}] },
                { inputs: [{type:'label', value:'9.2', style:'text-align:center'}, {key:'L9_2_C1', type:'text', colspan:2}, {key:'L9_2_C2', colspan:2}, {key:'L9_2_C3', colspan:2}, {key:'L9_2_C4', colspan:2}] },
                { inputs: [{type:'label', value:'9.3', style:'text-align:center'}, {key:'L9_3_C1', type:'text', colspan:2}, {key:'L9_3_C2', colspan:2}, {key:'L9_3_C3', colspan:2}, {key:'L9_3_C4', colspan:2}] }
            ]
        },
        logic: (db) => {
            if (!db.A107050) return;
            const t = db.A107050;
            let sum6 = 0; let sum7 = 0;
            for(let r=1; r<=6; r++) {
                sum6 += (t[`L${r}_C6`] || 0);
                if (r > 1) sum7 += (t[`L${r}_C7`] || 0);
            }
            t.L7_C6 = sum6; t.L8_C7 = sum7;
        }
    },

    // ==========================================
    // A108000 境外所得税收抵免明细表
    // ==========================================
    A108000: {
        schema: {
            id: 'A108000',
            title: '境外所得税收抵免明细表 (A108000)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '3%'}, {title: '国家\\n(地区)', rowspan: 2, width: '5%'},
                    {title: '境外\\n税前\\n所得\\n2', rowspan: 2, width: '5%'}, {title: '境外\\n所得\\n纳税\\n调整\\n后所\\n得\\n3', rowspan: 2, width: '5%'},
                    {title: '弥补\\n境外\\n以前\\n年度\\n亏损\\n4', rowspan: 2, width: '5%'}, {title: '境外\\n应纳\\n税所\\n得额\\n5\\n(3-4)', rowspan: 2, width: '5%'},
                    {title: '抵减\\n境内\\n亏损\\n6', rowspan: 2, width: '5%'}, {title: '抵减\\n境内\\n亏损\\n后的\\n境外\\n应纳\\n税所\\n得额\\n7\\n(5-6)', rowspan: 2, width: '5%'},
                    {title: '税率\\n8', rowspan: 2, width: '4%'}, {title: '境外所\\n得应纳\\n税额\\n9\\n(7×8)', rowspan: 2, width: '5%'},
                    {title: '境外\\n所得\\n可抵\\n免税\\n额\\n10', rowspan: 2, width: '5%'}, {title: '境外\\n所得\\n抵免\\n限额\\n11', rowspan: 2, width: '5%'},
                    {title: '本年\\n可抵\\n免境\\n外所\\n得税\\n额\\n12', rowspan: 2, width: '5%'}, {title: '未超\\n过境\\n外所\\n得税\\n抵免\\n限额\\n的余\\n额\\n13\\n(11-12)', rowspan: 2, width: '5%'},
                    {title: '本年\\n可抵\\n免以\\n前年\\n度未\\n抵免\\n境外\\n所得\\n税额\\n14', rowspan: 2, width: '5%'},
                    {title: '按简易办法计算', colspan: 4}, {title: '境外所\\n得抵免\\n所得税\\n额合计\\n19(12+14\\n+18)', rowspan: 2, width: '5%'}
                ],
                [
                    {title: '按低于\\n12.5%\\n的实际\\n税率计\\n算的抵\\n免额\\n15', width: '5%'}, {title: '按\\n12.5\\n%计\\n算的\\n抵免\\n额\\n16', width: '5%'},
                    {title: '按\\n25%\\n计算\\n的抵\\n免额\\n17', width: '5%'}, {title: '小计\\n18(15+\\n16+17)', width: '5%'}
                ]
            ],
            rows: [
                ...Array.from({length: 9}).map((_, i) => ({
                    line: `${i+1}`, inputs: [
                        {key:`L${i+1}_C1`, type:'text'}, {key:`L${i+1}_C2`}, {key:`L${i+1}_C3`}, {key:`L${i+1}_C4`}, {key:`L${i+1}_C5`, isReadonly:true}, 
                        {key:`L${i+1}_C6`}, {key:`L${i+1}_C7`, isReadonly:true}, {key:`L${i+1}_C8`, value:0.25}, {key:`L${i+1}_C9`, isReadonly:true}, 
                        {key:`L${i+1}_C10`}, {key:`L${i+1}_C11`}, {key:`L${i+1}_C12`}, {key:`L${i+1}_C13`, isReadonly:true}, {key:`L${i+1}_C14`}, 
                        {key:`L${i+1}_C15`}, {key:`L${i+1}_C16`}, {key:`L${i+1}_C17`}, {key:`L${i+1}_C18`, isReadonly:true}, {key:`L${i+1}_C19`, isReadonly:true}
                    ]
                })),
                { line: '10', text: '合计', isBold:true, inputs: [
                    {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true},
                    {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {isAsterisk:true}, {key:'L10_C9', isReadonly:true},
                    {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}, {key:'L10_C12', isReadonly:true}, {key:'L10_C13', isReadonly:true},
                    {key:'L10_C14', isReadonly:true}, {key:'L10_C15', isReadonly:true}, {key:'L10_C16', isReadonly:true}, {key:'L10_C17', isReadonly:true},
                    {key:'L10_C18', isReadonly:true}, {key:'L10_C19', isReadonly:true}
                ]}
            ]
        },
        logic: (db) => {
            if (!db.A108000) return;
            const t = db.A108000;
            for(let r=1; r<=9; r++) {
                if(t[`L${r}_C8`] === undefined) t[`L${r}_C8`] = 0.25; 
                t[`L${r}_C5`] = (t[`L${r}_C3`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C6`] || 0);
                t[`L${r}_C9`] = t[`L${r}_C7`] * t[`L${r}_C8`];
                t[`L${r}_C13`] = (t[`L${r}_C11`] || 0) - (t[`L${r}_C12`] || 0);
                t[`L${r}_C18`] = (t[`L${r}_C15`] || 0) + (t[`L${r}_C16`] || 0) + (t[`L${r}_C17`] || 0);
                t[`L${r}_C19`] = (t[`L${r}_C12`] || 0) + (t[`L${r}_C14`] || 0) + t[`L${r}_C18`];
            }
            const cols = [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
            cols.forEach(c => { let sum = 0; for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0); t[`L10_C${c}`] = sum; });
        }
    },

    // ==========================================
    // A108010 境外所得纳税调整后所得明细表
    // ==========================================
    A108010: {
        schema: {
            id: 'A108010',
            title: '境外所得纳税调整后所得明细表 (A108010)',
            headers: [
                [
                    {title: '行次', rowspan: 3, width: '3%'},
                    {title: '国家\\n(地区)', rowspan: 3, width: '5%'},
                    {title: '境外税后所得', colspan: 8},
                    {title: '境外所得可抵免的所得税额', colspan: 4},
                    {title: '境外\\n税前\\n所得\\n14(9\\n+13)', rowspan: 3, width: '4%'},
                    {title: '境外分支\\n机构收入\\n与支出纳\\n税调整额\\n15', rowspan: 3, width: '4%'},
                    {title: '境外分支\\n机构调整\\n分摊扣除\\n的有关成\\n本费用\\n16', rowspan: 3, width: '4%'},
                    {title: '境外所得\\n对应调整\\n的相关成\\n本费用支\\n出\\n17', rowspan: 3, width: '4%'},
                    {title: '境外所得\\n纳税调整\\n后所得\\n18(14+15\\n-16-17)', rowspan: 3, width: '4%'},
                    {title: '其中：新增境外直接投资所得', colspan: 8}
                ],
                [
                    {title: '分支机\\n构营业\\n利润所\\n得\\n2', rowspan: 2, width: '3%'},
                    {title: '股息、\\n红利等\\n权益性\\n投资所\\n得\\n3', rowspan: 2, width: '3%'},
                    {title: '利息\\n所得\\n4', rowspan: 2, width: '3%'},
                    {title: '租金\\n所得\\n5', rowspan: 2, width: '3%'},
                    {title: '特许权\\n使用费\\n所得\\n6', rowspan: 2, width: '3%'},
                    {title: '财产\\n转让\\n所得\\n7', rowspan: 2, width: '3%'},
                    {title: '其他\\n所得\\n8', rowspan: 2, width: '3%'},
                    {title: '小计\\n9(2+\\n..+8)', rowspan: 2, width: '4%'},
                    {title: '直接缴\\n纳的所\\n得税额\\n10', rowspan: 2, width: '3%'},
                    {title: '间接负\\n担的所\\n得税额\\n11', rowspan: 2, width: '3%'},
                    {title: '享受税\\n收饶让\\n抵免税\\n额\\n12', rowspan: 2, width: '3%'},
                    {title: '小计\\n13(10+\\n11+12)', rowspan: 2, width: '4%'},
                    {title: '新设境外分支机构所得', colspan: 4},
                    {title: '境外\\n所得\\n抵免\\n税额\\n23', rowspan: 2, width: '3%'},
                    {title: '新增境外直接投\\n资相对应的股息\\n所得', colspan: 2},
                    {title: '境外享\\n受免税\\n政策的\\n所得小\\n计\\n26(22\\n+24)', rowspan: 2, width: '4%'}
                ],
                [
                    {title: '营业\\n利润\\n19', width: '3%'},
                    {title: '调整分\\n摊扣除\\n的有关\\n成本费\\n用\\n20', width: '3%'},
                    {title: '纳税\\n调整\\n额\\n21', width: '3%'},
                    {title: '纳税调\\n整后所\\n得\\n22(19\\n-20+21)', width: '4%'},
                    {title: '对应\\n的股\\n息所\\n得\\n24', width: '3%'},
                    {title: '对应\\n的境\\n外所\\n得税\\n额\\n25', width: '3%'}
                ]
            ],
            rows: [
                ...Array.from({length: 9}).map((_, i) => ({
                    line: `${i+1}`, inputs: [
                        {key:`L${i+1}_C1`, type:'text'}, {key:`L${i+1}_C2`}, {key:`L${i+1}_C3`}, {key:`L${i+1}_C4`}, {key:`L${i+1}_C5`}, {key:`L${i+1}_C6`}, {key:`L${i+1}_C7`}, {key:`L${i+1}_C8`},
                        {key:`L${i+1}_C9`, isReadonly:true}, {key:`L${i+1}_C10`}, {key:`L${i+1}_C11`}, {key:`L${i+1}_C12`}, {key:`L${i+1}_C13`, isReadonly:true},
                        {key:`L${i+1}_C14`, isReadonly:true}, {key:`L${i+1}_C15`}, {key:`L${i+1}_C16`}, {key:`L${i+1}_C17`}, {key:`L${i+1}_C18`, isReadonly:true},
                        {key:`L${i+1}_C19`}, {key:`L${i+1}_C20`}, {key:`L${i+1}_C21`}, {key:`L${i+1}_C22`, isReadonly:true}, {key:`L${i+1}_C23`},
                        {key:`L${i+1}_C24`}, {key:`L${i+1}_C25`}, {key:`L${i+1}_C26`, isReadonly:true}
                    ]
                })),
                { line: '10', text: '合计', isBold:true, inputs: [
                    {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {key:'L10_C8', isReadonly:true},
                    {key:'L10_C9', isReadonly:true}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}, {key:'L10_C12', isReadonly:true}, {key:'L10_C13', isReadonly:true},
                    {key:'L10_C14', isReadonly:true}, {key:'L10_C15', isReadonly:true}, {key:'L10_C16', isReadonly:true}, {key:'L10_C17', isReadonly:true}, {key:'L10_C18', isReadonly:true},
                    {key:'L10_C19', isReadonly:true}, {key:'L10_C20', isReadonly:true}, {key:'L10_C21', isReadonly:true}, {key:'L10_C22', isReadonly:true}, {key:'L10_C23', isReadonly:true},
                    {key:'L10_C24', isReadonly:true}, {key:'L10_C25', isReadonly:true}, {key:'L10_C26', isReadonly:true}
                ]}
            ]
        },
        logic: (db) => {
            if (!db.A108010) return;
            const t = db.A108010;
            for(let r=1; r<=9; r++) {
                t[`L${r}_C9`] = (t[`L${r}_C2`]||0) + (t[`L${r}_C3`]||0) + (t[`L${r}_C4`]||0) + (t[`L${r}_C5`]||0) + (t[`L${r}_C6`]||0) + (t[`L${r}_C7`]||0) + (t[`L${r}_C8`]||0);
                t[`L${r}_C13`] = (t[`L${r}_C10`]||0) + (t[`L${r}_C11`]||0) + (t[`L${r}_C12`]||0);
                t[`L${r}_C14`] = t[`L${r}_C9`] + t[`L${r}_C13`];
                t[`L${r}_C18`] = t[`L${r}_C14`] + (t[`L${r}_C15`]||0) - (t[`L${r}_C16`]||0) - (t[`L${r}_C17`]||0);
                t[`L${r}_C22`] = (t[`L${r}_C19`]||0) - (t[`L${r}_C20`]||0) + (t[`L${r}_C21`]||0);
                t[`L${r}_C26`] = t[`L${r}_C22`] + (t[`L${r}_C24`]||0);
            }
            const cols = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
            cols.forEach(c => { let sum = 0; for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0); t[`L10_C${c}`] = sum; });
        }
    },

    // ==========================================
    // A108020 境外分支机构弥补亏损明细表
    // ==========================================
    A108020: {
        schema: {
            id: 'A108020',
            title: '境外分支机构弥补亏损明细表 (A108020)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '5%'},
                    {title: '国家 (地区)', rowspan: 2, width: '15%'},
                    {title: '非实际亏损额的弥补', colspan: 4},
                    {title: '实际亏损额的弥补', colspan: 4}
                ],
                [
                    {title: '以前年度结转\\n尚未弥补的非\\n实际亏损额\\n2', width: '10%'},
                    {title: '本年发生的非\\n实际亏损额\\n3', width: '10%'},
                    {title: '本年弥补的以\\n前年度非实际\\n亏损额\\n4', width: '10%'},
                    {title: '结转以后年度\\n弥补的非实际\\n亏损额\\n5(2+3-4)', width: '10%'},
                    {title: '以前年度结转\\n尚未弥补的实\\n际亏损额\\n6', width: '10%'},
                    {title: '本年发生的实\\n际亏损额\\n7', width: '10%'},
                    {title: '本年弥补的以\\n前年度实际亏\\n损额\\n8', width: '10%'},
                    {title: '结转以后年度\\n弥补的实际亏\\n损额\\n9', width: '10%'}
                ]
            ],
            rows: [
                ...Array.from({length: 9}).map((_, i) => ({
                    line: `${i+1}`, inputs: [
                        {key:`L${i+1}_C1`, type:'text'}, {key:`L${i+1}_C2`}, {key:`L${i+1}_C3`}, {key:`L${i+1}_C4`}, {key:`L${i+1}_C5`, isReadonly:true}, 
                        {key:`L${i+1}_C6`}, {key:`L${i+1}_C7`}, {key:`L${i+1}_C8`}, {key:`L${i+1}_C9`, isReadonly:true}
                    ]
                })),
                { line: '10', text: '合计', isBold:true, inputs: [
                    {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, 
                    {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {key:'L10_C8', isReadonly:true}, {key:'L10_C9', isReadonly:true}
                ]}
            ]
        },
        logic: (db) => {
            if (!db.A108020) return;
            const t = db.A108020;
            for(let r=1; r<=9; r++) {
                t[`L${r}_C5`] = (t[`L${r}_C2`] || 0) + (t[`L${r}_C3`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C9`] = (t[`L${r}_C6`] || 0) + (t[`L${r}_C7`] || 0) - (t[`L${r}_C8`] || 0);
            }
            const cols = [2, 3, 4, 5, 6, 7, 8, 9];
            cols.forEach(c => { let sum = 0; for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0); t[`L10_C${c}`] = sum; });
        }
    }
};