// forms/A105030.js
import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">投资收益纳税调整明细表 (A105030)</h2>
            <table class="tax-table" style="font-size: 11px;">
                <thead>
                    <tr><th rowspan="2" width="4%">行次</th><th rowspan="2" width="16%">项 目</th><th colspan="3">持有收益</th><th colspan="6">处置收益</th><th rowspan="2" width="8%">纳税调整金额<br>11 (3+10)</th></tr>
                    <tr><th>账载 1</th><th>税收 2</th><th>调整 3</th><th>账载 4</th><th>税收 5</th><th>账面价值 6</th><th>计税基础 7</th><th>账载损益 8</th><th>税收损益 9</th><th>调整 10</th></tr>
                </thead>
                <tbody>
                    <tr v-for="(r, i) in rows" :key="i">
                        <td>{{ i + 1 }}</td><td class="text-left">{{ r }}</td>
                        <td v-for="j in 11" :key="j"><input type="number" class="tax-input" v-model="db.A105030['L'+(i+1)+'_'+j]"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    setup() {
        return { db, rows: ['一、交易性金融资产','二、可供出售金融资产','三、持有至到期投资','四、衍生工具','五、交易性金融负债','六、长期股权投资','七、短期投资','八、长期债券投资','九、其他','合计 (1+2+…+9)'] }
    }
}