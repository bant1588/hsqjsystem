// forms/group_5000-5070.js

export const formBundle = {
    // ==========================================
    // A105000 纳税调整项目明细表 (完整无删减版)
    // ==========================================
    A105000: {
        schema: {
            id: 'A105000',
            title: '纳税调整项目明细表 (A105000)',
            columns: [
                {title:'行次', width:'6%', align:'center'}, 
                {title:'项目', width:'54%', align:'center'}, 
                {title:'账载金额(1)', width:'10%', align:'center'}, 
                {title:'税收金额(2)', width:'10%', align:'center'}, 
                {title:'调增金额(3)', width:'10%', align:'center'}, 
                {title:'调减金额(4)', width:'10%', align:'center'}
            ],
            rows: [
                { line: '1', text: '一、收入类调整项目 (2+3+…+11)', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L1_C3', isReadonly:true}, {key:'L1_C4', isReadonly:true}] },
                { line: '2', text: '（一）视同销售收入（填写A105010）', indent: 1, inputs: [{isAsterisk:true}, {key:'L2_C2'}, {key:'L2_C3'}, {isAsterisk:true}] },
                { line: '3', text: '（二）未按权责发生制确认收入（填写A105020）', indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}] },
                { line: '4', text: '（三）投资收益（填写A105030）', indent: 1, inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}] },
                { line: '5', text: '（四）按权益法核算长期股权投资对初始投资成本调整确认收益', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L5_C4'}] },
                { line: '6', text: '（五）交易性金融资产初始投资调整', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L6_C3'}, {isAsterisk:true}] },
                { line: '7', text: '（六）公允价值变动净损益', indent: 1, inputs: [{key:'L7_C1'}, {isAsterisk:true}, {key:'L7_C3'}, {key:'L7_C4'}] },
                { line: '8', text: '（七）不征税收入', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L8_C3'}, {key:'L8_C4'}] },
                { line: '9', text: '其中：专项用途财政性资金（填写A105040）', indent: 2, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L9_C3'}, {key:'L9_C4'}] },
                { line: '10', text: '（八）销售折扣、折让和退回', indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {key:'L10_C4'}] },
                { line: '11', text: '（九）其他', indent: 1, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}] },
                
                { line: '12', text: '二、扣除类调整项目 (13+14+…+24+26+27+28+29+30)', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L12_C3', isReadonly:true}, {key:'L12_C4', isReadonly:true}] },
                { line: '13', text: '（一）视同销售成本（填写A105010）', indent: 1, inputs: [{isAsterisk:true}, {key:'L13_C2'}, {isAsterisk:true}, {key:'L13_C4'}] },
                { line: '14', text: '（二）职工薪酬（填写A105050）', indent: 1, inputs: [{key:'L14_C1'}, {key:'L14_C2'}, {key:'L14_C3'}, {key:'L14_C4'}] },
                { line: '15', text: '（三）业务招待费支出', indent: 1, inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3'}, {isAsterisk:true}] },
                { line: '16', text: '（四）广告费和业务宣传费支出（填写A105060）', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L16_C3'}, {key:'L16_C4'}] },
                { line: '17', text: '（五）捐赠支出（填写A105070）', indent: 1, inputs: [{key:'L17_C1'}, {key:'L17_C2'}, {key:'L17_C3'}, {key:'L17_C4'}] },
                { line: '18', text: '（六）利息支出', indent: 1, inputs: [{key:'L18_C1'}, {key:'L18_C2'}, {key:'L18_C3'}, {key:'L18_C4'}] },
                { line: '19', text: '（七）罚金、罚款和被没收财物的损失', indent: 1, inputs: [{key:'L19_C1'}, {isAsterisk:true}, {key:'L19_C3'}, {isAsterisk:true}] },
                { line: '20', text: '（八）税收滞纳金、加收利息', indent: 1, inputs: [{key:'L20_C1'}, {isAsterisk:true}, {key:'L20_C3'}, {isAsterisk:true}] },
                { line: '21', text: '（九）赞助支出', indent: 1, inputs: [{key:'L21_C1'}, {isAsterisk:true}, {key:'L21_C3'}, {isAsterisk:true}] },
                { line: '22', text: '（十）与未实现融资收益相关在当期确认的财务费用', indent: 1, inputs: [{key:'L22_C1'}, {key:'L22_C2'}, {key:'L22_C3'}, {key:'L22_C4'}] },
                { line: '23', text: '（十一）佣金和手续费支出', indent: 1, inputs: [{key:'L23_C1'}, {key:'L23_C2'}, {key:'L23_C3'}, {key:'L23_C4'}] },
                { line: '24', text: '（十二）不征税收入用于支出所形成的费用', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L24_C3'}, {isAsterisk:true}] },
                { line: '25', text: '其中：专项用途财政性资金用于支出所形成的费用（填写A105040）', indent: 2, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L25_C3'}, {isAsterisk:true}] },
                { line: '26', text: '（十三）跨期扣除项目', indent: 1, inputs: [{key:'L26_C1'}, {key:'L26_C2'}, {key:'L26_C3'}, {key:'L26_C4'}] },
                { line: '27', text: '（十四）与取得收入无关的支出', indent: 1, inputs: [{key:'L27_C1'}, {isAsterisk:true}, {key:'L27_C3'}, {isAsterisk:true}] },
                { line: '28', text: '（十五）境外所得分摊的共同支出', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L28_C3'}, {isAsterisk:true}] },
                { line: '29', text: '（十六）党组织工作经费', indent: 1, inputs: [{key:'L29_C1'}, {key:'L29_C2'}, {key:'L29_C3'}, {key:'L29_C4'}] },
                { line: '30', text: '（十七）其他', indent: 1, inputs: [{key:'L30_C1'}, {key:'L30_C2'}, {key:'L30_C3'}, {key:'L30_C4'}] },
                
                { line: '31', text: '三、资产类调整项目 (32+33+34+35)', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L31_C3', isReadonly:true}, {key:'L31_C4', isReadonly:true}] },
                { line: '32', text: '（一）资产折旧、摊销（填写A105080）', indent: 1, inputs: [{key:'L32_C1'}, {key:'L32_C2'}, {key:'L32_C3'}, {key:'L32_C4'}] },
                { line: '33', text: '（二）资产减值准备金', indent: 1, inputs: [{key:'L33_C1'}, {isAsterisk:true}, {key:'L33_C3'}, {key:'L33_C4'}] },
                { line: '34', text: '（三）资产损失（填写A105090）', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L34_C3'}, {key:'L34_C4'}] },
                { line: '35', text: '（四）其他', indent: 1, inputs: [{key:'L35_C1'}, {key:'L35_C2'}, {key:'L35_C3'}, {key:'L35_C4'}] },
                
                { line: '36', text: '四、特殊事项调整项目 (37+38+…+43)', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L36_C3', isReadonly:true}, {key:'L36_C4', isReadonly:true}] },
                { line: '37', text: '（一）企业重组及递延纳税事项（填写A105100）', indent: 1, inputs: [{key:'L37_C1'}, {key:'L37_C2'}, {key:'L37_C3'}, {key:'L37_C4'}] },
                { line: '38', text: '（二）政策性搬迁（填写A105110）', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L38_C3'}, {key:'L38_C4'}] },
                { line: '39', text: '（三）特殊行业准备金 (39.1+…+39.7)', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L39_C3', isReadonly:true}, {key:'L39_C4', isReadonly:true}] },
                { line: '39.1', text: '1. 保险公司可扣除保障基金', indent: 2, inputs: [{key:'L39_1_C1'}, {key:'L39_1_C2'}, {key:'L39_1_C3'}, {key:'L39_1_C4'}] },
                { line: '39.2', text: '2. 保险公司准备金', indent: 2, inputs: [{key:'L39_2_C1'}, {key:'L39_2_C2'}, {key:'L39_2_C3'}, {key:'L39_2_C4'}] },
                { line: '39.3', text: '其中：已发生未报案未决赔款准备金', indent: 3, inputs: [{key:'L39_3_C1'}, {key:'L39_3_C2'}, {key:'L39_3_C3'}, {key:'L39_3_C4'}] },
                { line: '39.4', text: '3. 证券行业准备金', indent: 2, inputs: [{key:'L39_4_C1'}, {key:'L39_4_C2'}, {key:'L39_4_C3'}, {key:'L39_4_C4'}] },
                { line: '39.5', text: '4. 期货行业准备金', indent: 2, inputs: [{key:'L39_5_C1'}, {key:'L39_5_C2'}, {key:'L39_5_C3'}, {key:'L39_5_C4'}] },
                { line: '39.6', text: '5. 中小企业融资(信用)担保机构准备金', indent: 2, inputs: [{key:'L39_6_C1'}, {key:'L39_6_C2'}, {key:'L39_6_C3'}, {key:'L39_6_C4'}] },
                { line: '39.7', text: '6. 金融企业、小额贷款公司准备金', indent: 2, inputs: [{key:'L39_7_C1'}, {key:'L39_7_C2'}, {key:'L39_7_C3'}, {key:'L39_7_C4'}] },
                { line: '40', text: '（四）房地产企业销售未完工开发产品特定业务', indent: 1, inputs: [{isAsterisk:true}, {key:'L40_C2'}, {key:'L40_C3'}, {key:'L40_C4'}] },
                { line: '41', text: '（五）合伙企业法人合伙人应分得的应纳税所得额', indent: 1, inputs: [{key:'L41_C1'}, {key:'L41_C2'}, {key:'L41_C3'}, {key:'L41_C4'}] },
                { line: '42', text: '（六）发行永续债利息支出', indent: 1, inputs: [{key:'L42_C1'}, {key:'L42_C2'}, {key:'L42_C3'}, {key:'L42_C4'}] },
                { line: '43', text: '（七）其他', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L43_C3'}, {key:'L43_C4'}] },
                
                { line: '44', text: '五、特别纳税调整应税所得', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L44_C3'}, {isAsterisk:true}] },
                { line: '45', text: '六、其他', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L45_C3'}, {key:'L45_C4'}] },
                { line: '46', text: '合计 (1+12+31+36+44+45)', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L46_C3', isReadonly:true}, {key:'L46_C4', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105000) return;
            const t = db.A105000;
            
            // 内部合计计算
            const sumCols = (target, rows) => {
                let sumC3 = 0, sumC4 = 0;
                rows.forEach(r => { sumC3 += t[`L${r}_C3`] || 0; sumC4 += t[`L${r}_C4`] || 0; });
                t[`L${target}_C3`] = sumC3;
                t[`L${target}_C4`] = sumC4;
            };

            // 行39小计
            sumCols('39', ['39_1', '39_2', '39_4', '39_5', '39_6', '39_7']);
            
            // 大类合计
            sumCols('1', [2,3,4,5,6,7,8,10,11]);
            // 注意 25是24的其中项，不参与12行合计
            sumCols('12', [13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30]); 
            sumCols('31', [32,33,34,35]);
            sumCols('36', [37,38,39,40,41,42,43]);
            
            // 总合计
            sumCols('46', [1,12,31,36,44,45]);
        }
    },

    // ==========================================
    // A105010 视同销售和房地产开发企业特定业务纳税调整明细表 (完整版)
    // ==========================================
    A105010: {
        schema: {
            id: 'A105010',
            title: '视同销售和房地产开发企业特定业务纳税调整明细表 (A105010)',
            columns: [{title:'行次', width:'8%'}, {title:'项 目', width:'52%'}, {title:'税收金额(1)', width:'20%'}, {title:'纳税调整额(2)', width:'20%'}],
            rows: [
                { line: '1', text: '一、视同销售（营业）收入 (2+3+…+10)', isBold: true, inputs: [{key:'L1_C1', isReadonly:true}, {key:'L1_C2', isReadonly:true}] },
                { line: '2', text: '（一）非货币性资产交换视同销售收入', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}] },
                { line: '3', text: '（二）用于市场推广或销售视同销售收入', indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}] },
                { line: '4', text: '（三）用于交际应酬视同销售收入', indent: 1, inputs: [{key:'L4_C1'}, {key:'L4_C2'}] },
                { line: '5', text: '（四）用于职工奖励或福利视同销售收入', indent: 1, inputs: [{key:'L5_C1'}, {key:'L5_C2'}] },
                { line: '6', text: '（五）用于股息分配视同销售收入', indent: 1, inputs: [{key:'L6_C1'}, {key:'L6_C2'}] },
                { line: '7', text: '（六）用于对外捐赠视同销售收入', indent: 1, inputs: [{key:'L7_C1'}, {key:'L7_C2'}] },
                { line: '8', text: '（七）用于对外投资项目视同销售收入', indent: 1, inputs: [{key:'L8_C1'}, {key:'L8_C2'}] },
                { line: '9', text: '（八）提供劳务视同销售收入', indent: 1, inputs: [{key:'L9_C1'}, {key:'L9_C2'}] },
                { line: '10', text: '（九）其他', indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}] },
                
                { line: '11', text: '二、视同销售（营业）成本 (12+13+…+20)', isBold: true, inputs: [{key:'L11_C1', isReadonly:true}, {key:'L11_C2', isReadonly:true}] },
                { line: '12', text: '（一）非货币性资产交换视同销售成本', indent: 1, inputs: [{key:'L12_C1'}, {key:'L12_C2'}] },
                { line: '13', text: '（二）用于市场推广或销售视同销售成本', indent: 1, inputs: [{key:'L13_C1'}, {key:'L13_C2'}] },
                { line: '14', text: '（三）用于交际应酬视同销售成本', indent: 1, inputs: [{key:'L14_C1'}, {key:'L14_C2'}] },
                { line: '15', text: '（四）用于职工奖励或福利视同销售成本', indent: 1, inputs: [{key:'L15_C1'}, {key:'L15_C2'}] },
                { line: '16', text: '（五）用于股息分配视同销售成本', indent: 1, inputs: [{key:'L16_C1'}, {key:'L16_C2'}] },
                { line: '17', text: '（六）用于对外捐赠视同销售成本', indent: 1, inputs: [{key:'L17_C1'}, {key:'L17_C2'}] },
                { line: '18', text: '（七）用于对外投资项目视同销售成本', indent: 1, inputs: [{key:'L18_C1'}, {key:'L18_C2'}] },
                { line: '19', text: '（八）提供劳务视同销售成本', indent: 1, inputs: [{key:'L19_C1'}, {key:'L19_C2'}] },
                { line: '20', text: '（九）其他', indent: 1, inputs: [{key:'L20_C1'}, {key:'L20_C2'}] },
                
                { line: '21', text: '三、房地产开发企业特定业务计算的纳税调整额 (22-26)', isBold: true, inputs: [{isAsterisk:true}, {key:'L21_C2', isReadonly:true}] },
                { line: '22', text: '（一）房地产企业销售未完工开发产品特定业务计算的纳税调整额 (24-25)', indent: 1, inputs: [{isAsterisk:true}, {key:'L22_C2', isReadonly:true}] },
                { line: '23', text: '1. 销售未完工产品的收入', indent: 2, inputs: [{key:'L23_C1'}, {isAsterisk:true}] },
                { line: '24', text: '2. 销售未完工产品预计毛利额', indent: 2, inputs: [{isAsterisk:true}, {key:'L24_C2'}] },
                { line: '25', text: '3. 实际发生的税金及附加、土地增值税', indent: 2, inputs: [{isAsterisk:true}, {key:'L25_C2'}] },
                { line: '26', text: '（二）房地产企业销售的未完工产品转完工产品特定业务计算的纳税调整额 (28-29)', indent: 1, inputs: [{isAsterisk:true}, {key:'L26_C2', isReadonly:true}] },
                { line: '27', text: '1. 销售未完工产品转完工产品确认的销售收入', indent: 2, inputs: [{key:'L27_C1'}, {isAsterisk:true}] },
                { line: '28', text: '2. 转回的销售未完工产品预计毛利额', indent: 2, inputs: [{isAsterisk:true}, {key:'L28_C2'}] },
                { line: '29', text: '3. 转回实际发生的税金及附加、土地增值税', indent: 2, inputs: [{isAsterisk:true}, {key:'L29_C2'}] }
            ]
        },
        logic: (db) => {
            if (!db.A105010) return;
            const t = db.A105010;
            // 一、视同销售收入合计
            t.L1_C1 = [2,3,4,5,6,7,8,9,10].reduce((sum, r) => sum + (t[`L${r}_C1`] || 0), 0);
            t.L1_C2 = [2,3,4,5,6,7,8,9,10].reduce((sum, r) => sum + (t[`L${r}_C2`] || 0), 0);
            
            // 二、视同销售成本合计
            t.L11_C1 = [12,13,14,15,16,17,18,19,20].reduce((sum, r) => sum + (t[`L${r}_C1`] || 0), 0);
            t.L11_C2 = [12,13,14,15,16,17,18,19,20].reduce((sum, r) => sum + (t[`L${r}_C2`] || 0), 0);
            
            // 三、房地产纳税调整
            t.L22_C2 = (t.L24_C2 || 0) - (t.L25_C2 || 0);
            t.L26_C2 = (t.L28_C2 || 0) - (t.L29_C2 || 0);
            t.L21_C2 = (t.L22_C2 || 0) - (t.L26_C2 || 0);
        }
    },

    // ==========================================
    // A105020 未按权责发生制确认收入纳税调整明细表
    // ==========================================
    A105020: {
        schema: {
            id: 'A105020',
            title: '未按权责发生制确认收入纳税调整明细表 (A105020)',
            columns: [
                {title:'行次', width:'5%'}, {title:'项 目', width:'35%'},
                {title:'合同/交易金额(1)', width:'10%'}, {title:'账载本年(2)', width:'10%'}, {title:'账载累计(3)', width:'10%'},
                {title:'税收本年(4)', width:'10%'}, {title:'税收累计(5)', width:'10%'}, {title:'纳税调整金额(6=4-2)', width:'10%'}
            ],
            rows: [
                { line: '1', text: '一、跨期收取的租金、利息、特许权使用费收入 (2+3+4)', isBold: true, inputs: [{key:'L1_C1', isReadonly:true}, {key:'L1_C2', isReadonly:true}, {key:'L1_C3', isReadonly:true}, {key:'L1_C4', isReadonly:true}, {key:'L1_C5', isReadonly:true}, {key:'L1_C6', isReadonly:true}] },
                { line: '2', text: '（一）租金', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6', isReadonly:true}] },
                { line: '3', text: '（二）利息', indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6', isReadonly:true}] },
                { line: '4', text: '（三）特许权使用费', indent: 1, inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6', isReadonly:true}] },
                { line: '5', text: '二、分期确认收入 (6+7+8)', isBold: true, inputs: [{key:'L5_C1', isReadonly:true}, {key:'L5_C2', isReadonly:true}, {key:'L5_C3', isReadonly:true}, {key:'L5_C4', isReadonly:true}, {key:'L5_C5', isReadonly:true}, {key:'L5_C6', isReadonly:true}] },
                { line: '6', text: '（一）分期收款方式销售货物收入', indent: 1, inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {key:'L6_C5'}, {key:'L6_C6', isReadonly:true}] },
                { line: '7', text: '（二）持续时间超过12个月的建造合同收入', indent: 1, inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3'}, {key:'L7_C4'}, {key:'L7_C5'}, {key:'L7_C6', isReadonly:true}] },
                { line: '8', text: '（三）其他分期确认收入', indent: 1, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3'}, {key:'L8_C4'}, {key:'L8_C5'}, {key:'L8_C6', isReadonly:true}] },
                { line: '9', text: '三、政府补助递延收入 (10+11+12)', isBold: true, inputs: [{key:'L9_C1', isReadonly:true}, {key:'L9_C2', isReadonly:true}, {key:'L9_C3', isReadonly:true}, {key:'L9_C4', isReadonly:true}, {key:'L9_C5', isReadonly:true}, {key:'L9_C6', isReadonly:true}] },
                { line: '10', text: '（一）与收益相关的政府补助', indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {key:'L10_C4'}, {key:'L10_C5'}, {key:'L10_C6', isReadonly:true}] },
                { line: '11', text: '（二）与资产相关的政府补助', indent: 1, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}, {key:'L11_C5'}, {key:'L11_C6', isReadonly:true}] },
                { line: '12', text: '（三）其他', indent: 1, inputs: [{key:'L12_C1'}, {key:'L12_C2'}, {key:'L12_C3'}, {key:'L12_C4'}, {key:'L12_C5'}, {key:'L12_C6', isReadonly:true}] },
                { line: '13', text: '四、其他未按权责发生制确认收入', isBold: true, inputs: [{key:'L13_C1'}, {key:'L13_C2'}, {key:'L13_C3'}, {key:'L13_C4'}, {key:'L13_C5'}, {key:'L13_C6', isReadonly:true}] },
                { line: '14', text: '合计 (1+5+9+13)', isBold: true, inputs: [{key:'L14_C1', isReadonly:true}, {key:'L14_C2', isReadonly:true}, {key:'L14_C3', isReadonly:true}, {key:'L14_C4', isReadonly:true}, {key:'L14_C5', isReadonly:true}, {key:'L14_C6', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105020) return;
            const t = db.A105020;
            const calcRow = (row) => {
                t[`L${row}_C6`] = (t[`L${row}_C4`] || 0) - (t[`L${row}_C2`] || 0);
            };
            const sumBlock = (targetRow, startRow, endRow) => {
                for (let c = 1; c <= 6; c++) {
                    let sum = 0;
                    for (let r = startRow; r <= endRow; r++) sum += t[`L${r}_C${c}`] || 0;
                    t[`L${targetRow}_C${c}`] = sum;
                }
            };
            
            for (let i = 2; i <= 13; i++) { if (i !== 5 && i !== 9) calcRow(i); }
            sumBlock(1, 2, 4);
            sumBlock(5, 6, 8);
            sumBlock(9, 10, 12);
            
            for (let c = 1; c <= 6; c++) {
                t[`L14_C${c}`] = (t[`L1_C${c}`] || 0) + (t[`L5_C${c}`] || 0) + (t[`L9_C${c}`] || 0) + (t[`L13_C${c}`] || 0);
            }
        }
    },

    // ==========================================
    // A105030 投资收益纳税调整明细表
    // ==========================================
    A105030: {
        schema: {
            id: 'A105030',
            title: '投资收益纳税调整明细表 (A105030)',
            columns: [
                {title:'行次', width:'4%'}, {title:'项 目', width:'16%'},
                {title:'持有账载(1)', width:'8%'}, {title:'持有税收(2)', width:'8%'}, {title:'持有调整(3=2-1)', width:'8%'},
                {title:'处置会计收入(4)', width:'8%'}, {title:'处置税收收入(5)', width:'8%'}, {title:'处置账面(6)', width:'8%'}, {title:'处置计税(7)', width:'8%'},
                {title:'处置会计所得(8=4-6)', width:'8%'}, {title:'处置税收所得(9=5-7)', width:'8%'}, {title:'处置调整(10=9-8)', width:'8%'}, {title:'总调整(11=3+10)', width:'8%'}
            ],
            rows: [
                { line: '1', text: '一、交易性金融资产', inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3', isReadonly:true}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {key:'L1_C7'}, {key:'L1_C8', isReadonly:true}, {key:'L1_C9', isReadonly:true}, {key:'L1_C10', isReadonly:true}, {key:'L1_C11', isReadonly:true}] },
                { line: '2', text: '二、可供出售金融资产', inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {key:'L2_C3', isReadonly:true}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8', isReadonly:true}, {key:'L2_C9', isReadonly:true}, {key:'L2_C10', isReadonly:true}, {key:'L2_C11', isReadonly:true}] },
                { line: '3', text: '三、持有至到期投资', inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3', isReadonly:true}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6'}, {key:'L3_C7'}, {key:'L3_C8', isReadonly:true}, {key:'L3_C9', isReadonly:true}, {key:'L3_C10', isReadonly:true}, {key:'L3_C11', isReadonly:true}] },
                { line: '4', text: '四、衍生工具', inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3', isReadonly:true}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6'}, {key:'L4_C7'}, {key:'L4_C8', isReadonly:true}, {key:'L4_C9', isReadonly:true}, {key:'L4_C10', isReadonly:true}, {key:'L4_C11', isReadonly:true}] },
                { line: '5', text: '五、交易性金融负债', inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3', isReadonly:true}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6'}, {key:'L5_C7'}, {key:'L5_C8', isReadonly:true}, {key:'L5_C9', isReadonly:true}, {key:'L5_C10', isReadonly:true}, {key:'L5_C11', isReadonly:true}] },
                { line: '6', text: '六、长期股权投资', inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3', isReadonly:true}, {key:'L6_C4'}, {key:'L6_C5'}, {key:'L6_C6'}, {key:'L6_C7'}, {key:'L6_C8', isReadonly:true}, {key:'L6_C9', isReadonly:true}, {key:'L6_C10', isReadonly:true}, {key:'L6_C11', isReadonly:true}] },
                { line: '7', text: '七、短期投资', inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3', isReadonly:true}, {key:'L7_C4'}, {key:'L7_C5'}, {key:'L7_C6'}, {key:'L7_C7'}, {key:'L7_C8', isReadonly:true}, {key:'L7_C9', isReadonly:true}, {key:'L7_C10', isReadonly:true}, {key:'L7_C11', isReadonly:true}] },
                { line: '8', text: '八、长期债券投资', inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {key:'L8_C3', isReadonly:true}, {key:'L8_C4'}, {key:'L8_C5'}, {key:'L8_C6'}, {key:'L8_C7'}, {key:'L8_C8', isReadonly:true}, {key:'L8_C9', isReadonly:true}, {key:'L8_C10', isReadonly:true}, {key:'L8_C11', isReadonly:true}] },
                { line: '9', text: '九、其他', inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {key:'L9_C3', isReadonly:true}, {key:'L9_C4'}, {key:'L9_C5'}, {key:'L9_C6'}, {key:'L9_C7'}, {key:'L9_C8', isReadonly:true}, {key:'L9_C9', isReadonly:true}, {key:'L9_C10', isReadonly:true}, {key:'L9_C11', isReadonly:true}] },
                { line: '10', text: '合计 (1+..+9)', isBold: true, inputs: [{key:'L10_C1', isReadonly:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {key:'L10_C8', isReadonly:true}, {key:'L10_C9', isReadonly:true}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105030) return;
            const t = db.A105030;
            for (let i = 1; i <= 9; i++) {
                t[`L${i}_C3`] = (t[`L${i}_C2`] || 0) - (t[`L${i}_C1`] || 0);
                t[`L${i}_C8`] = (t[`L${i}_C4`] || 0) - (t[`L${i}_C6`] || 0);
                t[`L${i}_C9`] = (t[`L${i}_C5`] || 0) - (t[`L${i}_C7`] || 0);
                t[`L${i}_C10`] = (t[`L${i}_C9`] || 0) - (t[`L${i}_C8`] || 0);
                t[`L${i}_C11`] = (t[`L${i}_C3`] || 0) + (t[`L${i}_C10`] || 0);
            }
            for (let c = 1; c <= 11; c++) {
                let sum = 0;
                for (let r = 1; r <= 9; r++) sum += t[`L${r}_C${c}`] || 0;
                t[`L10_C${c}`] = sum;
            }
        }
    },

    // ==========================================
    // A105040 专项用途财政性资金纳税调整明细表
    // ==========================================
    A105040: {
        schema: {
            id: 'A105040',
            title: '专项用途财政性资金纳税调整明细表 (A105040)',
            columns: [
                {title:'行次', width:'3%'}, {title:'项目', width:'8%'},
                {title:'取得年度', width:'8%'}, {title:'财政资金(2)', width:'7%'}, {title:'符合不征税(3)', width:'7%'}, {title:'计入本年损益(4)', width:'7%'},
                {title:'前五年(5)', width:'6%'}, {title:'前四年(6)', width:'6%'}, {title:'前三年(7)', width:'6%'}, {title:'前二年(8)', width:'6%'}, {title:'前一年(9)', width:'6%'},
                {title:'支出金额(10)', width:'7%'}, {title:'费用化支出(11)', width:'7%'},
                {title:'结余金额(12)', width:'6%'}, {title:'上缴财政(13)', width:'6%'}, {title:'应计入应税收入(14)', width:'8%'}
            ],
            // 基于原图排版复刻星号
            rows: [
                { line: '1', text: '前五年度', inputs: [{key:'L1_C1_year', type:'text'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {key:'L1_C7'}, {key:'L1_C8'}, {key:'L1_C9'}, {key:'L1_C10'}, {key:'L1_C11'}, {key:'L1_C12'}, {key:'L1_C13'}, {key:'L1_C14'}] },
                { line: '2', text: '前四年度', inputs: [{key:'L2_C1_year', type:'text'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {isAsterisk:true}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8'}, {key:'L2_C9'}, {key:'L2_C10'}, {key:'L2_C11'}, {key:'L2_C12'}, {key:'L2_C13'}, {key:'L2_C14'}] },
                { line: '3', text: '前三年度', inputs: [{key:'L3_C1_year', type:'text'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L3_C7'}, {key:'L3_C8'}, {key:'L3_C9'}, {key:'L3_C10'}, {key:'L3_C11'}, {key:'L3_C12'}, {key:'L3_C13'}, {key:'L3_C14'}] },
                { line: '4', text: '前二年度', inputs: [{key:'L4_C1_year', type:'text'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L4_C8'}, {key:'L4_C9'}, {key:'L4_C10'}, {key:'L4_C11'}, {key:'L4_C12'}, {key:'L4_C13'}, {key:'L4_C14'}] },
                { line: '5', text: '前一年度', inputs: [{key:'L5_C1_year', type:'text'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L5_C9'}, {key:'L5_C10'}, {key:'L5_C11'}, {key:'L5_C12'}, {key:'L5_C13'}, {key:'L5_C14'}] },
                { line: '6', text: '本年', inputs: [{key:'L6_C1_year', type:'text'}, {key:'L6_C2'}, {key:'L6_C3'}, {key:'L6_C4'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L6_C10'}, {key:'L6_C11'}, {key:'L6_C12'}, {key:'L6_C13'}, {key:'L6_C14'}] },
                { line: '7', text: '合计', isBold: true, inputs: [{isAsterisk:true}, {key:'L7_C2', isReadonly:true}, {key:'L7_C3', isReadonly:true}, {key:'L7_C4', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L7_C10', isReadonly:true}, {key:'L7_C11', isReadonly:true}, {key:'L7_C12', isReadonly:true}, {key:'L7_C13', isReadonly:true}, {key:'L7_C14', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105040) return;
            const t = db.A105040;
            const colsToSum = [2, 3, 4, 10, 11, 12, 13, 14];
            colsToSum.forEach(c => {
                let sum = 0;
                for (let r = 1; r <= 6; r++) sum += t[`L${r}_C${c}`] || 0;
                t[`L7_C${c}`] = sum;
            });
        }
    },

    // ==========================================
    // A105050 职工薪酬支出及纳税调整明细表
    // ==========================================
    A105050: {
        schema: {
            id: 'A105050',
            title: '职工薪酬支出及纳税调整明细表 (A105050)',
            columns: [
                {title:'行次', width:'6%'}, {title:'项目', width:'34%'},
                {title:'账载金额(1)', width:'10%'}, {title:'实际发生额(2)', width:'10%'}, {title:'税收比例(3)', width:'10%'},
                {title:'以前累计结转(4)', width:'10%'}, {title:'税收金额(5)', width:'10%'}, {title:'纳税调整(6=1-5)', width:'10%'}, {title:'以后年度结转(7=1+4-5)', width:'10%'}
            ],
            rows: [
                { line: '1', text: '一、工资薪金支出', isBold: true, inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L1_C5'}, {key:'L1_C6', isReadonly:true}, {isAsterisk:true}] },
                { line: '2', text: '其中：股权激励', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L2_C5'}, {key:'L2_C6', isReadonly:true}, {isAsterisk:true}] },
                { line: '3', text: '二、职工福利费支出', isBold: true, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {isAsterisk:true}, {key:'L3_C5'}, {key:'L3_C6', isReadonly:true}, {isAsterisk:true}] },
                { line: '4', text: '三、职工教育经费支出', isBold: true, inputs: [{key:'L4_C1', isReadonly:true}, {key:'L4_C2', isReadonly:true}, {isAsterisk:true}, {key:'L4_C4', isReadonly:true}, {key:'L4_C5', isReadonly:true}, {key:'L4_C6', isReadonly:true}, {key:'L4_C7', isReadonly:true}] },
                { line: '5', text: '其中：按税收规定比例扣除的职工教育经费', indent: 1, inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6', isReadonly:true}, {key:'L5_C7', isReadonly:true}] },
                { line: '6', text: '按税收规定全额扣除的职工培训费用', indent: 1, inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {key:'L6_C3'}, {isAsterisk:true}, {key:'L6_C5'}, {key:'L6_C6', isReadonly:true}, {isAsterisk:true}] },
                { line: '7', text: '四、工会经费支出', isBold: true, inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3'}, {isAsterisk:true}, {key:'L7_C5'}, {key:'L7_C6', isReadonly:true}, {isAsterisk:true}] },
                { line: '8', text: '五、各类基本社会保障性缴款', isBold: true, inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L8_C5'}, {key:'L8_C6', isReadonly:true}, {isAsterisk:true}] },
                { line: '9', text: '六、住房公积金', isBold: true, inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L9_C5'}, {key:'L9_C6', isReadonly:true}, {isAsterisk:true}] },
                { line: '10', text: '七、补充养老保险', isBold: true, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {isAsterisk:true}, {key:'L10_C5'}, {key:'L10_C6', isReadonly:true}, {isAsterisk:true}] },
                { line: '11', text: '八、补充医疗保险', isBold: true, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {isAsterisk:true}, {key:'L11_C5'}, {key:'L11_C6', isReadonly:true}, {isAsterisk:true}] },
                { line: '12', text: '九、其他', isBold: true, inputs: [{key:'L12_C1'}, {key:'L12_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L12_C5'}, {key:'L12_C6', isReadonly:true}, {isAsterisk:true}] },
                { line: '13', text: '合计 (1+3+4+7+8+9+10+11+12)', isBold: true, inputs: [{key:'L13_C1', isReadonly:true}, {key:'L13_C2', isReadonly:true}, {isAsterisk:true}, {key:'L13_C4', isReadonly:true}, {key:'L13_C5', isReadonly:true}, {key:'L13_C6', isReadonly:true}, {key:'L13_C7', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105050) return;
            const t = db.A105050;
            
            // 行次4(职工教育经费)为行次5和行次6的合计
            [1, 2, 4, 5].forEach(c => {
                t[`L4_C${c}`] = (t[`L5_C${c}`] || 0) + (t[`L6_C${c}`] || 0);
            });

            // 自动计算调整额
            for (let i = 1; i <= 12; i++) {
                t[`L${i}_C6`] = (t[`L${i}_C1`] || 0) - (t[`L${i}_C5`] || 0);
                if (i === 4 || i === 5) {
                    t[`L${i}_C7`] = (t[`L${i}_C1`] || 0) + (t[`L${i}_C4`] || 0) - (t[`L${i}_C5`] || 0);
                }
            }

            // 合计计算
            [1, 2, 4, 5, 6, 7].forEach(c => {
                t[`L13_C${c}`] = (t[`L1_C${c}`] || 0) + (t[`L3_C${c}`] || 0) + (t[`L4_C${c}`] || 0) + 
                                 (t[`L7_C${c}`] || 0) + (t[`L8_C${c}`] || 0) + (t[`L9_C${c}`] || 0) + 
                                 (t[`L10_C${c}`] || 0) + (t[`L11_C${c}`] || 0) + (t[`L12_C${c}`] || 0);
            });
        }
    },

    // ==========================================
    // A105060 广告费和业务宣传费跨年度纳税调整明细表
    // ==========================================
    A105060: {
        schema: {
            id: 'A105060',
            title: '广告费和业务宣传费跨年度纳税调整明细表 (A105060)',
            columns: [{title:'行次', width:'10%', align:'center'}, {title:'项 目', width:'60%', align:'center'}, {title:'金 额', width:'30%', align:'center'}],
            rows: [
                { line: '1', text: '一、本年广告费和业务宣传费支出', key: 'L1' },
                { line: '2', text: '减：不允许扣除的广告费和业务宣传费支出', key: 'L2', indent: 1 },
                { line: '3', text: '二、本年符合条件的广告费和业务宣传费支出（1-2）', key: 'L3', isBold: true, isReadonly: true },
                { line: '4', text: '三、本年计算广告费和业务宣传费扣除限额的销售（营业）收入', key: 'L4', isBold: true },
                { line: '5', text: '乘：税收规定扣除率', key: 'L5', indent: 1 },
                { line: '6', text: '四、本企业计算的广告费和业务宣传费扣除限额（4×5）', key: 'L6', isBold: true, isReadonly: true },
                { line: '7', text: '五、本年结转以后年度扣除额（3>6，本行=3-6；3≤6，本行=0）', key: 'L7', isBold: true, isReadonly: true },
                { line: '8', text: '加：以前年度累计结转扣除额', key: 'L8', indent: 1 },
                { line: '9', text: '减：本年扣除的以前年度结转额 [3>6,本行=0; 3≤6,本行=8与(6-3)孰小]', key: 'L9', indent: 1, isReadonly: true },
                { line: '10', text: '六、按照分摊协议归集至其他关联方的广告费和业务宣传费', key: 'L10', isBold: true },
                { line: '11', text: '按照分摊协议从其他关联方归集至本企业的广告费和业务宣传费', key: 'L11', indent: 1 },
                { line: '12', text: '七、本年支出纳税调整金额 (3>6,行=2+3-6-10-11; 3≤6,行=2-10-11-9)', key: 'L12', isBold: true, isReadonly: true },
                { line: '13', text: '八、累计结转以后年度扣除额（7+8-9）', key: 'L13', isBold: true, isReadonly: true }
            ]
        },
        logic: (db) => {
            if (!db.A105060) return;
            const t = db.A105060;
            t.L3 = (t.L1 || 0) - (t.L2 || 0);
            t.L6 = (t.L4 || 0) * (t.L5 || 0);
            
            t.L7 = t.L3 > t.L6 ? t.L3 - t.L6 : 0;
            t.L9 = t.L3 > t.L6 ? 0 : Math.min((t.L8 || 0), t.L6 - t.L3);
            
            if (t.L3 > t.L6) {
                t.L12 = (t.L2 || 0) + (t.L3 || 0) - t.L6 - (t.L10 || 0) - (t.L11 || 0);
            } else {
                t.L12 = (t.L2 || 0) - (t.L10 || 0) - (t.L11 || 0) - t.L9;
            }
            t.L13 = t.L7 + (t.L8 || 0) - t.L9;
        }
    },

    // ==========================================
    // A105070 捐赠支出及纳税调整明细表
    // ==========================================
    A105070: {
        schema: {
            id: 'A105070',
            title: '捐赠支出及纳税调整明细表 (A105070)',
            columns: [
                {title:'行次', width:'4%'}, {title:'项 目', width:'18%'},
                {title:'账载金额(1)', width:'11%'}, {title:'以前转可扣(2)', width:'11%'}, {title:'扣除限额(3)', width:'11%'},
                {title:'税收金额(4)', width:'11%'}, {title:'调增金额(5)', width:'11%'}, {title:'调减金额(6)', width:'11%'}, {title:'以后年可扣(7)', width:'12%'}
            ],
            rows: [
                { line: '1', text: '一、非公益性捐赠', isBold: true, inputs: [{key:'L1_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L1_C5', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '2', text: '二、全额扣除的公益性捐赠', isBold: true, inputs: [{key:'L2_C1'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L2_C4'}, {key:'L2_C5', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '3', text: '三、限额扣除的公益性捐赠 (4+5+6+7)', isBold: true, inputs: [{key:'L3_C1', isReadonly:true}, {key:'L3_C2', isReadonly:true}, {key:'L3_C3', isReadonly:true}, {key:'L3_C4', isReadonly:true}, {key:'L3_C5', isReadonly:true}, {key:'L3_C6', isReadonly:true}, {key:'L3_C7', isReadonly:true}] },
                { line: '4', text: '前三年度', indent: 1, inputs: [{isAsterisk:true}, {key:'L4_C2'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L4_C6'}, {isAsterisk:true}] },
                { line: '5', text: '前二年度', indent: 1, inputs: [{isAsterisk:true}, {key:'L5_C2'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L5_C6'}, {key:'L5_C7'}] },
                { line: '6', text: '前一年度', indent: 1, inputs: [{isAsterisk:true}, {key:'L6_C2'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L6_C6'}, {key:'L6_C7'}] },
                { line: '7', text: '本年度', indent: 1, inputs: [{key:'L7_C1'}, {isAsterisk:true}, {key:'L7_C3'}, {key:'L7_C4'}, {key:'L7_C5'}, {isAsterisk:true}, {key:'L7_C7'}] },
                { line: '8', text: '合计 (1+2+3)', isBold: true, inputs: [{key:'L8_C1', isReadonly:true}, {key:'L8_C2', isReadonly:true}, {key:'L8_C3', isReadonly:true}, {key:'L8_C4', isReadonly:true}, {key:'L8_C5', isReadonly:true}, {key:'L8_C6', isReadonly:true}, {key:'L8_C7', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105070) return;
            const t = db.A105070;
            
            t.L1_C5 = t.L1_C1 || 0;
            t.L2_C5 = (t.L2_C1 || 0) - (t.L2_C4 || 0);

            // 第3行合计计算
            [1, 2, 3, 4, 5, 6, 7].forEach(c => {
                t[`L3_C${c}`] = (t[`L4_C${c}`] || 0) + (t[`L5_C${c}`] || 0) + (t[`L6_C${c}`] || 0) + (t[`L7_C${c}`] || 0);
            });

            // 第8行总计计算
            [1, 2, 3, 4, 5, 6, 7].forEach(c => {
                t[`L8_C${c}`] = (t[`L1_C${c}`] || 0) + (t[`L2_C${c}`] || 0) + (t[`L3_C${c}`] || 0);
            });
        }
    }
};