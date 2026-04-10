// 1. 初始化数据模型，从 localStorage 读取历史填写记录
let formData = JSON.parse(localStorage.getItem('TaxDataStoreStrictV2')) || {};

// --- 数字千分位与小数格式化工具 ---
function formatNumber(val) {
    if (val === '' || val === null || val === undefined) return '';
    let num = parseFloat(String(val).replace(/,/g, ''));
    if (isNaN(num)) return val; 
    // 强制按当地标准转为千分位，保留2位小数
    return num.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function unformatNumber(val) {
    if (val === '' || val === null || val === undefined) return '';
    return String(val).replace(/,/g, '');
}

// 2. 初始化左侧菜单
function initMenu() {
    const menuList = document.getElementById('menu-list');
    formSchema.forEach(form => {
        const item = document.createElement('div');
        item.className = 'menu-item';
        item.id = `menu-${form.code}`;
        const showCode = form.displayCode ? form.displayCode : form.code;
        item.innerHTML = `<span class="code">${showCode}</span><span class="name" title="${form.name}">${form.name}</span>`;
        item.onclick = () => renderForm(form.code);
        menuList.appendChild(item);
    });
}

// 3. 动态渲染右侧表格引擎
function renderForm(formCode) {
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
    const activeItem = document.getElementById(`menu-${formCode}`);
    if (activeItem) activeItem.classList.add('active');

    const currentForm = formSchema.find(f => f.code === formCode);
    const container = document.getElementById('form-container');
    const showCode = currentForm.displayCode ? currentForm.displayCode : currentForm.code;
    
    let html = `
        <div class="form-header">
            <p>${showCode}</p>
            <h2>${currentForm.name}</h2>
        </div>
    `;

    if ((!currentForm.fields || currentForm.fields.length === 0) && (!currentForm.rows || currentForm.rows.length === 0)) {
        html += `<div class="empty-state">此模块字段尚未配置。</div>`;
        container.innerHTML = html;
        return;
    }

    if (currentForm.layout === 'table') {
        html += '<div class="table-responsive"><table class="tax-table">';
        
        // 渲染复杂表头
        if (currentForm.headers && currentForm.headers.length > 0) {
            html += '<thead>';
            currentForm.headers.forEach(headerRow => {
                html += '<tr>';
                headerRow.forEach(hCell => {
                    html += `<th rowspan="${hCell.rowspan || 1}" colspan="${hCell.colspan || 1}" style="width:${hCell.width || 'auto'}">${hCell.text}</th>`;
                });
                html += '</tr>';
            });
            html += '</thead>';
        }

        // 渲染表体与绑定数据 (移除了原生maxlength，改由JS控制长度)
        html += '<tbody>';
        currentForm.rows.forEach((row, rIdx) => {
            html += '<tr>';
            row.forEach((cell, cIdx) => {
                if (cell === I) { 
                    const key = `${currentForm.code}_r${rIdx}_c${cIdx}`;
                    const val = formData[key] || '';
                    html += `<td><input type="text" id="${key}" value="${formatNumber(val)}" class="text-center"></td>`;
                } else if (cell === R) { 
                    html += `<td class="readonly">*</td>`;
                } else if (typeof cell === 'object') { 
                    let textHtml = cell.text;
                    if(cell.text === I) {
                        const key = `${currentForm.code}_r${rIdx}_c${cIdx}`;
                        const val = formData[key] || '';
                        textHtml = `<input type="text" id="${key}" value="${formatNumber(val)}" class="text-center">`;
                    }
                    html += `<td rowspan="${cell.rowspan||1}" colspan="${cell.colspan||1}" class="${cell.class||''}">${textHtml}</td>`;
                } else {
                    html += `<td>${cell}</td>`; 
                }
            });
            html += '</tr>';
        });
        html += '</tbody></table></div>';
    }

    container.innerHTML = html;
}

// ==========================================
// --- 智能计算引擎 (支持千分位格式解构计算) ---
// ==========================================
function evaluateFormulas(formCode) {
    const form = formSchema.find(f => f.code === formCode);
    if (!form || !form.rows) return;

    const rowMap = {};
    form.rows.forEach((row, rIdx) => {
        if (typeof row[0] === 'string') rowMap[row[0].trim()] = rIdx;
    });

    let changed = true;
    let loopCount = 0;
    let objChanged = { changed: false };
    
    while (changed && loopCount < 5) {
        changed = false;
        objChanged.changed = false;
        loopCount++;

        form.rows.forEach((row, rIdx) => {
            let text = '';
            row.forEach(c => {
                if (typeof c === 'object' && c.text) text += c.text;
                else if (typeof c === 'string') text += c;
            });

            // 规则A: 标准四则运算
            const mathMatch = text.match(/\(([\d\.\+\-\×\÷\%]+)\)/);
            if (mathMatch) {
                const expr = mathMatch[1];
                if (/[\+\-\×\÷]/.test(expr) && !/…/.test(expr)) {
                    row.forEach((cell, cIdx) => {
                        if (cell === I || (typeof cell === 'object' && cell.text === I)) {
                            const targetKey = `${formCode}_r${rIdx}_c${cIdx}`;
                            let mathStr = expr.replace(/(\d+(\.\d+)?)/g, (match) => {
                                if (rowMap[match] !== undefined) {
                                    const sourceKey = `${formCode}_r${rowMap[match]}_c${cIdx}`;
                                    return `(${parseFloat(unformatNumber(formData[sourceKey])) || 0})`;
                                }
                                return match; 
                            }).replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100');
                            
                            try {
                                let result = eval(mathStr);
                                if (!isNaN(result) && isFinite(result)) {
                                    result = parseFloat(result.toFixed(2));
                                    if ((parseFloat(unformatNumber(formData[targetKey])) || 0) !== result) {
                                        formData[targetKey] = result;
                                        const el = document.getElementById(targetKey);
                                        if (el && document.activeElement !== el) {
                                            el.value = formatNumber(result);
                                        }
                                        changed = true;
                                    }
                                }
                            } catch (e) {}
                        }
                    });
                }
            }

            // 规则B: 连续范围求和
            const rangeMatch = text.match(/\(([\d\.]+)\+([\d\.]+)\+[…\.]+\+([\d\.]+)\)/);
            if (rangeMatch) {
                let start = parseInt(rangeMatch[1]);
                let end = parseInt(rangeMatch[3]);
                if (!isNaN(start) && !isNaN(end)) {
                    row.forEach((cell, cIdx) => {
                        if (cell === I || (typeof cell === 'object' && cell.text === I)) {
                            let sum = 0;
                            for(let i = start; i <= end; i++) {
                                let rIdxStr = i.toString();
                                if (rowMap[rIdxStr] !== undefined) {
                                    const sourceKey = `${formCode}_r${rowMap[rIdxStr]}_c${cIdx}`;
                                    sum += parseFloat(unformatNumber(formData[sourceKey])) || 0;
                                }
                            }
                            const targetKey = `${formCode}_r${rIdx}_c${cIdx}`;
                            sum = parseFloat(sum.toFixed(2));
                            if ((parseFloat(unformatNumber(formData[targetKey])) || 0) !== sum) {
                                formData[targetKey] = sum;
                                const el = document.getElementById(targetKey);
                                if(el && document.activeElement !== el) el.value = formatNumber(sum);
                                changed = true;
                            }
                        }
                    });
                }
            }

            // 规则C: 动态子项前缀求和
            const dotMatch = text.match(/\(([\d\.]+\+[\d\.]+\+[…\.])\)/);
            if (dotMatch && !rangeMatch) {
                const prefixMatch = dotMatch[1].match(/^(\d+)\./);
                if (prefixMatch) {
                    const prefix = prefixMatch[1] + '.';
                    row.forEach((cell, cIdx) => {
                        if (cell === I || (typeof cell === 'object' && cell.text === I)) {
                            let sum = 0;
                            for (let rName in rowMap) {
                                if (rName.startsWith(prefix) && rName !== row[0].toString()) {
                                    const sourceKey = `${formCode}_r${rowMap[rName]}_c${cIdx}`;
                                    sum += parseFloat(unformatNumber(formData[sourceKey])) || 0;
                                }
                            }
                            const targetKey = `${formCode}_r${rIdx}_c${cIdx}`;
                            sum = parseFloat(sum.toFixed(2));
                            if ((parseFloat(unformatNumber(formData[targetKey])) || 0) !== sum) {
                                formData[targetKey] = sum;
                                const el = document.getElementById(targetKey);
                                if(el && document.activeElement !== el) el.value = formatNumber(sum);
                                changed = true;
                            }
                        }
                    });
                }
            }
        });

        applySpecialColumnLogic(formCode, form, objChanged);
        if (objChanged.changed) changed = true;
    }
}

function applySpecialColumnLogic(formCode, form, objChanged) {
    const updateVal = (rIdx, cTarget, val) => {
        if (isNaN(val) || !isFinite(val)) val = 0;
        val = parseFloat(val.toFixed(2));
        const key = `${formCode}_r${rIdx}_c${cTarget}`;
        
        const cell = form.rows[rIdx] ? form.rows[rIdx][cTarget] : undefined;
        if (!cell || (cell !== I && !(typeof cell === 'object' && cell.text === I))) return;

        if ((parseFloat(unformatNumber(formData[key])) || 0) !== val) {
            formData[key] = val;
            const el = document.getElementById(key);
            if(el && document.activeElement !== el) el.value = formatNumber(val);
            objChanged.changed = true;
        }
    };
    const getV = (rIdx, cIdx) => parseFloat(unformatNumber(formData[`${formCode}_r${rIdx}_c${cIdx}`])) || 0;

    if (formCode === 'A105020') {
        form.rows.forEach((row, rIdx) => updateVal(rIdx, 7, getV(rIdx, 5) - getV(rIdx, 3)));
    } else if (formCode === 'A105030') {
        form.rows.forEach((row, rIdx) => {
            updateVal(rIdx, 4, getV(rIdx, 3) - getV(rIdx, 2)); 
            updateVal(rIdx, 9, getV(rIdx, 5) - getV(rIdx, 7)); 
            updateVal(rIdx, 10, getV(rIdx, 6) - getV(rIdx, 8)); 
            updateVal(rIdx, 11, getV(rIdx, 10) - getV(rIdx, 9)); 
            updateVal(rIdx, 12, getV(rIdx, 4) + getV(rIdx, 11)); 
        });
    } else if (formCode === 'A105050') {
        form.rows.forEach((row, rIdx) => {
            updateVal(rIdx, 7, getV(rIdx, 2) - getV(rIdx, 6)); 
            updateVal(rIdx, 8, getV(rIdx, 2) + getV(rIdx, 5) - getV(rIdx, 6)); 
        });
    } else if (formCode === 'A105080') {
        form.rows.forEach((row, rIdx) => updateVal(rIdx, 8, getV(rIdx, 6) - getV(rIdx, 7)));
    } else if (formCode === 'A105090') {
        form.rows.forEach((row, rIdx) => {
            updateVal(rIdx, 6, getV(rIdx, 5) - getV(rIdx, 3) - getV(rIdx, 4));
            updateVal(rIdx, 7, getV(rIdx, 2) - getV(rIdx, 6));
        });
    } else if (formCode === 'A105100') {
        form.rows.forEach((row, rIdx) => {
            updateVal(rIdx, 4, getV(rIdx, 3) - getV(rIdx, 2));
            updateVal(rIdx, 7, getV(rIdx, 6) - getV(rIdx, 5));
        });
    } else if (formCode === 'A107011') {
        form.rows.forEach((row, rIdx) => {
            updateVal(rIdx, 10, Math.min(getV(rIdx, 8), getV(rIdx, 9)));
            updateVal(rIdx, 13, getV(rIdx, 4) * getV(rIdx, 12));
            updateVal(rIdx, 14, getV(rIdx, 11) - getV(rIdx, 13));
            updateVal(rIdx, 16, Math.min(getV(rIdx, 14), getV(rIdx, 15)));
            updateVal(rIdx, 17, getV(rIdx, 7) + getV(rIdx, 10) + getV(rIdx, 16));
        });
    } else if (formCode === 'A107020') {
        form.rows.forEach((row, rIdx) => updateVal(rIdx, 12, getV(rIdx, 10) + getV(rIdx, 11) * 0.5));
    } else if (formCode === 'A108000') {
        form.rows.forEach((row, rIdx) => {
            updateVal(rIdx, 5, getV(rIdx, 3) - getV(rIdx, 4));
            updateVal(rIdx, 7, getV(rIdx, 5) - getV(rIdx, 6));
            updateVal(rIdx, 9, getV(rIdx, 7) * getV(rIdx, 8));
            updateVal(rIdx, 13, getV(rIdx, 11) - getV(rIdx, 12));
            updateVal(rIdx, 18, getV(rIdx, 15) + getV(rIdx, 16) + getV(rIdx, 17));
            updateVal(rIdx, 19, getV(rIdx, 12) + getV(rIdx, 14) + getV(rIdx, 18));
        });
    } else if (formCode === 'A108010') {
        form.rows.forEach((row, rIdx) => {
            updateVal(rIdx, 9, getV(rIdx, 2)+getV(rIdx, 3)+getV(rIdx, 4)+getV(rIdx, 5)+getV(rIdx, 6)+getV(rIdx, 7)+getV(rIdx, 8));
            updateVal(rIdx, 13, getV(rIdx, 10) + getV(rIdx, 11) + getV(rIdx, 12));
            updateVal(rIdx, 14, getV(rIdx, 9) + getV(rIdx, 10) + getV(rIdx, 11));
            updateVal(rIdx, 18, getV(rIdx, 14) + getV(rIdx, 15) - getV(rIdx, 16) - getV(rIdx, 17));
        });
    } else if (formCode === 'A108020') {
        form.rows.forEach((row, rIdx) => {
            updateVal(rIdx, 5, getV(rIdx, 2)+getV(rIdx, 3)-getV(rIdx, 4));
            updateVal(rIdx, 11, getV(rIdx, 6)+getV(rIdx, 7)+getV(rIdx, 8)+getV(rIdx, 9)+getV(rIdx, 10));
            updateVal(rIdx, 19, getV(rIdx, 14)+getV(rIdx, 15)+getV(rIdx, 16)+getV(rIdx, 17)+getV(rIdx, 18));
        });
    } else if (formCode === 'A108030') {
        form.rows.forEach((row, rIdx) => {
            updateVal(rIdx, 7, getV(rIdx, 2)+getV(rIdx, 3)+getV(rIdx, 4)+getV(rIdx, 5)+getV(rIdx, 6));
            updateVal(rIdx, 13, getV(rIdx, 8)+getV(rIdx, 9)+getV(rIdx, 10)+getV(rIdx, 11)+getV(rIdx, 12));
            updateVal(rIdx, 14, getV(rIdx, 3)-getV(rIdx, 9));
            updateVal(rIdx, 15, getV(rIdx, 4)-getV(rIdx, 10));
            updateVal(rIdx, 16, getV(rIdx, 5)-getV(rIdx, 11));
            updateVal(rIdx, 17, getV(rIdx, 6)-getV(rIdx, 12));
            updateVal(rIdx, 19, getV(rIdx, 14)+getV(rIdx, 15)+getV(rIdx, 16)+getV(rIdx, 17)+getV(rIdx, 18));
        });
    }
}

// 4. 全局交互与事件代理

let saveTimeout;
const statusEl = document.getElementById('save-status');

// 聚集时：脱掉千分位方便用户修改
document.getElementById('content').addEventListener('focusin', function(e) {
    if (e.target.tagName === 'INPUT' && e.target.id) {
        // 如果是普通的文字输入框（A000000中的股东名称等），排除纯数字逻辑
        if (e.target.id.startsWith('A000000')) return;
        e.target.value = unformatNumber(e.target.value);
    }
});

// 失焦时：自动格式化加千分位与保留两小位
document.getElementById('content').addEventListener('focusout', function(e) {
    if (e.target.tagName === 'INPUT' && e.target.id) {
        if (e.target.id.startsWith('A000000')) return;
        const formatted = formatNumber(e.target.value);
        e.target.value = formatted;
        formData[e.target.id] = unformatNumber(formatted);
    }
});

// 输入时：精确拦截约束，保证仅10位数和2位小数
document.getElementById('content').addEventListener('input', function(e) {
    if (e.target.tagName === 'INPUT' && e.target.id) {
        const key = e.target.id;
        let val = e.target.value;

        // 如果是企业基本信息表的输入框，不套用严格的数字限制
        if (!key.startsWith('A000000')) {
            // 移除非法字符，只保留数字、小数点和负号
            val = val.replace(/[^\d.-]/g, '');
            
            // 处理负号（只能在开头）
            const isNegative = val.startsWith('-');
            val = val.replace(/-/g, '');
            if (isNegative) val = '-' + val;
            
            // 处理小数点（限制只能有1个小数点，限制整数10位，小数2位）
            let parts = val.split('.');
            if (parts.length > 2) {
                parts = [parts[0], parts.slice(1).join('')];
            }
            
            // 限制整数部分最大10位（不含负号）
            let intPart = parts[0].replace('-', '');
            if (intPart.length > 10) {
                intPart = intPart.substring(0, 10);
                parts[0] = (isNegative ? '-' : '') + intPart;
            }
            
            // 限制小数部分最大2位
            if (parts.length > 1) {
                parts[1] = parts[1].substring(0, 2);
            }
            
            val = parts.join('.');
            e.target.value = val;
        }

        // 存储进入缓存
        formData[key] = val;

        // 触发智能计算更新其余字段
        const formCode = key.split('_')[0];
        evaluateFormulas(formCode);

        // 延迟保存硬盘机制
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            localStorage.setItem('TaxDataStoreStrictV2', JSON.stringify(formData));
            statusEl.classList.add('show');
            setTimeout(() => statusEl.classList.remove('show'), 1500);
        }, 500);
    }
});

// 5. 启动入口
window.onload = initMenu;