// forms/A105070.js
import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">捐赠支出及纳税调整明细表 (A105070)</h2>
            <table class="tax-table">
                <thead><tr><th width="6%">行次</th><th width="24%">项 目</th><th>账载金额 1</th><th>以前年度结转 2</th><th>扣除限额 3</th><th>税收金额 4</th><th>调增金额 5</th><th>调减金额 6</th><th>结转以后 7</th></tr></thead>
                <tbody>
                    <tr v-for="(r, i) in rows" :key="i">
                        <td>{{ i + 1 }}</td><td class="text-left" :class="{'pl-4': r[0].includes('前') || r[0].includes('本年')}">{{ r[0] }}</td>
                        <td v-for="(c, j) in r.slice(1)" :key="j" :style="c==='*' ? 'background:#f5f5f5; color:#999;' : ''">
                            <span v-if="c==='*'">*</span><input v-else type="number" class="tax-input" v-model="db.A105070['L'+(i+1)+'_'+(j+1)]">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    setup() {
        return { db, rows: [
            ['一、非公益性捐赠','','*','*','*','','*','*'], ['二、全额扣除的公益性捐赠','','*','*','','*','*','*'], ['三、限额扣除的公益性捐赠 (4+5+6+7)','','','','','','',''],
            ['前三年度 (        年)','*','','*','*','*','','*'], ['前二年度 (        年)','*','','*','*','*','',''], ['前一年度 (        年)','*','','*','*','*','',''],
            ['本年 (        年)','','*','','','','*',''], ['合计 (1+2+3)','','','','','','','']
        ]}
    }
}