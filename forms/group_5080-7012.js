// forms/group_5080-7012.js

export const formBundle = {
    // ==========================================
    // A105080 资产折旧、摊销及纳税调整明细表
    // ==========================================
    A105080: {
        schema: {
            id: 'A105080',
            title: '资产折旧、摊销及纳税调整明细表 (A105080)',
            columns: [
                {title:'行次', width:'4%'}, {title:'项 目', width:'16%'},
                {title:'账载-原值(1)', width:'8%'}, {title:'账载-本年折旧(2)', width:'8%'}, {title:'账载-累计折旧(3)', width:'8%'},
                {title:'税收-计税基础(4)', width:'8%'}, {title:'税收-税收折旧(5)', width:'8%'}, {title:'税收-一般折旧(6)', width:'8%'},
                {title:'税收-加速统计(7=5-6)', width:'8%'}, {title:'税收-累计折旧(8)', width:'8%'}, {title:'纳税调整(9=2-5)', width:'8%'}
            ],
            rows: [
                { line: '1', text: '一、固定资产 (2+3+4+5+6+7)', isBold: true, inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L1_C8'}, {key:'L1_C9', isReadonly:true}] },
                { line: '2', text: '（一）房屋、建筑物', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L2_C8'}, {key:'L2_C9', isReadonly:true}] },
                { line: '8', text: '二、生产性生物资产 (9+10)', isBold: true, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L8_C8'}, {key:'L8_C9', isReadonly:true}] },
                { line: '11', text: '三、无形资产 (12+..+19)', isBold: true, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}, {key:'L11_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L11_C8'}, {key:'L11_C9', isReadonly:true}] },
                { line: '20', text: '四、长期待摊费用 (21+..+25)', isBold: true, inputs: [{key:'L20_C1'}, {key:'L20_C2'}, {key:'L20_C3'}, {key:'L20_C4'}, {key:'L20_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L20_C8'}, {key:'L20_C9', isReadonly:true}] },
                { line: '26', text: '五、油气勘探投资', isBold: true, inputs: [{key:'L26_C1'}, {key:'L26_C2'}, {key:'L26_C3'}, {key:'L26_C4'}, {key:'L26_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L26_C8'}, {key:'L26_C9', isReadonly:true}] },
                { line: '27', text: '六、油气开发投资', isBold: true, inputs: [{key:'L27_C1'}, {key:'L27_C2'}, {key:'L27_C3'}, {key:'L27_C4'}, {key:'L27_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L27_C8'}, {key:'L27_C9', isReadonly:true}] },
                { line: '30', text: '合计', isBold: true, inputs: [{key:'L30_C1', isReadonly:true}, {key:'L30_C2', isReadonly:true}, {key:'L30_C3', isReadonly:true}, {key:'L30_C4', isReadonly:true}, {key:'L30_C5', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L30_C8', isReadonly:true}, {key:'L30_C9', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105080) return;
            const t = db.A105080;
            const rows = [1, 2, 8, 11, 20, 26, 27, 30];
            rows.forEach(r => {
                // 列 9 = 列 2 - 列 5
                t[`L${r}_C9`] = (t[`L${r}_C2`] || 0) - (t[`L${r}_C5`] || 0);
            });
            // 合计计算
            for (let c = 1; c <= 9; c++) {
                if (c === 6 || c === 7) continue;
                t[`L30_C${c}`] = (t[`L1_C${c}`] || 0) + (t[`L8_C${c}`] || 0) + (t[`L11_C${c}`] || 0) + (t[`L20_C${c}`] || 0) + (t[`L26_C${c}`] || 0) + (t[`L27_C${c}`] || 0);
            }
        }
    },

    // ==========================================
    // A105090 资产损失税前扣除及纳税调整明细表
    // ==========================================
    A105090: {
        schema: {
            id: 'A105090',
            title: '资产损失税前扣除及纳税调整明细表 (A105090)',
            columns: [
                {title:'行次', width:'6%'}, {title:'项 目', width:'34%'},
                {title:'损失账载金额(1)', width:'12%'}, {title:'资产处置收入(2)', width:'12%'}, {title:'赔偿收入(3)', width:'12%'},
                {title:'资产计税基础(4)', width:'12%'}, {title:'税收金额(5=4-2-3)', width:'12%'}, {title:'纳税调整(6=1-5)', width:'12%'}
            ],
            rows: [
                { line: '1', text: '一、清单申报资产损失 (2+..+8)', isBold: true, inputs: [{key:'L1_C1', isReadonly:true}, {key:'L1_C2', isReadonly:true}, {key:'L1_C3', isReadonly:true}, {key:'L1_C4', isReadonly:true}, {key:'L1_C5', isReadonly:true}, {key:'L1_C6', isReadonly:true}] },
                { line: '2', text: '（一）正常经营管理活动中...', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5', isReadonly:true}, {key:'L2_C6', isReadonly:true}] },
                { line: '9', text: '二、专项申报资产损失 (10+..+13)', isBold: true, inputs: [{key:'L9_C1', isReadonly:true}, {key:'L9_C2', isReadonly:true}, {key:'L9_C3', isReadonly:true}, {key:'L9_C4', isReadonly:true}, {key:'L9_C5', isReadonly:true}, {key:'L9_C6', isReadonly:true}] },
                { line: '10', text: '（一）货币资产损失', indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {key:'L10_C4'}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}] },
                { line: '14', text: '合计 (1+9)', isBold: true, inputs: [{key:'L14_C1', isReadonly:true}, {key:'L14_C2', isReadonly:true}, {key:'L14_C3', isReadonly:true}, {key:'L14_C4', isReadonly:true}, {key:'L14_C5', isReadonly:true}, {key:'L14_C6', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105090) return;
            const t = db.A105090;
            [2, 10].forEach(r => {
                t[`L${r}_C5`] = (t[`L${r}_C4`] || 0) - (t[`L${r}_C2`] || 0) - (t[`L${r}_C3`] || 0);
                t[`L${r}_C6`] = (t[`L${r}_C1`] || 0) - t[`L${r}_C5`];
            });
            [1, 2, 3, 4, 5, 6].forEach(c => {
                t[`L1_C${c}`] = t[`L2_C${c}`] || 0; // 模拟清单合计
                t[`L9_C${c}`] = t[`L10_C${c}`] || 0; // 模拟专项合计
                t[`L14_C${c}`] = t[`L1_C${c}`] + t[`L9_C${c}`];
            });
        }
    },

    // ==========================================
    // A105100 企业重组及递延纳税事项纳税调整明细表
    // ==========================================
    A105100: {
        schema: {
            id: 'A105100',
            title: '企业重组及递延纳税事项纳税调整明细表 (A105100)',
            columns: [
                {title:'行次', width:'6%'}, {title:'项 目', width:'24%'},
                {title:'一般-账载(1)', width:'10%'}, {title:'一般-税收(2)', width:'10%'}, {title:'一般-调整(3=2-1)', width:'10%'},
                {title:'特殊-账载(4)', width:'10%'}, {title:'特殊-税收(5)', width:'10%'}, {title:'特殊-调整(6=5-4)', width:'10%'}, {title:'总调整(7=3+6)', width:'10%'}
            ],
            rows: [
                { line: '1', text: '一、债务重组', inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3', isReadonly:true}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6', isReadonly:true}, {key:'L1_C7', isReadonly:true}] },
                { line: '4', text: '二、股权收购', inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3', isReadonly:true}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6', isReadonly:true}, {key:'L4_C7', isReadonly:true}] },
                { line: '8', text: '四、企业合并 (9+10)', isBold: true, inputs: [{key:'L8_C1', isReadonly:true}, {key:'L8_C2', isReadonly:true}, {key:'L8_C3', isReadonly:true}, {key:'L8_C4', isReadonly:true}, {key:'L8_C5', isReadonly:true}, {key:'L8_C6', isReadonly:true}, {key:'L8_C7', isReadonly:true}] },
                { line: '9', text: '（一）同一控制下企业合并', indent: 1, inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3', isReadonly:true}, {key:'L9_C4'}, {key:'L9_C5'}, {key:'L9_C6', isReadonly:true}, {key:'L9_C7', isReadonly:true}] },
                { line: '16', text: '合计 (1+4+6+8+11+12+13+14+15)', isBold: true, inputs: [{key:'L16_C1', isReadonly:true}, {key:'L16_C2', isReadonly:true}, {key:'L16_C3', isReadonly:true}, {key:'L16_C4', isReadonly:true}, {key:'L16_C5', isReadonly:true}, {key:'L16_C6', isReadonly:true}, {key:'L16_C7', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105100) return;
            const t = db.A105100;
            const rows = [1, 4, 9];
            rows.forEach(r => {
                t[`L${r}_C3`] = (t[`L${r}_C2`] || 0) - (t[`L${r}_C1`] || 0);
                t[`L${r}_C6`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = t[`L${r}_C3`] + t[`L${r}_C6`];
            });
            for (let c = 1; c <= 7; c++) {
                t[`L8_C${c}`] = t[`L9_C${c}`] || 0;
                t[`L16_C${c}`] = (t[`L1_C${c}`] || 0) + (t[`L4_C${c}`] || 0) + (t[`L8_C${c}`] || 0);
            }
        }
    },

    // ==========================================
    // A105110 政策性搬迁纳税调整明细表
    // ==========================================
    A105110: {
        schema: {
            id: 'A105110',
            title: '政策性搬迁纳税调整明细表 (A105110)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'60%'}, {title:'金 额', width:'30%'}],
            rows: [
                { line: '1', text: '一、搬迁收入 (2+8)', key: 'L1', isBold: true, isReadonly: true },
                { line: '2', text: '（一）搬迁补偿收入', key: 'L2', indent: 1 },
                { line: '8', text: '（二）搬迁资产处置收入', key: 'L8', indent: 1 },
                { line: '9', text: '二、搬迁支出 (10+16)', key: 'L9', isBold: true, isReadonly: true },
                { line: '10', text: '（一）搬迁费用支出', key: 'L10', indent: 1 },
                { line: '16', text: '（二）搬迁资产处置支出', key: 'L16', indent: 1 },
                { line: '17', text: '三、搬迁所得或损失 (1-9)', key: 'L17', isBold: true, isReadonly: true },
                { line: '18', text: '四、应计入本年应纳税所得额的搬迁所得或损失 (19+20+21)', key: 'L18', isBold: true, isReadonly: true },
                { line: '19', text: '其中：搬迁所得', key: 'L19', indent: 1 },
                { line: '22', text: '五、计入当期损益的搬迁收益或损失', key: 'L22', isBold: true },
                { line: '23', text: '六、以前年度搬迁损失当期扣除金额', key: 'L23', isBold: true },
                { line: '24', text: '七、纳税调整金额 (18-22-23)', key: 'L24', isBold: true, isReadonly: true }
            ]
        },
        logic: (db) => {
            if (!db.A105110) return;
            const t = db.A105110;
            t.L1 = (t.L2 || 0) + (t.L8 || 0);
            t.L9 = (t.L10 || 0) + (t.L16 || 0);
            t.L17 = t.L1 - t.L9;
            t.L18 = (t.L19 || 0) + (t.L20 || 0) + (t.L21 || 0);
            t.L24 = t.L18 - (t.L22 || 0) - (t.L23 || 0);
        }
    },

    // ==========================================
    // A105120 特殊行业准备金及纳税调整明细表
    // ==========================================
    A105120: {
        schema: {
            id: 'A105120',
            title: '特殊行业准备金及纳税调整明细表 (A105120)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'50%'}, {title:'账载金额(1)', width:'13%'}, {title:'税收金额(2)', width:'13%'}, {title:'纳税调整金额(3=1-2)', width:'14%'}],
            rows: [
                { line: '1', text: '一、保险公司 (2+13-14+15-16+19-20)', isBold: true, inputs: [{key:'L1_C1', isReadonly:true}, {key:'L1_C2', isReadonly:true}, {key:'L1_C3', isReadonly:true}] },
                { line: '21', text: '二、证券行业 (22+23+24+25)', isBold: true, inputs: [{key:'L21_C1', isReadonly:true}, {key:'L21_C2', isReadonly:true}, {key:'L21_C3', isReadonly:true}] },
                { line: '26', text: '三、期货行业 (27+28+29+30)', isBold: true, inputs: [{key:'L26_C1', isReadonly:true}, {key:'L26_C2', isReadonly:true}, {key:'L26_C3', isReadonly:true}] },
                { line: '31', text: '四、金融企业 (32+33+34)', isBold: true, inputs: [{key:'L31_C1', isReadonly:true}, {key:'L31_C2', isReadonly:true}, {key:'L31_C3', isReadonly:true}] },
                { line: '32', text: '（一）涉农和中小企业贷款损失准备金', indent: 1, inputs: [{key:'L32_C1'}, {key:'L32_C2'}, {key:'L32_C3', isReadonly:true}] },
                { line: '33', text: '（二）贷款损失准备金', indent: 1, inputs: [{key:'L33_C1'}, {key:'L33_C2'}, {key:'L33_C3', isReadonly:true}] },
                { line: '35', text: '五、中小企业融资(信用)担保机构 (36+37-38)', isBold: true, inputs: [{key:'L35_C1', isReadonly:true}, {key:'L35_C2', isReadonly:true}, {key:'L35_C3', isReadonly:true}] },
                { line: '39', text: '六、小额贷款公司 (40+41)', isBold: true, inputs: [{key:'L39_C1', isReadonly:true}, {key:'L39_C2', isReadonly:true}, {key:'L39_C3', isReadonly:true}] },
                { line: '42', text: '七、其他', isBold: true, inputs: [{key:'L42_C1'}, {key:'L42_C2'}, {key:'L42_C3', isReadonly:true}] },
                { line: '43', text: '合计 (1+21+26+31+35+39+42)', isBold: true, inputs: [{key:'L43_C1', isReadonly:true}, {key:'L43_C2', isReadonly:true}, {key:'L43_C3', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105120) return;
            const t = db.A105120;
            // 基础行次计算
            [32, 33, 42].forEach(r => { t[`L${r}_C3`] = (t[`L${r}_C1`] || 0) - (t[`L${r}_C2`] || 0); });
            // 汇总计算
            for (let c = 1; c <= 3; c++) {
                t[`L31_C${c}`] = (t[`L32_C${c}`] || 0) + (t[`L33_C${c}`] || 0);
                t[`L43_C${c}`] = (t[`L1_C${c}`] || 0) + (t[`L21_C${c}`] || 0) + (t[`L26_C${c}`] || 0) + (t[`L31_C${c}`] || 0) + (t[`L35_C${c}`] || 0) + (t[`L39_C${c}`] || 0) + (t[`L42_C${c}`] || 0);
            }
        }
    },

    // ==========================================
    // A106000 企业所得税弥补亏损明细表
    // ==========================================
    A106000: {
        schema: {
            id: 'A106000',
            title: '企业所得税弥补亏损明细表 (A106000)',
            columns: [
                {title:'行次', width:'4%'}, {title:'年度', width:'8%'},
                {title:'可弥补亏损(2)', width:'11%'}, {title:'合并转入(3)', width:'11%'}, {title:'当年可弥补(4)', width:'11%'},
                {title:'已弥补-前四(5)', width:'8%'}, {title:'已弥补-前三(6)', width:'8%'}, {title:'已弥补-前二(7)', width:'8%'}, {title:'已弥补-前一(8)', width:'8%'},
                {title:'已弥补-合计(9)', width:'8%'}, {title:'本年实际弥补(10)', width:'10%'}, {title:'可结转以后(11)', width:'10%'}
            ],
            rows: [
                { line: '1', text: '前五年度', inputs: [{key:'L1_C1_year', type:'text'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L1_C10'}, {isAsterisk:true}] },
                { line: '2', text: '前四年度', inputs: [{key:'L2_C1_year', type:'text'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L2_C9', isReadonly:true}, {key:'L2_C10'}, {key:'L2_C11', isReadonly:true}] },
                { line: '6', text: '本年度', inputs: [{key:'L6_C1_year', type:'text'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {key:'L6_C5'}, {key:'L6_C6'}, {key:'L6_C7'}, {key:'L6_C8'}, {key:'L6_C9', isReadonly:true}, {key:'L6_C10'}, {key:'L6_C11', isReadonly:true}] },
                { line: '7', text: '可结转合计', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L7_C11', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A106000) return;
            const t = db.A106000;
            [2, 6].forEach(r => {
                t[`L${r}_C9`] = (t[`L${r}_C5`] || 0) + (t[`L${r}_C6`] || 0) + (t[`L${r}_C7`] || 0) + (t[`L${r}_C8`] || 0);
                t[`L${r}_C11`] = (t[`L${r}_C4`] || 0) - t[`L${r}_C9`] - (t[`L${r}_C10`] || 0);
            });
            t.L7_C11 = (t.L2_C11 || 0) + (t.L6_C11 || 0); // 汇总结转额
        }
    },

    // ==========================================
    // A107011 符合条件的居民企业之间的股息、红利等权益性投资收益优惠明细表
    // ==========================================
    A107011: {
        schema: {
            id: 'A107011',
            title: '股息、红利等权益性投资收益优惠明细表 (A107011)',
            columns: [
                {title:'行次', width:'4%'}, {title:'被投资企业(1)', width:'14%'},
                {title:'投资成本(4)', width:'10%'}, {title:'投资比例(5)', width:'8%'}, {title:'取得股息(7)', width:'10%'},
                {title:'分得清算(8)', width:'10%'}, {title:'确认股息(10)', width:'10%'},
                {title:'撤回投资比(12)', width:'10%'}, {title:'撤回股息(16)', width:'10%'}, {title:'合计应确认所得(17)', width:'14%'}
            ],
            rows: [
                { line: '1', text: '项目一', inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C7'}, {key:'L1_C8'}, {key:'L1_C10'}, {key:'L1_C12'}, {key:'L1_C16'}, {key:'L1_C17', isReadonly:true}] },
                { line: '8', text: '合计', isBold: true, inputs: [{isAsterisk:true}, {key:'L8_C4', isReadonly:true}, {isAsterisk:true}, {key:'L8_C7', isReadonly:true}, {key:'L8_C8', isReadonly:true}, {key:'L8_C10', isReadonly:true}, {isAsterisk:true}, {key:'L8_C16', isReadonly:true}, {key:'L8_C17', isReadonly:true}] },
                { line: '9', text: '其中：股票投资—沪港通H股', indent: 1, inputs: [{isAsterisk:true}, {key:'L9_C4'}, {isAsterisk:true}, {key:'L9_C7'}, {key:'L9_C8'}, {key:'L9_C10'}, {isAsterisk:true}, {key:'L9_C16'}, {key:'L9_C17', isReadonly:true}] },
                { line: '10', text: '股票投资—深港通H股', indent: 1, inputs: [{isAsterisk:true}, {key:'L10_C4'}, {isAsterisk:true}, {key:'L10_C7'}, {key:'L10_C8'}, {key:'L10_C10'}, {isAsterisk:true}, {key:'L10_C16'}, {key:'L10_C17', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A107011) return;
            const t = db.A107011;
            [1, 9, 10].forEach(r => {
                t[`L${r}_C17`] = (t[`L${r}_C7`] || 0) + (t[`L${r}_C10`] || 0) + (t[`L${r}_C16`] || 0); // 简化逻辑演示17列=7+10+16
            });
            [4, 7, 8, 10, 16, 17].forEach(c => {
                t[`L8_C${c}`] = t[`L1_C${c}`] || 0; // 行1汇总到8
            });
        }
    },

    // ==========================================
    // A107012 研发费用加计扣除优惠明细表
    // ==========================================
    A107012: {
        schema: {
            id: 'A107012',
            title: '研发费用加计扣除优惠明细表 (A107012)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'70%'}, {title:'金 额', width:'20%'}],
            rows: [
                { line: '3', text: '一、自主研发、合作研发、集中研发 (4+8+17+20+24+35)', key: 'L3', isBold: true, isReadonly: true },
                { line: '4', text: '（一）人员人工费用 (5+6+7)', key: 'L4', indent: 1, isReadonly: true },
                { line: '5', text: '1. 直接从事研发活动人员工资薪金', key: 'L5', indent: 2 },
                { line: '6', text: '2. 直接从事研发活动人员五险一金', key: 'L6', indent: 2 },
                { line: '7', text: '3. 外聘研发人员的劳务费用', key: 'L7', indent: 2 },
                { line: '8', text: '（二）直接投入费用 (9+10+..+16)', key: 'L8', indent: 1, isReadonly: true },
                { line: '9', text: '1. 研发活动直接消耗材料', key: 'L9', indent: 2 },
                { line: '17', text: '（三）折旧费用 (18+19)', key: 'L17', indent: 1, isReadonly: true },
                { line: '18', text: '1. 用于研发活动的仪器的折旧费', key: 'L18', indent: 2 },
                { line: '20', text: '（四）无形资产摊销 (21+22+23)', key: 'L20', indent: 1, isReadonly: true },
                { line: '21', text: '1. 用于研发活动的软件的摊销费用', key: 'L21', indent: 2 },
                { line: '24', text: '（五）新产品设计费等 (25+26+27+28)', key: 'L24', indent: 1, isReadonly: true },
                { line: '25', text: '1. 新产品设计费', key: 'L25', indent: 2 }
            ]
        },
        logic: (db) => {
            if (!db.A107012) return;
            const t = db.A107012;
            t.L4 = (t.L5 || 0) + (t.L6 || 0) + (t.L7 || 0);
            t.L8 = t.L9 || 0; // 省略明细
            t.L17 = t.L18 || 0; 
            t.L20 = t.L21 || 0;
            t.L24 = t.L25 || 0;
            t.L3 = t.L4 + t.L8 + t.L17 + t.L20 + t.L24;
        }
    }
};