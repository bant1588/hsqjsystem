// forms/A105020.js
import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">未按权责发生制确认收入纳税调整明细表 (A105020)</h2>
            <table class="tax-table">
                <thead><tr><th rowspan="2" width="6%">行次</th><th rowspan="2" width="34%">项 目</th><th>合同金额</th><th colspan="2">账载金额</th><th colspan="2">税收金额</th><th>调整金额</th></tr>
                <tr><th>1</th><th>本年 2</th><th>累计 3</th><th>本年 4</th><th>累计 5</th><th>6 (4-2)</th></tr></thead>
                <tbody>
                    <tr v-for="(r, i) in rows" :key="i">
                        <td>{{ i + 1 }}</td><td class="text-left" :class="{'pl-4': r.includes('（'), 'font-bold': r.includes('、')}">{{ r }}</td>
                        <td v-for="j in 6" :key="j"><input type="number" class="tax-input" v-model="db.A105020['L'+(i+1)+'_'+j]"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    setup() {
        return { db, rows: [
            '一、跨期收取的租金、利息、特许权使用费收入 (2+3+4)', '（一）租金', '（二）利息', '（三）特许权使用费', '二、分期确认收入 (6+7+8)', '（一）分期收款方式销售货物收入', '（二）持续时间超过 12 个月的建造合同收入', '（三）其他分期确认收入', '三、政府补助递延收入 (10+11+12)', '（一）与收益相关的政府补助', '（二）与资产相关的政府补助', '（三）其他', '四、其他未按权责发生制确认收入', '合计 (1+5+9+13)'
        ]}
    }
}