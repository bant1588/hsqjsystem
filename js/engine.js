// js/engine.js
import { reactive, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

export const db = reactive({
    // 必须在这里给每张表声明一个空对象，页面上的 v-model 才能存进去
    A000000: {}, A100000: {}, A101010: {}, A101020: {}, A102010: {}, A102020: {},
    A103000: {}, A104000: {}, A105000: {}, A105010: {}, A105020: {}, A105030: {},
    A105040: {}, A105050: {}, A105060: {}, A105070: {}
})

export const formulas = reactive({
    // 这里的公式以后可以根据实际需求慢慢加
})