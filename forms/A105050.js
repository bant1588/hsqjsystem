// forms/A105050.js
import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">职工薪酬支出及纳税调整明细表 (A105050)</h2>
            <table class="tax-table">
                <thead><tr><th width="6%">行次</th><th width="38%">项 目</th><th>账载金额 1</th><th>实际发生 2</th><th>税收限额 3</th><th>以前结转 4</th><th>税收金额 5</th><th>调增/减 6</th><th>结转以后 7</th></tr></thead>
                <tbody>
                    <tr v-for="(r, i) in rows" :key="i">
                        <td>{{ i + 1 }}</td><td class="text-left" :class="{'pl-6': r[0].includes('其中'), 'font-bold': r[0].includes('、')||r[0].includes('合计')}">{{ r[0] }}</td>
                        <td v-for="(c, j) in r.slice(1)" :key="j" :style="c==='*' ? 'background:#f5f5f5; color:#999;' : ''">
                            <span v-if="c==='*'">*</span><input v-else type="number" class="tax-input" v-model="db.A105050['L'+(i+1)+'_'+(j+1)]">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    setup() {
        return { db, rows: [
            ['一、工资薪金支出','','','*','*','','','*'], ['其中：股权激励','','','*','*','','','*'], ['二、职工福利费支出','','','','*','','','*'], ['三、职工教育经费支出','','','*','','','',''], ['其中：按规定比例扣除的教育经费','','','','','','',''], ['按规定全额扣除的培训费用','','','','*','','','*'],
            ['四、工会经费支出','','','','*','','','*'], ['五、各类基本社会保障性缴款','','','*','*','','','*'], ['六、住房公积金','','','*','*','','','*'], ['七、补充养老保险','','','','*','','','*'], ['八、补充医疗保险','','','','*','','','*'], ['九、其他','','','*','*','','','*'], ['合计 (1+3+4+7+8+9+10+11+12)','','','*','','','','']
        ]}
    }
}