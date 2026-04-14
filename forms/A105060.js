// forms/A105060.js
import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">广告费和业务宣传费跨年度纳税调整明细表 (A105060)</h2>
            <table class="tax-table">
                <thead><tr><th width="10%">行次</th><th width="70%">项 目</th><th width="20%">金 额</th></tr></thead>
                <tbody>
                    <tr v-for="(r, i) in rows" :key="i">
                        <td>{{ i + 1 }}</td><td class="text-left" :class="{'pl-4': !r.includes('、')}">{{ r }}</td>
                        <td><input type="number" class="tax-input" v-model="db.A105060['L'+(i+1)]"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    setup() {
        return { db, rows: [
            "一、本年广告费和业务宣传费支出","减：不允许扣除的广告费和业务宣传费支出","二、本年符合条件的广告费和业务宣传费支出 (1-2)","三、本年计算扣除限额的销售（营业）收入","乘：税收规定扣除率","四、本企业计算的广告费和业务宣传费扣除限额 (4×5)","五、本年结转以后年度扣除额 (3＞6，本行＝3-6；3≤6，本行＝0)","加：以前年度累计结转扣除额","减：本年扣除的以前年度结转额 [3＞6，0；3≤6，(6-3)孰小]","六、按分摊协议归集至其他关联方的广告费和宣传费","按分摊协议从其他关联方归集至本企业的广告费和宣传费","七、本年支出纳税调整金额 (3>6, 2+3-6-10+11; 3<=6, 2+10-11-9)","八、累计结转以后年度扣除额 (7+8-9)"
        ]}
    }
}