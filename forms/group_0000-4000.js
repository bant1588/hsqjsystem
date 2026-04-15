// forms/group_0000-4000.js

export const formBundle = {
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
                { line: '1', text: '一、营业收入 (填写A101010/101020/103000)', key: 'L1', isReadonly: true },
                { line: '2', text: '减：营业成本 (填写A102010/102020/103000)', key: 'L2', indent: 1, isReadonly: true },
                { line: '3', text: '减：税金及附加', key: 'L3', indent: 1 },
                { line: '4', text: '减：销售费用 (填写A104000)', key: 'L4', indent: 1, isReadonly: true },
                { line: '5', text: '减：管理费用 (填写A104000)', key: 'L5', indent: 1, isReadonly: true },
                { line: '6', text: '减：研发费用 (填写A104000)', key: 'L6', indent: 1 },
                { line: '7', text: '减：财务费用 (填写A104000)', key: 'L7', indent: 1, isReadonly: true },
                { line: '8', text: '加：其他收益', key: 'L8', indent: 1 },
                { line: '9', text: '加：投资收益 (损失以“-”号填列)', key: 'L9', indent: 1 },
                { line: '10', text: '加：净敞口套期收益 (损失以“-”号填列)', key: 'L10', indent: 1 },
                { line: '11', text: '加：公允价值变动收益 (损失以“-”号填列)', key: 'L11', indent: 1 },
                { line: '12', text: '加：信用减值损失 (损失以“-”号填列)', key: 'L12', indent: 1 },
                { line: '13', text: '加：资产减值损失 (损失以“-”号填列)', key: 'L13', indent: 1 },
                { line: '14', text: '加：资产处置收益 (损失以“-”号填列)', key: 'L14', indent: 1 },
                { line: '15', text: '二、营业利润 (亏损以“-”号填列)', key: 'L15', isBold: true, isReadonly: true },
                { line: '16', text: '加：营业外收入 (填写A101010/101020/103000)', key: 'L16', indent: 1, isReadonly: true },
                { line: '17', text: '减：营业外支出 (填写A102010/102020/103000)', key: 'L17', indent: 1, isReadonly: true },
                { line: '18', text: '三、利润总额 (15+16-17)', key: 'L18', isBold: true, isReadonly: true },
                { line: '19', text: '减：境外所得 (填写A108010)', key: 'L19', indent: 1 },
                { line: '20', text: '加：纳税调整增加额 (填写A105000)', key: 'L20', indent: 1 },
                { line: '21', text: '减：纳税调整减少额 (填写A105000)', key: 'L21', indent: 1 },
                { line: '22', text: '减：免税、减计收入及加计扣除 (22.1+22.2+…)', key: 'L22', indent: 1 },
                { line: '23', text: '加：境外应税所得抵减境内亏损 (填写A108000)', key: 'L23', indent: 1 },
                { line: '24', text: '四、纳税调整后所得 (18-19+20-21-22+23)', key: 'L24', isBold: true, isReadonly: true },
                { line: '25', text: '减：所得减免 (填写A107020)', key: 'L25', indent: 1 },
                { line: '26', text: '减：弥补以前年度亏损 (填写A106000)', key: 'L26', indent: 1 },
                { line: '27', text: '减：抵扣应纳税所得额 (填写A107030)', key: 'L27', indent: 1 },
                { line: '28', text: '五、应纳税所得额 (24-25-26-27)', key: 'L28', isBold: true, isReadonly: true },
                { line: '29', text: '税率 (25%)', key: 'L29', indent: 1 },
                { line: '30', text: '六、应纳所得税额 (28×29)', key: 'L30', isBold: true, isReadonly: true },
                { line: '31', text: '减：减免所得税额 (31.1+31.2+…)', key: 'L31', indent: 1 },
                { line: '32', text: '减：抵免所得税额 (填写A107050)', key: 'L32', indent: 1 },
                { line: '33', text: '七、应纳税额 (30-31-32)', key: 'L33', isBold: true, isReadonly: true }
            ]
        },
        logic: (db) => {
            if (!db.A100000) return;
            const t = db.A100000;
            // 跨表抓取核心数据
            t.L1 = (db.A101010?.L1 || 0) + (db.A101020?.L1 || 0) + (db.A103000?.L1 || 0);
            t.L2 = (db.A102010?.L1 || 0) + (db.A102020?.L1 || 0) + (db.A103000?.L18 || 0);
            t.L4 = db.A104000?.L26_C1 || 0;
            t.L5 = db.A104000?.L26_C3 || 0;
            t.L7 = db.A104000?.L26_C5 || 0;
            t.L16 = (db.A101010?.L16 || 0) + (db.A101020?.L35 || 0) + (db.A103000?.L10 || 0);
            t.L17 = (db.A102010?.L16 || 0) + (db.A102020?.L33 || 0) + (db.A103000?.L24 || 0);
            
            // 表内利润计算
            t.L15 = t.L1 - t.L2 - (t.L3 || 0) - t.L4 - t.L5 - (t.L6 || 0) - t.L7 + (t.L8 || 0) + (t.L9 || 0) + (t.L10 || 0) + (t.L11 || 0) + (t.L12 || 0) + (t.L13 || 0) + (t.L14 || 0);
            t.L18 = t.L15 + t.L16 - t.L17;
            t.L24 = t.L18 - (t.L19 || 0) + (t.L20 || 0) - (t.L21 || 0) - (t.L22 || 0) + (t.L23 || 0);
            t.L28 = t.L24 - (t.L25 || 0) - (t.L26 || 0) - (t.L27 || 0);
            t.L29 = 0.25; // 固定税率
            t.L30 = t.L28 * t.L29;
            t.L33 = t.L30 - (t.L31 || 0) - (t.L32 || 0);
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
                { line: '7', text: '4. 让渡资产使用权成本', key: 'L7', indent: 2 },
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
    // A104000 期间费用明细表 (复杂多列表格)
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
            // 严格按照原图片填制，包含大量的“*”占位符
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
            // 纵向合计计算 (排除被标记为星号的项)
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
    },

    // ==========================================
    // A101020 金融企业收入明细表 (精简结构)
    // ==========================================
    A101020: {
        schema: {
            id: 'A101020',
            title: '金融企业收入明细表 (A101020)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'60%'}, {title:'金 额', width:'30%'}],
            rows: [
                { line: '1', text: '一、营业收入 (2+18+27+32+33+34)', key: 'L1', isBold: true, isReadonly: true },
                { line: '2', text: '（一）银行业务收入 (3+10)', key: 'L2', indent: 1, isReadonly: true },
                { line: '3', text: '1. 利息收入', key: 'L3', indent: 2 },
                { line: '10', text: '2. 手续费及佣金收入', key: 'L10', indent: 2 },
                { line: '18', text: '（二）证券业务收入', key: 'L18', indent: 1 },
                { line: '27', text: '（三）已赚保费', key: 'L27', indent: 1 },
                { line: '32', text: '（四）其他金融业务收入', key: 'L32', indent: 1 },
                { line: '33', text: '（五）汇兑收益', key: 'L33', indent: 1 },
                { line: '34', text: '（六）其他业务收入', key: 'L34', indent: 1 },
                { line: '35', text: '二、营业外收入', key: 'L35', isBold: true }
            ]
        },
        logic: (db) => {
            if (db.A101020) {
                db.A101020.L2 = (db.A101020.L3 || 0) + (db.A101020.L10 || 0);
                db.A101020.L1 = db.A101020.L2 + (db.A101020.L18 || 0) + (db.A101020.L27 || 0) + (db.A101020.L32 || 0) + (db.A101020.L33 || 0) + (db.A101020.L34 || 0);
            }
        }
    },

    // ==========================================
    // A102020 金融企业支出明细表 (精简结构)
    // ==========================================
    A102020: {
        schema: {
            id: 'A102020',
            title: '金融企业支出明细表 (A102020)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'60%'}, {title:'金 额', width:'30%'}],
            rows: [
                { line: '1', text: '一、营业支出 (2+15+25+31+32)', key: 'L1', isBold: true, isReadonly: true },
                { line: '2', text: '（一）银行业务支出', key: 'L2', indent: 1 },
                { line: '15', text: '（二）保险业务支出', key: 'L15', indent: 1 },
                { line: '25', text: '（三）证券业务支出', key: 'L25', indent: 1 },
                { line: '31', text: '（四）其他金融业务支出', key: 'L31', indent: 1 },
                { line: '32', text: '（五）其他业务成本', key: 'L32', indent: 1 },
                { line: '33', text: '二、营业外支出', key: 'L33', isBold: true }
            ]
        },
        logic: (db) => {
            if (db.A102020) {
                db.A102020.L1 = (db.A102020.L2 || 0) + (db.A102020.L15 || 0) + (db.A102020.L25 || 0) + (db.A102020.L31 || 0) + (db.A102020.L32 || 0);
            }
        }
    },

    // ==========================================
    // A103000 事业单位收支明细表 (精简结构)
    // ==========================================
    A103000: {
        schema: {
            id: 'A103000',
            title: '事业单位、民间非营利组织收入、支出明细表 (A103000)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'60%'}, {title:'金 额', width:'30%'}],
            rows: [
                { line: '1', text: '一、事业单位收入', key: 'L1', isBold: true },
                { line: '10', text: '二、民间非营利组织收入', key: 'L10', isBold: true },
                { line: '18', text: '三、事业单位支出', key: 'L18', isBold: true },
                { line: '24', text: '四、民间非营利组织支出', key: 'L24', isBold: true }
            ]
        },
        logic: (db) => { }
    }
};