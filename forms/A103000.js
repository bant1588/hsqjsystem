// forms/A103000.js
import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">事业单位、民间非营利组织收入、支出明细表 (A103000)</h2>
            <table class="tax-table">
                <thead><tr><th width="10%">行次</th><th width="60%">项 目</th><th width="30%">金 额</th></tr></thead>
                <tbody>
                    <tr v-for="(r, i) in rows" :key="i">
                        <td>{{ i + 1 }}</td>
                        <td class="text-left" :class="{'pl-4': r.includes('（') || r.includes('其中'), 'font-bold': r.includes('一、')||r.includes('二、')||r.includes('三、')||r.includes('四、')}">{{ r }}</td>
                        <td><input type="number" class="tax-input" v-model="db.A103000['L'+(i+1)]"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    setup() {
        return { db, rows: [
            "一、事业单位收入（2+3+4+5+6+7）","（一）财政补助收入","（二）事业收入","（三）上级补助收入","（四）附属单位上缴收入","（五）经营收入","（六）其他收入（8+9）","其中：投资收益","其他","二、民间非营利组织收入（11+12+13+14+15+16+17）","（一）接受捐赠收入","（二）会费收入","（三）提供劳务收入","（四）商品销售收入","（五）政府补助收入","（六）投资收益","（七）其他收入","三、事业单位支出（19+20+21+22+23）","（一）事业支出","（二）上缴上级支出","（三）对附属单位补助支出","（四）经营支出","（五）其他支出","四、民间非营利组织支出（25+26+27+28）","（一）业务活动成本","（二）管理费用","（三）筹资费用","（四）其他费用"
        ]}
    }
}