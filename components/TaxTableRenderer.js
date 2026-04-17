// components/TaxTableRenderer.js
import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { db } from '../js/engine.js'

// 自定义数字格式化输入框组件
const FormattedNumberInput = {
    props: ['modelValue', 'isReadonly', 'alignCenter'],
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const isFocused = ref(false);

        // 格式化为千分位 + 两位小数
        const formatNumber = (val) => {
            if (val === null || val === undefined || val === '') return '';
            const num = Number(val);
            if (isNaN(num)) return val;
            return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        };

        const onFocus = (e) => {
            if (props.isReadonly) return;
            isFocused.value = true;
            // 聚焦时还原为纯数字，如果是0则直接清空方便用户输入
            e.target.value = props.modelValue === 0 ? '' : props.modelValue;
            setTimeout(() => e.target.select(), 0); // 聚焦时全选文本
        };

        const onBlur = (e) => {
            if (props.isReadonly) return;
            isFocused.value = false;
            // 去除逗号提取真实数字
            let val = e.target.value.replace(/,/g, '');
            let finalNum = 0;
            if (val !== '') {
                const num = Number(val);
                finalNum = isNaN(num) ? 0 : num;
            }
            // 将真实纯数字同步给表单数据中心
            emit('update:modelValue', finalNum);
        };

        return { isFocused, formatNumber, onFocus, onBlur };
    },
    template: `
        <input type="text"
               class="tax-input"
               :class="{'text-center': alignCenter}"
               :readonly="isReadonly"
               :value="isFocused ? undefined : formatNumber(modelValue)"
               @focus="onFocus"
               @blur="onBlur"
        />
    `
};

export default {
    components: { FormattedNumberInput },
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

                        <template v-else-if="input.key">
                            <input v-if="input.type === 'text'"
                                   type="text"
                                   class="tax-input text-center"
                                   v-model="db[config.id][input.key]"
                                   :readonly="input.isReadonly" />
                            <FormattedNumberInput v-else
                                   :align-center="input.align === 'center'"
                                   :is-readonly="input.isReadonly"
                                   v-model="db[config.id][input.key]" />
                        </template>
                    </td>
                </template>

                <template v-else-if="row.key || row.type === 'radio'">
                    <td :colspan="row.inputColspan || 1">
                        
                        <div v-if="row.type === 'radio'" class="radio-group" style="justify-content: center;">
                            <label v-for="opt in row.options" :key="opt">
                                <input type="radio" :name="config.id + '_' + rIdx" :value="opt" v-model="db[config.id][row.key]"> {{opt}}
                            </label>
                        </div>
                        
                        <template v-else-if="row.key">
                            <input v-if="row.type === 'text'"
                                   type="text"
                                   class="tax-input text-center"
                                   v-model="db[config.id][row.key]"
                                   :readonly="row.isReadonly" />
                            <FormattedNumberInput v-else
                                   :align-center="row.align === 'center'"
                                   :is-readonly="row.isReadonly"
                                   v-model="db[config.id][row.key]" />
                        </template>
                    </td>
                </template>
            </tr>
        </tbody>
    </table>
    `
}