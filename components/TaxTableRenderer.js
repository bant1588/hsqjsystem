// components/TaxTableRenderer.js
import { ref, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { db } from '../js/engine.js'

// 自定义数字格式化输入框组件
const FormattedNumberInput = {
    props: ['modelValue', 'isReadonly', 'alignCenter'],
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const isFocused = ref(false);
        const localValue = ref('');

        // 格式化为千分位 + 两位小数
        const formatNumber = (val) => {
            if (val === null || val === undefined || val === '') return '';
            const num = Number(val);
            if (isNaN(num)) return val;
            return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        };

        // 动态计算输入框的最小宽度：当数字长度过长时，动态撑开宽度作为兜底机制
        const dynamicMinWidth = computed(() => {
            let strVal = '';
            if (isFocused.value) {
                // 聚焦时使用用户当前正在输入的原始文本计算宽度
                strVal = localValue.value;
            } else {
                strVal = formatNumber(props.modelValue);
            }
            const len = strVal ? strVal.length : 0;
            return len > 12 ? `${100 + (len - 12) * 8}px` : '100px';
        });

        const onFocus = (e) => {
            if (props.isReadonly) return;
            isFocused.value = true;
            localValue.value = (props.modelValue === null || props.modelValue === undefined) ? '' : String(props.modelValue);
        };

        const onInput = (e) => {
            localValue.value = e.target.value;
        };

        const onBlur = (e) => {
            if (props.isReadonly) return;
            isFocused.value = false;
            let val = localValue.value.replace(/,/g, '');
            let finalNum = 0;
            if (val !== '') {
                const num = Number(val);
                finalNum = isNaN(num) ? 0 : num;
            }
            emit('update:modelValue', finalNum);
        };

        return { isFocused, localValue, formatNumber, onFocus, onBlur, onInput, dynamicMinWidth };
    },
    template: `
        <input type="text"
               class="tax-input"
               :class="{'text-center': alignCenter}"
               :readonly="isReadonly"
               :style="{ minWidth: dynamicMinWidth }"
               :value="isFocused ? localValue : formatNumber(modelValue)"
               @focus="onFocus"
               @blur="onBlur"
               @input="onInput"
        />
    `
};

export default {
    components: { FormattedNumberInput },
    props: ['config', 'globalReadonly'],
    setup() { 
        const handleClick = (fnName) => {
            if (typeof window[fnName] === 'function') {
                window[fnName]();
            }
        };
        return { db, handleClick };
    },
    template: `
    <table class="tax-table" :class="'table-' + config.id">
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
                    
                    <span v-if="row.onClick && !globalReadonly" 
                          @click="handleClick(row.onClick)" 
                          style="color: #1890ff; cursor: pointer; text-decoration: underline;">
                        {{ row.text }}
                    </span>
                    <span v-else>{{ row.text }}</span>
                    
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
                            <label v-for="opt in input.options" :key="opt" :style="{ cursor: (globalReadonly || input.isReadonly) ? 'not-allowed' : 'pointer' }">
                                <input type="radio" :name="config.id + '_' + rIdx + '_' + iIdx" :value="opt" v-model="db[config.id][input.key]" :disabled="globalReadonly || input.isReadonly"> {{opt}}
                            </label>
                        </div>

                        <template v-else-if="input.key">
                            <input v-if="input.type === 'text'"
                                   type="text"
                                   class="tax-input text-center"
                                   v-model="db[config.id][input.key]"
                                   :readonly="globalReadonly || input.isReadonly" />
                            <select v-else-if="input.type === 'select'"
                                    class="tax-input"
                                    style="text-align: left; text-align-last: left;"
                                    v-model="db[config.id][input.key]"
                                    :disabled="globalReadonly || input.isReadonly">
                                <option value="">-- 请选择 --</option>
                                <option v-for="opt in input.options" :key="opt" :value="opt">{{opt}}</option>
                            </select>
                            <FormattedNumberInput v-else
                                   :align-center="input.align === 'center'"
                                   :is-readonly="globalReadonly || input.isReadonly"
                                   v-model="db[config.id][input.key]" />
                        </template>
                    </td>
                </template>

                <template v-else-if="row.key || row.type === 'radio'">
                    <td :colspan="row.inputColspan || 1">
                        
                        <div v-if="row.type === 'radio'" class="radio-group" style="justify-content: center;">
                            <label v-for="opt in row.options" :key="opt" :style="{ cursor: (globalReadonly || row.isReadonly) ? 'not-allowed' : 'pointer' }">
                                <input type="radio" :name="config.id + '_' + rIdx" :value="opt" v-model="db[config.id][row.key]" :disabled="globalReadonly || row.isReadonly"> {{opt}}
                            </label>
                        </div>
                        
                        <template v-else-if="row.key">
                            <input v-if="row.type === 'text'"
                                   type="text"
                                   class="tax-input text-center"
                                   v-model="db[config.id][row.key]"
                                   :readonly="globalReadonly || row.isReadonly" />
                            <select v-else-if="row.type === 'select'"
                                    class="tax-input"
                                    style="text-align: left; text-align-last: left;"
                                    v-model="db[config.id][row.key]"
                                    :disabled="globalReadonly || row.isReadonly">
                                <option value="">-- 请选择 --</option>
                                <option v-for="opt in row.options" :key="opt" :value="opt">{{opt}}</option>
                            </select>
                            <FormattedNumberInput v-else
                                   :align-center="row.align === 'center'"
                                   :is-readonly="globalReadonly || row.isReadonly"
                                   v-model="db[config.id][row.key]" />
                        </template>
                    </td>
                </template>
            </tr>
        </tbody>
    </table>
    `
}