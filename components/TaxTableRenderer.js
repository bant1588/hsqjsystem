// components/TaxTableRenderer.js
import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { db } from '../js/engine.js'

export default {
    props: ['config'],
    setup() { return { db } },
    template: `
    <table class="tax-table">
        <thead v-if="config.headers">
            <tr v-for="(hRow, rIdx) in config.headers" :key="'h'+rIdx">
                <th v-for="(hCol, cIdx) in hRow" :key="'hc'+cIdx" 
                    :colspan="hCol.colspan || 1" :rowspan="hCol.rowspan || 1" 
                    :style="{width: hCol.width}">
                    <div v-html="hCol.title ? hCol.title.replace(/\\\\n/g, '<br>').replace(/\\n/g, '<br>') : ''"></div>
                </th>
            </tr>
        </thead>
        <thead v-else-if="config.columns && config.columns.some(c => c.title)">
            <tr>
                <th v-for="(col, idx) in config.columns" :key="idx" :width="col.width">
                    <div v-html="col.title ? col.title.replace(/\\\\n/g, '<br>').replace(/\\n/g, '<br>') : ''"></div>
                </th>
            </tr>
        </thead>
        
        <tbody>
            <tr v-for="(row, rIdx) in config.rows" :key="rIdx">
                <td v-if="row.line" :rowspan="row.lineRowspan || 1" :colspan="row.lineColspan || 1" class="text-center">{{ row.line }}</td>
                
                <td v-if="row.text" :rowspan="row.textRowspan || 1" :colspan="row.textColspan || 1" class="text-left" 
                    :style="{ paddingLeft: row.indent ? (row.indent * 20 + 12 + 'px') : '12px', fontWeight: row.isBold ? 'bold' : 'normal' }">
                    {{ row.text }}
                </td>
                
                <td v-if="row.text2" :rowspan="row.text2Rowspan || 1" :colspan="row.text2Colspan || 1" 
                    :class="row.align2 === 'left' ? 'text-left' : 'text-center'" :style="{ fontWeight: row.isBold2 ? 'bold' : 'normal' }">
                    {{ row.text2 }}
                </td>

                <template v-if="row.inputs">
                    <td v-for="(input, iIdx) in row.inputs" :key="iIdx" 
                        :colspan="input.colspan || 1" :rowspan="input.rowspan || 1"
                        :style="input.style">
                        
                        <div v-if="input.type === 'label'" v-html="input.value" :style="input.innerStyle"></div>
                        
                        <span v-else-if="input.isAsterisk">*</span>
                        
                        <div v-else-if="input.type === 'radio'" class="radio-group" style="justify-content: center;">
                            <label v-for="opt in input.options" :key="opt">
                                <input type="radio" :name="config.id + '_' + rIdx + '_' + iIdx" :value="opt" v-model="db[config.id][input.key]"> {{opt}}
                            </label>
                        </div>

                        <input v-else-if="input.key"
                               :type="input.type === 'text' ? 'text' : 'number'"
                               class="tax-input"
                               :class="{'text-center': input.type === 'text' || input.align === 'center'}"
                               v-model="db[config.id][input.key]"
                               :readonly="input.isReadonly" />
                    </td>
                </template>

                <template v-else-if="row.key || row.type === 'radio'">
                    <td :colspan="row.inputColspan || 1">
                        
                        <div v-if="row.type === 'radio'" class="radio-group" style="justify-content: center;">
                            <label v-for="opt in row.options" :key="opt">
                                <input type="radio" :name="config.id + '_' + rIdx" :value="opt" v-model="db[config.id][row.key]"> {{opt}}
                            </label>
                        </div>
                        
                        <input v-else-if="row.key"
                               :type="row.type === 'text' ? 'text' : 'number'"
                               class="tax-input"
                               :class="{'text-center': row.type === 'text' || row.align === 'center'}"
                               v-model="db[config.id][row.key]"
                               :readonly="row.isReadonly" />
                    </td>
                </template>
            </tr>
        </tbody>
    </table>
    `
}