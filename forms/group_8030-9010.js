// forms/group_8030-9010.js

export const formBundle = {
    // ==========================================
    // A108030 跨年度结转抵免境外所得税明细表
    // ==========================================
    A108030: {
        schema: {
            id: 'A108030',
            title: '跨年度结转抵免境外所得税明细表 (A108030)',
            columns: [
                {title:'行次', width:'3%'}, {title:'国家(地区)', width:'7%'},
                {title:'未抵-前五', width:'5%'}, {title:'未抵-前四', width:'5%'}, {title:'未抵-前三', width:'5%'}, {title:'未抵-前二', width:'5%'}, {title:'未抵-前一', width:'5%'}, {title:'未抵-小计(7)', width:'5%'},
                {title:'实抵-前五', width:'5%'}, {title:'实抵-前四', width:'5%'}, {title:'实抵-前三', width:'5%'}, {title:'实抵-前二', width:'5%'}, {title:'实抵-前一', width:'5%'}, {title:'实抵-小计(13)', width:'5%'},
                {title:'结转-前四', width:'5%'}, {title:'结转-前三', width:'5%'}, {title:'结转-前二', width:'5%'}, {title:'结转-前一', width:'5%'}, {title:'结转-本年', width:'5%'}, {title:'结转-小计(19)', width:'5%'}
            ],
            rows: [
                { line: '1', text: '', inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C2'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {key:'L1_C7', isReadonly:true}, {key:'L1_C8'}, {key:'L1_C9'}, {key:'L1_C10'}, {key:'L1_C11'}, {key:'L1_C12'}, {key:'L1_C13', isReadonly:true}, {key:'L1_C14', isReadonly:true}, {key:'L1_C15', isReadonly:true}, {key:'L1_C16', isReadonly:true}, {key:'L1_C17', isReadonly:true}, {key:'L1_C18'}, {key:'L1_C19', isReadonly:true}] },
                { line: '2', text: '', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7', isReadonly:true}, {key:'L2_C8'}, {key:'L2_C9'}, {key:'L2_C10'}, {key:'L2_C11'}, {key:'L2_C12'}, {key:'L2_C13', isReadonly:true}, {key:'L2_C14', isReadonly:true}, {key:'L2_C15', isReadonly:true}, {key:'L2_C16', isReadonly:true}, {key:'L2_C17', isReadonly:true}, {key:'L2_C18'}, {key:'L2_C19', isReadonly:true}] },
                { line: '3', text: '', inputs: [{key:'L3_C1', type:'text'}, {key:'L3_C2'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6'}, {key:'L3_C7', isReadonly:true}, {key:'L3_C8'}, {key:'L3_C9'}, {key:'L3_C10'}, {key:'L3_C11'}, {key:'L3_C12'}, {key:'L3_C13', isReadonly:true}, {key:'L3_C14', isReadonly:true}, {key:'L3_C15', isReadonly:true}, {key:'L3_C16', isReadonly:true}, {key:'L3_C17', isReadonly:true}, {key:'L3_C18'}, {key:'L3_C19', isReadonly:true}] },
                { line: '10', text: '合计', isBold:true, inputs: [{isAsterisk:true}, {key:'L10_C2', isReadonly:true}, {key:'L10_C3', isReadonly:true}, {key:'L10_C4', isReadonly:true}, {key:'L10_C5', isReadonly:true}, {key:'L10_C6', isReadonly:true}, {key:'L10_C7', isReadonly:true}, {key:'L10_C8', isReadonly:true}, {key:'L10_C9', isReadonly:true}, {key:'L10_C10', isReadonly:true}, {key:'L10_C11', isReadonly:true}, {key:'L10_C12', isReadonly:true}, {key:'L10_C13', isReadonly:true}, {key:'L10_C14', isReadonly:true}, {key:'L10_C15', isReadonly:true}, {key:'L10_C16', isReadonly:true}, {key:'L10_C17', isReadonly:true}, {key:'L10_C18', isReadonly:true}, {key:'L10_C19', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A108030) return;
            const t = db.A108030;
            // 横向计算
            for(let r=1; r<=9; r++) {
                // 小计 7 = 2+3+4+5+6
                t[`L${r}_C7`] = (t[`L${r}_C2`] || 0) + (t[`L${r}_C3`] || 0) + (t[`L${r}_C4`] || 0) + (t[`L${r}_C5`] || 0) + (t[`L${r}_C6`] || 0);
                // 小计 13 = 8+9+10+11+12
                t[`L${r}_C13`] = (t[`L${r}_C8`] || 0) + (t[`L${r}_C9`] || 0) + (t[`L${r}_C10`] || 0) + (t[`L${r}_C11`] || 0) + (t[`L${r}_C12`] || 0);
                
                // 结转金额计算
                t[`L${r}_C14`] = (t[`L${r}_C3`] || 0) - (t[`L${r}_C9`] || 0);
                t[`L${r}_C15`] = (t[`L${r}_C4`] || 0) - (t[`L${r}_C10`] || 0);
                t[`L${r}_C16`] = (t[`L${r}_C5`] || 0) - (t[`L${r}_C11`] || 0);
                t[`L${r}_C17`] = (t[`L${r}_C6`] || 0) - (t[`L${r}_C12`] || 0);
                
                // 结转小计 19 = 14+15+16+17+18
                t[`L${r}_C19`] = (t[`L${r}_C14`] || 0) + (t[`L${r}_C15`] || 0) + (t[`L${r}_C16`] || 0) + (t[`L${r}_C17`] || 0) + (t[`L${r}_C18`] || 0);
            }
            // 纵向合计
            for(let c=2; c<=19; c++) {
                let sum = 0;
                for(let r=1; r<=9; r++) sum += (t[`L${r}_C${c}`] || 0);
                t[`L10_C${c}`] = sum;
            }
        }
    },

    // ==========================================
    // A109000 跨地区经营汇总纳税企业年度分摊企业所得税明细表
    // ==========================================
    A109000: {
        schema: {
            id: 'A109000',
            title: '跨地区经营汇总纳税企业年度分摊企业所得税明细表 (A109000)',
            columns: [{title:'行次', width:'10%'}, {title:'项 目', width:'70%'}, {title:'金 额', width:'20%'}],
            rows: [
                { line: '1', text: '一、实际应纳所得税额', key: 'L1' },
                { line: '2', text: '减：境外所得应纳所得税额', key: 'L2', indent: 1 },
                { line: '3', text: '加：境外所得抵免所得税额', key: 'L3', indent: 1 },
                { line: '4', text: '二、本年实际应纳所得税额 (1-2+3)', key: 'L4', isBold: true, isReadonly: true },
                { line: '5', text: '其中：总机构直接管理建筑项目部预分所得税额', key: 'L5', indent: 1 },
                { line: '6', text: '总机构实际应分摊所得税额', key: 'L6', indent: 1 },
                { line: '7', text: '财政集中实际应分配所得税额', key: 'L7', indent: 1 },
                { line: '8', text: '分支机构实际应分摊所得税额', key: 'L8', indent: 1 },
                { line: '9', text: '其中：总机构主体生产经营部门实际应分摊所得税额', key: 'L9', indent: 2 },
                { line: '10', text: '三、本年累计已预分、已分摊所得税额 (11+12+13+14)', key: 'L10', isBold: true, isReadonly: true },
                { line: '11', text: '其中：总机构直接管理建筑项目部预分所得税额', key: 'L11', indent: 1 },
                { line: '12', text: '总机构已分摊所得税额', key: 'L12', indent: 1 },
                { line: '13', text: '财政集中已分配所得税额', key: 'L13', indent: 1 },
                { line: '14', text: '分支机构已分摊所得税额', key: 'L14', indent: 1 },
                { line: '15', text: '其中：总机构主体生产经营部门已分摊所得税额', key: 'L15', indent: 2 },
                { line: '16', text: '四、本年度应分摊的应补（退）的所得税额 (4-10)', key: 'L16', isBold: true, isReadonly: true },
                { line: '17', text: '其中：总机构分摊本年应补（退）的所得税额 (6-12)', key: 'L17', indent: 1, isReadonly: true },
                { line: '18', text: '财政集中分配本年应补（退）的所得税额 (7-13)', key: 'L18', indent: 1, isReadonly: true },
                { line: '19', text: '分支机构分摊本年应补（退）的所得税额 (8-14)', key: 'L19', indent: 1, isReadonly: true },
                { line: '20', text: '其中：总机构主体生产经营部门分摊本年应补（退）的所得税额 (9-15)', key: 'L20', indent: 2, isReadonly: true },
                { line: '21', text: '五、境外所得抵免后的应纳所得税额 (2-3)', key: 'L21', isBold: true, isReadonly: true },
                { line: '22', text: '六、总机构本年应补（退）所得税额 (17+18+20+21)', key: 'L22', isBold: true, isReadonly: true },
                { line: '23', text: '七、总机构应享受民族地方优惠金额', key: 'L23', isBold: true },
                { line: '24', text: '总机构全年累计已享受民族地方优惠金额', key: 'L24', indent: 1 },
                { line: '25', text: '总机构因民族地方优惠调整分配金额 (23-24)', key: 'L25', indent: 1, isReadonly: true },
                { line: '26', text: '八、总机构本年实际应补（退）所得税额 (22-25)', key: 'L26', isBold: true, isReadonly: true }
            ]
        },
        logic: (db) => {
            if (!db.A109000) return;
            const t = db.A109000;
            t.L4 = (t.L1 || 0) - (t.L2 || 0) + (t.L3 || 0);
            t.L10 = (t.L11 || 0) + (t.L12 || 0) + (t.L13 || 0) + (t.L14 || 0);
            t.L16 = t.L4 - t.L10;
            
            t.L17 = (t.L6 || 0) - (t.L12 || 0);
            t.L18 = (t.L7 || 0) - (t.L13 || 0);
            t.L19 = (t.L8 || 0) - (t.L14 || 0);
            t.L20 = (t.L9 || 0) - (t.L15 || 0);
            
            t.L21 = (t.L2 || 0) - (t.L3 || 0);
            t.L22 = t.L17 + t.L18 + t.L20 + t.L21;
            
            t.L25 = (t.L23 || 0) - (t.L24 || 0);
            t.L26 = t.L22 - t.L25;
        }
    },

    // ==========================================
    // A109010 企业所得税汇总纳税分支机构所得税分配表
    // ==========================================
    A109010: {
        schema: {
            id: 'A109010',
            title: '企业所得税汇总纳税分支机构所得税分配表 (A109010)',
            columns: [
                {title:'行次', width:'4%'}, {title:'统一社会信用代码(1)', width:'14%'}, {title:'机构名称(2)', width:'14%'},
                {title:'营业收入(3)', width:'8%'}, {title:'职工薪酬(4)', width:'8%'}, {title:'资产总额(5)', width:'8%'},
                {title:'分摊比例(6)', width:'8%'}, {title:'实际应分摊(7)', width:'9%'}, {title:'累计已分摊(8)', width:'9%'},
                {title:'分摊应补退(9=7-8)', width:'9%'}, {title:'民族自治优惠(10)', width:'9%'}, {title:'实际分摊应补退(11=9-10)', width:'10%'}
            ],
            rows: [
                { line: '1', text: '', inputs: [{key:'L1_C1', type:'text'}, {key:'L1_C2', type:'text'}, {key:'L1_C3'}, {key:'L1_C4'}, {key:'L1_C5'}, {key:'L1_C6'}, {key:'L1_C7'}, {key:'L1_C8'}, {key:'L1_C9', isReadonly:true}, {key:'L1_C10'}, {key:'L1_C11', isReadonly:true}] },
                { line: '2', text: '', inputs: [{key:'L2_C1', type:'text'}, {key:'L2_C2', type:'text'}, {key:'L2_C3'}, {key:'L2_C4'}, {key:'L2_C5'}, {key:'L2_C6'}, {key:'L2_C7'}, {key:'L2_C8'}, {key:'L2_C9', isReadonly:true}, {key:'L2_C10'}, {key:'L2_C11', isReadonly:true}] },
                { line: '3', text: '', inputs: [{key:'L3_C1', type:'text'}, {key:'L3_C2', type:'text'}, {key:'L3_C3'}, {key:'L3_C4'}, {key:'L3_C5'}, {key:'L3_C6'}, {key:'L3_C7'}, {key:'L3_C8'}, {key:'L3_C9', isReadonly:true}, {key:'L3_C10'}, {key:'L3_C11', isReadonly:true}] },
                { line: '4', text: '', inputs: [{key:'L4_C1', type:'text'}, {key:'L4_C2', type:'text'}, {key:'L4_C3'}, {key:'L4_C4'}, {key:'L4_C5'}, {key:'L4_C6'}, {key:'L4_C7'}, {key:'L4_C8'}, {key:'L4_C9', isReadonly:true}, {key:'L4_C10'}, {key:'L4_C11', isReadonly:true}] },
                { line: '5', text: '', inputs: [{key:'L5_C1', type:'text'}, {key:'L5_C2', type:'text'}, {key:'L5_C3'}, {key:'L5_C4'}, {key:'L5_C5'}, {key:'L5_C6'}, {key:'L5_C7'}, {key:'L5_C8'}, {key:'L5_C9', isReadonly:true}, {key:'L5_C10'}, {key:'L5_C11', isReadonly:true}] },
                { line: '6', text: '合计', isBold:true, inputs: [{isAsterisk:true}, {isAsterisk:true}, {key:'L6_C3', isReadonly:true}, {key:'L6_C4', isReadonly:true}, {key:'L6_C5', isReadonly:true}, {key:'L6_C6', isReadonly:true}, {key:'L6_C7', isReadonly:true}, {key:'L6_C8', isReadonly:true}, {key:'L6_C9', isReadonly:true}, {key:'L6_C10', isReadonly:true}, {key:'L6_C11', isReadonly:true}] }
            ]
        },
        logic: (db) => {
            if (!db.A109010) return;
            const t = db.A109010;
            // 基础行计算
            for(let r=1; r<=5; r++) {
                t[`L${r}_C9`] = (t[`L${r}_C7`] || 0) - (t[`L${r}_C8`] || 0);
                t[`L${r}_C11`] = t[`L${r}_C9`] - (t[`L${r}_C10`] || 0);
            }
            // 汇总计算
            for(let c=3; c<=11; c++) {
                let sum = 0;
                for(let r=1; r<=5; r++) sum += (t[`L${r}_C${c}`] || 0);
                t[`L6_C${c}`] = sum;
            }
        }
    }
};