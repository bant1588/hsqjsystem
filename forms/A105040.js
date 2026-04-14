// forms/A105040.js
import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">专项用途财政性资金纳税调整明细表 (A105040)</h2>
            <table class="tax-table" style="font-size:12px;">
                <thead>
                    <tr><th rowspan="2" width="4%">行次</th><th rowspan="2" width="10%">项目</th><th rowspan="2" width="6%">取得<br>年度 1</th><th rowspan="2" width="8%">财政性<br>资金 2</th><th colspan="2">符合不征税收入条件</th><th colspan="6">以前年度支出情况</th><th colspan="2">本年支出情况</th><th colspan="3">本年结余情况</th></tr>
                    <tr><th>金额 3</th><th>计入损益 4</th><th>前五年 5</th><th>前四年 6</th><th>前三年 7</th><th>前二年 8</th><th>前一年 9</th><th>支出金额 10</th><th>费用化 11</th><th>结余金额 12</th><th>上缴财政 13</th><th>应计入收入 14</th></tr>
                </thead>
                <tbody>
                    <tr v-for="(r, i) in rows" :key="i">
                        <td>{{ i + 1 }}</td><td class="text-center">{{ r[0] }}</td>
                        <td v-for="(c, j) in r.slice(1)" :key="j" :style="c==='*' ? 'background:#f5f5f5; color:#999;' : ''">
                            <span v-if="c==='*'">*</span><input v-else type="text" class="tax-input" v-model="db.A105040['L'+(i+1)+'_'+(j+1)]">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    setup() {
        return { db, rows: [
            ['前五年度','','','','','','','','','','','','','',''], ['前四年度','','','','','*','','','','','','','','',''], ['前三年度','','','','','*','*','','','','','','','',''],
            ['前二年度','','','','','*','*','*','','','','','','',''], ['前一年度','','','','','*','*','*','*','','','','','',''], ['本年','','','','','*','*','*','*','*','','','','',''],
            ['合计 (1+2+…+6)','*','','','','*','*','*','*','*','','','','','']
        ]}
    }
}