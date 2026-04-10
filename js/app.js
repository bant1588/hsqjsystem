// 1. 初始化数据模型，从 localStorage 读取历史填写记录
let formData = JSON.parse(localStorage.getItem('TaxDataStoreStrictV2')) || {};

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
    document.getElementById(`menu-${formCode}`).classList.add('active');

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

        // 渲染表体与绑定数据
        html += '<tbody>';
        currentForm.rows.forEach((row, rIdx) => {
            html += '<tr>';
            row.forEach((cell, cIdx) => {
                if (cell === I) { // I 代表输入框
                    const key = `${currentForm.code}_r${rIdx}_c${cIdx}`;
                    const val = formData[key] || '';
                    html += `<td><input type="text" id="${key}" value="${val}" class="text-center"></td>`;
                } else if (cell === R) { // R 代表只读锁定区
                    html += `<td class="readonly">*</td>`;
                } else if (typeof cell === 'object') { // 对象代表带有 colspan/rowspan 的特殊单元格
                    let textHtml = cell.text;
                    if(cell.text === I) {
                        const key = `${currentForm.code}_r${rIdx}_c${cIdx}`;
                        const val = formData[key] || '';
                        textHtml = `<input type="text" id="${key}" value="${val}" class="text-center">`;
                    }
                    html += `<td rowspan="${cell.rowspan||1}" colspan="${cell.colspan||1}" class="${cell.class||''}">${textHtml}</td>`;
                } else {
                    html += `<td>${cell}</td>`; // 普通文本
                }
            });
            html += '</tr>';
        });
        html += '</tbody></table></div>';
    }

    container.innerHTML = html;
}

// 4. 全局事件代理与防抖保存机制 (解决大规模 DOM 输入卡顿问题)
let saveTimeout;
const statusEl = document.getElementById('save-status');

document.getElementById('content').addEventListener('input', function(e) {
    if (e.target.tagName === 'INPUT' && e.target.id) {
        const key = e.target.id;
        const value = e.target.value;

        // 实时更新内存状态
        formData[key] = value;

        // 延迟 500 毫秒后统一写入硬盘
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            localStorage.setItem('TaxDataStoreStrictV2', JSON.stringify(formData));
            
            // 显示友好提示
            statusEl.classList.add('show');
            setTimeout(() => statusEl.classList.remove('show'), 1500);
        }, 500);
    }
});

// 5. 启动入口
window.onload = initMenu;