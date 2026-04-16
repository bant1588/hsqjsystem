// forms/group_5080-7012.js

export const formBundle = {
    // ==========================================
    // A105080 资产折旧、摊销及纳税调整明细表
    // ==========================================
    A105080: {
        schema: {
            id: 'A105080',
            title: '资产折旧、摊销及纳税调整明细表 (A105080)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '4%'}, {title: '项 目', colspan: 2, rowspan: 2, width: '30%'},
                    {title: '账载金额', colspan: 3}, {title: '税收金额', colspan: 5},
                    {title: '纳税调整\\n金额', rowspan: 2, width: '6%'}
                ],
                [
                    {title: '资产\\n原值\\n1', width: '6%'}, {title: '本年折旧、\\n摊销额\\n2', width: '6%'}, {title: '累计折旧、\\n摊销额\\n3', width: '6%'},
                    {title: '资产计\\n税基础\\n4', width: '6%'}, {title: '税收折旧、\\n摊销额\\n5', width: '6%'}, {title: '享受加速折旧政策的\\n资产按税收一般规定\\n计算的折旧、摊销额\\n6', width: '10%'},
                    {title: '加速折旧、\\n摊销统计额\\n7 (5-6)', width: '6%'}, {title: '累计折\\n旧、摊\\n销额\\n8', width: '6%'}
                ]
            ],
            rows: [
                { line: '1', text: '一、固定资产 (2+3+4+5+6+7)', textColspan: 2, isBold: true, inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L1_C8'}, {key:'L1_C9', isReadonly:true}] },
                { line: '2', text: '（一）房屋、建筑物', textColspan: 2, indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L2_C8'}, {key:'L2_C9', isReadonly:true}] },
                { line: '3', text: '（二）飞机、火车、轮船、机器、机械和其他生产设备', textColspan: 2, indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L3_C8'}, {key:'L3_C9', isReadonly:true}] },
                { line: '4', text: '（三）与生产经营活动有关的器具、工具、家具等', textColspan: 2, indent: 1, inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L4_C8'}, {key:'L4_C9', isReadonly:true}] },
                { line: '5', text: '（四）飞机、火车、轮船以外的运输工具', textColspan: 2, indent: 1, inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L5_C8'}, {key:'L5_C9', isReadonly:true}] },
                { line: '6', text: '（五）电子设备', textColspan: 2, indent: 1, inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {key:'L6_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L6_C8'}, {key:'L6_C9', isReadonly:true}] },
                { line: '7', text: '（六）其他', textColspan: 2, indent: 1, inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3'}, {key:'L7_C4'}, {key:'L7_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L7_C8'}, {key:'L7_C9', isReadonly:true}] },
                { line: '8', text: '二、生产性生物资产 (9+10)', textColspan: 2, isBold: true, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L8_C8'}, {key:'L8_C9', isReadonly:true}] },
                { line: '9', text: '（一）林木类', textColspan: 2, indent: 1, inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3'}, {key:'L9_C4'}, {key:'L9_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L9_C8'}, {key:'L9_C9', isReadonly:true}] },
                { line: '10', text: '（二）畜类', textColspan: 2, indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {key:'L10_C4'}, {key:'L10_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L10_C8'}, {key:'L10_C9', isReadonly:true}] },
                { line: '11', text: '三、无形资产 (12+13+14+15+16+17+18+19)', textColspan: 2, isBold: true, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}, {key:'L11_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L11_C8'}, {key:'L11_C9', isReadonly:true}] },
                { line: '12', text: '（一）专利权', textColspan: 2, indent: 1, inputs: [{key:'L12_C1'}, {key:'L12_C2'}, {key:'L12_C3'}, {key:'L12_C4'}, {key:'L12_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L12_C8'}, {key:'L12_C9', isReadonly:true}] },
                { line: '13', text: '（二）商标权', textColspan: 2, indent: 1, inputs: [{key:'L13_C1'}, {key:'L13_C2'}, {key:'L13_C3'}, {key:'L13_C4'}, {key:'L13_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L13_C8'}, {key:'L13_C9', isReadonly:true}] },
                { line: '14', text: '（三）著作权', textColspan: 2, indent: 1, inputs: [{key:'L14_C1'}, {key:'L14_C2'}, {key:'L14_C3'}, {key:'L14_C4'}, {key:'L14_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L14_C8'}, {key:'L14_C9', isReadonly:true}] },
                { line: '15', text: '（四）土地使用权', textColspan: 2, indent: 1, inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3'}, {key:'L15_C4'}, {key:'L15_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L15_C8'}, {key:'L15_C9', isReadonly:true}] },
                { line: '16', text: '（五）非专利技术', textColspan: 2, indent: 1, inputs: [{key:'L16_C1'}, {key:'L16_C2'}, {key:'L16_C3'}, {key:'L16_C4'}, {key:'L16_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L16_C8'}, {key:'L16_C9', isReadonly:true}] },
                { line: '17', text: '（六）特许权使用费', textColspan: 2, indent: 1, inputs: [{key:'L17_C1'}, {key:'L17_C2'}, {key:'L17_C3'}, {key:'L17_C4'}, {key:'L17_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L17_C8'}, {key:'L17_C9', isReadonly:true}] },
                { line: '18', text: '（七）软件', textColspan: 2, indent: 1, inputs: [{key:'L18_C1'}, {key:'L18_C2'}, {key:'L18_C3'}, {key:'L18_C4'}, {key:'L18_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L18_C8'}, {key:'L18_C9', isReadonly:true}] },
                { line: '19', text: '（八）其他', textColspan: 2, indent: 1, inputs: [{key:'L19_C1'}, {key:'L19_C2'}, {key:'L19_C3'}, {key:'L19_C4'}, {key:'L19_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L19_C8'}, {key:'L19_C9', isReadonly:true}] },
                { line: '20', text: '四、长期待摊费用 (21+22+23+24+25)', textColspan: 2, isBold: true, inputs: [{key:'L20_C1'}, {key:'L20_C2'}, {key:'L20_C3'}, {key:'L20_C4'}, {key:'L20_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L20_C8'}, {key:'L20_C9', isReadonly:true}] },
                { line: '21', text: '（一）已足额提取折旧的固定资产的改建支出', textColspan: 2, indent: 1, inputs: [{key:'L21_C1'}, {key:'L21_C2'}, {key:'L21_C3'}, {key:'L21_C4'}, {key:'L21_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L21_C8'}, {key:'L21_C9', isReadonly:true}] },
                { line: '22', text: '（二）租入固定资产的改建支出', textColspan: 2, indent: 1, inputs: [{key:'L22_C1'}, {key:'L22_C2'}, {key:'L22_C3'}, {key:'L22_C4'}, {key:'L22_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L22_C8'}, {key:'L22_C9', isReadonly:true}] },
                { line: '23', text: '（三）固定资产的大修理支出', textColspan: 2, indent: 1, inputs: [{key:'L23_C1'}, {key:'L23_C2'}, {key:'L23_C3'}, {key:'L23_C4'}, {key:'L23_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L23_C8'}, {key:'L23_C9', isReadonly:true}] },
                { line: '24', text: '（四）开办费', textColspan: 2, indent: 1, inputs: [{key:'L24_C1'}, {key:'L24_C2'}, {key:'L24_C3'}, {key:'L24_C4'}, {key:'L24_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L24_C8'}, {key:'L24_C9', isReadonly:true}] },
                { line: '25', text: '（五）其他', textColspan: 2, indent: 1, inputs: [{key:'L25_C1'}, {key:'L25_C2'}, {key:'L25_C3'}, {key:'L25_C4'}, {key:'L25_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L25_C8'}, {key:'L25_C9', isReadonly:true}] },
                { line: '26', text: '五、油气勘探投资', textColspan: 2, isBold: true, inputs: [{key:'L26_C1'}, {key:'L26_C2'}, {key:'L26_C3'}, {key:'L26_C4'}, {key:'L26_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L26_C8'}, {key:'L26_C9', isReadonly:true}] },
                { line: '27', text: '六、油气开发投资', textColspan: 2, isBold: true, inputs: [{key:'L27_C1'}, {key:'L27_C2'}, {key:'L27_C3'}, {key:'L27_C4'}, {key:'L27_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L27_C8'}, {key:'L27_C9', isReadonly:true}] },
                
                // 拆分列显示，新增文本输入项
                { line: '28', text: '享受资产加速折旧（摊销）及一次性扣除（摊销）政策的资产加速折旧（摊销）额大于一般折旧（摊销）额的部分', textRowspan: 6, width: '15%', text2: '（一）加速折旧（摊销）', align2: 'left', inputs: [{key:'L28_C1'}, {key:'L28_C2'}, {key:'L28_C3'}, {key:'L28_C4'}, {key:'L28_C5'}, {key:'L28_C6'}, {key:'L28_C7'}, {key:'L28_C8'}, {isAsterisk:true}] },
                { line: '28.1', inputs: [{key:'L28_1_name', type: 'text', placeholder: '填写优惠事项名称'}, {key:'L28_1_C1'}, {key:'L28_1_C2'}, {key:'L28_1_C3'}, {key:'L28_1_C4'}, {key:'L28_1_C5'}, {key:'L28_1_C6'}, {key:'L28_1_C7'}, {key:'L28_1_C8'}, {isAsterisk:true}] },
                { line: '28.2', inputs: [{key:'L28_2_name', type: 'text', placeholder: '填写优惠事项名称'}, {key:'L28_2_C1'}, {key:'L28_2_C2'}, {key:'L28_2_C3'}, {key:'L28_2_C4'}, {key:'L28_2_C5'}, {key:'L28_2_C6'}, {key:'L28_2_C7'}, {key:'L28_2_C8'}, {isAsterisk:true}] },
                { line: '29', text2: '（二）一次性扣除（摊销）', align2: 'left', inputs: [{key:'L29_C1'}, {key:'L29_C2'}, {key:'L29_C3'}, {key:'L29_C4'}, {key:'L29_C5'}, {key:'L29_C6'}, {key:'L29_C7'}, {key:'L29_C8'}, {isAsterisk:true}] },
                { line: '29.1', inputs: [{key:'L29_1_name', type: 'text', placeholder: '填写优惠事项名称'}, {key:'L29_1_C1'}, {key:'L29_1_C2'}, {key:'L29_1_C3'}, {key:'L29_1_C4'}, {key:'L29_1_C5'}, {key:'L29_1_C6'}, {key:'L29_1_C7'}, {key:'L29_1_C8'}, {isAsterisk:true}] },
                { line: '29.2', inputs: [{key:'L29_2_name', type: 'text', placeholder: '填写优惠事项名称'}, {key:'L29_2_C1'}, {key:'L29_2_C2'}, {key:'L29_2_C3'}, {key:'L29_2_C4'}, {key:'L29_2_C5'}, {key:'L29_2_C6'}, {key:'L29_2_C7'}, {key:'L29_2_C8'}, {isAsterisk:true}] },
                
                { line: '30', text: '合计', textColspan: 2, isBold: true, inputs: [{key:'L30_C1', isReadonly:true}, {key:'L30_C2', isReadonly:true}, {key:'L30_C3', isReadonly:true}, {key:'L30_C4', isReadonly:true}, {key:'L30_C5', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L30_C8', isReadonly:true}, {key:'L30_C9', isReadonly:true}] },
                { line: '附列资料', text: '全民所有制企业公司制改制资产评估增值政策资产', textColspan: 2, inputs: [{key:'LF1_C1'}, {key:'LF1_C2'}, {key:'LF1_C3'}, {key:'LF1_C4'}, {key:'LF1_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'LF1_C8'}, {key:'LF1_C9'}] }
            ]
        },
        logic: (db) => {
            if (!db.A105080) return;
            const t = db.A105080;
            const sumRows = (target, sources, cols) => {
                cols.forEach(c => { t[`L${target}_C${c}`] = sources.reduce((acc, row) => acc + (t[`L${row}_C${c}`] || 0), 0); });
            };
            const allCols = [1, 2, 3, 4, 5, 8];
            sumRows(1, [2, 3, 4, 5, 6, 7], allCols);
            sumRows(8, [9, 10], allCols);
            sumRows(11, [12, 13, 14, 15, 16, 17, 18, 19], allCols);
            sumRows(20, [21, 22, 23, 24, 25], allCols);
            sumRows(30, [1, 8, 11, 20, 26, 27], allCols);

            for (let r = 1; r <= 27; r++) { t[`L${r}_C9`] = (t[`L${r}_C2`] || 0) - (t[`L${r}_C5`] || 0); }
            t['L30_C9'] = (t['L30_C2'] || 0) - (t['L30_C5'] || 0);
        }
    },

    // ==========================================
    // A105090 资产损失税前扣除及纳税调整明细表
    // ==========================================
    A105090: {
        schema: {
            id: 'A105090',
            title: '资产损失税前扣除及纳税调整明细表 (A105090)',
            headers: [
                [
                    {title: '行次', width: '5%'}, {title: '项目', width: '35%'},
                    {title: '资产损失直\\n接计入本年\\n损益金额\\n1', width: '9%'}, {title: '资产损失准\\n备金核销金\\n额\\n2', width: '9%'},
                    {title: '资产处置\\n收入\\n3', width: '8%'}, {title: '赔偿收入\\n4', width: '8%'},
                    {title: '资产计税\\n基础\\n5', width: '8%'}, {title: '资产损失的\\n税收金额\\n6 (5-3-4)', width: '9%'},
                    {title: '纳税调整\\n金额\\n7', width: '9%'}
                ]
            ],
            rows: [
                { line: '1', text: '一、现金及银行存款损失', inputs: [{key:'L1_C1'}, {isAsterisk:true}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6', isReadonly:true}, {key:'L1_C7', isReadonly:true}] },
                { line: '2', text: '二、应收及预付款项坏账损失', inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6', isReadonly:true}, {key:'L2_C7', isReadonly:true}] },
                { line: '3', text: '其中：逾期三年以上的应收款项损失', indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6', isReadonly:true}, {key:'L3_C7', isReadonly:true}] },
                { line: '4', text: '逾期一年以上的小额应收款项损失', indent: 2, inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6', isReadonly:true}, {key:'L4_C7', isReadonly:true}] },
                { line: '5', text: '三、存货损失', inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6', isReadonly:true}, {key:'L5_C7', isReadonly:true}] },
                { line: '6', text: '其中：存货盘亏、报废、毁损、变质或被盗损失', indent: 1, inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {key:'L6_C5'}, {key:'L6_C6', isReadonly:true}, {key:'L6_C7', isReadonly:true}] },
                { line: '7', text: '四、固定资产损失', inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3'}, {key:'L7_C4'}, {key:'L7_C5'}, {key:'L7_C6', isReadonly:true}, {key:'L7_C7', isReadonly:true}] },
                { line: '8', text: '其中：固定资产盘亏、丢失、报废、损毁或被盗损失', indent: 1, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {key:'L8_C6', isReadonly:true}, {key:'L8_C7', isReadonly:true}] },
                { line: '9', text: '五、无形资产损失', inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3'}, {key:'L9_C4'}, {key:'L9_C5'}, {key:'L9_C6', isReadonly:true}, {key:'L9_C7', isReadonly:true}] },
                { line: '10', text: '其中：无形资产转让损失', indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {key:'L10_C4'}, {key:'L10_C5'}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}] },
                { line: '11', text: '无形资产被替代或超过法律保护期限形成的损失', indent: 2, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}, {key:'L11_C5'}, {key:'L11_C6', isReadonly:true}, {key:'L11_C7', isReadonly:true}] },
                { line: '12', text: '六、在建工程损失', inputs: [{key:'L12_C1'}, {isAsterisk:true}, {key:'L12_C3'}, {key:'L12_C4'}, {key:'L12_C5'}, {key:'L12_C6', isReadonly:true}, {key:'L12_C7', isReadonly:true}] },
                { line: '13', text: '其中：在建工程停建、报废损失', indent: 1, inputs: [{key:'L13_C1'}, {isAsterisk:true}, {key:'L13_C3'}, {key:'L13_C4'}, {key:'L13_C5'}, {key:'L13_C6', isReadonly:true}, {key:'L13_C7', isReadonly:true}] },
                { line: '14', text: '七、生产性生物资产损失', inputs: [{key:'L14_C1'}, {key:'L14_C2'}, {key:'L14_C3'}, {key:'L14_C4'}, {key:'L14_C5'}, {key:'L14_C6', isReadonly:true}, {key:'L14_C7', isReadonly:true}] },
                { line: '15', text: '其中：生产性生物资产盘亏、非正常死亡、被盗、丢失等产生的损失', indent: 1, inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3'}, {key:'L15_C4'}, {key:'L15_C5'}, {key:'L15_C6', isReadonly:true}, {key:'L15_C7', isReadonly:true}] },
                { line: '16', text: '八、债权性投资损失 (17+23)', isBold: true, inputs: [{key:'L16_C1', isReadonly:true}, {key:'L16_C2', isReadonly:true}, {key:'L16_C3', isReadonly:true}, {key:'L16_C4', isReadonly:true}, {key:'L16_C5', isReadonly:true}, {key:'L16_C6', isReadonly:true}, {key:'L16_C7', isReadonly:true}] },
                { line: '17', text: '（一）金融企业债权性投资损失 (18+22)', indent: 1, inputs: [{key:'L17_C1', isReadonly:true}, {key:'L17_C2', isReadonly:true}, {key:'L17_C3', isReadonly:true}, {key:'L17_C4', isReadonly:true}, {key:'L17_C5', isReadonly:true}, {key:'L17_C6', isReadonly:true}, {key:'L17_C7', isReadonly:true}] },
                { line: '18', text: '1.贷款损失', indent: 2, inputs: [{key:'L18_C1'}, {key:'L18_C2'}, {key:'L18_C3'}, {key:'L18_C4'}, {key:'L18_C5'}, {key:'L18_C6', isReadonly:true}, {key:'L18_C7', isReadonly:true}] },
                { line: '19', text: '其中：符合条件的涉农和中小企业贷款损失', indent: 3, inputs: [{key:'L19_C1'}, {key:'L19_C2'}, {key:'L19_C3'}, {key:'L19_C4'}, {key:'L19_C5'}, {key:'L19_C6', isReadonly:true}, {key:'L19_C7', isReadonly:true}] },
                { line: '20', text: '其中：单户贷款余额300万（含）以下的贷款损失', indent: 3, inputs: [{key:'L20_C1'}, {key:'L20_C2'}, {key:'L20_C3'}, {key:'L20_C4'}, {key:'L20_C5'}, {key:'L20_C6', isReadonly:true}, {key:'L20_C7', isReadonly:true}] },
                { line: '21', text: '单户贷款余额300万元至1000万元（含）的贷款损失', indent: 3, inputs: [{key:'L21_C1'}, {key:'L21_C2'}, {key:'L21_C3'}, {key:'L21_C4'}, {key:'L21_C5'}, {key:'L21_C6', isReadonly:true}, {key:'L21_C7', isReadonly:true}] },
                { line: '22', text: '2.其他债权性投资损失', indent: 2, inputs: [{key:'L22_C1'}, {key:'L22_C2'}, {key:'L22_C3'}, {key:'L22_C4'}, {key:'L22_C5'}, {key:'L22_C6', isReadonly:true}, {key:'L22_C7', isReadonly:true}] },
                { line: '23', text: '（二）非金融企业债权性投资损失', indent: 1, inputs: [{key:'L23_C1'}, {key:'L23_C2'}, {key:'L23_C3'}, {key:'L23_C4'}, {key:'L23_C5'}, {key:'L23_C6', isReadonly:true}, {key:'L23_C7', isReadonly:true}] },
                { line: '24', text: '九、股权（权益）性投资损失', inputs: [{key:'L24_C1'}, {key:'L24_C2'}, {key:'L24_C3'}, {key:'L24_C4'}, {key:'L24_C5'}, {key:'L24_C6', isReadonly:true}, {key:'L24_C7', isReadonly:true}] },
                { line: '25', text: '其中：股权转让损失', indent: 1, inputs: [{key:'L25_C1'}, {key:'L25_C2'}, {key:'L25_C3'}, {key:'L25_C4'}, {key:'L25_C5'}, {key:'L25_C6', isReadonly:true}, {key:'L25_C7', isReadonly:true}] },
                { line: '26', text: '十、通过各种交易场所、市场买卖债券、股票、期货、基金以及金融衍生产品等发生的损失', inputs: [{key:'L26_C1'}, {key:'L26_C2'}, {key:'L26_C3'}, {key:'L26_C4'}, {key:'L26_C5'}, {key:'L26_C6', isReadonly:true}, {key:'L26_C7', isReadonly:true}] },
                { line: '27', text: '十一、打包出售资产损失', inputs: [{key:'L27_C1'}, {key:'L27_C2'}, {key:'L27_C3'}, {key:'L27_C4'}, {key:'L27_C5'}, {key:'L27_C6', isReadonly:true}, {key:'L27_C7', isReadonly:true}] },
                { line: '28', text: '十二、其他资产损失', inputs: [{key:'L28_C1'}, {key:'L28_C2'}, {key:'L28_C3'}, {key:'L28_C4'}, {key:'L28_C5'}, {key:'L28_C6', isReadonly:true}, {key:'L28_C7', isReadonly:true}] },
                { line: '29', text: '合计 (1+2+5+7+9+12+14+16+24+26+27+28)', isBold: true, inputs: [{key:'L29_C1', isReadonly:true}, {key:'L29_C2', isReadonly:true}, {key:'L29_C3', isReadonly:true}, {key:'L29_C4', isReadonly:true}, {key:'L29_C5', isReadonly:true}, {key:'L29_C6', isReadonly:true}, {key:'L29_C7', isReadonly:true}] },
                { line: '30', text: '其中：分支机构留存备查的资产损失', indent: 1, inputs: [{key:'L30_C1'}, {key:'L30_C2'}, {key:'L30_C3'}, {key:'L30_C4'}, {key:'L30_C5'}, {key:'L30_C6', isReadonly:true}, {key:'L30_C7', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105090) return;
            const t = db.A105090;
            const sumRows = (target, sources) => {
                [1, 2, 3, 4, 5].forEach(c => { t[`L${target}_C${c}`] = sources.reduce((acc, row) => acc + (t[`L${row}_C${c}`] || 0), 0); });
            };
            sumRows(17, [18, 22]);
            sumRows(16, [17, 23]);
            sumRows(29, [1, 2, 5, 7, 9, 12, 14, 16, 24, 26, 27, 28]);

            for (let r = 1; r <= 30; r++) {
                t[`L${r}_C6`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C3`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = (t[`L${r}_C1`] || 0) + (t[`L${r}_C2`] || 0) - t[`L${r}_C6`];
            }
        }
    },

    // ==========================================
    // A105100 企业重组及递延纳税事项纳税调整明细表
    // ==========================================
    A105100: {
        schema: {
            id: 'A105100',
            title: '企业重组及递延纳税事项纳税调整明细表 (A105100)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '5%'}, {title: '项 目', rowspan: 2, width: '25%'},
                    {title: '一般性税务处理', colspan: 3}, {title: '特殊性税务处理（递延纳税）', colspan: 3},
                    {title: '纳税调整\\n金额\\n7(3+6)', rowspan: 2, width: '10%'}
                ],
                [
                    {title: '账载金额\\n1', width: '10%'}, {title: '税收金额\\n2', width: '10%'}, {title: '纳税调\\n整金额\\n3(2-1)', width: '10%'},
                    {title: '账载金额\\n4', width: '10%'}, {title: '税收金额\\n5', width: '10%'}, {title: '纳税调\\n整金额\\n6(5-4)', width: '10%'}
                ]
            ],
            rows: [
                { line: '1', text: '一、债务重组', inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3', isReadonly:true}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6', isReadonly:true}, {key:'L1_C7', isReadonly:true}] },
                { line: '2', text: '其中：以非货币性资产清偿债务', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3', isReadonly:true}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6', isReadonly:true}, {key:'L2_C7', isReadonly:true}] },
                { line: '3', text: '债转股', indent: 2, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3', isReadonly:true}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6', isReadonly:true}, {key:'L3_C7', isReadonly:true}] },
                { line: '4', text: '二、股权收购', inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3', isReadonly:true}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6', isReadonly:true}, {key:'L4_C7', isReadonly:true}] },
                { line: '5', text: '其中：涉及跨境重组的股权收购', indent: 1, inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3', isReadonly:true}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6', isReadonly:true}, {key:'L5_C7', isReadonly:true}] },
                { line: '6', text: '三、资产收购', inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3', isReadonly:true}, {key:'L6_C4'}, {key:'L6_C5'}, {key:'L6_C6', isReadonly:true}, {key:'L6_C7', isReadonly:true}] },
                { line: '7', text: '其中：涉及跨境重组的资产收购', indent: 1, inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3', isReadonly:true}, {key:'L7_C4'}, {key:'L7_C5'}, {key:'L7_C6', isReadonly:true}, {key:'L7_C7', isReadonly:true}] },
                { line: '8', text: '四、企业合并 (9+10)', isBold: true, inputs: [{key:'L8_C1', isReadonly:true}, {key:'L8_C2', isReadonly:true}, {key:'L8_C3', isReadonly:true}, {key:'L8_C4', isReadonly:true}, {key:'L8_C5', isReadonly:true}, {key:'L8_C6', isReadonly:true}, {key:'L8_C7', isReadonly:true}] },
                { line: '9', text: '（一）同一控制下企业合并', indent: 1, inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3', isReadonly:true}, {key:'L9_C4'}, {key:'L9_C5'}, {key:'L9_C6', isReadonly:true}, {key:'L9_C7', isReadonly:true}] },
                { line: '10', text: '（二）非同一控制下企业合并', indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4'}, {key:'L10_C5'}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}] },
                { line: '11', text: '五、企业分立', inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3', isReadonly:true}, {key:'L11_C4'}, {key:'L11_C5'}, {key:'L11_C6', isReadonly:true}, {key:'L11_C7', isReadonly:true}] },
                { line: '12', text: '六、非货币性资产对外投资', inputs: [{key:'L12_C1'}, {key:'L12_C2'}, {key:'L12_C3', isReadonly:true}, {key:'L12_C4'}, {key:'L12_C5'}, {key:'L12_C6', isReadonly:true}, {key:'L12_C7', isReadonly:true}] },
                { line: '13', text: '七、技术入股', inputs: [{key:'L13_C1'}, {key:'L13_C2'}, {key:'L13_C3', isReadonly:true}, {key:'L13_C4'}, {key:'L13_C5'}, {key:'L13_C6', isReadonly:true}, {key:'L13_C7', isReadonly:true}] },
                { line: '14', text: '八、股权划转、资产划转', inputs: [{key:'L14_C1'}, {key:'L14_C2'}, {key:'L14_C3', isReadonly:true}, {key:'L14_C4'}, {key:'L14_C5'}, {key:'L14_C6', isReadonly:true}, {key:'L14_C7', isReadonly:true}] },
                { line: '15', text: '九、基础设施领域不动产投资信托基金（□原始权益人 □项目公司）', inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3', isReadonly:true}, {key:'L15_C4'}, {key:'L15_C5'}, {key:'L15_C6', isReadonly:true}, {key:'L15_C7', isReadonly:true}] },
                { line: '15.1', text: '（一）设立基础设施 REITs 前', indent: 1, inputs: [{key:'L15_1_C1'}, {key:'L15_1_C2'}, {key:'L15_1_C3', isReadonly:true}, {key:'L15_1_C4'}, {key:'L15_1_C5'}, {key:'L15_1_C6', isReadonly:true}, {key:'L15_1_C7', isReadonly:true}] },
                { line: '15.2', text: '（二）设立基础设施 REITs 阶段', indent: 1, inputs: [{key:'L15_2_C1'}, {key:'L15_2_C2'}, {key:'L15_2_C3', isReadonly:true}, {key:'L15_2_C4'}, {key:'L15_2_C5'}, {key:'L15_2_C6', isReadonly:true}, {key:'L15_2_C7', isReadonly:true}] },
                { line: '16', text: '十、其他', inputs: [{key:'L16_C1'}, {key:'L16_C2'}, {key:'L16_C3', isReadonly:true}, {key:'L16_C4'}, {key:'L16_C5'}, {key:'L16_C6', isReadonly:true}, {key:'L16_C7', isReadonly:true}] },
                { line: '17', text: '合计 (1+4+6+8+11+12+13+14+15+16)', isBold: true, inputs: [{key:'L17_C1', isReadonly:true}, {key:'L17_C2', isReadonly:true}, {key:'L17_C3', isReadonly:true}, {key:'L17_C4', isReadonly:true}, {key:'L17_C5', isReadonly:true}, {key:'L17_C6', isReadonly:true}, {key:'L17_C7', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105100) return;
            const t = db.A105100;
            const sumCols = (target, sources) => {
                [1, 2, 4, 5].forEach(c => { t[`L${target}_C${c}`] = sources.reduce((acc, row) => acc + (t[`L${row}_C${c}`] || 0), 0); });
            };
            sumCols(8, [9, 10]);
            sumCols(17, [1, 4, 6, 8, 11, 12, 13, 14, 15, 16]);

            const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '15_1', '15_2', 16, 17];
            rows.forEach(r => {
                t[`L${r}_C3`] = (t[`L${r}_C2`] || 0) - (t[`L${r}_C1`] || 0);
                t[`L${r}_C6`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = t[`L${r}_C3`] + t[`L${r}_C6`];
            });
        }
    },

    // ==========================================
    // A105110 政策性搬迁纳税调整明细表
    // ==========================================
    A105110: {
        schema: {
            id: 'A105110',
            title: '政策性搬迁纳税调整明细表 (A105110)',
            columns: [
                { title: '行次', width: '10%' },
                { title: '项 目', width: '60%' },
                { title: '金 额', width: '30%' }
            ],
            rows: [
                { line: '1', text: '一、搬迁收入 (2+8)', isBold: true, inputs: [{key:'L1_C1', isReadonly:true}] },
                { line: '2', text: '（一）搬迁补偿收入 (3+4+5+6+7)', indent: 1, inputs: [{key:'L2_C1', isReadonly:true}] },
                { line: '3', text: '1.对被征用资产价值的补偿', indent: 2, inputs: [{key:'L3_C1'}] },
                { line: '4', text: '2.因搬迁、安置而给予的补偿', indent: 2, inputs: [{key:'L4_C1'}] },
                { line: '5', text: '3.对停产停业形成的损失而给予的补偿', indent: 2, inputs: [{key:'L5_C1'}] },
                { line: '6', text: '4.资产搬迁过程中遭到毁损而取得的保险赔款', indent: 2, inputs: [{key:'L6_C1'}] },
                { line: '7', text: '5.其他补偿收入', indent: 2, inputs: [{key:'L7_C1'}] },
                { line: '8', text: '（二）搬迁资产处置收入', indent: 1, inputs: [{key:'L8_C1'}] },
                { line: '9', text: '二、搬迁支出 (10+16)', isBold: true, inputs: [{key:'L9_C1', isReadonly:true}] },
                { line: '10', text: '（一）搬迁费用支出 (11+12+13+14+15)', indent: 1, inputs: [{key:'L10_C1', isReadonly:true}] },
                { line: '11', text: '1.安置职工实际发生的费用', indent: 2, inputs: [{key:'L11_C1'}] },
                { line: '12', text: '2.停工期间支付给职工的工资及福利费', indent: 2, inputs: [{key:'L12_C1'}] },
                { line: '13', text: '3.临时存放搬迁资产而发生的费用', indent: 2, inputs: [{key:'L13_C1'}] },
                { line: '14', text: '4.各类资产搬迁安装费用', indent: 2, inputs: [{key:'L14_C1'}] },
                { line: '15', text: '5.其他与搬迁相关的费用', indent: 2, inputs: [{key:'L15_C1'}] },
                { line: '16', text: '（二）搬迁资产处置支出', indent: 1, inputs: [{key:'L16_C1'}] },
                { line: '17', text: '三、搬迁所得或损失 (1-9)', isBold: true, inputs: [{key:'L17_C1', isReadonly:true}] },
                { line: '18', text: '四、应计入本年应纳税所得额的搬迁所得或损失 (19+20+21)', isBold: true, inputs: [{key:'L18_C1', isReadonly:true}] },
                { line: '19', text: '其中：搬迁所得', indent: 1, inputs: [{key:'L19_C1'}] },
                { line: '20', text: '搬迁损失一次性扣除', indent: 1, inputs: [{key:'L20_C1'}] },
                { line: '21', text: '搬迁损失分期扣除', indent: 1, inputs: [{key:'L21_C1'}] },
                { line: '22', text: '五、计入当期损益的搬迁收益或损失', isBold: true, inputs: [{key:'L22_C1'}] },
                { line: '23', text: '六、以前年度搬迁损失当期扣除金额', isBold: true, inputs: [{key:'L23_C1'}] },
                { line: '24', text: '七、纳税调整金额 (18-22-23)', isBold: true, inputs: [{key:'L24_C1', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105110) return;
            const t = db.A105110;
            t['L2_C1'] = (t['L3_C1'] || 0) + (t['L4_C1'] || 0) + (t['L5_C1'] || 0) + (t['L6_C1'] || 0) + (t['L7_C1'] || 0);
            t['L1_C1'] = t['L2_C1'] + (t['L8_C1'] || 0);
            t['L10_C1'] = (t['L11_C1'] || 0) + (t['L12_C1'] || 0) + (t['L13_C1'] || 0) + (t['L14_C1'] || 0) + (t['L15_C1'] || 0);
            t['L9_C1'] = t['L10_C1'] + (t['L16_C1'] || 0);
            t['L17_C1'] = t['L1_C1'] - t['L9_C1'];
            t['L18_C1'] = (t['L19_C1'] || 0) + (t['L20_C1'] || 0) + (t['L21_C1'] || 0);
            t['L24_C1'] = t['L18_C1'] - (t['L22_C1'] || 0) - (t['L23_C1'] || 0);
        }
    },

    // ==========================================
    // A105120 贷款损失准备金及纳税调整明细表
    // ==========================================
    A105120: {
        schema: {
            id: 'A105120',
            title: '贷款损失准备金及纳税调整明细表 (A105120)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '4%'}, {title: '项目', rowspan: 2, width: '18%'},
                    {title: '账载金额', colspan: 4}, {title: '税收金额', colspan: 6},
                    {title: '纳税调整\\n金额\\n11(4-3-10)', rowspan: 2, width: '6%'}
                ],
                [
                    {title: '上年末\\n贷款资\\n产余额\\n1', width: '6%'}, {title: '本年末\\n贷款资\\n产余额\\n2', width: '6%'}, {title: '上年末\\n贷款损\\n失准备\\n金余额\\n3', width: '6%'}, {title: '本年末\\n贷款损\\n失准备\\n金余额\\n4', width: '6%'},
                    {title: '上年末准予\\n提取贷款损\\n失准备金的\\n贷款资产余\\n额\\n5', width: '6%'}, {title: '本年末准予\\n提取贷款损\\n失准备金的\\n贷款资产余\\n额\\n6', width: '6%'}, {title: '计提\\n比例\\n7', width: '5%'},
                    {title: '按本年末准予提\\n取贷款损失准备\\n金的贷款资产余\\n额与计提比例计\\n算的准备金额\\n8(6×7)', width: '8%'},
                    {title: '截至上年末已\\n在税前扣除的\\n贷款损失准备\\n金的余额\\n9', width: '7%'}, {title: '准予当年\\n税前扣除\\n的贷款损\\n失准备金\\n10(4与8\\n的孰小值\\n-9)', width: '7%'}
                ]
            ],
            rows: [
                { line: '1', text: '一、金融企业 (2+3)', isBold: true, inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {isAsterisk:true}, {key:'L1_C8', isReadonly:true}, {key:'L1_C9'}, {key:'L1_C10', isReadonly:true}, {key:'L1_C11', isReadonly:true}] },
                { line: '2', text: '（一）贷款损失准备金', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L2_C5'}, {key:'L2_C6'}, {value:'1%', type:'label'}, {key:'L2_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '3', text: '（二）涉农和中小企业贷款损失准备金', indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L3_C5'}, {key:'L3_C6'}, {isAsterisk:true}, {key:'L3_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '4', text: '其中：关注类贷款', indent: 2, inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L4_C5'}, {key:'L4_C6'}, {value:'2%', type:'label'}, {key:'L4_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '5', text: '次级类贷款', indent: 3, inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L5_C5'}, {key:'L5_C6'}, {value:'25%', type:'label'}, {key:'L5_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '6', text: '可疑类贷款', indent: 3, inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L6_C5'}, {key:'L6_C6'}, {value:'50%', type:'label'}, {key:'L6_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '7', text: '损失类贷款', indent: 3, inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L7_C5'}, {key:'L7_C6'}, {value:'100%', type:'label'}, {key:'L7_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '8', text: '二、小额贷款公司', isBold: true, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {key:'L8_C6'}, {value:'1%', type:'label'}, {key:'L8_C8', isReadonly:true}, {key:'L8_C9'}, {key:'L8_C10', isReadonly:true}, {key:'L8_C11', isReadonly:true}] },
                { line: '9', text: '三、其他', isBold: true, inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3'}, {key:'L9_C4'}, {key:'L9_C5'}, {key:'L9_C6'}, {key:'L9_C7', type:'number'}, {key:'L9_C8', isReadonly:true}, {key:'L9_C9'}, {key:'L9_C10', isReadonly:true}, {key:'L9_C11', isReadonly:true}] },
                { line: '10', text: '合计 (1+8+9)', isBold: true, inputs: [{key:'L10_C1', isReadonly:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {isAsterisk:true}, {key:'L10_C8', isReadonly:true}, {key:'L10_C9', isReadonly:true}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105120) return;
            const t = db.A105120;
            
            // 按固定比例计算 8 = 6 * 比例
            t['L2_C8'] = (t['L2_C6'] || 0) * 0.01;
            t['L4_C8'] = (t['L4_C6'] || 0) * 0.02;
            t['L5_C8'] = (t['L5_C6'] || 0) * 0.25;
            t['L6_C8'] = (t['L6_C6'] || 0) * 0.50;
            t['L7_C8'] = (t['L7_C6'] || 0) * 1.00;
            t['L8_C8'] = (t['L8_C6'] || 0) * 0.01;
            t['L9_C8'] = (t['L9_C6'] || 0) * (t['L9_C7'] || 0);

            // 涉农贷款汇总 Row 3 = 4+5+6+7
            [1, 2, 5, 6, 8].forEach(c => {
                t[`L3_C${c}`] = (t[`L4_C${c}`] || 0) + (t[`L5_C${c}`] || 0) + (t[`L6_C${c}`] || 0) + (t[`L7_C${c}`] || 0);
            });

            // 金融企业汇总 Row 1 = 2+3
            [1, 2, 5, 6, 8].forEach(c => {
                t[`L1_C${c}`] = (t[`L2_C${c}`] || 0) + (t[`L3_C${c}`] || 0);
            });

            // 公式: 10 = Min(4, 8) - 9, 11 = 4 - 3 - 10
            [1, 8, 9].forEach(r => {
                const c4 = t[`L${r}_C4`] || 0;
                const c8 = t[`L${r}_C8`] || 0;
                const c9 = t[`L${r}_C9`] || 0;
                const c3 = t[`L${r}_C3`] || 0;
                t[`L${r}_C10`] = Math.min(c4, c8) - c9;
                t[`L${r}_C11`] = c4 - c3 - t[`L${r}_C10`];
            });

            // 整体合计 Row 10 = 1+8+9
            [1, 2, 3, 4, 5, 6, 8, 9, 10, 11].forEach(c => {
                t[`L10_C${c}`] = (t[`L1_C${c}`] || 0) + (t[`L8_C${c}`] || 0) + (t[`L9_C${c}`] || 0);
            });
        }
    },

    // ==========================================
    // A106000 企业所得税弥补亏损明细表
    // ==========================================
    A106000: {
        schema: {
            id: 'A106000',
            title: '企业所得税弥补亏损明细表 (A106000)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '4%'}, {title: '项目', rowspan: 2, width: '8%'},
                    {title: '年度', rowspan: 2, width: '6%'}, {title: '当年境\\n内所得\\n额\\n1', rowspan: 2, width: '8%'},
                    {title: '分立转出\\n的亏损额\\n2', rowspan: 2, width: '8%'},
                    {title: '合并、分立转入\\n的亏损额', colspan: 3},
                    {title: '弥补亏\\n损企业\\n类型\\n7', rowspan: 2, width: '8%'},
                    {title: '当年亏\\n损额\\n8', rowspan: 2, width: '8%'},
                    {title: '当年待\\n弥补的\\n亏损额\\n9', rowspan: 2, width: '8%'},
                    {title: '用本年度所得额弥补的\\n以前年度亏损额', colspan: 2},
                    {title: '当年可结转\\n以后年度弥\\n补的亏损额\\n12', rowspan: 2, width: '8%'}
                ],
                [
                    {title: '可弥补年\\n限5年\\n4', width: '6%'}, {title: '可弥补年\\n限8年\\n5', width: '6%'}, {title: '可弥补年\\n限10年\\n6', width: '6%'},
                    {title: '使用境内\\n所得弥补\\n10', width: '6%'}, {title: '使用境外\\n所得弥补\\n11', width: '6%'}
                ]
            ],
            rows: [
                ...[1,2,3,4,5,6,7,8,9,10].map(i => ({
                    line: `${i}`, text: `前${['十','九','八','七','六','五','四','三','二','一'][i-1]}年度`,
                    inputs: [
                        {key: `L${i}_C1`, type: 'text'}, {key: `L${i}_C2`}, {key: `L${i}_C3`},
                        {key: `L${i}_C4`}, {key: `L${i}_C5`}, {key: `L${i}_C6`},
                        {key: `L${i}_C7`, type: 'text'}, {key: `L${i}_C8`}, {key: `L${i}_C9`},
                        {key: `L${i}_C10`}, {key: `L${i}_C11`}, {key: `L${i}_C12`}
                    ]
                })),
                {
                    line: '11', text: '本年度',
                    inputs: [
                        {key: 'L11_C1', type: 'text'}, {key: 'L11_C2'}, {key: 'L11_C3'},
                        {key: 'L11_C4'}, {key: 'L11_C5'}, {key: 'L11_C6'},
                        {key: 'L11_C7', type: 'text'}, {key: 'L11_C8'}, {key: 'L11_C9'},
                        {key: 'L11_C10'}, {key: 'L11_C11'}, {key: 'L11_C12'}
                    ]
                },
                {
                    line: '12', text: '可结转以后年度弥补的亏损额合计', textColspan: 12,
                    inputs: [ {key: 'L12_C12', isReadonly: true} ]
                }
            ]
        },
        logic: (db) => {
            if (!db.A106000) return;
            const t = db.A106000;
            t['L12_C12'] = 0;
            for(let i=1; i<=11; i++) {
                t['L12_C12'] += (t[`L${i}_C12`] || 0);
            }
        }
    },

    // ==========================================
    // A107011 符合条件的居民企业之间的股息、红利等权益性投资收益优惠明细表
    // ==========================================
    A107011: {
        schema: {
            id: 'A107011',
            title: '符合条件的居民企业之间的股息、红利等权益性投资收益优惠明细表 (A107011)',
            headers: [
                [
                    {title: '行次', rowspan: 2, width: '4%'}, {title: '被投资\\n企业\\n1', rowspan: 2, width: '8%'},
                    {title: '被投资企\\n业统一社\\n会信用代\\n码（纳税\\n人识别号）\\n2', rowspan: 2, width: '8%'},
                    {title: '投资性\\n质\\n3', rowspan: 2, width: '5%'}, {title: '投资成\\n本\\n4', rowspan: 2, width: '5%'}, {title: '投资比\\n例\\n5', rowspan: 2, width: '5%'},
                    {title: '被投资企业利润分配\\n确认金额', colspan: 2}, {title: '被投资企业清算确认金额', colspan: 2},
                    {title: '应确认的\\n股息所得\\n10(8与9孰\\n小)', rowspan: 2, width: '5%'}, {title: '撤回或减少投资确认金额', colspan: 6},
                    {title: '合计\\n17(7+\\n10+16)', rowspan: 2, width: '6%'}
                ],
                [
                    {title: '被投资企\\n业做出利\\n润分配决\\n定时间\\n6', width: '5%'}, {title: '依决定归属\\n于本公司的\\n股息、红利\\n等权益性投\\n资收益金额\\n7', width: '5%'},
                    {title: '分得的\\n被投资\\n企业清\\n算剩余\\n资产\\n8', width: '5%'}, {title: '被清算企业\\n累计未分配\\n利润和累计\\n盈余公积应\\n享有部分\\n9', width: '5%'},
                    {title: '从被投资\\n企业撤回\\n或减少投\\n资取得的\\n资产\\n11', width: '5%'}, {title: '减少投\\n资比例\\n12', width: '5%'},
                    {title: '收回初始\\n投资成本\\n13(4×\\n12)', width: '5%'}, {title: '取得资产中\\n超过收回初\\n始投资成本\\n部分\\n14(11-13)', width: '5%'},
                    {title: '撤回或减少投\\n资应享有被投\\n资企业累计未\\n分配利润和累\\n计盈余公积\\n15', width: '5%'}, {title: '应确认\\n的股息\\n所得\\n16(14与\\n15孰小)', width: '5%'}
                ]
            ],
            rows: [
                ...[1,2,3,4,5,6,7].map(i => ({
                    line: `${i}`, inputs: [
                        {key:`L${i}_C1`, type:'text'}, {key:`L${i}_C2`, type:'text'}, {key:`L${i}_C3`, type:'text'},
                        {key:`L${i}_C4`}, {key:`L${i}_C5`}, {key:`L${i}_C6`, type:'text'}, {key:`L${i}_C7`},
                        {key:`L${i}_C8`}, {key:`L${i}_C9`}, {key:`L${i}_C10`, isReadonly:true},
                        {key:`L${i}_C11`}, {key:`L${i}_C12`}, {key:`L${i}_C13`},
                        {key:`L${i}_C14`, isReadonly:true}, {key:`L${i}_C15`}, {key:`L${i}_C16`, isReadonly:true},
                        {key:`L${i}_C17`, isReadonly:true}
                    ]
                })),
                { line: '8', text: '合计', isBold: true, textColspan: 6, inputs: [ {key:'L8_C7', isReadonly:true}, {key:'L8_C8', isReadonly:true}, {key:'L8_C9', isReadonly:true}, {key:'L8_C10', isReadonly:true}, {key:'L8_C11', isReadonly:true}, {key:'L8_C12', isReadonly:true}, {key:'L8_C13', isReadonly:true}, {key:'L8_C14', isReadonly:true}, {key:'L8_C15', isReadonly:true}, {key:'L8_C16', isReadonly:true}, {key:'L8_C17', isReadonly:true} ] },
                { line: '9', text: '其中：直接投资或非H股票投资', textColspan: 6, indent: 1, inputs: [ {key:'L9_C7'}, {key:'L9_C8'}, {key:'L9_C9'}, {key:'L9_C10', isReadonly:true}, {key:'L9_C11'}, {key:'L9_C12'}, {key:'L9_C13'}, {key:'L9_C14', isReadonly:true}, {key:'L9_C15'}, {key:'L9_C16', isReadonly:true}, {key:'L9_C17', isReadonly:true} ] },
                { line: '10', text: '股票投资—沪港通H股', textColspan: 6, indent: 2, inputs: [ {key:'L10_C7'}, {key:'L10_C8'}, {key:'L10_C9'}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11'}, {key:'L10_C12'}, {key:'L10_C13'}, {key:'L10_C14', isReadonly:true}, {key:'L10_C15'}, {key:'L10_C16', isReadonly:true}, {key:'L10_C17', isReadonly:true} ] },
                { line: '11', text: '股票投资—深港通H股', textColspan: 6, indent: 2, inputs: [ {key:'L11_C7'}, {key:'L11_C8'}, {key:'L11_C9'}, {key:'L11_C10', isReadonly:true}, {key:'L11_C11'}, {key:'L11_C12'}, {key:'L11_C13'}, {key:'L11_C14', isReadonly:true}, {key:'L11_C15'}, {key:'L11_C16', isReadonly:true}, {key:'L11_C17', isReadonly:true} ] },
                { line: '12', text: '创新企业CDR', textColspan: 6, indent: 2, inputs: [ {key:'L12_C7'}, {key:'L12_C8'}, {key:'L12_C9'}, {key:'L12_C10', isReadonly:true}, {key:'L12_C11'}, {key:'L12_C12'}, {key:'L12_C13'}, {key:'L12_C14', isReadonly:true}, {key:'L12_C15'}, {key:'L12_C16', isReadonly:true}, {key:'L12_C17', isReadonly:true} ] },
                { line: '13', text: '永续债', textColspan: 6, indent: 2, inputs: [ {key:'L13_C7'}, {key:'L13_C8'}, {key:'L13_C9'}, {key:'L13_C10', isReadonly:true}, {key:'L13_C11'}, {key:'L13_C12'}, {key:'L13_C13'}, {key:'L13_C14', isReadonly:true}, {key:'L13_C15'}, {key:'L13_C16', isReadonly:true}, {key:'L13_C17', isReadonly:true} ] }
            ]
        },
        logic: (db) => {
            if (!db.A107011) return;
            const t = db.A107011;
            const calcRows = [1,2,3,4,5,6,7, 9,10,11,12,13];
            calcRows.forEach(r => {
                t[`L${r}_C10`] = Math.min((t[`L${r}_C8`] || 0), (t[`L${r}_C9`] || 0));
                t[`L${r}_C14`] = (t[`L${r}_C11`] || 0) - (t[`L${r}_C13`] || 0);
                t[`L${r}_C16`] = Math.min((t[`L${r}_C14`] || 0), (t[`L${r}_C15`] || 0));
                t[`L${r}_C17`] = (t[`L${r}_C7`] || 0) + (t[`L${r}_C10`] || 0) + (t[`L${r}_C16`] || 0);
            });

            // 汇总计算第 8 行 (合计)
            [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].forEach(c => {
                t[`L8_C${c}`] = [1,2,3,4,5,6,7].reduce((sum, r) => sum + (t[`L${r}_C${c}`] || 0), 0);
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
            columns: [
                { title: '行次', width: '10%' },
                { title: '项目', width: '65%' },
                { title: '金额（或录入）', width: '25%' }
            ],
            rows: [
                { line: '1', text: '本年可享受研发费用加计扣除项目数量', inputs: [{key:'L1_C1'}] },
                { line: '2', text: '一、自主研发、合作研发、集中研发 (3+7+16+19+23+28)', isBold: true, inputs: [{key:'L2_C1', isReadonly:true}] },
                { line: '3', text: '（一）人员人工费用 (4+5+6)', indent: 1, inputs: [{key:'L3_C1', isReadonly:true}] },
                { line: '4', text: '1.直接从事研发活动人员工资薪金', indent: 2, inputs: [{key:'L4_C1'}] },
                { line: '5', text: '2.直接从事研发活动人员五险一金', indent: 2, inputs: [{key:'L5_C1'}] },
                { line: '6', text: '3.外聘研发人员的劳务费用', indent: 2, inputs: [{key:'L6_C1'}] },
                { line: '7', text: '（二）直接投入费用 (8+9+10+11+12+13+14+15)', indent: 1, inputs: [{key:'L7_C1', isReadonly:true}] },
                { line: '8', text: '1.研发活动直接消耗材料费用', indent: 2, inputs: [{key:'L8_C1'}] },
                { line: '9', text: '2.研发活动直接消耗燃料费用', indent: 2, inputs: [{key:'L9_C1'}] },
                { line: '10', text: '3.研发活动直接消耗动力费用', indent: 2, inputs: [{key:'L10_C1'}] },
                { line: '11', text: '4.用于中间试验和产品试制的模具、工艺装备开发及制造费', indent: 2, inputs: [{key:'L11_C1'}] },
                { line: '12', text: '5.用于不构成固定资产的样品、样机及一般测试手段购置费', indent: 2, inputs: [{key:'L12_C1'}] },
                { line: '13', text: '6.用于试制产品的检验费', indent: 2, inputs: [{key:'L13_C1'}] },
                { line: '14', text: '7.用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用', indent: 2, inputs: [{key:'L14_C1'}] },
                { line: '15', text: '8.通过经营租赁方式租入的用于研发活动的仪器、设备租赁费', indent: 2, inputs: [{key:'L15_C1'}] },
                { line: '16', text: '（三）折旧费用 (17+18)', indent: 1, inputs: [{key:'L16_C1', isReadonly:true}] },
                { line: '17', text: '1.用于研发活动的仪器的折旧费', indent: 2, inputs: [{key:'L17_C1'}] },
                { line: '18', text: '2.用于研发活动的设备的折旧费', indent: 2, inputs: [{key:'L18_C1'}] },
                { line: '19', text: '（四）无形资产摊销 (20+21+22)', indent: 1, inputs: [{key:'L19_C1', isReadonly:true}] },
                { line: '20', text: '1.用于研发活动的软件的摊销费用', indent: 2, inputs: [{key:'L20_C1'}] },
                { line: '21', text: '2.用于研发活动的专利权的摊销费用', indent: 2, inputs: [{key:'L21_C1'}] },
                { line: '22', text: '3.用于研发活动的非专利技术（包括许可证、专有技术、设计和计算方法等）的摊销费用', indent: 2, inputs: [{key:'L22_C1'}] },
                { line: '23', text: '（五）新产品设计费等 (24+25+26+27)', indent: 1, inputs: [{key:'L23_C1', isReadonly:true}] },
                { line: '24', text: '1.新产品设计费', indent: 2, inputs: [{key:'L24_C1'}] },
                { line: '25', text: '2.新工艺规程制定费', indent: 2, inputs: [{key:'L25_C1'}] },
                { line: '26', text: '3.新药研制的临床试验费', indent: 2, inputs: [{key:'L26_C1'}] },
                { line: '27', text: '4.勘探开发技术的现场试验费', indent: 2, inputs: [{key:'L27_C1'}] },
                { line: '28', text: '（六）其他相关费用 (29+30+31+32+33)', indent: 1, inputs: [{key:'L28_C1', isReadonly:true}] },
                { line: '29', text: '1.技术图书资料费、资料翻译费、专家咨询费、高新科技研发保险费', indent: 2, inputs: [{key:'L29_C1'}] },
                { line: '30', text: '2.研发成果的检索、分析、评议、论证、鉴定、评审、评估、验收费用', indent: 2, inputs: [{key:'L30_C1'}] },
                { line: '31', text: '3.知识产权的申请费、注册费、代理费', indent: 2, inputs: [{key:'L31_C1'}] },
                { line: '32', text: '4.职工福利费、补充养老保险费、补充医疗保险费', indent: 2, inputs: [{key:'L32_C1'}] },
                { line: '33', text: '5.差旅费、会议费', indent: 2, inputs: [{key:'L33_C1'}] },
                { line: '34', text: '（七）经限额调整后的其他相关费用', indent: 1, inputs: [{key:'L34_C1'}] },
                { line: '35', text: '二、委托研发 (36+37+39)', isBold: true, inputs: [{key:'L35_C1', isReadonly:true}] },
                { line: '36', text: '（一）委托境内机构或个人进行研发活动所发生的费用', indent: 1, inputs: [{key:'L36_C1'}] },
                { line: '37', text: '（二）委托境外机构进行研发活动发生的费用', indent: 1, inputs: [{key:'L37_C1'}] },
                { line: '38', text: '其中：允许加计扣除的委托境外机构进行研发活动发生的费用', indent: 2, inputs: [{key:'L38_C1'}] },
                { line: '39', text: '（三）委托境外个人进行研发活动发生的费用', indent: 1, inputs: [{key:'L39_C1'}] },
                { line: '40', text: '三、年度研发费用小计 (2+36×80%+38)', isBold: true, inputs: [{key:'L40_C1', isReadonly:true}] },
                { line: '41', text: '（一）本年费用化金额', indent: 1, inputs: [{key:'L41_C1'}] },
                { line: '42', text: '（二）本年资本化金额', indent: 1, inputs: [{key:'L42_C1'}] },
                { line: '43', text: '四、本年形成无形资产摊销额', isBold: true, inputs: [{key:'L43_C1'}] },
                { line: '44', text: '五、以前年度形成无形资产本年摊销额', isBold: true, inputs: [{key:'L44_C1'}] },
                { line: '45', text: '六、允许扣除的研发费用合计 (41+43+44)', isBold: true, inputs: [{key:'L45_C1', isReadonly:true}] },
                { line: '46', text: '减：特殊收入部分', indent: 1, inputs: [{key:'L46_C1'}] },
                { line: '47', text: '七、允许扣除的研发费用抵减特殊收入后的金额 (45-46)', isBold: true, inputs: [{key:'L47_C1', isReadonly:true}] },
                { line: '48', text: '减：当年销售研发活动直接形成产品（包括组成部分）对应的材料部分', indent: 1, inputs: [{key:'L48_C1'}] },
                { line: '49', text: '减：以前年度销售研发活动直接形成产品（包括组成部分）对应材料部分结转金额', indent: 1, inputs: [{key:'L49_C1'}] },
                { line: '50', text: '八、加计扣除比例及计算方法', isBold: true, inputs: [{key:'L50_C1'}] },
                { line: '51', text: '九、本年研发费用加计扣除总额 (47-48-49)×50', isBold: true, inputs: [{key:'L51_C1', isReadonly:true}] },
                { line: '52', text: '十、销售研发活动直接形成产品（包括组成部分）对应材料部分结转以后年度扣减金额', isBold: true, inputs: [{key:'L52_C1', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A107012) return;
            const t = db.A107012;
            const sumRows = (target, sources) => {
                t[`L${target}_C1`] = sources.reduce((acc, r) => acc + (t[`L${r}_C1`] || 0), 0);
            };

            sumRows(3, [4,5,6]);
            sumRows(7, [8,9,10,11,12,13,14,15]);
            sumRows(16, [17,18]);
            sumRows(19, [20,21,22]);
            sumRows(23, [24,25,26,27]);
            sumRows(28, [29,30,31,32,33]);
            sumRows(2, [3,7,16,19,23,28]);
            sumRows(35, [36,37,39]);
            
            t['L40_C1'] = (t['L2_C1'] || 0) + (t['L36_C1'] || 0) * 0.8 + (t['L38_C1'] || 0);
            sumRows(45, [41,43,44]);
            t['L47_C1'] = (t['L45_C1'] || 0) - (t['L46_C1'] || 0);
            t['L51_C1'] = ((t['L47_C1'] || 0) - (t['L48_C1'] || 0) - (t['L49_C1'] || 0)) * (t['L50_C1'] || 0); 
            
            const diff = (t['L47_C1'] || 0) - (t['L48_C1'] || 0) - (t['L49_C1'] || 0);
            t['L52_C1'] = diff >= 0 ? 0 : Math.abs(diff);
        }
    }
};