// forms/group_7020-8020.js

export const formBundle = {
    // ==========================================
    // A107020 所得减免优惠明细表
    // ==========================================
    A107020: {
        schema: {
            id: 'A107020',
            title: '所得减免优惠明细表 (A107020)',
            columns: [
                {title:'行次', width:'4%'}, {title:'减免项目', width:'12%'},
                {title:'项目名称(1)', width:'10%'}, {title:'优惠事项(2)', width:'10%'}, {title:'优惠方式(3)', width:'8%'},
                {title:'项目收入(4)', width:'8%'}, {title:'项目成本(5)', width:'8%'}, {title:'相关税费(6)', width:'8%'},
                {title:'分摊费用(7)', width:'8%'}, {title:'纳税调整(8)', width:'8%'}, 
                {title:'免税项目(9)', width:'8%'}, {title:'减半项目(10)', width:'8%'}, {title:'减免所得额(11)', width:'8%'}
            ],
            rows: [
                { line: '1', text: '一、农、林、牧、渔业项目', inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C2', type:'text'}, {key:'L1_C3', type:'text'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {key:'L1_C7'}, {key:'L1_C8'}, {key:'L1_C9'}, {key:'L1_C10'}, {key:'L1_C11', isReadonly:true}] },
                { line: '2', text: '', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2', type:'text'}, {key:'L2_C3', type:'text'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8'}, {key:'L2_C9'}, {key:'L2_C10'}, {key:'L2_C11', isReadonly:true}] },
                { line: '3', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L3_C4', isReadonly:true}, {key:'L3_C5', isReadonly:true}, {key:'L3_C6', isReadonly:true}, {key:'L3_C7', isReadonly:true}, {key:'L3_C8', isReadonly:true}, {key:'L3_C9', isReadonly:true}, {key:'L3_C10', isReadonly:true}, {key:'L3_C11', isReadonly:true}] },
                { line: '4', text: '二、国家重点扶持公共基础设施', inputs: [{key:'L4_C1', type:'text'}, {key:'L4_C2', type:'text'}, {key:'L4_C3', type:'text'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6'}, {key:'L4_C7'}, {key:'L4_C8'}, {key:'L4_C9'}, {key:'L4_C10'}, {key:'L4_C11', isReadonly:true}] },
                { line: '5', text: '', inputs: [{key:'L5_C1', type:'text'}, {key:'L5_C2', type:'text'}, {key:'L5_C3', type:'text'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6'}, {key:'L5_C7'}, {key:'L5_C8'}, {key:'L5_C9'}, {key:'L5_C10'}, {key:'L5_C11', isReadonly:true}] },
                { line: '6', text: '小计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L6_C4', isReadonly:true}, {key:'L6_C5', isReadonly:true}, {key:'L6_C6', isReadonly:true}, {key:'L6_C7', isReadonly:true}, {key:'L6_C8', isReadonly:true}, {key:'L6_C9', isReadonly:true}, {key:'L6_C10', isReadonly:true}, {key:'L6_C11', isReadonly:true}] },
                { line: '22', text: '合计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L22_C4', isReadonly:true}, {key:'L22_C5', isReadonly:true}, {key:'L22_C6', isReadonly:true}, {key:'L22_C7', isReadonly:true}, {key:'L22_C8', isReadonly:true}, {key:'L22_C9', isReadonly:true}, {key:'L22_C10', isReadonly:true}, {key:'L22_C11', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A107020) return;
            const t = db.A107020;
            // 横向计算 11 = 9 + 10 * 50%
            [1, 2, 4, 5].forEach(r => {
                t[`L${r}_C11`] = (t[`L${r}_C9`] || 0) + (t[`L${r}_C10`] || 0) * 0.5;
            });
            // 小计
            for(let c=4; c<=11; c++) {
                t[`L3_C${c}`] = (t[`L1_C${c}`] || 0) + (t[`L2_C${c}`] || 0);
                t[`L6_C${c}`] = (t[`L4_C${c}`] || 0) + (t[`L5_C${c}`] || 0);
                t[`L22_C${c}`] = (t[`L3_C${c}`] || 0) + (t[`L6_C${c}`] || 0); // 汇总
            }
        }
    },

    // ==========================================
    // A107030 抵扣应纳税所得额明细表
    // ==========================================
    A107030: {
        schema: {
            id: 'A107030',
            title: '抵扣应纳税所得额明细表 (A107030)',
            columns: [
                {title:'行次', width:'6%'}, {title:'项 目', width:'40%'},
                {title:'合计金额(1=2+3)', width:'18%'}, {title:'投资中小高新技术(2)', width:'18%'}, {title:'投资初创科技型(3)', width:'18%'}
            ],
            rows: [
                { line: '1', text: '一、本年新增的符合条件的股权投资额', inputs: [{key:'L1_C1', isReadonly:true}, {key:'L1_C2'}, {key:'L1_C3'}] },
                { line: '2', text: '税收规定的抵扣率', inputs: [{key:'L2_C1', isReadonly:true, value:0.7}, {key:'L2_C2', isReadonly:true, value:0.7}, {key:'L2_C3', isReadonly:true, value:0.7}] },
                { line: '3', text: '本年新增的可抵扣的股权投资额 (1×2)', inputs: [{key:'L3_C1', isReadonly:true}, {key:'L3_C2', isReadonly:true}, {key:'L3_C3', isReadonly:true}] },
                { line: '4', text: '以前年度结转的尚未抵扣的股权投资余额', inputs: [{key:'L4_C1', isReadonly:true}, {key:'L4_C2'}, {key:'L4_C3'}] },
                { line: '5', text: '本年可抵扣的股权投资额 (3+4)', inputs: [{key:'L5_C1', isReadonly:true}, {key:'L5_C2', isReadonly:true}, {key:'L5_C3', isReadonly:true}] },
                { line: '6', text: '本年可用于抵扣的应纳税所得额', inputs: [{key:'L6_C1', isReadonly:true}, {key:'L6_C2'}, {key:'L6_C3'}] },
                { line: '7', text: '本年实际抵扣应纳税所得额', inputs: [{key:'L7_C1', isReadonly:true}, {key:'L7_C2'}, {key:'L7_C3'}] },
                { line: '8', text: '结转以后年度抵扣的股权投资余额', inputs: [{key:'L8_C1', isReadonly:true}, {key:'L8_C2', isReadonly:true}, {key:'L8_C3', isReadonly:true}] },
                { line: '15', text: '三、抵扣应纳税所得额合计 (7+13)', isBold:true, inputs: [{key:'L15_C1', isReadonly:true}, {key:'L15_C2', isReadonly:true}, {key:'L15_C3', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A107030) return;
            const t = db.A107030;
            [2, 3].forEach(c => {
                t[`L2_C${c}`] = 0.7; // 70% 抵扣率
                t[`L3_C${c}`] = (t[`L1_C${c}`] || 0) * t[`L2_C${c}`];
                t[`L5_C${c}`] = (t[`L3_C${c}`] || 0) + (t[`L4_C${c}`] || 0);
                t[`L8_C${c}`] = (t[`L5_C${c}`] || 0) - (t[`L7_C${c}`] || 0);
            });
            // 列 1 合计
            [1, 3, 4, 5, 6, 7, 8, 15].forEach(r => {
                t[`L${r}_C1`] = (t[`L${r}_C2`] || 0) + (t[`L${r}_C3`] || 0);
            });
            t.L15_C1 = t.L7_C1 || 0; // 简化展示，结合13行逻辑同理
        }
    },

    // ==========================================
    // A107041 高新技术企业优惠情况及明细表
    // ==========================================
    A107041: {
        schema: {
            id: 'A107041',
            title: '高新技术企业优惠情况及明细表 (A107041)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'70%'}, {title:'金 额 / 比例', width:'20%'}],
            rows: [
                { line: '1', text: '高新技术企业证书编号 / 取得时间', inputs: [{key:'L1_C1', type:'text'}] },
                { line: '4', text: '一、本年高新技术产品（服务）收入 (5+6)', isBold:true, key:'L4', isReadonly:true },
                { line: '5', text: '其中：产品（服务）收入', indent:1, key:'L5' },
                { line: '6', text: '技术性收入', indent:1, key:'L6' },
                { line: '7', text: '二、本年企业总收入 (8-9)', isBold:true, key:'L7', isReadonly:true },
                { line: '8', text: '其中：收入总额', indent:1, key:'L8' },
                { line: '9', text: '不征税收入', indent:1, key:'L9' },
                { line: '10', text: '三、高新收入占总收入比例 (4÷7)', isBold:true, key:'L10', isReadonly:true },
                { line: '31', text: '减免税额：国家需要重点扶持的高新技术企业', isBold:true, key:'L31' }
            ]
        },
        logic: (db) => {
            if (!db.A107041) return;
            const t = db.A107041;
            t.L4 = (t.L5 || 0) + (t.L6 || 0);
            t.L7 = (t.L8 || 0) - (t.L9 || 0);
            t.L10 = t.L7 ? (t.L4 / t.L7).toFixed(4) : 0;
        }
    },

    // ==========================================
    // A107042 软件、集成电路企业优惠情况及明细表
    // ==========================================
    A107042: {
        schema: {
            id: 'A107042',
            title: '软件、集成电路企业优惠情况及明细表 (A107042)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目 / 指标', width:'70%'}, {title:'金 额 / 比例', width:'20%'}],
            rows: [
                { line: '11', text: '一、企业本年月平均职工总人数', isBold:true, key:'L11' },
                { line: '12', text: '其中：大学专科以上学历职工人数', indent:1, key:'L12' },
                { line: '13', text: '研究开发人员人数', indent:1, key:'L13' },
                { line: '14', text: '二、大专以上学历职工占总人数比例 (12÷11)', isBold:true, key:'L14', isReadonly:true },
                { line: '16', text: '四、研发费用总额', isBold:true, key:'L16' },
                { line: '20', text: '七、企业收入总额', isBold:true, key:'L20' },
                { line: '32', text: '减免税额', isBold:true, key:'L32' }
            ]
        },
        logic: (db) => {
            if (!db.A107042) return;
            const t = db.A107042;
            t.L14 = t.L11 ? (t.L12 / t.L11).toFixed(4) : 0;
        }
    },

    // ==========================================
    // A107050 税额抵免优惠明细表
    // ==========================================
    A107050: {
        schema: {
            id: 'A107050',
            title: '税额抵免优惠明细表 (A107050)',
            columns: [
                {title:'行次', width:'5%'}, {title:'项目', width:'15%'},
                {title:'当年抵免前应纳税额(2)', width:'16%'}, {title:'允许抵免投资额(3)', width:'16%'}, 
                {title:'实际可抵免额(4)', width:'16%'}, {title:'以前年度已抵免(5)', width:'16%'}, {title:'可结转抵免额(7)', width:'16%'}
            ],
            rows: [
                { line: '1', text: '前五年度', inputs: [{key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C7', isReadonly:true}] },
                { line: '2', text: '前四年度', inputs: [{key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C7', isReadonly:true}] },
                { line: '6', text: '本年度', inputs: [{key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {isAsterisk:true}, {key:'L6_C7', isReadonly:true}] },
                { line: '7', text: '抵免税额合计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A107050) return;
            const t = db.A107050;
            [1, 2, 6].forEach(r => {
                t[`L${r}_C7`] = (t[`L${r}_C3`] || 0) - (t[`L${r}_C4`] || 0) - (t[`L${r}_C5`] || 0);
            });
        }
    },

    // ==========================================
    // A108000 境外所得税收抵免明细表 (超级矩阵)
    // ==========================================
    A108000: {
        schema: {
            id: 'A108000',
            title: '境外所得税收抵免明细表 (A108000)',
            columns: [
                {title:'行次', width:'4%'}, {title:'国家', width:'8%'},
                {title:'境外税前所得(2)', width:'8%'}, {title:'纳税调整后(3)', width:'8%'}, {title:'弥补以前亏损(4)', width:'8%'},
                {title:'境外应纳税额(5=3-4)', width:'8%'}, {title:'抵减境内亏损(6)', width:'8%'}, {title:'抵减后所得(7=5-6)', width:'8%'},
                {title:'税率(8)', width:'6%'}, {title:'境外应纳税额(9=7×8)', width:'8%'}, {title:'可抵免税额(10)', width:'8%'},
                {title:'抵免限额(11)', width:'8%'}, {title:'本年可抵免(12)', width:'8%'}
            ],
            rows: [
                { line: '1', text: '', inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5', isReadonly:true}, {key:'L1_C6'}, {key:'L1_C7', isReadonly:true}, {key:'L1_C8', value:0.25}, {key:'L1_C9', isReadonly:true}, {key:'L1_C10'}, {key:'L1_C11'}, {key:'L1_C12'}] },
                { line: '2', text: '', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5', isReadonly:true}, {key:'L2_C6'}, {key:'L2_C7', isReadonly:true}, {key:'L2_C8', value:0.25}, {key:'L2_C9', isReadonly:true}, {key:'L2_C10'}, {key:'L2_C11'}, {key:'L2_C12'}] },
                { line: '3', text: '', inputs: [{key:'L3_C1', type:'text'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5', isReadonly:true}, {key:'L3_C6'}, {key:'L3_C7', isReadonly:true}, {key:'L3_C8', value:0.25}, {key:'L3_C9', isReadonly:true}, {key:'L3_C10'}, {key:'L3_C11'}, {key:'L3_C12'}] },
                { line: '10', text: '合计', isBold:true, inputs: [{isAsterisk:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {isAsterisk:true}, {key:'L10_C9', isReadonly:true}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}, {key:'L10_C12', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A108000) return;
            const t = db.A108000;
            // 矩阵横向计算
            for(let r=1; r<=9; r++) {
                if(t[`L${r}_C8`] === undefined) t[`L${r}_C8`] = 0.25; // 默认25%
                t[`L${r}_C5`] = (t[`L${r}_C3`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C6`] || 0);
                t[`L${r}_C9`] = t[`L${r}_C7`] * t[`L${r}_C8`];
            }
            // 矩阵纵向合计
            const cols = [2, 3, 4, 5, 6, 7, 9, 10, 11, 12];
            cols.forEach(c => {
                let sum = 0;
                for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0);
                t[`L10_C${c}`] = sum;
            });
        }
    },

    // ==========================================
    // A108010 境外所得纳税调整后所得明细表
    // ==========================================
    A108010: {
        schema: {
            id: 'A108010',
            title: '境外所得纳税调整后所得明细表 (A108010)',
            columns: [
                {title:'行次', width:'5%'}, {title:'国家(1)', width:'15%'},
                {title:'分支机构利润(2)', width:'10%'}, {title:'股息红利(3)', width:'10%'}, {title:'利息(4)', width:'10%'},
                {title:'租金(5)', width:'10%'}, {title:'特许权费(6)', width:'10%'}, {title:'财产转让(7)', width:'10%'},
                {title:'其他(8)', width:'10%'}, {title:'小计(9=2..8)', width:'10%'}
            ],
            rows: [
                { line: '1', text: '', inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {key:'L1_C7'}, {key:'L1_C8'}, {key:'L1_C9', isReadonly:true}] },
                { line: '2', text: '', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8'}, {key:'L2_C9', isReadonly:true}] },
                { line: '10', text: '合计', isBold:true, inputs: [{isAsterisk:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {key:'L10_C8', isReadonly:true}, {key:'L10_C9', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A108010) return;
            const t = db.A108010;
            for(let r=1; r<=9; r++) {
                let sum = 0;
                for(let c=2; c<=8; c++) sum += (t[`L${r}_C${c}`] || 0);
                t[`L${r}_C9`] = sum;
            }
            for(let c=2; c<=9; c++) {
                let sum = 0;
                for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0);
                t[`L10_C${c}`] = sum;
            }
        }
    },

    // ==========================================
    // A108020 境外分支机构弥补亏损明细表
    // ==========================================
    A108020: {
        schema: {
            id: 'A108020',
            title: '境外分支机构弥补亏损明细表 (A108020)',
            columns: [
                {title:'行次', width:'5%'}, {title:'国家(1)', width:'15%'},
                {title:'未弥补的非实际亏损(2)', width:'16%'}, {title:'本年发生的非实际亏损(3)', width:'16%'}, 
                {title:'本年弥补的以前年度亏损(4)', width:'16%'}, {title:'结转以后年度亏损(5=2+3-4)', width:'16%'}, {title:'小计(11)', width:'16%'}
            ],
            rows: [
                { line: '1', text: '', inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5', isReadonly:true}, {key:'L1_C11'}] },
                { line: '2', text: '', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5', isReadonly:true}, {key:'L2_C11'}] },
                { line: '10', text: '合计', isBold:true, inputs: [{isAsterisk:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C11', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A108020) return;
            const t = db.A108020;
            for(let r=1; r<=9; r++) {
                t[`L${r}_C5`] = (t[`L${r}_C2`] || 0) + (t[`L${r}_C3`] || 0) - (t[`L${r}_C4`] || 0);
            }
            [2, 3, 4, 5, 11].forEach(c => {
                let sum = 0;
                for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0);
                t[`L10_C${c}`] = sum;
            });
        }
    }
};