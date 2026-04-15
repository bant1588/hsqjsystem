// components/TaxTableRenderer.js
import { db } from '../js/engine.js'

export default {
    props: { config: { type: Object, required: true } },
    template: `
        <div class="form-card">
            <h2 style="text-align:center;margin-bottom:20px;">{{ config.title }}</h2>
            <table class="tax-table">
                <thead>
                    <tr>
                        <th v-for="(col, i) in config.columns" :key="i" :width="col.width" :style="{textAlign: col.align || 'center'}">
                            {{ col.title }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, idx) in config.rows" :key="idx">
                        <td style="text-align:center;">{{ row.line }}</td>
                        <td :style="{ textAlign:'left', paddingLeft: (row.indent || 0)*20 + 10 + 'px', fontWeight: row.isBold?'bold':'normal' }">
                            {{ row.text }}
                        </td>
                        
                        <template v-if="row.inputs">
                            <td v-for="(inp, iIdx) in row.inputs" :key="iIdx" :style="{ background: inp.isAsterisk?'#f5f5f5':'white', textAlign: 'center' }">
                                <span v-if="inp.isAsterisk" style="color:#999; font-weight:bold;">*</span>
                                <input v-else-if="inp.key && inp.type === 'text'" type="text" class="tax-input text-center" 
                                       v-model="db[config.id][inp.key]" :readonly="inp.isReadonly" :placeholder="inp.placeholder || ''">
                                <input v-else-if="inp.key" type="number" class="tax-input" 
                                       v-model.number="db[config.id][inp.key]" :readonly="inp.isReadonly">
                            </td>
                        </template>
                        
                        <template v-else>
                            <td style="text-align: center;">
                                <input v-if="row.key && row.type === 'text'" type="text" class="tax-input text-center" 
                                       v-model="db[config.id][row.key]" :readonly="row.isReadonly">
                                <input v-else-if="row.key" type="number" class="tax-input" 
                                       v-model.number="db[config.id][row.key]" :readonly="row.isReadonly">
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    setup() { return { db } }
}