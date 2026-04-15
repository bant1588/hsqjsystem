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
                { line: '3', text: '（二）飞机、火车、轮船、机器、机械和其他生产设备', indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L3_C8'}, {key:'L3_C9', isReadonly:true}] },
                { line: '4', text: '（三）与生产经营活动有关的器具、工具、家具等', indent: 1, inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L4_C8'}, {key:'L4_C9', isReadonly:true}] },
                { line: '5', text: '（四）飞机、火车、轮船以外的运输工具', indent: 1, inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L5_C8'}, {key:'L5_C9', isReadonly:true}] },
                { line: '6', text: '（五）电子设备', indent: 1, inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {key:'L6_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L6_C8'}, {key:'L6_C9', isReadonly:true}] },
                { line: '7', text: '（六）其他', indent: 1, inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3'}, {key:'L7_C4'}, {key:'L7_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L7_C8'}, {key:'L7_C9', isReadonly:true}] },
                { line: '8', text: '二、生产性生物资产 (9+10)', isBold: true, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L8_C8'}, {key:'L8_C9', isReadonly:true}] },
                { line: '9', text: '（一）林木类', indent: 1, inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3'}, {key:'L9_C4'}, {key:'L9_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L9_C8'}, {key:'L9_C9', isReadonly:true}] },
                { line: '10', text: '（二）畜类', indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {key:'L10_C4'}, {key:'L10_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L10_C8'}, {key:'L10_C9', isReadonly:true}] },
                { line: '11', text: '三、无形资产 (12+13+14+15+16+17+18+19)', isBold: true, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}, {key:'L11_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L11_C8'}, {key:'L11_C9', isReadonly:true}] },
                { line: '12', text: '（一）专利权', indent: 1, inputs: [{key:'L12_C1'}, {key:'L12_C2'}, {key:'L12_C3'}, {key:'L12_C4'}, {key:'L12_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L12_C8'}, {key:'L12_C9', isReadonly:true}] },
                { line: '13', text: '（二）商标权', indent: 1, inputs: [{key:'L13_C1'}, {key:'L13_C2'}, {key:'L13_C3'}, {key:'L13_C4'}, {key:'L13_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L13_C8'}, {key:'L13_C9', isReadonly:true}] },
                { line: '14', text: '（三）著作权', indent: 1, inputs: [{key:'L14_C1'}, {key:'L14_C2'}, {key:'L14_C3'}, {key:'L14_C4'}, {key:'L14_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L14_C8'}, {key:'L14_C9', isReadonly:true}] },
                { line: '15', text: '（四）土地使用权', indent: 1, inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3'}, {key:'L15_C4'}, {key:'L15_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L15_C8'}, {key:'L15_C9', isReadonly:true}] },
                { line: '16', text: '（五）非专利技术', indent: 1, inputs: [{key:'L16_C1'}, {key:'L16_C2'}, {key:'L16_C3'}, {key:'L16_C4'}, {key:'L16_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L16_C8'}, {key:'L16_C9', isReadonly:true}] },
                { line: '17', text: '（六）特许权使用费', indent: 1, inputs: [{key:'L17_C1'}, {key:'L17_C2'}, {key:'L17_C3'}, {key:'L17_C4'}, {key:'L17_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L17_C8'}, {key:'L17_C9', isReadonly:true}] },
                { line: '18', text: '（七）软件', indent: 1, inputs: [{key:'L18_C1'}, {key:'L18_C2'}, {key:'L18_C3'}, {key:'L18_C4'}, {key:'L18_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L18_C8'}, {key:'L18_C9', isReadonly:true}] },
                { line: '19', text: '（八）其他', indent: 1, inputs: [{key:'L19_C1'}, {key:'L19_C2'}, {key:'L19_C3'}, {key:'L19_C4'}, {key:'L19_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L19_C8'}, {key:'L19_C9', isReadonly:true}] },
                { line: '20', text: '四、长期待摊费用 (21+22+23+24+25)', isBold: true, inputs: [{key:'L20_C1'}, {key:'L20_C2'}, {key:'L20_C3'}, {key:'L20_C4'}, {key:'L20_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L20_C8'}, {key:'L20_C9', isReadonly:true}] },
                { line: '21', text: '（一）已足额提取折旧的固定资产的改建支出', indent: 1, inputs: [{key:'L21_C1'}, {key:'L21_C2'}, {key:'L21_C3'}, {key:'L21_C4'}, {key:'L21_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L21_C8'}, {key:'L21_C9', isReadonly:true}] },
                { line: '22', text: '（二）租入固定资产的改建支出', indent: 1, inputs: [{key:'L22_C1'}, {key:'L22_C2'}, {key:'L22_C3'}, {key:'L22_C4'}, {key:'L22_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L22_C8'}, {key:'L22_C9', isReadonly:true}] },
                { line: '23', text: '（三）固定资产的大修理支出', indent: 1, inputs: [{key:'L23_C1'}, {key:'L23_C2'}, {key:'L23_C3'}, {key:'L23_C4'}, {key:'L23_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L23_C8'}, {key:'L23_C9', isReadonly:true}] },
                { line: '24', text: '（四）开办费', indent: 1, inputs: [{key:'L24_C1'}, {key:'L24_C2'}, {key:'L24_C3'}, {key:'L24_C4'}, {key:'L24_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L24_C8'}, {key:'L24_C9', isReadonly:true}] },
                { line: '25', text: '（五）其他', indent: 1, inputs: [{key:'L25_C1'}, {key:'L25_C2'}, {key:'L25_C3'}, {key:'L25_C4'}, {key:'L25_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L25_C8'}, {key:'L25_C9', isReadonly:true}] },
                { line: '26', text: '五、油气勘探投资', isBold: true, inputs: [{key:'L26_C1'}, {key:'L26_C2'}, {key:'L26_C3'}, {key:'L26_C4'}, {key:'L26_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L26_C8'}, {key:'L26_C9', isReadonly:true}] },
                { line: '27', text: '六、油气开发投资', isBold: true, inputs: [{key:'L27_C1'}, {key:'L27_C2'}, {key:'L27_C3'}, {key:'L27_C4'}, {key:'L27_C5'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L27_C8'}, {key:'L27_C9', isReadonly:true}] },
                { line: '28', text: '（一）加速折旧（摊销）', inputs: [{},{},{},{},{},{},{},{}, {key:'L28_C9'}] },
                { line: '28.1', text: '（填写优惠事项名称）', indent: 1, inputs: [{},{},{},{},{},{},{},{}, {key:'L28_1_C9'}] },
                { line: '28.2', text: '（填写优惠事项名称）', indent: 1, inputs: [{},{},{},{},{},{},{},{}, {key:'L28_2_C9'}] },
                { line: '29', text: '（二）一次性扣除（摊销）', inputs: [{},{},{},{},{},{},{},{}, {key:'L29_C9'}] },
                { line: '29.1', text: '（填写优惠事项名称）', indent: 1, inputs: [{},{},{},{},{},{},{},{}, {key:'L29_1_C9'}] },
                { line: '29.2', text: '（填写优惠事项名称）', indent: 1, inputs: [{},{},{},{},{},{},{},{}, {key:'L29_2_C9'}] },
                { line: '30', text: '合计', isBold: true, inputs: [{key:'L30_C1', isReadonly:true}, {key:'L30_C2', isReadonly:true}, {key:'L30_C3', isReadonly:true}, {key:'L30_C4', isReadonly:true}, {key:'L30_C5', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L30_C8', isReadonly:true}, {key:'L30_C9', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105080) return;
            const t = db.A105080;
            for (let r = 1; r <= 27; r++) {
                if(t[`L${r}_C2`] !== undefined || t[`L${r}_C5`] !== undefined) {
                    t[`L${r}_C9`] = (t[`L${r}_C2`] || 0) - (t[`L${r}_C5`] || 0);
                }
            }
            const sumCols = [1, 2, 3, 4, 5, 8, 9];
            sumCols.forEach(c => {
                t[`L1_C${c}`] = (t[`L2_C${c}`]||0) + (t[`L3_C${c}`]||0) + (t[`L4_C${c}`]||0) + (t[`L5_C${c}`]||0) + (t[`L6_C${c}`]||0) + (t[`L7_C${c}`]||0);
                t[`L8_C${c}`]  = (t[`L9_C${c}`]||0) + (t[`L10_C${c}`]||0);
                t[`L11_C${c}`] = (t[`L12_C${c}`]||0) + (t[`L13_C${c}`]||0) + (t[`L14_C${c}`]||0) + (t[`L15_C${c}`]||0) + (t[`L16_C${c}`]||0) + (t[`L17_C${c}`]||0) + (t[`L18_C${c}`]||0) + (t[`L19_C${c}`]||0);
                t[`L20_C${c}`] = (t[`L21_C${c}`]||0) + (t[`L22_C${c}`]||0) + (t[`L23_C${c}`]||0) + (t[`L24_C${c}`]||0) + (t[`L25_C${c}`]||0);
                t[`L30_C${c}`] = (t[`L1_C${c}`]||0) + (t[`L8_C${c}`]||0) + (t[`L11_C${c}`]||0) + (t[`L20_C${c}`]||0) + (t[`L26_C${c}`]||0) + (t[`L27_C${c}`]||0);
            });
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
                {title:'行次', width:'4%'}, {title:'项 目', width:'30%'},
                {title:'资产损失直接计入本年损益金额(1)', width:'11%'}, {title:'资产损失准备金核销金额(2)', width:'11%'},
                {title:'资产处置收入(3)', width:'11%'}, {title:'赔偿收入(4)', width:'11%'},
                {title:'资产计税基础(5)', width:'11%'}, {title:'资产损失的税收金额(6=5-3-4)', width:'11%'}, {title:'纳税调整金额(7)', width:'10%'}
            ],
            rows: [
                { line: '1', text: '一、现金及银行存款损失', inputs: [{key:'L1_C1'}, {isAsterisk:true}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6', isReadonly:true}, {key:'L1_C7', isReadonly:true}] },
                { line: '2', text: '二、应收及预付款项坏账损失', inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6', isReadonly:true}, {key:'L2_C7', isReadonly:true}] },
                { line: '3', text: '其中：逾期三年以上的应收款项损失', indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6', isReadonly:true}, {key:'L3_C7', isReadonly:true}] },
                { line: '4', text: '逾期一年以上的小额应收款项损失', indent: 1, inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6', isReadonly:true}, {key:'L4_C7', isReadonly:true}] },
                { line: '5', text: '三、存货损失', inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6', isReadonly:true}, {key:'L5_C7', isReadonly:true}] },
                { line: '6', text: '其中：存货盘亏、报废、毁损、变质或被盗损失', indent: 1, inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {key:'L6_C5'}, {key:'L6_C6', isReadonly:true}, {key:'L6_C7', isReadonly:true}] },
                { line: '7', text: '四、固定资产损失', inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3'}, {key:'L7_C4'}, {key:'L7_C5'}, {key:'L7_C6', isReadonly:true}, {key:'L7_C7', isReadonly:true}] },
                { line: '8', text: '其中：固定资产盘亏、丢失、报废、毁损或被盗损失', indent: 1, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {key:'L8_C6', isReadonly:true}, {key:'L8_C7', isReadonly:true}] },
                { line: '9', text: '五、无形资产损失', inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3'}, {key:'L9_C4'}, {key:'L9_C5'}, {key:'L9_C6', isReadonly:true}, {key:'L9_C7', isReadonly:true}] },
                { line: '10', text: '其中：无形资产转让损失', indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {key:'L10_C4'}, {key:'L10_C5'}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}] },
                { line: '11', text: '无形资产被替代或超过法律保护期限形成的损失', indent: 1, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}, {key:'L11_C5'}, {key:'L11_C6', isReadonly:true}, {key:'L11_C7', isReadonly:true}] },
                { line: '12', text: '六、在建工程损失', inputs: [{key:'L12_C1'}, {isAsterisk:true}, {key:'L12_C3'}, {key:'L12_C4'}, {key:'L12_C5'}, {key:'L12_C6', isReadonly:true}, {key:'L12_C7', isReadonly:true}] },
                { line: '13', text: '其中：在建工程停建、报废损失', indent: 1, inputs: [{key:'L13_C1'}, {isAsterisk:true}, {key:'L13_C3'}, {key:'L13_C4'}, {key:'L13_C5'}, {key:'L13_C6', isReadonly:true}, {key:'L13_C7', isReadonly:true}] },
                { line: '14', text: '七、生产性生物资产损失', inputs: [{key:'L14_C1'}, {key:'L14_C2'}, {key:'L14_C3'}, {key:'L14_C4'}, {key:'L14_C5'}, {key:'L14_C6', isReadonly:true}, {key:'L14_C7', isReadonly:true}] },
                { line: '15', text: '其中：生产性生物资产盘亏、非正常死亡、被盗、丢失等产生的损失', indent: 1, inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3'}, {key:'L15_C4'}, {key:'L15_C5'}, {key:'L15_C6', isReadonly:true}, {key:'L15_C7', isReadonly:true}] },
                { line: '16', text: '八、债权性投资损失 (17+23)', isBold: true, inputs: [{key:'L16_C1', isReadonly:true}, {key:'L16_C2', isReadonly:true}, {key:'L16_C3', isReadonly:true}, {key:'L16_C4', isReadonly:true}, {key:'L16_C5', isReadonly:true}, {key:'L16_C6', isReadonly:true}, {key:'L16_C7', isReadonly:true}] },
                { line: '17', text: '（一）金融企业债权性投资损失 (18+22)', indent: 1, inputs: [{key:'L17_C1', isReadonly:true}, {key:'L17_C2', isReadonly:true}, {key:'L17_C3', isReadonly:true}, {key:'L17_C4', isReadonly:true}, {key:'L17_C5', isReadonly:true}, {key:'L17_C6', isReadonly:true}, {key:'L17_C7', isReadonly:true}] },
                { line: '18', text: '1. 贷款损失', indent: 2, inputs: [{key:'L18_C1'}, {key:'L18_C2'}, {key:'L18_C3'}, {key:'L18_C4'}, {key:'L18_C5'}, {key:'L18_C6', isReadonly:true}, {key:'L18_C7', isReadonly:true}] },
                { line: '19', text: '其中：符合条件的涉农和中小企业贷款损失', indent: 3, inputs: [{key:'L19_C1'}, {key:'L19_C2'}, {key:'L19_C3'}, {key:'L19_C4'}, {key:'L19_C5'}, {key:'L19_C6', isReadonly:true}, {key:'L19_C7', isReadonly:true}] },
                { line: '20', text: '其中：单户贷款余额 300 万（含）以下的贷款损失', indent: 4, inputs: [{key:'L20_C1'}, {key:'L20_C2'}, {key:'L20_C3'}, {key:'L20_C4'}, {key:'L20_C5'}, {key:'L20_C6', isReadonly:true}, {key:'L20_C7', isReadonly:true}] },
                { line: '21', text: '单户贷款余额 300 万元至 1000 万元（含）的贷款损失', indent: 3, inputs: [{key:'L21_C1'}, {key:'L21_C2'}, {key:'L21_C3'}, {key:'L21_C4'}, {key:'L21_C5'}, {key:'L21_C6', isReadonly:true}, {key:'L21_C7', isReadonly:true}] },
                { line: '22', text: '2. 其他债权性投资损失', indent: 2, inputs: [{key:'L22_C1'}, {key:'L22_C2'}, {key:'L22_C3'}, {key:'L22_C4'}, {key:'L22_C5'}, {key:'L22_C6', isReadonly:true}, {key:'L22_C7', isReadonly:true}] },
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
            for (let c = 1; c <= 7; c++) {
                t[`L17_C${c}`] = (t[`L18_C${c}`] || 0) + (t[`L22_C${c}`] || 0);
                t[`L16_C${c}`] = (t[`L17_C${c}`] || 0) + (t[`L23_C${c}`] || 0);
                t[`L29_C${c}`] = (t[`L1_C${c}`]||0) + (t[`L2_C${c}`]||0) + (t[`L5_C${c}`]||0) + (t[`L7_C${c}`]||0) + (t[`L9_C${c}`]||0) + (t[`L12_C${c}`]||0) + (t[`L14_C${c}`]||0) + (t[`L16_C${c}`]||0) + (t[`L24_C${c}`]||0) + (t[`L26_C${c}`]||0) + (t[`L27_C${c}`]||0) + (t[`L28_C${c}`]||0);
            }
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
            columns: [
                {title:'行次', width:'6%'}, {title:'项 目', width:'24%'},
                {title:'一般-账载(1)', width:'10%'}, {title:'一般-税收(2)', width:'10%'}, {title:'一般-调整(3=2-1)', width:'10%'},
                {title:'特殊-账载(4)', width:'10%'}, {title:'特殊-税收(5)', width:'10%'}, {title:'特殊-调整(6=5-4)', width:'10%'}, {title:'总调整金额(7=3+6)', width:'10%'}
            ],
            rows: [
                { line: '1', text: '一、债务重组', inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3', isReadonly:true}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6', isReadonly:true}, {key:'L1_C7', isReadonly:true}] },
                { line: '2', text: '其中：以非货币性资产清偿债务', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3', isReadonly:true}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6', isReadonly:true}, {key:'L2_C7', isReadonly:true}] },
                { line: '3', text: '债转股', indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3', isReadonly:true}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6', isReadonly:true}, {key:'L3_C7', isReadonly:true}] },
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
                { line: '15', text: '九、基础设施领域不动产投资信托基金（REITs）', inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3', isReadonly:true}, {key:'L15_C4'}, {key:'L15_C5'}, {key:'L15_C6', isReadonly:true}, {key:'L15_C7', isReadonly:true}] },
                { line: '15.1', text: '（一）设立基础设施REITs前', indent: 1, inputs: [{key:'L15_1_C1'}, {key:'L15_1_C2'}, {key:'L15_1_C3', isReadonly:true}, {key:'L15_1_C4'}, {key:'L15_1_C5'}, {key:'L15_1_C6', isReadonly:true}, {key:'L15_1_C7', isReadonly:true}] },
                { line: '15.2', text: '（二）设立基础设施REITs阶段', indent: 1, inputs: [{key:'L15_2_C1'}, {key:'L15_2_C2'}, {key:'L15_2_C3', isReadonly:true}, {key:'L15_2_C4'}, {key:'L15_2_C5'}, {key:'L15_2_C6', isReadonly:true}, {key:'L15_2_C7', isReadonly:true}] },
                { line: '16', text: '十、其他', inputs: [{key:'L16_C1'}, {key:'L16_C2'}, {key:'L16_C3', isReadonly:true}, {key:'L16_C4'}, {key:'L16_C5'}, {key:'L16_C6', isReadonly:true}, {key:'L16_C7', isReadonly:true}] },
                { line: '17', text: '合计 (1+4+6+8+11+12+13+14+15+16)', isBold: true, inputs: [{key:'L17_C1', isReadonly:true}, {key:'L17_C2', isReadonly:true}, {key:'L17_C3', isReadonly:true}, {key:'L17_C4', isReadonly:true}, {key:'L17_C5', isReadonly:true}, {key:'L17_C6', isReadonly:true}, {key:'L17_C7', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105100) return;
            const t = db.A105100;
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '15_1', '15_2', '16', '17'].forEach(r => {
                t[`L${r}_C3`] = (t[`L${r}_C2`] || 0) - (t[`L${r}_C1`] || 0);
                t[`L${r}_C6`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C4`] || 0);
                t[`L${r}_C7`] = t[`L${r}_C3`] + t[`L${r}_C6`];
            });
            for (let c = 1; c <= 7; c++) {
                t[`L8_C${c}`] = (t[`L9_C${c}`] || 0) + (t[`L10_C${c}`] || 0);
                t[`L17_C${c}`] = (t[`L1_C${c}`]||0) + (t[`L4_C${c}`]||0) + (t[`L6_C${c}`]||0) + (t[`L8_C${c}`]||0) + (t[`L11_C${c}`]||0) + (t[`L12_C${c}`]||0) + (t[`L13_C${c}`]||0) + (t[`L14_C${c}`]||0) + (t[`L15_C${c}`]||0) + (t[`L16_C${c}`]||0);
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
                { line: '2', text: '（一）搬迁补偿收入 (3+4+5+6+7)', key: 'L2', indent: 1, isReadonly: true },
                { line: '3', text: '1. 对被征用资产价值的补偿', key: 'L3', indent: 2 },
                { line: '4', text: '2. 因搬迁、安置而给予的补偿', key: 'L4', indent: 2 },
                { line: '5', text: '3. 对停产停业形成的损失而给予的补偿', key: 'L5', indent: 2 },
                { line: '6', text: '4. 资产搬迁过程中遭到毁损而取得的保险赔款', key: 'L6', indent: 2 },
                { line: '7', text: '5. 其他补偿收入', key: 'L7', indent: 2 },
                { line: '8', text: '（二）搬迁资产处置收入', key: 'L8', indent: 1 },
                { line: '9', text: '二、搬迁支出 (10+16)', key: 'L9', isBold: true, isReadonly: true },
                { line: '10', text: '（一）搬迁费用支出 (11+12+13+14+15)', key: 'L10', indent: 1, isReadonly: true },
                { line: '11', text: '1. 安置职工实际发生的费用', key: 'L11', indent: 2 },
                { line: '12', text: '2. 停工期间支付给职工的工资及福利费', key: 'L12', indent: 2 },
                { line: '13', text: '3. 临时存放搬迁资产而发生的费用', key: 'L13', indent: 2 },
                { line: '14', text: '4. 各类资产搬迁安装费用', key: 'L14', indent: 2 },
                { line: '15', text: '5. 其他与搬迁相关的费用', key: 'L15', indent: 2 },
                { line: '16', text: '（二）搬迁资产处置支出', key: 'L16', indent: 1 },
                { line: '17', text: '三、搬迁所得或损失 (1-9)', key: 'L17', isBold: true, isReadonly: true },
                { line: '18', text: '四、应计入本年应纳税所得额的搬迁所得或损失 (19+20+21)', key: 'L18', isBold: true, isReadonly: true },
                { line: '19', text: '其中：搬迁所得', key: 'L19', indent: 1 },
                { line: '20', text: '搬迁损失一次性扣除', key: 'L20', indent: 1 },
                { line: '21', text: '搬迁损失分期扣除', key: 'L21', indent: 1 },
                { line: '22', text: '五、计入当期损益的搬迁收益或损失', key: 'L22', isBold: true },
                { line: '23', text: '六、以前年度搬迁损失当期扣除金额', key: 'L23', isBold: true },
                { line: '24', text: '七、纳税调整金额 (18-22-23)', key: 'L24', isBold: true, isReadonly: true }
            ]
        },
        logic: (db) => {
            if (!db.A105110) return;
            const t = db.A105110;
            t.L2 = (t.L3 || 0) + (t.L4 || 0) + (t.L5 || 0) + (t.L6 || 0) + (t.L7 || 0);
            t.L1 = t.L2 + (t.L8 || 0);
            t.L10 = (t.L11 || 0) + (t.L12 || 0) + (t.L13 || 0) + (t.L14 || 0) + (t.L15 || 0);
            t.L9 = t.L10 + (t.L16 || 0);
            t.L17 = t.L1 - t.L9;
            t.L18 = (t.L19 || 0) + (t.L20 || 0) + (t.L21 || 0);
            t.L24 = t.L18 - (t.L22 || 0) - (t.L23 || 0);
        }
    },

    // ==========================================
    // A105120 贷款损失准备金及纳税调整明细表
    // ==========================================
    A105120: {
        schema: {
            id: 'A105120',
            title: '贷款损失准备金及纳税调整明细表 (A105120)',
            columns: [
                {title:'行次', width:'4%'}, {title:'项目', width:'16%'},
                {title:'上年末贷款余额(1)', width:'8%'}, {title:'本年末贷款余额(2)', width:'8%'},
                {title:'上年末准备金余额(3)', width:'8%'}, {title:'本年末准备金余额(4)', width:'8%'},
                {title:'上年准予提取的资产(5)', width:'8%'}, {title:'本年准予提取的资产(6)', width:'8%'},
                {title:'计提比例(7)', width:'6%'}, {title:'计算的准备金(8=6*7)', width:'8%'},
                {title:'上年末已扣除(9)', width:'8%'}, {title:'准予本年扣除(10)', width:'10%'}, {title:'纳税调整(11)', width:'10%'}
            ],
            rows: [
                { line: '1', text: '一、金融企业 (2+3)', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '2', text: '（一）贷款损失准备金', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '3', text: '（二）涉农和中小企业贷款损失准备金', indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L3_C5'}, {key:'L3_C6'}, {key:'L3_C7'}, {key:'L3_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '4', text: '其中：关注类贷款', indent: 2, inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L4_C5'}, {key:'L4_C6'}, {key:'L4_C7'}, {key:'L4_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '5', text: '次级类贷款', indent: 2, inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L5_C5'}, {key:'L5_C6'}, {key:'L5_C7'}, {key:'L5_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '6', text: '可疑类贷款', indent: 2, inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L6_C5'}, {key:'L6_C6'}, {key:'L6_C7'}, {key:'L6_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '7', text: '损失类贷款', indent: 2, inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L7_C5'}, {key:'L7_C6'}, {key:'L7_C7'}, {key:'L7_C8', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '8', text: '二、小额贷款公司', isBold: true, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {key:'L8_C6'}, {key:'L8_C7'}, {key:'L8_C8', isReadonly:true}, {key:'L8_C9'}, {key:'L8_C10', isReadonly:true}, {key:'L8_C11', isReadonly:true}] },
                { line: '9', text: '三、其他', isBold: true, inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3'}, {key:'L9_C4'}, {key:'L9_C5'}, {key:'L9_C6'}, {key:'L9_C7'}, {key:'L9_C8', isReadonly:true}, {key:'L9_C9'}, {key:'L9_C10', isReadonly:true}, {key:'L9_C11', isReadonly:true}] },
                { line: '10', text: '合计 (1+8+9)', isBold: true, inputs: [{key:'L10_C1', isReadonly:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {isAsterisk:true}, {key:'L10_C8', isReadonly:true}, {key:'L10_C9', isReadonly:true}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105120) return;
            const t = db.A105120;
            for (let r = 2; r <= 9; r++) {
                if(t[`L${r}_C6`] !== undefined && t[`L${r}_C7`] !== undefined) {
                    t[`L${r}_C8`] = (t[`L${r}_C6`] || 0) * (t[`L${r}_C7`] || 0); 
                }
                if (r >= 8) { 
                    t[`L${r}_C10`] = Math.min(t[`L${r}_C4`] || 0, t[`L${r}_C8`] || 0) - (t[`L${r}_C9`] || 0);
                    t[`L${r}_C11`] = (t[`L${r}_C4`] || 0) - (t[`L${r}_C3`] || 0) - t[`L${r}_C10`];
                }
            }
        }
    },

    // ==========================================
    // A106000 企业所得税弥补亏损明细表 (已修正)
    // ==========================================
    A106000: {
        schema: {
            id: 'A106000',
            title: '企业所得税弥补亏损明细表 (A106000)',
            columns: [
                {title:'行次', width:'4%'}, {title:'项目', width:'10%'},
                {title:'年度(1)', width:'7%'}, {title:'境内所得额(2)', width:'8%'}, {title:'分立转出(3)', width:'8%'}, 
                {title:'可弥补5年(4)', width:'7%'}, {title:'可弥补8年(5)', width:'7%'}, {title:'可弥补10年(6)', width:'7%'},
                {title:'企业类型(7)', width:'8%'}, {title:'当年亏损额(8)', width:'8%'}, {title:'当年待弥补(9)', width:'8%'},
                {title:'境内弥补(10)', width:'6%'}, {title:'境外弥补(11)', width:'6%'}, {title:'可结转以后(12)', width:'6%'}
            ],
            // 修正说明：将 1-12 列与 inputs[0] - inputs[11] 完全对应
            rows: [
                { line: '1', text: '前十年度', inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {key:'L1_C7'}, {key:'L1_C8'}, {key:'L1_C9'}, {key:'L1_C10'}, {key:'L1_C11'}, {key:'L1_C12'}] },
                { line: '2', text: '前九年度', inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8'}, {key:'L2_C9'}, {key:'L2_C10'}, {key:'L2_C11'}, {key:'L2_C12'}] },
                { line: '3', text: '前八年度', inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6'}, {key:'L3_C7'}, {key:'L3_C8'}, {key:'L3_C9'}, {key:'L3_C10'}, {key:'L3_C11'}, {key:'L3_C12'}] },
                { line: '4', text: '前七年度', inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6'}, {key:'L4_C7'}, {key:'L4_C8'}, {key:'L4_C9'}, {key:'L4_C10'}, {key:'L4_C11'}, {key:'L4_C12'}] },
                { line: '5', text: '前六年度', inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6'}, {key:'L5_C7'}, {key:'L5_C8'}, {key:'L5_C9'}, {key:'L5_C10'}, {key:'L5_C11'}, {key:'L5_C12'}] },
                { line: '6', text: '前五年度', inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {key:'L6_C5'}, {key:'L6_C6'}, {key:'L6_C7'}, {key:'L6_C8'}, {key:'L6_C9'}, {key:'L6_C10'}, {key:'L6_C11'}, {key:'L6_C12'}] },
                { line: '7', text: '前四年度', inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3'}, {key:'L7_C4'}, {key:'L7_C5'}, {key:'L7_C6'}, {key:'L7_C7'}, {key:'L7_C8'}, {key:'L7_C9'}, {key:'L7_C10'}, {key:'L7_C11'}, {key:'L7_C12'}] },
                { line: '8', text: '前三年度', inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {key:'L8_C6'}, {key:'L8_C7'}, {key:'L8_C8'}, {key:'L8_C9'}, {key:'L8_C10'}, {key:'L8_C11'}, {key:'L8_C12'}] },
                { line: '9', text: '前二年度', inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3'}, {key:'L9_C4'}, {key:'L9_C5'}, {key:'L9_C6'}, {key:'L9_C7'}, {key:'L9_C8'}, {key:'L9_C9'}, {key:'L9_C10'}, {key:'L9_C11'}, {key:'L9_C12'}] },
                { line: '10', text: '前一年度', inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {key:'L10_C4'}, {key:'L10_C5'}, {key:'L10_C6'}, {key:'L10_C7'}, {key:'L10_C8'}, {key:'L10_C9'}, {key:'L10_C10'}, {key:'L10_C11'}, {key:'L10_C12'}] },
                { line: '11', text: '本年度', inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}, {key:'L11_C5'}, {key:'L11_C6'}, {key:'L11_C7'}, {key:'L11_C8'}, {key:'L11_C9'}, {key:'L11_C10'}, {key:'L11_C11'}, {key:'L11_C12'}] },
                { line: '12', text: '可结转以后年度弥补的亏损额合计', isBold: true, inputs: [{},{},{},{},{},{},{},{},{},{},{}, {key:'L12_C12', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A106000) return;
            const t = db.A106000;
            let sum12 = 0;
            for(let r = 1; r <= 11; r++) {
                sum12 += (t[`L${r}_C12`] || 0);
            }
            t.L12_C12 = sum12;
        }
    },

    // ==========================================
    // A107011 符合条件的居民企业之间的股息、红利等权益性投资收益优惠明细表 (已修正)
    // ==========================================
    A107011: {
        schema: {
            id: 'A107011',
            title: '股息、红利等权益性投资收益优惠明细表 (A107011)',
            columns: [
                {title:'行次', width:'4%'}, {title:'被投资企业(1)', width:'10%'},
                {title:'信用代码(2)', width:'5%'}, {title:'投资性质(3)', width:'5%'}, {title:'投资成本(4)', width:'6%'},
                {title:'投资比例(5)', width:'5%'}, {title:'分配时间(6)', width:'5%'}, {title:'股息红利(7)', width:'6%'},
                {title:'清算资产(8)', width:'6%'}, {title:'盈余公积(9)', width:'6%'}, {title:'确认股息(10)', width:'6%'},
                {title:'撤回资产(11)', width:'6%'}, {title:'减少比例(12)', width:'5%'}, {title:'收回成本(13)', width:'6%'},
                {title:'超过部分(14)', width:'6%'}, {title:'撤回盈余(15)', width:'6%'}, {title:'确认股息(16)', width:'5%'},
                {title:'合计所得(17)', width:'6%'}
            ],
            // 修正说明：第一列被投资企业作为文本占位，第2至17列填入 inputs 中共 16 项
            rows: [
                { line: '1', text: '投资项目1', inputs: [{key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {key:'L1_C7'}, {key:'L1_C8'}, {key:'L1_C9'}, {key:'L1_C10', isReadonly:true}, {key:'L1_C11'}, {key:'L1_C12'}, {key:'L1_C13', isReadonly:true}, {key:'L1_C14', isReadonly:true}, {key:'L1_C15'}, {key:'L1_C16', isReadonly:true}, {key:'L1_C17', isReadonly:true}] },
                { line: '2', text: '投资项目2', inputs: [{key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8'}, {key:'L2_C9'}, {key:'L2_C10', isReadonly:true}, {key:'L2_C11'}, {key:'L2_C12'}, {key:'L2_C13', isReadonly:true}, {key:'L2_C14', isReadonly:true}, {key:'L2_C15'}, {key:'L2_C16', isReadonly:true}, {key:'L2_C17', isReadonly:true}] },
                { line: '8', text: '合计', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L8_C4', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L8_C7', isReadonly:true}, {key:'L8_C8', isReadonly:true}, {key:'L8_C9', isReadonly:true}, {key:'L8_C10', isReadonly:true}, {key:'L8_C11', isReadonly:true}, {isAsterisk:true}, {key:'L8_C13', isReadonly:true}, {key:'L8_C14', isReadonly:true}, {key:'L8_C15', isReadonly:true}, {key:'L8_C16', isReadonly:true}, {key:'L8_C17', isReadonly:true}] },
                { line: '9', text: '其中：直接投资或非H股股票投资', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L9_C4'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L9_C7'}, {key:'L9_C8'}, {key:'L9_C9'}, {key:'L9_C10', isReadonly:true}, {key:'L9_C11'}, {isAsterisk:true}, {key:'L9_C13', isReadonly:true}, {key:'L9_C14', isReadonly:true}, {key:'L9_C15'}, {key:'L9_C16', isReadonly:true}, {key:'L9_C17', isReadonly:true}] },
                { line: '10', text: '股票投资—沪港通H股', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L10_C4'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L10_C7'}, {key:'L10_C8'}, {key:'L10_C9'}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11'}, {isAsterisk:true}, {key:'L10_C13', isReadonly:true}, {key:'L10_C14', isReadonly:true}, {key:'L10_C15'}, {key:'L10_C16', isReadonly:true}, {key:'L10_C17', isReadonly:true}] },
                { line: '11', text: '股票投资—深港通H股', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L11_C4'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L11_C7'}, {key:'L11_C8'}, {key:'L11_C9'}, {key:'L11_C10', isReadonly:true}, {key:'L11_C11'}, {isAsterisk:true}, {key:'L11_C13', isReadonly:true}, {key:'L11_C14', isReadonly:true}, {key:'L11_C15'}, {key:'L11_C16', isReadonly:true}, {key:'L11_C17', isReadonly:true}] },
                { line: '12', text: '创新企业CDR', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L12_C4'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L12_C7'}, {key:'L12_C8'}, {key:'L12_C9'}, {key:'L12_C10', isReadonly:true}, {key:'L12_C11'}, {isAsterisk:true}, {key:'L12_C13', isReadonly:true}, {key:'L12_C14', isReadonly:true}, {key:'L12_C15'}, {key:'L12_C16', isReadonly:true}, {key:'L12_C17', isReadonly:true}] },
                { line: '13', text: '永续债', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L13_C4'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L13_C7'}, {key:'L13_C8'}, {key:'L13_C9'}, {key:'L13_C10', isReadonly:true}, {key:'L13_C11'}, {isAsterisk:true}, {key:'L13_C13', isReadonly:true}, {key:'L13_C14', isReadonly:true}, {key:'L13_C15'}, {key:'L13_C16', isReadonly:true}, {key:'L13_C17', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A107011) return;
            const t = db.A107011;
            ['1', '2', '9', '10', '11', '12', '13'].forEach(r => {
                t[`L${r}_C10`] = Math.min(t[`L${r}_C8`] || 0, t[`L${r}_C9`] || 0);
                t[`L${r}_C13`] = (t[`L${r}_C4`] || 0) * (t[`L${r}_C12`] || 0);
                t[`L${r}_C14`] = (t[`L${r}_C11`] || 0) - (t[`L${r}_C13`] || 0);
                t[`L${r}_C16`] = Math.min(t[`L${r}_C14`] || 0, t[`L${r}_C15`] || 0);
                t[`L${r}_C17`] = (t[`L${r}_C7`] || 0) + (t[`L${r}_C10`] || 0) + (t[`L${r}_C16`] || 0);
            });
            // 汇总计算（以1-2两行示例）
            [4, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17].forEach(c => {
                t[`L8_C${c}`] = (t[`L1_C${c}`] || 0) + (t[`L2_C${c}`] || 0);
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
            columns: [{title:'行次', width:'8%'}, {title:'项 目', width:'72%'}, {title:'金额(视同)', width:'20%'}],
            rows: [
                { line: '1', text: '本年可享受研发费用加计扣除项目数量', key: 'L1' },
                { line: '2', text: '一、自主研发、合作研发、集中研发 (3+7+16+19+23+34)', key: 'L2', isBold: true, isReadonly: true },
                { line: '3', text: '（一）人员人工费用 (4+5+6)', key: 'L3', indent: 1, isReadonly: true },
                { line: '4', text: '1. 直接从事研发活动人员工资薪金', key: 'L4', indent: 2 },
                { line: '5', text: '2. 直接从事研发活动人员五险一金', key: 'L5', indent: 2 },
                { line: '6', text: '3. 外聘研发人员的劳务费用', key: 'L6', indent: 2 },
                { line: '7', text: '（二）直接投入费用 (8+9+10+11+12+13+14+15)', key: 'L7', indent: 1, isReadonly: true },
                { line: '8', text: '1. 研发活动直接消耗材料费用', key: 'L8', indent: 2 },
                { line: '9', text: '2. 研发活动直接消耗燃料费用', key: 'L9', indent: 2 },
                { line: '10', text: '3. 研发活动直接消耗动力费用', key: 'L10', indent: 2 },
                { line: '11', text: '4. 用于中间试验和产品试制的模具、工艺装备开发及制造费', key: 'L11', indent: 2 },
                { line: '12', text: '5. 用于不构成固定资产的样品、样机及一般测试手段购置费', key: 'L12', indent: 2 },
                { line: '13', text: '6. 用于试制产品的检验费', key: 'L13', indent: 2 },
                { line: '14', text: '7. 用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用', key: 'L14', indent: 2 },
                { line: '15', text: '8. 通过经营租赁方式租入的用于研发活动的仪器、设备租赁费', key: 'L15', indent: 2 },
                { line: '16', text: '（三）折旧费用 (17+18)', key: 'L16', indent: 1, isReadonly: true },
                { line: '17', text: '1. 用于研发活动的仪器的折旧费', key: 'L17', indent: 2 },
                { line: '18', text: '2. 用于研发活动的设备的折旧费', key: 'L18', indent: 2 },
                { line: '19', text: '（四）无形资产摊销 (20+21+22)', key: 'L19', indent: 1, isReadonly: true },
                { line: '20', text: '1. 用于研发活动的软件的摊销费用', key: 'L20', indent: 2 },
                { line: '21', text: '2. 用于研发活动的专利权的摊销费用', key: 'L21', indent: 2 },
                { line: '22', text: '3. 用于研发活动的非专利技术（包括许可证、专有技术、设计和计算方法等）的摊销费用', key: 'L22', indent: 2 },
                { line: '23', text: '（五）新产品设计费等 (24+25+26+27)', key: 'L23', indent: 1, isReadonly: true },
                { line: '24', text: '1. 新产品设计费', key: 'L24', indent: 2 },
                { line: '25', text: '2. 新工艺规程制定费', key: 'L25', indent: 2 },
                { line: '26', text: '3. 新药研制的临床试验费', key: 'L26', indent: 2 },
                { line: '27', text: '4. 勘探开发技术的现场试验费', key: 'L27', indent: 2 },
                { line: '28', text: '（六）其他相关费用 (29+30+31+32+33)', key: 'L28', indent: 1, isReadonly: true },
                { line: '29', text: '1. 技术图书资料费、资料翻译费、专家咨询费、高新科技研发保险费', key: 'L29', indent: 2 },
                { line: '30', text: '2. 研发成果的检索、分析、评议、论证、鉴定、评审、评估、验收费用', key: 'L30', indent: 2 },
                { line: '31', text: '3. 知识产权的申请费、注册费、代理费', key: 'L31', indent: 2 },
                { line: '32', text: '4. 职工福利费、补充养老保险费、补充医疗保险费', key: 'L32', indent: 2 },
                { line: '33', text: '5. 差旅费、会议费', key: 'L33', indent: 2 },
                { line: '34', text: '（七）经限额调整后的其他相关费用', key: 'L34', indent: 1 },
                { line: '35', text: '二、委托研发 (36+37+39)', key: 'L35', isBold: true, isReadonly: true },
                { line: '36', text: '（一）委托境内机构或个人进行研发活动所发生的费用', key: 'L36', indent: 1 },
                { line: '37', text: '（二）委托境外机构进行研发活动发生的费用', key: 'L37', indent: 1 },
                { line: '38', text: '其中：允许加计扣除的委托境外机构进行研发活动发生的费用', key: 'L38', indent: 2 },
                { line: '39', text: '（三）委托境外个人进行研发活动发生的费用', key: 'L39', indent: 1 },
                { line: '40', text: '三、年度研发费用小计 (2+36×80%+38)', key: 'L40', isBold: true, isReadonly: true },
                { line: '41', text: '（一）本年费用化金额', key: 'L41', indent: 1 },
                { line: '42', text: '（二）本年资本化金额', key: 'L42', indent: 1 },
                { line: '43', text: '四、本年形成无形资产摊销额', key: 'L43', isBold: true },
                { line: '44', text: '五、以前年度形成无形资产本年摊销额', key: 'L44', isBold: true },
                { line: '45', text: '六、允许扣除的研发费用合计 (41+43+44)', key: 'L45', isBold: true, isReadonly: true },
                { line: '46', text: '减：特殊收入部分', key: 'L46', indent: 1 },
                { line: '47', text: '七、允许扣除的研发费用抵减特殊收入后的金额 (45-46)', key: 'L47', isBold: true, isReadonly: true },
                { line: '48', text: '减：当年销售研发活动直接形成产品（包括组成部分）对应的材料部分', key: 'L48', indent: 1 },
                { line: '49', text: '减：以前年度销售研发活动直接形成产品（包括组成部分）对应材料部分结转金额', key: 'L49', indent: 1 },
                { line: '50', text: '八、加计扣除比例及计算方法', key: 'L50', isBold: true },
                { line: '51', text: '九、本年研发费用加计扣除总额 (47-48-49)×50', key: 'L51', isBold: true, isReadonly: true },
                { line: '52', text: '十、销售研发活动直接形成产品对应材料部分结转以后年度扣除金额', key: 'L52', isBold: true }
            ]
        },
        logic: (db) => {
            if (!db.A107012) return;
            const t = db.A107012;
            t.L3 = (t.L4 || 0) + (t.L5 || 0) + (t.L6 || 0);
            t.L7 = (t.L8 || 0) + (t.L9 || 0) + (t.L10 || 0) + (t.L11 || 0) + (t.L12 || 0) + (t.L13 || 0) + (t.L14 || 0) + (t.L15 || 0);
            t.L16 = (t.L17 || 0) + (t.L18 || 0);
            t.L19 = (t.L20 || 0) + (t.L21 || 0) + (t.L22 || 0);
            t.L23 = (t.L24 || 0) + (t.L25 || 0) + (t.L26 || 0) + (t.L27 || 0);
            t.L28 = (t.L29 || 0) + (t.L30 || 0) + (t.L31 || 0) + (t.L32 || 0) + (t.L33 || 0);
            
            t.L2 = t.L3 + t.L7 + t.L16 + t.L19 + t.L23 + (t.L34 || 0);
            t.L35 = (t.L36 || 0) + (t.L37 || 0) + (t.L39 || 0);
            t.L40 = t.L2 + (t.L36 || 0) * 0.8 + (t.L38 || 0);
            
            t.L45 = (t.L41 || 0) + (t.L43 || 0) + (t.L44 || 0);
            t.L47 = t.L45 - (t.L46 || 0);
            t.L51 = (t.L47 - (t.L48 || 0) - (t.L49 || 0)) * ((t.L50 || 0)/100);
            
            let val52 = t.L47 - (t.L48 || 0) - (t.L49 || 0);
            t.L52 = val52 < 0 ? Math.abs(val52) : 0;
        }
    }
};