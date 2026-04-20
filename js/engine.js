// js/engine.js
import { reactive, watchEffect } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// 1. 全局数据总线
export const db = reactive({})

// 2. 智能初始化槽位工具
export const initFormState = (formId, fields) => {
    if (!db[formId]) {
        db[formId] = {}
    }
    // fields 结构变为：[{ key: 'L1', type: 'number' }, { key: 'L1_name', type: 'text' }]
    fields.forEach(field => { 
        if (field.key && db[formId][field.key] === undefined) {
            // 如果明确指定是 text 文本或 select 下拉，初始化为空字符串；否则初始化为数字 0
            db[formId][field.key] = (field.type === 'text' || field.type === 'select') ? '' : 0 
        }
    })
}

// 3. 逻辑注入器：将各张表的公式动态挂载到引擎中
export const injectFormulas = (logicFunction) => {
    watchEffect(() => {
        logicFunction(db)
    })
}

// 4. 重置清空数据工具
export const resetDB = () => {
    for (const formId in db) {
        for (const key in db[formId]) {
            if (typeof db[formId][key] === 'number') {
                db[formId][key] = 0;
            } else if (typeof db[formId][key] === 'string') {
                db[formId][key] = '';
            }
        }
    }
}