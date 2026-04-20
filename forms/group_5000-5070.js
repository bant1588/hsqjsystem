// forms/group_5000-5070.js
import { db } from '../js/engine.js';

// 用于记录自动计算结果的缓存，实现“默认公式计算也可以手动修改”
// 如果当前值等于上一次的自动计算值，说明未被用户手动修改，则允许公式覆盖；否则保留用户手动填写的值。
const calcCache = {
    A105000: {},
    A105050: {},
    A105060: {}
};

function setCalc(t, tableId, key, calcValue) {
    const c = calcCache[tableId];
    if (t[key] === undefined || t[key] === '' || t[key] === 0 || t[key] === c[key]) {
        t[key] = calcValue;
    }
    c[key] = calcValue;
}

export const formBundle = {
    // ==========================================
    // A105000 纳税调整项目明细表
    // ==========================================
    A105000: {
        schema: {
            id: 'A105000',
            title: '纳税调整项目明细表 (A105000)',
            columns: [
                { title: '行次', width: '5%', align: 'center' },
                { title: '项 目', width: '35%', align: 'center' },
                { title: '账载金额<br>1', width: '15%', align: 'center' },
                { title: '税收金额<br>2', width: '15%', align: 'center' },
                { title: '调增金额<br>3', width: '15%', align: 'center' },
                { title: '调减金额<br>4', width: '15%', align: 'center' }
            ],
            rows: [
                { line: '1', text: '一、收入类调整项目（2+3+…+8+10+11）', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L1_C3', isReadonly:true}, {key:'L1_C4', isReadonly:true}] },
                { line: '2', text: '（一）视同销售收入（填写A105010）', indent: 1, inputs: [{isAsterisk:true}, {key:'L2_C2'}, {key:'L2_C3'}, {isAsterisk:true}] },
                { line: '3', text: '（二）未按权责发生制原则确认的收入（填写A105020）', indent: 1, inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}] },
                { line: '4', text: '（三）投资收益（填写A105030）', indent: 1, inputs: [{key:'L4_C1'}, {key:'L4_C2'}, {key:'L4_C3'}, {key:'L4_C4'}] },
                { line: '5', text: '（四）按权益法核算长期股权投资对初始投资成本调整确认收益', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L5_C4'}] },
                { line: '6', text: '（五）交易性金融资产初始投资调整', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L6_C3'}, {isAsterisk:true}] },
                { line: '7', text: '（六）公允价值变动净损益', indent: 1, inputs: [{key:'L7_C1'}, {isAsterisk:true}, {key:'L7_C3'}, {key:'L7_C4'}] },
                { line: '8', text: '（七）不征税收入', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L8_C3'}, {key:'L8_C4'}] },
                { line: '9', text: '其中：专项用途财政性资金（填写A105040）', indent: 2, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L9_C3'}, {key:'L9_C4'}] },
                { line: '10', text: '（八）销售折扣、折让和退回', indent: 1, inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {key:'L10_C4'}] },
                { line: '11', text: '（九）其他', indent: 1, inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {key:'L11_C4'}] },
                
                { line: '12', text: '二、扣除类调整项目（13+14+…+24+26+27+28+29+30）', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L12_C3', isReadonly:true}, {key:'L12_C4', isReadonly:true}] },
                { line: '13', text: '（一）视同销售成本（填写A105010）', indent: 1, inputs: [{isAsterisk:true}, {key:'L13_C2'}, {isAsterisk:true}, {key:'L13_C4'}] },
                { line: '14', text: '（二）职工薪酬（填写A105050）', indent: 1, inputs: [{key:'L14_C1'}, {key:'L14_C2'}, {key:'L14_C3'}, {key:'L14_C4'}] },
                { line: '15', text: '（三）业务招待费支出', indent: 1, inputs: [{key:'L15_C1'}, {key:'L15_C2'}, {key:'L15_C3'}, {isAsterisk:true}] },
                { line: '16', text: '（四）广告费和业务宣传费支出（填写A105060）', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L16_C3'}, {key:'L16_C4'}] },
                { line: '17', text: '（五）捐赠支出（填写A105070）', indent: 1, inputs: [{key:'L17_C1'}, {key:'L17_C2'}, {key:'L17_C3'}, {key:'L17_C4'}] },
                { line: '18', text: '（六）利息支出', indent: 1, inputs: [{key:'L18_C1'}, {key:'L18_C2'}, {key:'L18_C3'}, {key:'L18_C4'}] },
                { line: '19', text: '（七）罚金、罚款和被没收财物的损失', indent: 1, inputs: [{key:'L19_C1'}, {isAsterisk:true}, {key:'L19_C3'}, {isAsterisk:true}] },
                { line: '20', text: '（八）税收滞纳金、加收利息', indent: 1, inputs: [{key:'L20_C1'}, {isAsterisk:true}, {key:'L20_C3'}, {isAsterisk:true}] },
                { line: '21', text: '（九）赞助支出', indent: 1, inputs: [{key:'L21_C1'}, {isAsterisk:true}, {key:'L21_C3'}, {isAsterisk:true}] },
                { line: '22', text: '（十）与未实现融资收益相关在当期确认的财务费用', indent: 1, inputs: [{key:'L22_C1'}, {isAsterisk:true}, {key:'L22_C3'}, {key:'L22_C4'}] },
                { line: '23', text: '（十一）佣金和手续费支出（保险企业填写A105060）', indent: 1, inputs: [{key:'L23_C1'}, {key:'L23_C2'}, {key:'L23_C3'}, {key:'L23_C4'}] },
                { line: '24', text: '（十二）不征税收入用于支出所形成的费用', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L24_C3'}, {isAsterisk:true}] },
                { line: '25', text: '其中：专项用途财政性资金用于支出所形成的费用（填写A105040）', indent: 2, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L25_C3'}, {isAsterisk:true}] },
                { line: '26', text: '（十三）跨期扣除项目', indent: 1, inputs: [{key:'L26_C1'}, {key:'L26_C2'}, {key:'L26_C3'}, {key:'L26_C4'}] },
                { line: '27', text: '（十四）与取得收入无关的支出', indent: 1, inputs: [{key:'L27_C1'}, {isAsterisk:true}, {key:'L27_C3'}, {isAsterisk:true}] },
                { line: '28', text: '（十五）境外所得分摊的共同支出', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L28_C3'}, {isAsterisk:true}] },
                { line: '29', text: '（十六）党组织工作经费', indent: 1, inputs: [{key:'L29_C1'}, {key:'L29_C2'}, {key:'L29_C3'}, {key:'L29_C4'}] },
                { line: '30', text: '（十七）其他', indent: 1, inputs: [{key:'L30_C1'}, {key:'L30_C2'}, {key:'L30_C3'}, {key:'L30_C4'}] },

                { line: '31', text: '三、资产类调整项目（32+33+34+35）', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L31_C3', isReadonly:true}, {key:'L31_C4', isReadonly:true}] },
                { line: '32', text: '（一）资产折旧、摊销（填写A105080）', indent: 1, inputs: [{key:'L32_C1'}, {key:'L32_C2'}, {key:'L32_C3'}, {key:'L32_C4'}] },
                { line: '33', text: '（二）资产减值准备金', indent: 1, inputs: [{key:'L33_C1'}, {isAsterisk:true}, {key:'L33_C3'}, {key:'L33_C4'}] },
                { line: '34', text: '（三）资产损失（填写A105090）', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L34_C3'}, {key:'L34_C4'}] },
                { line: '35', text: '（四）其他', indent: 1, inputs: [{key:'L35_C1'}, {key:'L35_C2'}, {key:'L35_C3'}, {key:'L35_C4'}] },

                { line: '36', text: '四、特殊事项调整项目（37+38+…+43）', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L36_C3', isReadonly:true}, {key:'L36_C4', isReadonly:true}] },
                { line: '37', text: '（一）企业重组及递延纳税事项（填写A105100）', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L37_C3'}, {key:'L37_C4'}] },
                { line: '38', text: '（二）政策性搬迁（填写A105110）', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L38_C3'}, {key:'L38_C4'}] },
                { line: '39', text: '（三）特殊行业准备金（39.1+39.2+39.4+39.5+39.6+39.7）', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L39_C3', isReadonly:true}, {key:'L39_C4', isReadonly:true}] },
                { line: '39.1', text: '1.保险公司保障基金', indent: 2, inputs: [{key:'L39_1_C1'}, {key:'L39_1_C2'}, {key:'L39_1_C3'}, {key:'L39_1_C4'}] },
                { line: '39.2', text: '2.保险公司准备金', indent: 2, inputs: [{key:'L39_2_C1'}, {key:'L39_2_C2'}, {key:'L39_2_C3'}, {key:'L39_2_C4'}] },
                { line: '39.3', text: '其中：已发生未报案未决赔款准备金', indent: 3, inputs: [{key:'L39_3_C1'}, {key:'L39_3_C2'}, {key:'L39_3_C3'}, {key:'L39_3_C4'}] },
                { line: '39.4', text: '3.证券行业准备金', indent: 2, inputs: [{key:'L39_4_C1'}, {key:'L39_4_C2'}, {key:'L39_4_C3'}, {key:'L39_4_C4'}] },
                { line: '39.5', text: '4.期货行业准备金', indent: 2, inputs: [{key:'L39_5_C1'}, {key:'L39_5_C2'}, {key:'L39_5_C3'}, {key:'L39_5_C4'}] },
                { line: '39.6', text: '5.中小企业融资（信用）担保机构准备金', indent: 2, inputs: [{key:'L39_6_C1'}, {key:'L39_6_C2'}, {key:'L39_6_C3'}, {key:'L39_6_C4'}] },
                { line: '39.7', text: '6.金融企业、小额贷款公司准备金（填写A105120）', indent: 2, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L39_7_C3'}, {key:'L39_7_C4'}] },
                { line: '40', text: '（四）房地产开发企业特定业务计算的纳税调整额（填写A105010）', indent: 1, inputs: [{isAsterisk:true}, {key:'L40_C2'}, {key:'L40_C3'}, {key:'L40_C4'}] },
                { line: '41', text: '（五）合伙企业法人合伙人应分得的应纳税所得额', indent: 1, inputs: [{key:'L41_C1'}, {key:'L41_C2'}, {key:'L41_C3'}, {key:'L41_C4'}] },
                { line: '42', text: '（六）发行永续债利息支出', indent: 1, inputs: [{key:'L42_C1'}, {key:'L42_C2'}, {key:'L42_C3'}, {key:'L42_C4'}] },
                { line: '43', text: '（七）其他', indent: 1, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L43_C3'}, {key:'L43_C4'}] },
                
                { line: '44', text: '五、特别纳税调整应税所得', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L44_C3'}, {key:'L44_C4'}] },
                { line: '45', text: '六、其他', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L45_C3'}, {key:'L45_C4'}] },
                { line: '46', text: '合计（1+12+31+36+44+45）', isBold: true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L46_C3', isReadonly:true}, {key:'L46_C4', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105000) return;
            const t = db.A105000;
            const t_id = 'A105000';
            
            setCalc(t, t_id, 'L13_C2', db.A105010?.L11_C1 !== undefined ? db.A105010.L11_C1 : (db.A105010?.L11 || 0));
            setCalc(t, t_id, 'L13_C4', db.A105010?.L11_C2 !== undefined ? Math.abs(db.A105010.L11_C2) : 0);

            setCalc(t, t_id, 'L14_C1', db.A105050?.L13_C1 || 0);
            setCalc(t, t_id, 'L14_C2', db.A105050?.L13_C5 || 0);
            const l14_adj = db.A105050?.L13_C6 || 0;
            setCalc(t, t_id, 'L14_C3', l14_adj >= 0 ? l14_adj : 0);
            setCalc(t, t_id, 'L14_C4', l14_adj < 0 ? Math.abs(l14_adj) : 0);

            const calc_L15_C2 = Math.min(((db.A100000?.L1 || 0) * 0.005), ((t.L15_C1 || 0) * 0.6));
            setCalc(t, t_id, 'L15_C2', calc_L15_C2);
            setCalc(t, t_id, 'L15_C3', (t.L15_C1 || 0) - (t.L15_C2 || 0));

            const a105060_adj = db.A105060?.L12_C1 !== undefined ? db.A105060.L12_C1 : (db.A105060?.L7 || 0);
            setCalc(t, t_id, 'L16_C3', a105060_adj >= 0 ? a105060_adj : 0);
            setCalc(t, t_id, 'L16_C4', a105060_adj < 0 ? Math.abs(a105060_adj) : 0);

            setCalc(t, t_id, 'L17_C1', (db.A105070?.L11_C1 !== undefined) ? db.A105070.L11_C1 : (db.A105070?.L5_C1 || 0));
            setCalc(t, t_id, 'L17_C2', (db.A105070?.L11_C4 !== undefined) ? db.A105070.L11_C4 : (db.A105070?.L5_C4 !== undefined ? db.A105070.L5_C4 : (db.A105070?.L5_C3 || 0)));
            setCalc(t, t_id, 'L17_C3', (db.A105070?.L11_C5 !== undefined) ? db.A105070.L11_C5 : (db.A105070?.L5_C5 !== undefined ? db.A105070.L5_C5 : (db.A105070?.L5_C4 > 0 ? db.A105070.L5_C4 : 0)));
            setCalc(t, t_id, 'L17_C4', (db.A105070?.L11_C6 !== undefined) ? db.A105070.L11_C6 : (db.A105070?.L5_C6 !== undefined ? Math.abs(db.A105070.L5_C6) : (db.A105070?.L5_C4 < 0 ? Math.abs(db.A105070.L5_C4) : 0)));

            const l18_c1 = t.L18_C1 || 0;
            const l18_c2 = t.L18_C2 || 0;
            setCalc(t, t_id, 'L18_C3', l18_c1 >= l18_c2 ? l18_c1 - l18_c2 : 0);
            setCalc(t, t_id, 'L18_C4', l18_c1 < l18_c2 ? Math.abs(l18_c1 - l18_c2) : 0);

            setCalc(t, t_id, 'L19_C3', t.L19_C1 || 0);
            setCalc(t, t_id, 'L20_C3', t.L20_C1 || 0);
            setCalc(t, t_id, 'L27_C3', t.L27_C1 || 0);
            const l30_c1 = t.L30_C1 || 0;
            const l30_c2 = t.L30_C2 || 0;
            setCalc(t, t_id, 'L30_C3', l30_c1 >= l30_c2 ? l30_c1 - l30_c2 : 0);
            setCalc(t, t_id, 'L30_C4', l30_c1 < l30_c2 ? Math.abs(l30_c1 - l30_c2) : 0);

            if (db.A105080) {
                setCalc(t, t_id, 'L32_C1', db.A105080.L30_C2 !== undefined ? db.A105080.L30_C2 : (db.A105080.L30_C1 || 0));
                setCalc(t, t_id, 'L32_C2', db.A105080.L1_C5 || 0);
                let a105080_adj = (t.L32_C1 || 0) - (t.L32_C2 || 0);
                setCalc(t, t_id, 'L32_C3', a105080_adj >= 0 ? a105080_adj : 0);
                setCalc(t, t_id, 'L32_C4', a105080_adj < 0 ? Math.abs(a105080_adj) : 0);
            }

            const sumCols = (colIndex, rowsArr) => {
                let sum = 0;
                for (let r of rowsArr) sum += (t[`L${r}_C${colIndex}`] || 0);
                return sum;
            };

            t.L1_C3 = sumCols(3, [2, 3, 4, 5, 6, 7, 8, 10, 11]);
            t.L1_C4 = sumCols(4, [2, 3, 4, 5, 6, 7, 8, 10, 11]);
            t.L12_C3 = sumCols(3, [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30]);
            t.L12_C4 = sumCols(4, [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30]);
            t.L31_C3 = sumCols(3, [32, 33, 34, 35]);
            t.L31_C4 = sumCols(4, [32, 33, 34, 35]);
            t.L39_C3 = sumCols(3, ['39_1', '39_2', '39_4', '39_5', '39_6', '39_7']);
            t.L39_C4 = sumCols(4, ['39_1', '39_2', '39_4', '39_5', '39_6', '39_7']);
            t.L36_C3 = sumCols(3, [37, 38, 39, 40, 41, 42, 43]);
            t.L36_C4 = sumCols(4, [37, 38, 39, 40, 41, 42, 43]);
            t.L46_C3 = (t.L1_C3 || 0) + (t.L12_C3 || 0) + (t.L31_C3 || 0) + (t.L36_C3 || 0) + (t.L44_C3 || 0) + (t.L45_C3 || 0);
            t.L46_C4 = (t.L1_C4 || 0) + (t.L12_C4 || 0) + (t.L31_C4 || 0) + (t.L36_C4 || 0) + (t.L44_C4 || 0) + (t.L45_C4 || 0);
        }
    },

    // ==========================================
    // A105010 视同销售和房地产开发企业特定业务纳税调整明细表
    // ==========================================
    A105010: {
        schema: {
            id: 'A105010',
            title: '视同销售和房地产开发企业特定业务纳税调整明细表 (A105010)',
            columns: [
                { title: '行次', width: '10%', align: 'center' },
                { title: '项目', width: '60%', align: 'center' },
                { title: '金额', width: '30%', align: 'center' }
            ],
            rows: [
                { line: '1', text: '一、视同销售收入（2+3+…+10）', key: 'L1', isBold: true, isReadonly: true },
                { line: '2', text: '（一）非货币性资产交换视同销售收入', key: 'L2', indent: 1 },
                { line: '3', text: '（二）用于市场推广或销售视同销售收入', key: 'L3', indent: 1 },
                { line: '4', text: '（三）用于交际应酬视同销售收入', key: 'L4', indent: 1 },
                { line: '5', text: '（四）用于职工奖励或福利视同销售收入', key: 'L5', indent: 1 },
                { line: '6', text: '（五）用于股息分配视同销售收入', key: 'L6', indent: 1 },
                { line: '7', text: '（六）用于对外捐赠视同销售收入', key: 'L7', indent: 1 },
                { line: '8', text: '（七）用于对外投资项目视同销售收入', key: 'L8', indent: 1 },
                { line: '9', text: '（八）提供劳务视同销售收入', key: 'L9', indent: 1 },
                { line: '10', text: '（九）其他视同销售收入', key: 'L10', indent: 1 },
                { line: '11', text: '二、视同销售成本（12+13+…+20）', key: 'L11', isBold: true, isReadonly: true },
                { line: '12', text: '（一）非货币性资产交换视同销售成本', key: 'L12', indent: 1 },
                { line: '13', text: '（二）用于市场推广或销售视同销售成本', key: 'L13', indent: 1 },
                { line: '14', text: '（三）用于交际应酬视同销售成本', key: 'L14', indent: 1 },
                { line: '15', text: '（四）用于职工奖励或福利视同销售成本', key: 'L15', indent: 1 },
                { line: '16', text: '（五）用于股息分配视同销售成本', key: 'L16', indent: 1 },
                { line: '17', text: '（六）用于对外捐赠视同销售成本', key: 'L17', indent: 1 },
                { line: '18', text: '（七）用于对外投资项目视同销售成本', key: 'L18', indent: 1 },
                { line: '19', text: '（八）提供劳务视同销售成本', key: 'L19', indent: 1 },
                { line: '20', text: '（九）其他视同销售成本', key: 'L20', indent: 1 },
                { line: '21', text: '三、房地产企业销售未完工开发产品特定业务计算的预计利润额（22-23+24）', key: 'L21', isBold: true, isReadonly: true },
                { line: '22', text: '（一）销售未完工开发产品取得的收入', key: 'L22', indent: 1 },
                { line: '23', text: '（二）销售未完工开发产品实际发生的营业税金及附加、土地增值税', key: 'L23', indent: 1 },
                { line: '24', text: '（三）其他', key: 'L24', indent: 1 },
                { line: '25', text: '四、房地产企业销售的未完工开发产品实际销售收入结转实际销售成本特定业务计算的实际利润额（26-27-28+29）', key: 'L25', isBold: true, isReadonly: true },
                { line: '26', text: '（一）实际销售收入', key: 'L26', indent: 1 },
                { line: '27', text: '（二）实际销售成本', key: 'L27', indent: 1 },
                { line: '28', text: '（三）实际发生的营业税金及附加、土地增值税', key: 'L28', indent: 1 },
                { line: '29', text: '（四）其他', key: 'L29', indent: 1 }
            ]
        },
        logic: (db) => {
            if (!db.A105010) return;
            const t = db.A105010;
            let sumIn = 0, sumOut = 0;
            for(let i=2; i<=10; i++) sumIn += t[`L${i}`] || 0;
            for(let i=12; i<=20; i++) sumOut += t[`L${i}`] || 0;
            t.L1 = sumIn;
            t.L11 = sumOut;
            t.L21 = (t.L22 || 0) - (t.L23 || 0) + (t.L24 || 0);
            t.L25 = (t.L26 || 0) - (t.L27 || 0) - (t.L28 || 0) + (t.L29 || 0);
        }
    },

    // ==========================================
    // A105020 未按权责发生制确认收入纳税调整明细表
    // ==========================================
    A105020: {
        schema: {
            id: 'A105020',
            title: '未按权责发生制确认收入纳税调整明细表 (A105020)',
            headers: [
                [
                    { title: '行次', rowspan: 2, width: '5%', align: 'center' },
                    { title: '项    目', rowspan: 2, width: '35%', align: 'center' },
                    { title: '合同金额（交<br>易金额）', rowspan: 2, width: '10%', align: 'center' },
                    { title: '账载金额', colspan: 2, align: 'center' },
                    { title: '税收金额', colspan: 2, align: 'center' },
                    { title: '纳税调整<br>金额', rowspan: 2, width: '10%', align: 'center' }
                ],
                [
                    { title: '本年', align: 'center' },
                    { title: '累计', align: 'center' },
                    { title: '本年', align: 'center' },
                    { title: '累计', align: 'center' }
                ],
                [
                    { title: '', align: 'center' },
                    { title: '', align: 'center' },
                    { title: '1', align: 'center' },
                    { title: '2', align: 'center' },
                    { title: '3', align: 'center' },
                    { title: '4', align: 'center' },
                    { title: '5', align: 'center' },
                    { title: '6 (4-2)', align: 'center' }
                ]
            ],
            rows: [
                { line: '1', text: '一、跨期收取的租金、利息、特许权使用费收入（2+3+4）', isBold: true, inputs: [1,2,3,4,5,6].map(c => ({key:`L1_C${c}`, isReadonly:true})) },
                { line: '2', text: '（一）租金', indent: 1, inputs: [1,2,3,4,5,6].map(c => c===6 ? {key:`L2_C${c}`, isReadonly:true} : {key:`L2_C${c}`}) },
                { line: '3', text: '（二）利息', indent: 1, inputs: [1,2,3,4,5,6].map(c => c===6 ? {key:`L3_C${c}`, isReadonly:true} : {key:`L3_C${c}`}) },
                { line: '4', text: '（三）特许权使用费', indent: 1, inputs: [1,2,3,4,5,6].map(c => c===6 ? {key:`L4_C${c}`, isReadonly:true} : {key:`L4_C${c}`}) },
                { line: '5', text: '二、分期确认收入（6+7+8）', isBold: true, inputs: [1,2,3,4,5,6].map(c => ({key:`L5_C${c}`, isReadonly:true})) },
                { line: '6', text: '（一）分期收款方式销售货物收入', indent: 1, inputs: [1,2,3,4,5,6].map(c => c===6 ? {key:`L6_C${c}`, isReadonly:true} : {key:`L6_C${c}`}) },
                { line: '7', text: '（二）持续时间超过12个月的建造合同收入', indent: 1, inputs: [1,2,3,4,5,6].map(c => c===6 ? {key:`L7_C${c}`, isReadonly:true} : {key:`L7_C${c}`}) },
                { line: '8', text: '（三）其他分期确认收入', indent: 1, inputs: [1,2,3,4,5,6].map(c => c===6 ? {key:`L8_C${c}`, isReadonly:true} : {key:`L8_C${c}`}) },
                { line: '9', text: '三、政府补助递延收入（10+11+12）', isBold: true, inputs: [1,2,3,4,5,6].map(c => ({key:`L9_C${c}`, isReadonly:true})) },
                { line: '10', text: '（一）与收益相关的政府补助', indent: 1, inputs: [1,2,3,4,5,6].map(c => c===6 ? {key:`L10_C${c}`, isReadonly:true} : {key:`L10_C${c}`}) },
                { line: '11', text: '（二）与资产相关的政府补助', indent: 1, inputs: [1,2,3,4,5,6].map(c => c===6 ? {key:`L11_C${c}`, isReadonly:true} : {key:`L11_C${c}`}) },
                { line: '12', text: '（三）其他', indent: 1, inputs: [1,2,3,4,5,6].map(c => c===6 ? {key:`L12_C${c}`, isReadonly:true} : {key:`L12_C${c}`}) },
                { line: '13', text: '四、其他未按权责发生制确认收入', isBold: true, inputs: [1,2,3,4,5,6].map(c => c===6 ? {key:`L13_C${c}`, isReadonly:true} : {key:`L13_C${c}`}) },
                { line: '14', text: '合计（1+5+9+13）', isBold: true, inputs: [1,2,3,4,5,6].map(c => ({key:`L14_C${c}`, isReadonly:true})) }
            ]
        },
        logic: (db) => {
            if (!db.A105020) return;
            const t = db.A105020;

            const sumCols = (colIndex, rowsArr) => {
                let sum = 0;
                for (let r of rowsArr) sum += (t[`L${r}_C${colIndex}`] || 0);
                return sum;
            };

            for (let c = 1; c <= 5; c++) {
                t[`L1_C${c}`] = sumCols(c, [2, 3, 4]);
                t[`L5_C${c}`] = sumCols(c, [6, 7, 8]);
                t[`L9_C${c}`] = sumCols(c, [10, 11, 12]);
                t[`L14_C${c}`] = sumCols(c, [1, 5, 9, 13]);
            }

            for (let i = 1; i <= 14; i++) {
                t[`L${i}_C6`] = (t[`L${i}_C4`] || 0) - (t[`L${i}_C2`] || 0);
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
            headers: [
                [
                    { title: '行次', rowspan: 2, width: '4%', align: 'center' },
                    { title: '项  目', rowspan: 2, width: '16%', align: 'center' },
                    { title: '持有收益', colspan: 3, align: 'center' },
                    { title: '处置收益', colspan: 7, align: 'center' },
                    { title: '纳税调整<br>金额', rowspan: 2, width: '8%', align: 'center' }
                ],
                [
                    { title: '账载金<br>额', align: 'center' },
                    { title: '税收金<br>额', align: 'center' },
                    { title: '纳税调<br>整金额', align: 'center' },
                    { title: '会计确<br>认的处<br>置收入', align: 'center' },
                    { title: '税收计<br>算的处<br>置收入', align: 'center' },
                    { title: '处置投<br>资的账<br>面价值', align: 'center' },
                    { title: '处置投<br>资的计<br>税基础', align: 'center' },
                    { title: '会计确<br>认的处置<br>所得或损失', align: 'center' },
                    { title: '税收计<br>算的处<br>置所得', align: 'center' },
                    { title: '纳税调<br>整金额', align: 'center' }
                ],
                [
                    { title: '', align: 'center' }, { title: '', align: 'center' },
                    { title: '1', align: 'center' }, { title: '2', align: 'center' }, { title: '3(2-1)', align: 'center' },
                    { title: '4', align: 'center' }, { title: '5', align: 'center' }, { title: '6', align: 'center' },
                    { title: '7', align: 'center' }, { title: '8(4-6)', align: 'center' }, { title: '9(5-7)', align: 'center' },
                    { title: '10(9-8)', align: 'center' }, { title: '11(3+10)', align: 'center' }
                ]
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
                { line: '10', text: '合计（1+2+3+4+5+6+7+8+9）', isBold: true, inputs: [{key:'L10_C1', isReadonly:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {key:'L10_C8', isReadonly:true}, {key:'L10_C9', isReadonly:true}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}] }
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
            for (let j = 1; j <= 11; j++) {
                let sum = 0;
                for (let i = 1; i <= 9; i++) sum += (t[`L${i}_C${j}`] || 0);
                t[`L10_C${j}`] = sum;
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
            headers: [
                [
                    { title: '行次', rowspan: 2, width: '4%', align: 'center' },
                    { title: '项目', rowspan: 2, width: '8%', align: 'center' },
                    { title: '取得<br>年度', rowspan: 2, width: '6%', align: 'center' },
                    { title: '财政性<br>资金', rowspan: 2, width: '8%', align: 'center' },
                    { title: '其中：符合不征税<br>收入条件的财政性<br>资金', colspan: 2, align: 'center' },
                    { title: '以前年度支出情况', colspan: 5, align: 'center' },
                    { title: '本年支出情况', colspan: 2, align: 'center' },
                    { title: '本年结余情况', colspan: 3, align: 'center' }
                ],
                [
                    { title: '金额', align: 'center' },
                    { title: '其中：计<br>入本年<br>损益的<br>金额', align: 'center' },
                    { title: '前五年<br>度', align: 'center' },
                    { title: '前四年<br>度', align: 'center' },
                    { title: '前三年<br>度', align: 'center' },
                    { title: '前二年<br>度', align: 'center' },
                    { title: '前一年<br>度', align: 'center' },
                    { title: '支出金<br>额', align: 'center' },
                    { title: '其中：费<br>用化支<br>出金额', align: 'center' },
                    { title: '结余金<br>额', align: 'center' },
                    { title: '其中：上<br>缴财政<br>金额', align: 'center' },
                    { title: '应计入<br>本年应<br>税收入<br>金额', align: 'center' }
                ],
                [
                    { title: '', align: 'center' }, { title: '', align: 'center' },
                    { title: '1', align: 'center' }, { title: '2', align: 'center' }, { title: '3', align: 'center' },
                    { title: '4', align: 'center' }, { title: '5', align: 'center' }, { title: '6', align: 'center' }, { title: '7', align: 'center' },
                    { title: '8', align: 'center' }, { title: '9', align: 'center' }, { title: '10', align: 'center' }, { title: '11', align: 'center' },
                    { title: '12', align: 'center' }, { title: '13', align: 'center' }, { title: '14', align: 'center' }
                ]
            ],
            rows: [ 
                { line: '1', text: '前五年度', inputs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(c => ({key: `L1_C${c}`})) },
                { line: '2', text: '前四年度', inputs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(c => c === 5 ? {isAsterisk: true} : {key: `L2_C${c}`}) },
                { line: '3', text: '前三年度', inputs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(c => (c===5||c===6) ? {isAsterisk: true} : {key: `L3_C${c}`}) },
                { line: '4', text: '前二年度', inputs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(c => (c>=5&&c<=7) ? {isAsterisk: true} : {key: `L4_C${c}`}) },
                { line: '5', text: '前一年度', inputs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(c => (c>=5&&c<=8) ? {isAsterisk: true} : {key: `L5_C${c}`}) },
                { line: '6', text: '本  年', inputs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(c => (c>=5&&c<=9) ? {isAsterisk: true} : {key: `L6_C${c}`}) },
                { line: '7', text: '合计（1+2+…+6）', isBold: true, inputs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(c => (c===1||(c>=5&&c<=9)) ? {isAsterisk: true} : {key: `L7_C${c}`, isReadonly: true}) }
            ]
        },
        logic: (db) => {
            if (!db.A105040) return;
            const t = db.A105040;
            for (let j of [2, 3, 4, 10, 11, 12, 13, 14]) {
                let sum = 0;
                for (let i = 1; i <= 6; i++) sum += (t[`L${i}_C${j}`] || 0);
                t[`L7_C${j}`] = sum;
            }
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
                { title: '行次', width: '5%', align: 'center' },
                { title: '项 目', width: '25%', align: 'center' },
                { title: '账载金额<br>1', width: '10%', align: 'center' },
                { title: '实际发生额<br>2', width: '10%', align: 'center' },
                { title: '税收规定<br>扣除率<br>3', width: '10%', align: 'center' },
                { title: '以前年度累计<br>结转扣除额<br>4', width: '10%', align: 'center' },
                { title: '税收金额<br>5', width: '10%', align: 'center' },
                { title: '纳税调整<br>金额<br>6 (1-5)', width: '10%', align: 'center' },
                { title: '累计结转以后<br>年度扣除额<br>7 (1+4-5)', width: '10%', align: 'center' }
            ],
            rows: [
                { line: '1', text: '一、工资薪金支出', inputs: [{key:'L1_C1'}, {key:'L1_C2'}, {key:'L1_C3'}, {isAsterisk:true}, {key:'L1_C5'}, {key:'L1_C6'}, {isAsterisk:true}] },
                { line: '2', text: '其中：股权激励', indent: 1, inputs: [{key:'L2_C1'}, {key:'L2_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L2_C5'}, {key:'L2_C6'}, {isAsterisk:true}] },
                { line: '3', text: '二、职工福利费支出', inputs: [{key:'L3_C1'}, {key:'L3_C2'}, {key:'L3_C3'}, {isAsterisk:true}, {key:'L3_C5'}, {key:'L3_C6'}, {isAsterisk:true}] },
                { line: '4', text: '三、职工教育经费支出', inputs: [{key:'L4_C1', isReadonly:true}, {key:'L4_C2', isReadonly:true}, {isAsterisk:true}, {key:'L4_C4', isReadonly:true}, {key:'L4_C5', isReadonly:true}, {key:'L4_C6', isReadonly:true}, {key:'L4_C7', isReadonly:true}] },
                { line: '5', text: '其中：按税收规定比例扣除的职工教育经费', indent: 1, inputs: [{key:'L5_C1'}, {key:'L5_C2'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6'}, {key:'L5_C7'}] },
                { line: '6', text: '按税收规定全额扣除的职工培训费用', indent: 2, inputs: [{key:'L6_C1'}, {key:'L6_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L6_C5'}, {key:'L6_C6'}, {isAsterisk:true}] },
                { line: '7', text: '四、工会经费支出', inputs: [{key:'L7_C1'}, {key:'L7_C2'}, {key:'L7_C3'}, {isAsterisk:true}, {key:'L7_C5'}, {key:'L7_C6'}, {isAsterisk:true}] },
                { line: '8', text: '五、各类基本社会保障性缴款', inputs: [{key:'L8_C1'}, {key:'L8_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L8_C5'}, {key:'L8_C6'}, {isAsterisk:true}] },
                { line: '9', text: '六、住房公积金', inputs: [{key:'L9_C1'}, {key:'L9_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L9_C5'}, {key:'L9_C6'}, {isAsterisk:true}] },
                { line: '10', text: '七、补充养老保险', inputs: [{key:'L10_C1'}, {key:'L10_C2'}, {key:'L10_C3'}, {isAsterisk:true}, {key:'L10_C5'}, {key:'L10_C6'}, {isAsterisk:true}] },
                { line: '11', text: '八、补充医疗保险', inputs: [{key:'L11_C1'}, {key:'L11_C2'}, {key:'L11_C3'}, {isAsterisk:true}, {key:'L11_C5'}, {key:'L11_C6'}, {isAsterisk:true}] },
                { line: '12', text: '九、其他', inputs: [{key:'L12_C1'}, {key:'L12_C2'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L12_C5'}, {key:'L12_C6'}, {isAsterisk:true}] },
                { line: '13', text: '合计（1+3+4+7+8+9+10+11+12）', isBold: true, inputs: [{key:'L13_C1', isReadonly:true}, {key:'L13_C2', isReadonly:true}, {isAsterisk:true}, {key:'L13_C4', isReadonly:true}, {key:'L13_C5', isReadonly:true}, {key:'L13_C6', isReadonly:true}, {key:'L13_C7', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105050) return;
            const t = db.A105050;
            const t_id = 'A105050';
            
            // 1. 设置默认扣除率 (第3列)
            setCalc(t, t_id, 'L1_C3', 0.14);
            setCalc(t, t_id, 'L3_C3', 0.14);
            setCalc(t, t_id, 'L5_C3', 0.08);
            setCalc(t, t_id, 'L7_C3', 0.02);
            setCalc(t, t_id, 'L10_C3', 0.05);
            setCalc(t, t_id, 'L11_C3', 0.05);

            // 2. 第 5 列计算逻辑 (只有账载金额 L1_C1 > 0 时才计算限额，否则为0)
            const baseSalary = (t.L1_C1 && t.L1_C1 !== 0) ? (t.L1_C1 || 0) : 0;
            
            // 1行次5列 = 1行次1列
            setCalc(t, t_id, 'L1_C5', baseSalary);

            if (baseSalary > 0) {
                // 3行次5列=min(1行次5列*14%, 3行次1列)
                setCalc(t, t_id, 'L3_C5', Math.min(baseSalary * 0.14, t.L3_C1 || 0));
                // 5行次5列=min(1行次5列*8%, 5行次1列)
                setCalc(t, t_id, 'L5_C5', Math.min(baseSalary * 0.08, t.L5_C1 || 0));
                // 6行次5列=6行次1列
                setCalc(t, t_id, 'L6_C5', t.L6_C1 || 0);
                // 7行次5列=min(1行次5列*2%, 7行次1列)
                setCalc(t, t_id, 'L7_C5', Math.min(baseSalary * 0.02, t.L7_C1 || 0));
                // 8行次5列=8行次1列
                setCalc(t, t_id, 'L8_C5', t.L8_C1 || 0);
                // 9行次5列=9行次1列
                setCalc(t, t_id, 'L9_C5', t.L9_C1 || 0);
                // 10行次5列=min(1行次5列*5%, 10行次1列)
                setCalc(t, t_id, 'L10_C5', Math.min(baseSalary * 0.05, t.L10_C1 || 0));
                // 11行次5列=min(1行次5列*5%， 11行次1列)
                setCalc(t, t_id, 'L11_C5', Math.min(baseSalary * 0.05, t.L11_C1 || 0));
                // 12行次5列=12行次1列
                setCalc(t, t_id, 'L12_C5', t.L12_C1 || 0);
            } else {
                [1, 3, 5, 6, 7, 8, 9, 10, 11, 12].forEach(i => setCalc(t, t_id, `L${i}_C5`, 0));
            }

            // 3. 汇总项与调增计算
            t.L4_C1 = (t.L5_C1 || 0) + (t.L6_C1 || 0);
            t.L4_C2 = (t.L5_C2 || 0) + (t.L6_C2 || 0);
            t.L4_C4 = (t.L5_C4 || 0);
            t.L4_C5 = (t.L5_C5 || 0) + (t.L6_C5 || 0);

            [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12].forEach(i => {
                setCalc(t, t_id, `L${i}_C6`, (t[`L${i}_C1`] || 0) - (t[`L${i}_C5`] || 0));
            });
            t.L4_C6 = (t.L4_C1 || 0) - (t.L4_C5 || 0);
            setCalc(t, t_id, 'L5_C7', (t.L5_C1 || 0) + (t.L5_C4 || 0) - (t.L5_C5 || 0));
            t.L4_C7 = t.L5_C7;

            const calcTotal = (col) => {
                return (t[`L1_C${col}`]||0) + (t[`L3_C${col}`]||0) + (t[`L4_C${col}`]||0) + 
                       (t[`L7_C${col}`]||0) + (t[`L8_C${col}`]||0) + (t[`L9_C${col}`]||0) + 
                       (t[`L10_C${col}`]||0) + (t[`L11_C${col}`]||0) + (t[`L12_C${col}`]||0);
            };
            t.L13_C1 = calcTotal(1);
            t.L13_C2 = calcTotal(2);
            t.L13_C4 = calcTotal(4);
            t.L13_C5 = calcTotal(5);
            t.L13_C6 = calcTotal(6);
            t.L13_C7 = calcTotal(7);
        }
    },

    // ==========================================
    // A105060 广告费和业务宣传费等跨年度纳税调整明细表
    // ==========================================
    A105060: {
        schema: {
            id: 'A105060',
            title: '广告费和业务宣传费跨年度纳税调整明细表 (A105060)',
            columns: [
                { title: '行次', width: '10%', align: 'center' }, 
                { title: '项  目', width: '60%', align: 'center' }, 
                { title: '金  额', width: '30%', align: 'center' }
            ],
            rows: [ 
                { line: '1', text: '一、本年广告费和业务宣传费支出', inputs: [{key:'L1_C1'}] },
                { line: '2', text: '减：不允许扣除的广告费和业务宣传费支出', indent: 1, inputs: [{key:'L2_C1'}] },
                { line: '3', text: '二、本年符合条件的广告费和业务宣传费支出（1-2）', inputs: [{key:'L3_C1', isReadonly:true}] },
                { line: '4', text: '三、本年计算广告费和业务宣传费扣除限额的销售（营业）收入', inputs: [{key:'L4_C1'}] },
                { line: '5', text: '乘：税收规定扣除率', indent: 1, inputs: [{key:'L5_C1'}] },
                { line: '6', text: '四、本企业计算的广告费和业务宣传费扣除限额（4×5）', inputs: [{key:'L6_C1', isReadonly:true}] },
                { line: '7', text: '五、本年结转以后年度扣除额（3>6，本行=3-6；3≤6，本行=0）', inputs: [{key:'L7_C1', isReadonly:true}] },
                { line: '8', text: '加：以前年度累计结转扣除额', indent: 1, inputs: [{key:'L8_C1'}] },
                { line: '9', text: '减：本年扣除的以前年度结转额[3>6，本行=0；3≤6，本行=8与(6-3)孰小值]', indent: 1, inputs: [{key:'L9_C1', isReadonly:true}] },
                { line: '10', text: '六、按照分摊协议归集至其他关联方的广告费和业务宣传费（10≤3与6孰小值）', inputs: [{key:'L10_C1'}] },
                { line: '11', text: '按照分摊协议从其他关联方归集至本企业的广告费和业务宣传费', indent: 1, inputs: [{key:'L11_C1'}] },
                { line: '12', text: '七、本年广告费和业务宣传费支出纳税调整金额（3>6，本行=2+3-6-10-11；3≤6，本行=2-10-11-9）', inputs: [{key:'L12_C1', isReadonly:true}] },
                { line: '13', text: '八、累计结转以后年度扣除额（7+8-9）', inputs: [{key:'L13_C1', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105060) return;
            const t = db.A105060;
            const t_id = 'A105060';
            setCalc(t, t_id, 'L4_C1', db.A100000?.L1 || 0);
            setCalc(t, t_id, 'L5_C1', 0.15);
            t.L3_C1 = (t.L1_C1 || 0) - (t.L2_C1 || 0);
            t.L6_C1 = (t.L4_C1 || 0) * (t.L5_C1 || 0);
            const l3 = t.L3_C1 || 0, l6 = t.L6_C1 || 0, l8 = t.L8_C1 || 0;
            t.L7_C1 = l3 > l6 ? (l3 - l6) : 0;
            t.L9_C1 = l3 > l6 ? 0 : Math.min(l8, l6 - l3);
            const l2 = t.L2_C1 || 0, l10 = t.L10_C1 || 0, l11 = t.L11_C1 || 0, l9 = t.L9_C1 || 0;
            t.L12_C1 = l3 > l6 ? (l2 + l3 - l6 - l10 - l11) : (l2 - l10 - l11 - l9);
            t.L13_C1 = (t.L7_C1 || 0) + l8 - l9;
        }
    },

    // ==========================================
    // A105070 捐赠支出及纳税调整明细表
    // ==========================================
    A105070: {
        schema: {
            id: 'A105070',
            title: '捐赠支出及纳税调整明细表 (A105070)',
            headers: [
                [
                    { title: '行次', rowspan: 2, width: '5%', align: 'center' },
                    { title: '项目', rowspan: 2, width: '25%', align: 'center' },
                    { title: '账载金额', width: '10%', align: 'center' },
                    { title: '以前年度<br>结转可扣<br>除的捐赠<br>额', width: '10%', align: 'center' },
                    { title: '按税收规<br>定计算的<br>扣除限额', width: '10%', align: 'center' },
                    { title: '税收金额', width: '10%', align: 'center' },
                    { title: '纳税调增<br>金额', width: '10%', align: 'center' },
                    { title: '纳税调减<br>金额', width: '10%', align: 'center' },
                    { title: '可结转以<br>后年度扣<br>除的捐赠<br>额', width: '10%', align: 'center' }
                ],
                [
                    { title: '1', align: 'center' }, { title: '2', align: 'center' }, { title: '3', align: 'center' },
                    { title: '4', align: 'center' }, { title: '5', align: 'center' }, { title: '6', align: 'center' }, { title: '7', align: 'center' }
                ]
            ],
            rows: [
                { line: '1', text: '一、非公益性捐赠', inputs: [{key:'L1_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L1_C5', isReadonly:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '2', text: '二、限额扣除的公益性捐赠（3+4+5+6）', inputs: [{key:'L2_C1', isReadonly:true}, {key:'L2_C2', isReadonly:true}, {key:'L2_C3', isReadonly:true}, {key:'L2_C4', isReadonly:true}, {key:'L2_C5', isReadonly:true}, {key:'L2_C6', isReadonly:true}, {key:'L2_C7', isReadonly:true}] },
                { line: '3', text: '前三年度（    年）', indent: 1, inputs: [{isAsterisk:true}, {key:'L3_C2'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L3_C6'}, {isAsterisk:true}] },
                { line: '4', text: '前二年度（    年）', indent: 1, inputs: [{isAsterisk:true}, {key:'L4_C2'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L4_C6'}, {key:'L4_C7'}] },
                { line: '5', text: '前一年度（    年）', indent: 1, inputs: [{isAsterisk:true}, {key:'L5_C2'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {key:'L5_C6'}, {key:'L5_C7'}] },
                { line: '6', text: '本年（    年）', indent: 1, inputs: [{key:'L6_C1'}, {isAsterisk:true}, {key:'L6_C3'}, {key:'L6_C4'}, {key:'L6_C5'}, {isAsterisk:true}, {key:'L6_C7'}] },
                { line: '7', text: '三、全额扣除的公益性捐赠', inputs: [{key:'L7_C1'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L7_C4'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '8', text: '1.', indent: 1, inputs: [{key:'L8_C1'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L8_C4'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '9', text: '2.', indent: 1, inputs: [{key:'L9_C1'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L9_C4'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '10', text: '3.', indent: 1, inputs: [{key:'L10_C1'}, {isAsterisk:true}, {isAsterisk:true}, {key:'L10_C4'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] },
                { line: '11', text: '合计（1+2+7）', isBold: true, inputs: [{key:'L11_C1', isReadonly:true}, {key:'L11_C2', isReadonly:true}, {key:'L11_C3', isReadonly:true}, {key:'L11_C4', isReadonly:true}, {key:'L11_C5', isReadonly:true}, {key:'L11_C6', isReadonly:true}, {key:'L11_C7', isReadonly:true}] },
                { line: '附列资料', text: '2015年度至本年发生的公益性扶贫捐赠合计金额', inputs: [{key:'L_AD_C1'}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}, {isAsterisk:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A105070) return;
            const t = db.A105070;
            t.L1_C5 = t.L1_C1 || 0;
            for (let j = 1; j <= 7; j++) {
                t[`L2_C${j}`] = (t[`L3_C${j}`] || 0) + (t[`L4_C${j}`] || 0) + (t[`L5_C${j}`] || 0) + (t[`L6_C${j}`] || 0);
            }
            for (let j = 1; j <= 7; j++) {
                t[`L11_C${j}`] = (t[`L1_C${j}`] || 0) + (t[`L2_C${j}`] || 0) + (t[`L7_C${j}`] || 0);
            }
        }
    }
};