// js/exporter.js

export const exportToExcel = async (selectedIds, formToGroupMap, db) => {
    // 构造 Excel 适用的 HTML 格式（支持边框、背景色和加粗）
    let html = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office"
              xmlns:x="urn:schemas-microsoft-com:office:excel"
              xmlns="http://www.w3.org/TR/REC-html40">
        <head>
            <meta charset="utf-8">
            <style>
                table { border-collapse: collapse; font-family: 'Microsoft YaHei', sans-serif; font-size: 12px; margin-bottom: 30px; }
                th, td { border: 0.5pt solid #000000; padding: 6px; text-align: center; vertical-align: middle; }
                th { background-color: #f2f2f2; font-weight: bold; }
                .title { font-size: 16px; font-weight: bold; background-color: #ffffff; border: none; text-align: center; }
            </style>
        </head>
        <body>
    `;

    for (const formId of selectedIds) {
        const groupName = formToGroupMap[formId];
        if (!groupName) continue;

        try {
            const groupModule = await import(`../forms/${groupName}.js`);
            const bundle = groupModule.formBundle || Object.values(groupModule)[0];
            const target = bundle[formId];
            
            if (target && target.schema) {
                const config = target.schema;
                
                html += `<table>`;
                // 表格大标题
                html += `<tr><th colspan="${config.columns.length}" class="title">${config.title}</th></tr>`;
                
                // 表头
                html += `<tr>`;
                config.columns.forEach(col => {
                    html += `<th style="text-align:${col.align || 'center'}">${col.title}</th>`;
                });
                html += `</tr>`;

                // 表格数据行
                config.rows.forEach(row => {
                    html += `<tr>`;
                    // 行次
                    html += `<td>${row.line || ''}</td>`;
                    // 项目内容
                    let paddingLeft = (row.indent || 0) * 20 + 10;
                    let fontWeight = row.isBold ? 'bold' : 'normal';
                    html += `<td style="text-align:left; padding-left:${paddingLeft}px; font-weight:${fontWeight}">${row.text || ''}</td>`;

                    // 数据列
                    if (row.inputs) {
                        row.inputs.forEach(inp => {
                            if (inp.isAsterisk) {
                                html += `<td style="background-color:#f5f5f5; color:#999; font-weight:bold;">*</td>`;
                            } else if (inp.key) {
                                let val = db[config.id]?.[inp.key];
                                val = (val === undefined || val === null) ? '' : val;
                                // 强制纯文本输出以防被科学计数法吞噬
                                html += `<td style="mso-number-format:'\\@';">${val}</td>`;
                            } else {
                                html += `<td></td>`;
                            }
                        });
                    } else {
                        let val = '';
                        if (row.key) {
                            val = db[config.id]?.[row.key];
                            val = (val === undefined || val === null) ? '' : val;
                        }
                        html += `<td style="mso-number-format:'\\@';">${val}</td>`;
                    }
                    html += `</tr>`;
                });
                
                html += `</table><br/>`;
            }
        } catch (e) {
            console.warn(`导出时加载 ${formId} 失败:`, e);
        }
    }

    html += `</body></html>`;

    // 触发下载
    const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `企业所得税申报数据_${new Date().getTime()}.xls`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};