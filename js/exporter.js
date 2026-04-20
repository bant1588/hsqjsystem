// js/exporter.js

export const exportToExcel = async (selectedIds, formToGroupMap, db) => {
    // 1. 构建 XML 头部与样式定义
    let xml = `<?xml version="1.0" encoding="utf-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <Styles>
  <Style ss:ID="sTitle">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="微软雅黑" x:CharSet="134" ss:Size="14" ss:Bold="1"/>
  </Style>
  <Style ss:ID="sHeader">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="微软雅黑" x:CharSet="134" ss:Bold="1"/>
   <Interior ss:Color="#F2F2F2" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="sCell">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="微软雅黑" x:CharSet="134"/>
  </Style>
  <Style ss:ID="sCellLeft">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="微软雅黑" x:CharSet="134"/>
  </Style>
  <Style ss:ID="sCellBold">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="微软雅黑" x:CharSet="134" ss:Bold="1"/>
  </Style>
 </Styles>
`;

    // 2. 遍历已选表单，每个表单生成一个 Worksheet
    for (const formId of selectedIds) {
        const groupName = formToGroupMap[formId];
        if (!groupName) continue;

        try {
            const groupModule = await import(`../forms/${groupName}.js`);
            const bundle = groupModule.formBundle || Object.values(groupModule)[0];
            const target = bundle[formId];
            
            if (target && target.schema) {
                const config = target.schema;
                const colCount = config.columns.length;
                
                // 开始 Sheet
                xml += `<Worksheet ss:Name="${formId}">\n<Table>\n`;
                
                // 设置列宽 (粗略适配)
                config.columns.forEach(col => {
                    xml += `<Column ss:Width="${(parseFloat(col.width) || 10) * 8}"/>\n`;
                });

                // 第一行：表单大标题
                xml += `<Row ss:Height="25">\n<Cell ss:MergeAcross="${colCount - 1}" ss:StyleID="sTitle"><Data ss:Type="String">${config.title}</Data></Cell>\n</Row>\n`;
                
                // 第二行：表头
                xml += `<Row ss:Height="20">\n`;
                config.columns.forEach(col => {
                    xml += `<Cell ss:StyleID="sHeader"><Data ss:Type="String">${col.title}</Data></Cell>\n`;
                });
                xml += `</Row>\n`;

                // 内容行
                config.rows.forEach(row => {
                    xml += `<Row>\n`;
                    // 第一列：行次
                    xml += `<Cell ss:StyleID="sCell"><Data ss:Type="String">${row.line || ''}</Data></Cell>\n`;
                    // 第二列：项目名称（处理缩进）
                    const style = row.isBold ? 'sCellBold' : 'sCellLeft';
                    const indent = (row.indent || 0) > 0 ? "　".repeat(row.indent) : ""; // 使用全角空格模拟缩进
                    xml += `<Cell ss:StyleID="${style}"><Data ss:Type="String">${indent}${row.text || ''}</Data></Cell>\n`;

                    // 数据列逻辑
                    if (row.inputs) {
                        row.inputs.forEach(inp => {
                            if (inp.isAsterisk) {
                                xml += `<Cell ss:StyleID="sCell"><Data ss:Type="String">*</Data></Cell>\n`;
                            } else if (inp.key) {
                                const val = db[config.id]?.[inp.key];
                                const type = typeof val === 'number' ? 'Number' : 'String';
                                const displayVal = (val === undefined || val === null) ? '' : val;
                                xml += `<Cell ss:StyleID="sCell"><Data ss:Type="${type}">${displayVal}</Data></Cell>\n`;
                            } else {
                                xml += `<Cell ss:StyleID="sCell"></Cell>\n`;
                            }
                        });
                    } else if (row.key) {
                        const val = db[config.id]?.[row.key];
                        const type = typeof val === 'number' ? 'Number' : 'String';
                        const displayVal = (val === undefined || val === null) ? '' : val;
                        xml += `<Cell ss:StyleID="sCell"><Data ss:Type="${type}">${displayVal}</Data></Cell>\n`;
                    } else {
                        xml += `<Cell ss:StyleID="sCell"></Cell>\n`;
                    }
                    xml += `</Row>\n`;
                });

                xml += `</Table>\n</Worksheet>\n`;
            }
        } catch (e) {
            console.error(`导出表单 ${formId} 时出错:`, e);
        }
    }

    // 3. 结束 XML 并触发下载
    xml += `</Workbook>`;

    const blob = new Blob([xml], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const timeStamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    a.href = url;
    a.download = `企业所得税申报表_${timeStamp}.xls`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};