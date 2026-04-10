// 常量标识符
const I = 'INPUT'; 
const R = 'READONLY';

// 全量 38 张表单结构配置
const formSchema = [
    {
        code: 'A000000',
        name: '企业基础信息表',
        layout: 'table',
        rows: [
            [{text: '100 基本信息', colspan: 4, class: 'text-center section-title' }],
            [{text: '101 汇总纳税企业', class: 'text-left', width: '20%'}, {text: '□总机构（跨省） □总机构（省内） □分支机构 □否', colspan: 3, class: 'text-left'}],
            [{text: '102 所属行业明细代码', class: 'text-left', width: '20%'}, I, {text: '103 资产总额（万元）', class: 'text-left', width: '20%'}, I],
            [{text: '104 从业人数', class: 'text-left'}, I, {text: '105 国家限制或禁止行业', class: 'text-left'}, {text: '□是　　□否', class: 'text-left'}],
            [{text: '106 主营利润等', class: 'text-left'}, {text: '□是　　□否', class: 'text-left'}, {text: '107 存在境外关联交易', class: 'text-left'}, {text: '□是　　□否', class: 'text-left'}],
            [{text: '108 上市公司', class: 'text-left'}, {text: '□境内　□境外　□否', class: 'text-left'}, {text: '109 从事股权投资业务', class: 'text-left'}, {text: '□是　　□否', class: 'text-left'}],
            [{text: '110 适用的会计制度', class: 'text-left'}, {text: '□企业会计准则　□小企业会计准则　□事业单位会计制度　□民间非营利组织会计制度　□其他', colspan: 3, class: 'text-left'}],
            [{text: '200 企业重组及递延纳税事项', colspan: 4, class: 'text-center section-title' }],
            [{text: '201 发生资产（股权）划转特殊性税务处理事项', colspan: 3, class: 'text-left'}, {text: '□是　　□否', class: 'text-center'}],
            [{text: '202 发生非货币性资产投资递延纳税事项', colspan: 3, class: 'text-left'}, {text: '□是　　□否', class: 'text-center'}],
            [{text: '203 发生技术入股递延纳税事项', colspan: 3, class: 'text-left'}, {text: '□是　　□否', class: 'text-center'}],
            [{text: '204 发生企业重组事项', colspan: 3, class: 'text-left'}, {text: '□是　　□否', class: 'text-center'}],
            [{text: '300 企业主要股东及分红情况', colspan: 4, class: 'text-center section-title' }],
            [{text: '股东名称', class:'text-center'}, {text: '证件种类', class:'text-center'}, {text: '证件号码', class:'text-center'}, {text: '投资比例', class:'text-center'}],
            [I, I, I, I],
            [I, I, I, I],
            [I, I, I, I],
            [{text: '其余股东合计', colspan: 3, class: 'text-left'}, I]
        ]
    },
    {
        code: 'A100000',
        name: '企业所得税年度纳税申报主表',
        layout: 'table',
        headers: [
            [ { text: '行次', width: '50px' }, { text: '项 目' }, { text: '金 额', width: '250px' } ]
        ],
        rows: [
            ['1', {text: '一、营业收入(填写A101010/101020/103000)', class: 'text-left'}, I],
            ['2', {text: '减:营业成本(填写A102010/102020/103000)', class: 'text-indent-1'}, I],
            ['3', {text: '减:税金及附加', class: 'text-indent-1'}, I],
            ['4', {text: '减:销售费用(填写A104000)', class: 'text-indent-1'}, I],
            ['5', {text: '减:管理费用(填写A104000)', class: 'text-indent-1'}, I],
            ['6', {text: '减:研发费用(填写A104000)', class: 'text-indent-1'}, I],
            ['7', {text: '减:财务费用(填写A104000)', class: 'text-indent-1'}, I],
            ['8', {text: '加:其他收益', class: 'text-indent-1'}, I],
            ['9', {text: '加:投资收益(损失以“-”号填列)', class: 'text-indent-1'}, I],
            ['10', {text: '加:净敞口套期收益(损失以“-”号填列)', class: 'text-indent-1'}, I],
            ['11', {text: '加:公允价值变动收益(损失以“-”号填列)', class: 'text-indent-1'}, I],
            ['12', {text: '加:信用减值损失(损失以“-”号填列)', class: 'text-indent-1'}, I],
            ['13', {text: '加:资产减值损失(损失以“-”号填列)', class: 'text-indent-1'}, I],
            ['14', {text: '加:资产处置收益(损失以“-”号填列)', class: 'text-indent-1'}, I],
            ['15', {text: '二、营业利润(亏损以“-”号填列)', class: 'text-left'}, I],
            ['16', {text: '加:营业外收入(填写A101010/101020/103000)', class: 'text-indent-1'}, I],
            ['17', {text: '减:营业外支出(填写A102010/102020/103000)', class: 'text-indent-1'}, I],
            ['18', {text: '三、利润总额(15+16-17)', class: 'text-left'}, I],
            ['19', {text: '减:境外所得(填写A108010)', class: 'text-indent-1'}, I],
            ['20', {text: '加:纳税调整增加额(填写A105000)', class: 'text-indent-1'}, I],
            ['21', {text: '减:纳税调整减少额(填写A105000)', class: 'text-indent-1'}, I],
            ['22', {text: '减:免税、减计收入及加计扣除(22.1+22.2+...)', class: 'text-indent-1'}, I],
            ['22.1', {text: '　(填写优惠事项名称)', class: 'text-indent-2'}, I],
            ['22.2', {text: '　(填写优惠事项名称)', class: 'text-indent-2'}, I],
            ['23', {text: '加:境外应税所得抵减境内亏损(填写A108000)', class: 'text-indent-1'}, I],
            ['24', {text: '四、纳税调整后所得(18-19-20-21-22+23)', class: 'text-left'}, I],
            ['25', {text: '减:所得减免(填写A107020)', class: 'text-indent-1'}, I],
            ['26', {text: '减:弥补以前年度亏损(填写A106000)', class: 'text-indent-1'}, I],
            ['27', {text: '减:抵扣应纳税所得额(填写A107030)', class: 'text-indent-1'}, I],
            ['28', {text: '五、应纳税所得额(24-25-26-27)', class: 'text-left'}, I],
            ['29', {text: '税率(25%)', class: 'text-indent-1'}, I],
            ['30', {text: '六、应纳所得税额(28×29)', class: 'text-left'}, I],
            ['31', {text: '减:减免所得税额(31.1+31.2+…)', class: 'text-indent-1'}, I],
            ['31.1', {text: '　(填写优惠事项名称)', class: 'text-indent-2'}, I],
            ['31.2', {text: '　(填写优惠事项名称)', class: 'text-indent-2'}, I],
            ['32', {text: '减:抵免所得税额(填写A107050)', class: 'text-indent-1'}, I],
            ['33', {text: '七、应纳税额(30-31-32)', class: 'text-left'}, I],
            ['34', {text: '加:境外所得应纳所得税额(填写A108000)', class: 'text-indent-1'}, I],
            ['35', {text: '减:境外所得抵免所得税额(填写A108000)', class: 'text-indent-1'}, I],
            ['36', {text: '八、实际应纳所得税额(33+34-35)', class: 'text-left'}, I],
            ['37', {text: '减:本年累计预缴所得税额', class: 'text-indent-1'}, I],
            ['38', {text: '九、本年应补(退)所得税额(36-37)', class: 'text-left'}, I],
            ['39', {text: '其中:总机构分摊本年应补(退)所得税额(填写A109000)', class: 'text-indent-1'}, I],
            ['40', {text: '财政集中分配本年应补(退)所得税额(填写A109000)', class: 'text-indent-1'}, I],
            ['41', {text: '总机构主体生产经营部门分摊本年应补(退)所得税额(填写A109000)', class: 'text-indent-1'}, I],
            ['42', {text: '减:民族自治地区企业所得税地方分享部分', class: 'text-indent-1'}, I],
            ['43', {text: '减:稽查查补(退)所得税额', class: 'text-indent-1'}, I],
            ['44', {text: '减:特别纳税调整补(退)所得税额', class: 'text-indent-1'}, I],
            ['45', {text: '十、本年实际应补(退)所得税额(38-42-43-44)', class: 'text-left'}, I]
        ],
        logic: [
            { target: 'r17_c2', formula: 'val("r14_c2") + val("r15_c2") - val("r16_c2")' } // 行18 = 行15 + 行16 - 行17
        ]
    },
    {
        code: 'A101010',
        name: '一般企业收入明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', width: '50px' }, { text: '项    目' }, { text: '金    额', width: '250px' } ]
        ],
        rows: [
            ['1', {text: '一、营业收入 (2+9)', class: 'text-left'}, I],
            ['2', {text: '（一）主营业务收入 (3+5+6+7+8)', class: 'text-indent-1'}, I],
            ['3', {text: '1. 销售商品收入', class: 'text-indent-2'}, I],
            ['4', {text: '其中：非货币性资产交换收入', class: 'text-indent-3'}, I],
            ['5', {text: '2. 提供劳务收入', class: 'text-indent-2'}, I],
            ['6', {text: '3. 建造合同收入', class: 'text-indent-2'}, I],
            ['7', {text: '4. 让渡资产使用权收入', class: 'text-indent-2'}, I],
            ['8', {text: '5. 其他', class: 'text-indent-2'}, I],
            ['9', {text: '（二）其他业务收入 (10+12+13+14+15)', class: 'text-indent-1'}, I],
            ['10', {text: '1. 销售材料收入', class: 'text-indent-2'}, I],
            ['11', {text: '其中：非货币性资产交换收入', class: 'text-indent-3'}, I],
            ['12', {text: '2. 出租固定资产收入', class: 'text-indent-2'}, I],
            ['13', {text: '3. 出租无形资产收入', class: 'text-indent-2'}, I],
            ['14', {text: '4. 出租包装物和商品收入', class: 'text-indent-2'}, I],
            ['15', {text: '5. 其他', class: 'text-indent-2'}, I],
            ['16', {text: '二、营业外收入 (17+18+19+20+21+22+23+24+25+26)', class: 'text-left'}, I],
            ['17', {text: '（一）非流动资产处置利得', class: 'text-indent-1'}, I],
            ['18', {text: '（二）非货币性资产交换利得', class: 'text-indent-1'}, I],
            ['19', {text: '（三）债务重组利得', class: 'text-indent-1'}, I],
            ['20', {text: '（四）政府补助利得等', class: 'text-indent-1'}, I],
            ['21', {text: '（五）盘盈利得', class: 'text-indent-1'}, I],
            ['22', {text: '（六）捐赠利得', class: 'text-indent-1'}, I],
            ['23', {text: '（七）罚没利得', class: 'text-indent-1'}, I],
            ['24', {text: '（八）确实无法支付的应付款项', class: 'text-indent-1'}, I],
            ['25', {text: '（九）汇兑收益', class: 'text-indent-1'}, I],
            ['26', {text: '（十）其他', class: 'text-indent-1'}, I]
        ],
        logic: [
            // 行次9 = 10+12+13+14+15 (根据 rows 数组索引，r8代表第9行)
            { target: 'r8_c2', formula: 'val("r9_c2") + val("r11_c2") + val("r12_c2") + val("r13_c2") + val("r14_c2")' },
            // 行次1 = 2+9
            { target: 'r0_c2', formula: 'val("r1_c2") + val("r8_c2")' }
        ]
    },
    {
        code: 'A101020',
        name: '金融企业收入明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', width: '50px' }, { text: '项    目' }, { text: '金    额', width: '250px' } ]
        ],
        rows: [
            ['1', {text: '一、营业收入 (2+18+27+32+33+34)', class: 'text-left'}, I],
            ['2', {text: '（一）银行业务收入 (3+10)', class: 'text-indent-1'}, I],
            ['3', {text: '1. 利息收入 (4+5+6+7+8+9)', class: 'text-indent-2'}, I],
            ['4', {text: '(1) 存放同业', class: 'text-indent-3'}, I],
            ['5', {text: '(2) 存放中央银行', class: 'text-indent-3'}, I],
            ['6', {text: '(3) 拆出资金', class: 'text-indent-3'}, I],
            ['7', {text: '(4) 发放贷款及垫款', class: 'text-indent-3'}, I],
            ['8', {text: '(5) 买入返售金融资产', class: 'text-indent-3'}, I],
            ['9', {text: '(6) 其他', class: 'text-indent-3'}, I],
            ['10', {text: '2. 手续费及佣金收入 (11+12+13+14+15+16+17)', class: 'text-indent-2'}, I],
            ['11', {text: '(1) 结算与清算手续费', class: 'text-indent-3'}, I],
            ['12', {text: '(2) 代理业务手续费', class: 'text-indent-3'}, I],
            ['13', {text: '(3) 信用承诺手续费及佣金', class: 'text-indent-3'}, I],
            ['14', {text: '(4) 银行卡手续费', class: 'text-indent-3'}, I],
            ['15', {text: '(5) 顾问和咨询费', class: 'text-indent-3'}, I],
            ['16', {text: '(6) 托管及其他受托业务佣金', class: 'text-indent-3'}, I],
            ['17', {text: '(7) 其他', class: 'text-indent-3'}, I],
            ['18', {text: '（二）证券业务收入 (19+26)', class: 'text-indent-1'}, I],
            ['19', {text: '1. 证券业务手续费及佣金收入 (20+21+22+23+24+25)', class: 'text-indent-2'}, I],
            ['20', {text: '(1) 证券经纪业务', class: 'text-indent-3'}, I],
            ['21', {text: '(2) 证券承销业务', class: 'text-indent-3'}, I],
            ['22', {text: '(3) 受托客户资产管理业务', class: 'text-indent-3'}, I],
            ['23', {text: '(4) 代买卖证券', class: 'text-indent-3'}, I],
            ['24', {text: '(5) 代保管证券', class: 'text-indent-3'}, I],
            ['25', {text: '(6) 其他', class: 'text-indent-3'}, I],
            ['26', {text: '2. 其他证券业务收入', class: 'text-indent-2'}, I],
            ['27', {text: '（三）保险业务收入 (28-30+31)', class: 'text-indent-1'}, I],
            ['28', {text: '1. 保费业务收入', class: 'text-indent-2'}, I],
            ['29', {text: '其中：分保费收入', class: 'text-indent-3'}, I],
            ['30', {text: '2. 分出保费', class: 'text-indent-2'}, I],
            ['31', {text: '3. 提取未到期责任准备金', class: 'text-indent-2'}, I],
            ['32', {text: '（四）其他金融业务收入', class: 'text-indent-1'}, I],
            ['33', {text: '（五）汇兑收益（损失以“-”号填列）', class: 'text-indent-1'}, I],
            ['34', {text: '（六）其他业务收入', class: 'text-indent-1'}, I],
            ['35', {text: '二、营业外收入 (36+37+38+39+40+41+42)', class: 'text-left'}, I],
            ['36', {text: '（一）非流动资产处置利得', class: 'text-indent-1'}, I],
            ['37', {text: '（二）非货币资产交换利得', class: 'text-indent-1'}, I],
            ['38', {text: '（三）债务重组利得', class: 'text-indent-1'}, I],
            ['39', {text: '（四）政府补助利得', class: 'text-indent-1'}, I],
            ['40', {text: '（五）盘盈利得', class: 'text-indent-1'}, I],
            ['41', {text: '（六）捐赠利得', class: 'text-indent-1'}, I],
            ['42', {text: '（七）其他', class: 'text-indent-1'}, I]
        ]
    },
    {
        code: 'A102010',
        name: '一般企业成本支出明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', width: '50px' }, { text: '项    目' }, { text: '金    额', width: '250px' } ]
        ],
        rows: [
            ['1', {text: '一、营业成本 (2+9)', class: 'text-left'}, I],
            ['2', {text: '（一）主营业务成本 (3+5+6+7+8)', class: 'text-indent-1'}, I],
            ['3', {text: '1. 销售商品成本', class: 'text-indent-2'}, I],
            ['4', {text: '其中：非货币性资产交换成本', class: 'text-indent-3'}, I],
            ['5', {text: '2. 提供劳务成本', class: 'text-indent-2'}, I],
            ['6', {text: '3. 建造合同成本', class: 'text-indent-2'}, I],
            ['7', {text: '4. 让渡资产使用权成本', class: 'text-indent-2'}, I],
            ['8', {text: '5. 其他', class: 'text-indent-2'}, I],
            ['9', {text: '（二）其他业务成本 (10+12+13+14+15)', class: 'text-indent-1'}, I],
            ['10', {text: '1. 销售材料成本', class: 'text-indent-2'}, I],
            ['11', {text: '其中：非货币性资产交换成本', class: 'text-indent-3'}, I],
            ['12', {text: '2. 出租固定资产成本', class: 'text-indent-2'}, I],
            ['13', {text: '3. 出租无形资产成本', class: 'text-indent-2'}, I],
            ['14', {text: '4. 出租包装物和商品成本', class: 'text-indent-2'}, I],
            ['15', {text: '5. 其他', class: 'text-indent-2'}, I],
            ['16', {text: '二、营业外支出 (17+18+19+20+21+22+23+24+25+26)', class: 'text-left'}, I],
            ['17', {text: '（一）非流动资产处置损失', class: 'text-indent-1'}, I],
            ['18', {text: '（二）非货币性资产交换损失', class: 'text-indent-1'}, I],
            ['19', {text: '（三）债务重组损失', class: 'text-indent-1'}, I],
            ['20', {text: '（四）非常损失', class: 'text-indent-1'}, I],
            ['21', {text: '（五）捐赠支出', class: 'text-indent-1'}, I],
            ['22', {text: '（六）赞助支出', class: 'text-indent-1'}, I],
            ['23', {text: '（七）罚没支出', class: 'text-indent-1'}, I],
            ['24', {text: '（八）坏账损失', class: 'text-indent-1'}, I],
            ['25', {text: '（九）无法收回的股权投资损失', class: 'text-indent-1'}, I],
            ['26', {text: '（十）其他', class: 'text-indent-1'}, I]
        ]
    },
    {
        code: 'A102020',
        name: '金融企业支出明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', width: '50px' }, { text: '项    目' }, { text: '金    额', width: '250px' } ]
        ],
        rows: [
            ['1', {text: '一、营业支出 (2+15+25+31+32)', class: 'text-left'}, I],
            ['2', {text: '（一）银行业务支出 (3+11)', class: 'text-indent-1'}, I],
            ['3', {text: '1. 银行利息支出 (4+5+6+7+8+9+10)', class: 'text-indent-2'}, I],
            ['4', {text: '(1) 同业存放', class: 'text-indent-3'}, I],
            ['5', {text: '(2) 向中央银行借款', class: 'text-indent-3'}, I],
            ['6', {text: '(3) 拆入资金', class: 'text-indent-3'}, I],
            ['7', {text: '(4) 吸收存款', class: 'text-indent-3'}, I],
            ['8', {text: '(5) 卖出回购金融资产', class: 'text-indent-3'}, I],
            ['9', {text: '(6) 发行债券', class: 'text-indent-3'}, I],
            ['10', {text: '(7) 其他', class: 'text-indent-3'}, I],
            ['11', {text: '2. 银行手续费及佣金支出 (12+13+14)', class: 'text-indent-2'}, I],
            ['12', {text: '(1) 手续费支出', class: 'text-indent-3'}, I],
            ['13', {text: '(2) 佣金支出', class: 'text-indent-3'}, I],
            ['14', {text: '(3) 其他', class: 'text-indent-3'}, I],
            ['15', {text: '（二）保险业务支出 (16+17-18+19-20+21+22-23+24)', class: 'text-indent-1'}, I],
            ['16', {text: '1. 退保金', class: 'text-indent-2'}, I],
            ['17', {text: '2. 赔付支出', class: 'text-indent-2'}, I],
            ['18', {text: '减：摊回赔付支出', class: 'text-indent-3'}, I],
            ['19', {text: '3. 提取保险责任准备金', class: 'text-indent-2'}, I],
            ['20', {text: '减：摊回保险责任准备金', class: 'text-indent-3'}, I],
            ['21', {text: '4. 保单红利支出', class: 'text-indent-2'}, I],
            ['22', {text: '5. 分保费用', class: 'text-indent-2'}, I],
            ['23', {text: '减：摊回分保费用', class: 'text-indent-3'}, I],
            ['24', {text: '6. 保险业务手续费及佣金支出', class: 'text-indent-2'}, I],
            ['25', {text: '（三）证券业务支出 (26+30)', class: 'text-indent-1'}, I],
            ['26', {text: '1. 证券业务手续费及佣金支出 (27+28+29)', class: 'text-indent-2'}, I],
            ['27', {text: '(1) 证券经纪业务手续费支出', class: 'text-indent-3'}, I],
            ['28', {text: '(2) 佣金支出', class: 'text-indent-3'}, I],
            ['29', {text: '(3) 其他', class: 'text-indent-3'}, I],
            ['30', {text: '2. 其他证券业务支出', class: 'text-indent-2'}, I],
            ['31', {text: '（四）其他金融业务支出', class: 'text-indent-1'}, I],
            ['32', {text: '（五）其他业务成本', class: 'text-indent-1'}, I],
            ['33', {text: '二、营业外支出 (34+35+36+37+38+39)', class: 'text-left'}, I],
            ['34', {text: '（一）非流动资产处置损失', class: 'text-indent-1'}, I],
            ['35', {text: '（二）非货币性资产交换损失', class: 'text-indent-1'}, I],
            ['36', {text: '（三）债务重组损失', class: 'text-indent-1'}, I],
            ['37', {text: '（四）捐赠支出', class: 'text-indent-1'}, I],
            ['38', {text: '（五）非常损失', class: 'text-indent-1'}, I],
            ['39', {text: '（六）其他', class: 'text-indent-1'}, I]
        ]
    },
    {
        code: 'A103000',
        name: '事业单位、民间非营利组织收入、支出明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', width: '50px' }, { text: '项    目' }, { text: '金    额', width: '250px' } ]
        ],
        rows: [
            ['1', {text: '一、事业单位收入 (2+3+4+5+6+7)', class: 'text-left'}, I],
            ['2', {text: '（一）财政补助收入', class: 'text-indent-1'}, I],
            ['3', {text: '（二）事业收入', class: 'text-indent-1'}, I],
            ['4', {text: '（三）上级补助收入', class: 'text-indent-1'}, I],
            ['5', {text: '（四）附属单位上缴收入', class: 'text-indent-1'}, I],
            ['6', {text: '（五）经营收入', class: 'text-indent-1'}, I],
            ['7', {text: '（六）其他收入 (8+9)', class: 'text-indent-1'}, I],
            ['8', {text: '其中：投资收益', class: 'text-indent-2'}, I],
            ['9', {text: '其他', class: 'text-indent-2'}, I],
            ['10', {text: '二、民间非营利组织收入 (11+12+13+14+15+16+17)', class: 'text-left'}, I],
            ['11', {text: '（一）接受捐赠收入', class: 'text-indent-1'}, I],
            ['12', {text: '（二）会费收入', class: 'text-indent-1'}, I],
            ['13', {text: '（三）提供劳务收入', class: 'text-indent-1'}, I],
            ['14', {text: '（四）商品销售收入', class: 'text-indent-1'}, I],
            ['15', {text: '（五）政府补助收入', class: 'text-indent-1'}, I],
            ['16', {text: '（六）投资收益', class: 'text-indent-1'}, I],
            ['17', {text: '（七）其他收入', class: 'text-indent-1'}, I],
            ['18', {text: '三、事业单位支出 (19+20+21+22+23)', class: 'text-left'}, I],
            ['19', {text: '（一）事业支出', class: 'text-indent-1'}, I],
            ['20', {text: '（二）上缴上级支出', class: 'text-indent-1'}, I],
            ['21', {text: '（三）对附属单位补助支出', class: 'text-indent-1'}, I],
            ['22', {text: '（四）经营支出', class: 'text-indent-1'}, I],
            ['23', {text: '（五）其他支出', class: 'text-indent-1'}, I],
            ['24', {text: '四、民间非营利组织支出 (25+26+27+28)', class: 'text-left'}, I],
            ['25', {text: '（一）业务活动成本', class: 'text-indent-1'}, I],
            ['26', {text: '（二）管理费用', class: 'text-indent-1'}, I],
            ['27', {text: '（三）筹资费用', class: 'text-indent-1'}, I],
            ['28', {text: '（四）其他费用', class: 'text-indent-1'}, I]
        ]
    },
    {
        code: 'A104000',
        name: '期间费用明细表',
        layout: 'table',
        headers: [
            [
                { text: '行次', rowspan: 2, width: '40px' },
                { text: '项    目', rowspan: 2, width: '250px' },
                { text: '销售费用' }, { text: '其中：<br>境外支付' },
                { text: '管理费用' }, { text: '其中：<br>境外支付' },
                { text: '财务费用' }, { text: '其中：<br>境外支付' }
            ],
            [
                { text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }, { text: '6' }
            ]
        ],
        rows: [
            ['1', {text: '一、职工薪酬', class: 'text-left'}, I, R, I, R, R, R],
            ['2', {text: '二、劳务费', class: 'text-left'}, I, I, I, I, R, R],
            ['3', {text: '三、咨询顾问费', class: 'text-left'}, I, I, I, I, R, R],
            ['4', {text: '四、业务招待费', class: 'text-left'}, I, R, I, R, R, R],
            ['5', {text: '五、广告费和业务宣传费', class: 'text-left'}, I, R, I, R, R, R],
            ['6', {text: '六、佣金和手续费', class: 'text-left'}, I, I, I, I, I, I],
            ['7', {text: '七、资产折旧摊销费', class: 'text-left'}, I, R, I, R, R, R],
            ['8', {text: '八、财产损耗、盘亏及毁损损失', class: 'text-left'}, I, R, I, R, R, R],
            ['9', {text: '九、办公费', class: 'text-left'}, I, R, I, R, R, R],
            ['10', {text: '十、董事会费', class: 'text-left'}, I, R, I, R, R, R],
            ['11', {text: '十一、租赁费', class: 'text-left'}, I, I, I, I, R, R],
            ['12', {text: '十二、诉讼费', class: 'text-left'}, I, R, I, R, R, R],
            ['13', {text: '十三、差旅费', class: 'text-left'}, I, R, I, R, R, R],
            ['14', {text: '十四、保险费', class: 'text-left'}, I, R, I, R, R, R],
            ['15', {text: '十五、运输、仓储费', class: 'text-left'}, I, I, I, I, R, R],
            ['16', {text: '十六、修理费', class: 'text-left'}, I, I, I, I, R, R],
            ['17', {text: '十七、包装费', class: 'text-left'}, I, R, I, R, R, R],
            ['18', {text: '十八、技术转让费', class: 'text-left'}, I, I, I, I, R, R],
            ['19', {text: '十九、研究费用', class: 'text-left'}, I, I, I, I, R, R],
            ['20', {text: '二十、各项税费', class: 'text-left'}, I, R, I, R, R, R],
            ['21', {text: '二十一、利息收支', class: 'text-left'}, R, R, R, R, I, I],
            ['22', {text: '二十二、汇兑差额', class: 'text-left'}, R, R, R, R, I, I],
            ['23', {text: '二十三、现金折扣', class: 'text-left'}, R, R, R, R, I, R],
            ['24', {text: '二十四、党组织工作经费', class: 'text-left'}, R, R, I, R, R, R],
            ['25', {text: '二十五、其他', class: 'text-left'}, I, I, I, I, I, I],
            ['26', {text: '合计 (1+2+3+…+25)', class: 'text-left'}, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A105000',
        name: '纳税调整项目明细表',
        layout: 'table',
        headers: [
            [
                { text: '行次', rowspan: 2, width: '40px' },
                { text: '项    目', rowspan: 2, width: '350px' },
                { text: '账载金额' }, { text: '税收金额' }, { text: '调增金额' }, { text: '调减金额' }
            ],
            [
                { text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }
            ]
        ],
        rows: [
            ['1', {text: '一、收入类调整项目 (2+3+…+8+10+11)', class: 'text-left'}, R, R, I, I],
            ['2', {text: '（一）视同销售收入 (填写A105010)', class: 'text-indent-1'}, R, I, I, R],
            ['3', {text: '（二）未按权责发生制原则确认的收入 (填写A105020)', class: 'text-indent-1'}, I, I, I, I],
            ['4', {text: '（三）投资收益 (填写A105030)', class: 'text-indent-1'}, I, I, I, I],
            ['5', {text: '（四）按权益法核算长期股权投资对初始投资成本调整确认收益', class: 'text-indent-1'}, R, R, R, I],
            ['6', {text: '（五）交易性金融资产初始投资调整', class: 'text-indent-1'}, R, R, I, R],
            ['7', {text: '（六）公允价值变动净损益', class: 'text-indent-1'}, I, R, I, I],
            ['8', {text: '（七）不征税收入', class: 'text-indent-1'}, R, R, I, I],
            ['9', {text: '其中：专项用途财政性资金 (填写A105040)', class: 'text-indent-2'}, R, R, I, I],
            ['10', {text: '（八）销售折扣、折让和退回', class: 'text-indent-1'}, I, I, I, I],
            ['11', {text: '（九）其他', class: 'text-indent-1'}, I, I, I, I],
            ['12', {text: '二、扣除类调整项目 (13+14+…+24+26+27+28+29+30)', class: 'text-left'}, R, R, I, I],
            ['13', {text: '（一）视同销售成本 (填写A105010)', class: 'text-indent-1'}, R, I, R, I],
            ['14', {text: '（二）职工薪酬 (填写A105050)', class: 'text-indent-1'}, I, I, I, I],
            ['15', {text: '（三）业务招待费支出', class: 'text-indent-1'}, I, I, I, R],
            ['16', {text: '（四）广告费和业务宣传费支出 (填写A105060)', class: 'text-indent-1'}, R, R, I, I],
            ['17', {text: '（五）捐赠支出 (填写A105070)', class: 'text-indent-1'}, I, I, I, I],
            ['18', {text: '（六）利息支出', class: 'text-indent-1'}, I, I, I, I],
            ['19', {text: '（七）罚金、罚款和被没收财物的损失', class: 'text-indent-1'}, I, R, I, R],
            ['20', {text: '（八）税收滞纳金、加收利息', class: 'text-indent-1'}, I, R, I, R],
            ['21', {text: '（九）赞助支出', class: 'text-indent-1'}, I, R, I, R],
            ['22', {text: '（十）与未实现融资收益相关在当期确认的财务费用', class: 'text-indent-1'}, I, I, I, I],
            ['23', {text: '（十一）佣金和手续费支出', class: 'text-indent-1'}, I, I, I, R],
            ['24', {text: '（十二）不征税收入用于支出所形成的费用', class: 'text-indent-1'}, R, R, I, R],
            ['25', {text: '其中：专项用途财政性资金用于支出所形成的费用 (填写A105040)', class: 'text-indent-2'}, R, R, I, R],
            ['26', {text: '（十三）跨期扣除项目', class: 'text-indent-1'}, I, I, I, I],
            ['27', {text: '（十四）与取得收入无关的支出', class: 'text-indent-1'}, I, R, I, R],
            ['28', {text: '（十五）境外所得分摊的共同支出', class: 'text-indent-1'}, R, R, I, R],
            ['29', {text: '（十六）党组织工作经费', class: 'text-indent-1'}, I, I, I, I],
            ['30', {text: '（十七）其他', class: 'text-indent-1'}, I, I, I, I],
            ['31', {text: '三、资产类调整项目 (32+33+34+35)', class: 'text-left'}, R, R, I, I],
            ['32', {text: '（一）资产折旧、摊销 (填写A105080)', class: 'text-indent-1'}, I, I, I, I],
            ['33', {text: '（二）资产减值准备金', class: 'text-indent-1'}, I, R, I, I],
            ['34', {text: '（三）资产损失 (填写A105090)', class: 'text-indent-1'}, I, I, I, I],
            ['35', {text: '（四）其他', class: 'text-indent-1'}, I, I, I, I],
            ['36', {text: '四、特殊事项调整项目 (37+38+…+42)', class: 'text-left'}, R, R, I, I],
            ['37', {text: '（一）企业重组及递延纳税事项 (填写A105100)', class: 'text-indent-1'}, I, I, I, I],
            ['38', {text: '（二）政策性搬迁 (填写A105110)', class: 'text-indent-1'}, R, R, I, I],
            ['39', {text: '（三）特殊行业准备金 (填写A105120)', class: 'text-indent-1'}, I, I, I, I],
            ['40', {text: '（四）房地产开发企业特定业务计算的纳税调整额 (填写A105010)', class: 'text-indent-1'}, R, I, I, I],
            ['41', {text: '（五）有限合伙企业法人合伙方应分得的应纳税所得额', class: 'text-indent-1'}, I, I, I, I],
            ['42', {text: '（六）其他', class: 'text-indent-1'}, R, R, I, I],
            ['43', {text: '五、特别纳税调整应税所得', class: 'text-left'}, R, R, I, I],
            ['44', {text: '六、其他', class: 'text-left'}, R, R, I, I],
            ['45', {text: '合计 (1+12+31+36+43+44)', class: 'text-left'}, R, R, I, I]
        ]
    },
    {
        code: 'A105010',
        name: '视同销售和房地产开发企业特定业务纳税调整明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', width: '50px' }, { text: '项    目' }, { text: '税收金额<br>1', width: '150px' }, { text: '纳税调整金额<br>2', width: '150px' } ]
        ],
        rows: [
            ['1', {text: '一、视同销售（营业）收入 (2+3+4+5+6+7+8+9+10)', class: 'text-left'}, I, I],
            ['2', {text: '（一）非货币性资产交换视同销售收入', class: 'text-indent-1'}, I, I],
            ['3', {text: '（二）用于市场推广或销售视同销售收入', class: 'text-indent-1'}, I, I],
            ['4', {text: '（三）用于交际应酬视同销售收入', class: 'text-indent-1'}, I, I],
            ['5', {text: '（四）用于职工奖励或福利视同销售收入', class: 'text-indent-1'}, I, I],
            ['6', {text: '（五）用于股息分配视同销售收入', class: 'text-indent-1'}, I, I],
            ['7', {text: '（六）用于对外捐赠视同销售收入', class: 'text-indent-1'}, I, I],
            ['8', {text: '（七）用于对外投资项目视同销售收入', class: 'text-indent-1'}, I, I],
            ['9', {text: '（八）提供劳务视同销售收入', class: 'text-indent-1'}, I, I],
            ['10', {text: '（九）其他', class: 'text-indent-1'}, I, I],
            ['11', {text: '二、视同销售（营业）成本 (12+13+14+15+16+17+18+19+20)', class: 'text-left'}, I, I],
            ['12', {text: '（一）非货币性资产交换视同销售成本', class: 'text-indent-1'}, I, I],
            ['13', {text: '（二）用于市场推广或销售视同销售成本', class: 'text-indent-1'}, I, I],
            ['14', {text: '（三）用于交际应酬视同销售成本', class: 'text-indent-1'}, I, I],
            ['15', {text: '（四）用于职工奖励或福利视同销售成本', class: 'text-indent-1'}, I, I],
            ['16', {text: '（五）用于股息分配视同销售成本', class: 'text-indent-1'}, I, I],
            ['17', {text: '（六）用于对外捐赠视同销售成本', class: 'text-indent-1'}, I, I],
            ['18', {text: '（七）用于对外投资项目视同销售成本', class: 'text-indent-1'}, I, I],
            ['19', {text: '（八）提供劳务视同销售成本', class: 'text-indent-1'}, I, I],
            ['20', {text: '（九）其他', class: 'text-indent-1'}, I, I],
            ['21', {text: '三、房地产开发企业特定业务计算的纳税调整额（22-26）', class: 'text-left'}, I, I],
            ['22', {text: '（一）房地产企业销售未完工开发产品特定业务计算的纳税调整额（24-25）', class: 'text-indent-1'}, I, I],
            ['23', {text: '1. 销售未完工产品的收入', class: 'text-indent-2'}, I, R],
            ['24', {text: '2. 销售未完工产品预计毛利额', class: 'text-indent-2'}, I, I],
            ['25', {text: '3. 实际发生的税金及附加、土地增值税', class: 'text-indent-2'}, I, I],
            ['26', {text: '（二）房地产企业销售的未完工产品转完工产品特定业务计算的纳税调整额（28-29）', class: 'text-indent-1'}, I, I],
            ['27', {text: '1. 销售未完工产品转完工产品确认的销售收入', class: 'text-indent-2'}, I, R],
            ['28', {text: '2. 转回的销售未完工产品预计毛利额', class: 'text-indent-2'}, I, I],
            ['29', {text: '3. 转回实际发生的税金及附加、土地增值税', class: 'text-indent-2'}, I, I]
        ]
    },
    {
        code: 'A105020',
        name: '未按权责发生制确认收入纳税调整明细表',
        layout: 'table',
        headers: [
            [ 
                { text: '行次', rowspan: 2, width: '40px' }, 
                { text: '项    目', rowspan: 2, width: '300px' }, 
                { text: '合同金额（交<br>易金额）<br>1', rowspan: 2 }, 
                { text: '账载金额', colspan: 2 }, 
                { text: '税收金额', colspan: 2 }, 
                { text: '纳税调整<br>金额<br>6 (4-2)', rowspan: 2 } 
            ],
            [ { text: '本年<br>2' }, { text: '累计<br>3' }, { text: '本年<br>4' }, { text: '累计<br>5' } ]
        ],
        rows: [
            ['1', {text: '一、跨期收取的租金、利息、特许权使用费收入 (2+3+4)', class: 'text-left'}, I, I, I, I, I, I],
            ['2', {text: '（一）租金', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['3', {text: '（二）利息', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['4', {text: '（三）特许权使用费', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['5', {text: '二、分期确认收入 (6+7+8)', class: 'text-left'}, I, I, I, I, I, I],
            ['6', {text: '（一）分期收款方式销售货物收入', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['7', {text: '（二）持续时间超过 12 个月的建造合同收入', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['8', {text: '（三）其他分期确认收入', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['9', {text: '三、政府补助递延收入 (10+11+12)', class: 'text-left'}, I, I, I, I, I, I],
            ['10', {text: '（一）与收益相关的政府补助', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['11', {text: '（二）与资产相关的政府补助', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['12', {text: '（三）其他', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['13', {text: '四、其他未按权责发生制确认收入', class: 'text-left'}, I, I, I, I, I, I],
            ['14', {text: '合计 (1+5+9+13)', class: 'text-left'}, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A105030',
        name: '投资收益纳税调整明细表',
        layout: 'table',
        headers: [
            [ 
                { text: '行次', rowspan: 2, width: '40px' }, 
                { text: '项    目', rowspan: 2, width: '200px' }, 
                { text: '持有收益', colspan: 3 }, 
                { text: '处置收益', colspan: 7 }, 
                { text: '纳税调整<br>金额<br>11 (3+10)', rowspan: 2 } 
            ],
            [ 
                { text: '账载金<br>额<br>1' }, { text: '税收金<br>额<br>2' }, { text: '纳税调<br>整金额<br>3 (2-1)' }, 
                { text: '会计确<br>认的处<br>置收入<br>4' }, { text: '税收计<br>算的处<br>置收入<br>5' }, 
                { text: '处置投<br>资的账<br>面价值<br>6' }, { text: '处置投<br>资的计<br>税基础<br>7' }, 
                { text: '会计确认<br>的处置所<br>得或损失<br>8 (4-6)' }, { text: '税收计<br>算的处<br>置所得<br>9 (5-7)' }, 
                { text: '纳税调整<br>金额<br>10 (9-8)' }
            ]
        ],
        rows: [
            ['1', {text: '一、交易性金融资产', class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['2', {text: '二、可供出售金融资产', class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['3', {text: '三、持有至到期投资', class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['4', {text: '四、衍生工具', class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['5', {text: '五、交易性金融负债', class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['6', {text: '六、长期股权投资', class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['7', {text: '七、短期投资', class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['8', {text: '八、长期债券投资', class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['9', {text: '九、其他', class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['10', {text: '合计 (1+2+3+4+5+6+7+8+9)', class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A105040',
        name: '专项用途财政性资金纳税调整明细表',
        layout: 'table',
        headers: [
            [ 
                { text: '行次', rowspan: 3, width: '40px' }, 
                { text: '项    目', rowspan: 3, width: '100px' }, 
                { text: '取得<br>年度', rowspan: 2 }, 
                { text: '财政性<br>资金', rowspan: 2 }, 
                { text: '其中:符合不征税<br>收入条件的财政性<br>资金', colspan: 2 }, 
                { text: '以前年度支出情况', colspan: 5 }, 
                { text: '本年支出情况', colspan: 2 }, 
                { text: '本年结余情况', colspan: 3 } 
            ],
            [ 
                { text: '金额' }, { text: '其中:计<br>入本年<br>损益的<br>金额' }, 
                { text: '前五年<br>度' }, { text: '前四年<br>度' }, { text: '前三年<br>度' }, { text: '前二年<br>度' }, { text: '前一年<br>度' }, 
                { text: '支出金<br>额' }, { text: '其中:费<br>用化支<br>出金额' }, 
                { text: '结余金<br>额' }, { text: '其中:上<br>缴财政<br>金额' }, { text: '应计入<br>本年应<br>税收入<br>金额' } 
            ],
            [ 
                { text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, 
                { text: '5' }, { text: '6' }, { text: '7' }, { text: '8' }, { text: '9' }, 
                { text: '10' }, { text: '11' }, { text: '12' }, { text: '13' }, { text: '14' }
            ]
        ],
        rows: [
            ['1', '前五年度', I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['2', '前四年度', I, I, I, I, R, I, I, I, I, I, I, I, I, I],
            ['3', '前三年度', I, I, I, I, R, R, I, I, I, I, I, I, I, I],
            ['4', '前二年度', I, I, I, I, R, R, R, I, I, I, I, I, I, I],
            ['5', '前一年度', I, I, I, I, R, R, R, R, I, I, I, I, I, I],
            ['6', '本    年', I, I, I, I, R, R, R, R, R, I, I, I, I, I],
            ['7', '合计<br>(1+2+…+6)', R, I, I, I, R, R, R, R, R, I, I, I, I, I]
        ]
    },
    {
        code: 'A105050',
        name: '职工薪酬支出及纳税调整明细表',
        layout: 'table',
        headers: [
            [ 
                { text: '行次', rowspan: 2, width: '40px' }, 
                { text: '项    目', rowspan: 2, width: '250px' }, 
                { text: '账载金额<br>1' }, { text: '实际发<br>生额<br>2' }, { text: '税收规定<br>扣除率<br>3' }, 
                { text: '以前年度累计<br>结转扣除额<br>4' }, { text: '税收金<br>额<br>5' }, 
                { text: '纳税调整<br>金额<br>6 (1-5)' }, { text: '累计结转以后<br>年度扣除额<br>7 (1+4-5)' } 
            ]
        ],
        rows: [
            ['1', {text: '一、工资薪金支出', class: 'text-left'}, I, I, R, R, I, I, R],
            ['2', {text: '其中：股权激励', class: 'text-indent-2'}, I, I, R, R, I, I, R],
            ['3', {text: '二、职工福利费支出', class: 'text-left'}, I, I, I, R, I, I, R],
            ['4', {text: '三、职工教育经费支出', class: 'text-left'}, I, I, R, I, I, I, I],
            ['5', {text: '其中：按税收规定比例扣除的职工教育经费', class: 'text-indent-2'}, I, I, I, I, I, I, I],
            ['6', {text: '按税收规定全额扣除的职工培训费用', class: 'text-indent-2'}, I, I, I, R, I, I, R],
            ['7', {text: '四、工会经费支出', class: 'text-left'}, I, I, I, R, I, I, R],
            ['8', {text: '五、各类基本社会保障性缴款', class: 'text-left'}, I, I, R, R, I, I, R],
            ['9', {text: '六、住房公积金', class: 'text-left'}, I, I, R, R, I, I, R],
            ['10', {text: '七、补充养老保险', class: 'text-left'}, I, I, I, R, I, I, R],
            ['11', {text: '八、补充医疗保险', class: 'text-left'}, I, I, I, R, I, I, R],
            ['12', {text: '九、其他', class: 'text-left'}, I, I, R, R, I, I, R],
            ['13', {text: '合计 (1+3+4+7+8+9+10+11+12)', class: 'text-left'}, I, I, R, I, I, I, I]
        ]
    },
    {
        code: 'A105060',
        name: '广告费和业务宣传费跨年度纳税调整明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', width: '50px' }, { text: '项    目' }, { text: '金    额', width: '250px' } ]
        ],
        rows: [
            ['1', {text: '一、本年广告费和业务宣传费支出', class: 'text-left'}, I],
            ['2', {text: '减：不允许扣除的广告费和业务宣传费支出', class: 'text-indent-1'}, I],
            ['3', {text: '二、本年符合条件的广告费和业务宣传费支出 (1-2)', class: 'text-left'}, I],
            ['4', {text: '三、本年计算广告费和业务宣传费扣除限额的销售（营业）收入', class: 'text-left'}, I],
            ['5', {text: '乘：税收规定扣除率', class: 'text-indent-1'}, I],
            ['6', {text: '四、本企业计算的广告费和业务宣传费扣除限额 (4×5)', class: 'text-left'}, I],
            ['7', {text: '五、本年结转以后年度扣除额（3>6，本行=3-6；3≤6，本行=0）', class: 'text-left'}, I],
            ['8', {text: '加：以前年度累计结转扣除额', class: 'text-indent-1'}, I],
            ['9', {text: '减：本年扣除的以前年度结转额[3>6，本行=0；3≤6，本行=8 与 (6-3) 孰小值]', class: 'text-indent-1'}, I],
            ['10', {text: '六、按照分摊协议归集至其他关联方的广告费和业务宣传费（10≤3 与 6 孰小值）', class: 'text-left'}, I],
            ['11', {text: '按照分摊协议从其他关联方归集至本企业的广告费和业务宣传费', class: 'text-indent-1'}, I],
            ['12', {text: '七、本年广告费和业务宣传费支出纳税调整金额<br>（3>6，本行=2+3-6+10-11；3≤6，本行=2+10-11-9）', class: 'text-left'}, I],
            ['13', {text: '八、累计结转以后年度扣除额 (7+8-9)', class: 'text-left'}, I]
        ]
    },
    {
        code: 'A105070',
        name: '捐赠支出及纳税调整明细表',
        layout: 'table',
        headers: [
            [ 
                { text: '行次', rowspan: 2, width: '40px' }, 
                { text: '项    目', rowspan: 2, width: '250px' }, 
                { text: '账载金额<br>1' }, { text: '以前年度结<br>转可扣除的<br>捐赠额<br>2' }, { text: '按税收规定<br>计算的扣除<br>限额<br>3' }, 
                { text: '税收金额<br>4' }, { text: '纳税调增金额<br>5' }, { text: '纳税调减金<br>额<br>6' }, 
                { text: '可结转以后年<br>度扣除的捐赠<br>额<br>7' } 
            ]
        ],
        rows: [
            ['1', {text: '一、非公益性捐赠', class: 'text-left'}, I, R, R, R, I, R, R],
            ['2', {text: '二、全额扣除的公益性捐赠', class: 'text-left'}, I, R, R, I, R, R, R],
            ['3', {text: '三、限额扣除的公益性捐赠 (4+5+6+7)', class: 'text-left'}, I, I, I, I, I, I, I],
            ['4', {text: '前三年度 (        年)', class: 'text-indent-1'}, R, I, R, R, R, I, R],
            ['5', {text: '前二年度 (        年)', class: 'text-indent-1'}, R, I, R, R, R, I, I],
            ['6', {text: '前一年度 (        年)', class: 'text-indent-1'}, R, I, R, R, R, I, I],
            ['7', {text: '本    年 (        年)', class: 'text-indent-1'}, I, R, I, I, I, R, I],
            ['8', {text: '合计 (1+2+3)', class: 'text-left'}, I, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A105080',
        name: '资产折旧、摊销及纳税调整明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', rowspan: 2, width: '40px' }, { text: '项    目', rowspan: 2, width:'300px' }, { text: '账载金额', colspan: 3 }, { text: '税收金额', colspan: 5 }, { text: '纳税调整金额', rowspan: 2 } ],
            [ 
                { text: '资产原值<br>1' }, { text: '本年折旧、摊销额<br>2' }, { text: '累计折旧摊销额<br>3' }, 
                { text: '资产计税基础<br>4' }, { text: '税收折旧摊销额<br>5' }, { text: '享受加速折旧政策的资产<br>按税收一般规定计算<br>6' }, { text: '加速折旧、摊销统计额<br>7(5-6)' }, { text: '累计折旧、摊销额<br>8' }
            ]
        ],
        rows: [
            ['1', {text: '一、固定资产(2+3+4+5+6+7)', class: 'text-left'}, I, I, I, I, I, I, I, I, I],
            ['2', {text: '（一）房屋、建筑物', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['3', {text: '（二）飞机、火车、轮船、机器、机械等', class: 'text-indent-1'}, I, I, I, I, I, I, I, I, I],
            ['4', {text: '（三）与生产经营活动有关的器具、工具等', class: 'text-indent-1'}, I, I, I, I, I, I, I, I, I],
            ['5', {text: '（四）飞机、火车、轮船以外的运输工具', class: 'text-indent-1'}, I, I, I, I, I, I, I, I, I],
            ['6', {text: '（五）电子设备', class: 'text-indent-1'}, I, I, I, I, I, I, I, I, I],
            ['7', {text: '（六）其他', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['8', {text: '二、生产性生物资产(9+10)', class: 'text-left'}, I, I, I, I, I, R, R, I, I],
            ['9', {text: '（一）林木类', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['10', {text: '（二）畜类', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['11', {text: '三、无形资产(12~19)', class: 'text-left'}, I, I, I, I, I, R, R, I, I],
            ['12', {text: '（一）专利权', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['13', {text: '（二）商标权', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['14', {text: '（三）著作权', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['15', {text: '（四）土地使用权', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['16', {text: '（五）非专利技术', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['17', {text: '（六）特许权使用费', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['18', {text: '（七）软件', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['19', {text: '（八）其他', class: 'text-indent-1'}, I, I, I, I, I, R, R, I, I],
            ['20', {text: '四、长期待摊费用(21~25)', class: 'text-left'}, I, I, I, I, I, R, R, R, I],
            ['21', {text: '（一）已足额提取折旧固定资产的改建支出', class: 'text-indent-1'}, I, I, I, I, I, R, R, R, I],
            ['22', {text: '（二）租入固定资产的改建支出', class: 'text-indent-1'}, I, I, I, I, I, R, R, R, I],
            ['23', {text: '（三）固定资产的大修理支出', class: 'text-indent-1'}, I, I, I, I, I, R, R, R, I],
            ['24', {text: '（四）开办费', class: 'text-indent-1'}, I, I, I, I, I, R, R, R, I],
            ['25', {text: '（五）其他', class: 'text-indent-1'}, I, I, I, I, I, R, R, R, I],
            ['26', {text: '五、油气勘探投资', class: 'text-left'}, I, I, I, I, I, R, R, R, I],
            ['27', {text: '六、油气开发投资', class: 'text-left'}, I, I, I, I, I, R, R, R, I],
            ['28', {text: '享受资产加速折旧及一次性扣除政策的资产加速折旧额大于一般折旧额的部分', rowspan: 3, class: 'text-left'}, {text: '（一）加速折旧(摊销)'}, R, R, R, R, I, I, I, R, R],
            ['28.1', {text: '　(填写优惠事项名称)', class: 'text-left'}, R, R, R, R, I, I, I, R, R],
            ['28.2', {text: '　(填写优惠事项名称)', class: 'text-left'}, R, R, R, R, I, I, I, R, R],
            ['29', {text: '（二）一次性扣除(摊销)', class: 'text-left'}, R, R, R, R, I, R, R, R, R],
            ['29.1', {text: '　(填写优惠事项名称)', class: 'text-indent-1'}, R, R, R, R, I, R, R, R, R],
            ['29.2', {text: '　(填写优惠事项名称)', class: 'text-indent-1'}, R, R, R, R, I, R, R, R, R],
            ['30', {text: '合计', colspan: 2, class: 'text-center'}, I, I, I, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A105090',
        name: '资产损失税前扣除及纳税调整明细表',
        layout: 'table',
        headers: [
            [
                { text: '行次', rowspan: 2, width: '40px' },
                { text: '项    目', rowspan: 2, width: '300px' },
                { text: '资产损失的账<br>载金额' }, { text: '资产处置收入' }, { text: '赔偿收入' }, { text: '资产计税基础' },
                { text: '资产损失的税<br>收金额' }, { text: '纳税调整金额' }
            ],
            [
                { text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5 (4-2-3)' }, { text: '6 (1-5)' }
            ]
        ],
        rows: [
            ['1', {text: '一、清单申报资产损失 (2+3+4+5+6+7+8)', class: 'text-left'}, I, I, I, I, I, I],
            ['2', {text: '（一）正常经营管理活动中，按照公允价格销售、转让、变卖非货币资产的损失', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['3', {text: '（二）存货发生的正常损耗', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['4', {text: '（三）固定资产达到或超过使用年限而正常报废清理的损失', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['5', {text: '（四）生产性生物资产达到或超过使用年限而正常死亡发生的资产损失', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['6', {text: '（五）按照市场公平交易原则，通过各种交易场所、市场等买卖债券、股票、期货、基金以及金融衍生产品等发生的损失', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['7', {text: '（六）分支机构上报的资产损失', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['8', {text: '（七）其他', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['9', {text: '二、专项申报资产损失 (10+11+12+13)', class: 'text-left'}, I, I, I, I, I, I],
            ['10', {text: '（一）货币资产损失', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['11', {text: '（二）非货币资产损失', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['12', {text: '（三）投资损失', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['13', {text: '（四）其他', class: 'text-indent-1'}, I, I, I, I, I, I],
            ['14', {text: '合计 (1+9)', class: 'text-left'}, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A105100',
        name: '企业重组及递延纳税事项纳税调整明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', rowspan: 2, width: '40px' }, { text: '项    目', rowspan: 2, width:'300px' }, { text: '一般性税务处理', colspan: 3 }, { text: '特殊性税务处理（递延纳税）', colspan: 3 }, { text: '纳税调整金额', rowspan: 2, width: '120px' } ],
            [ { text: '账载金额<br>1' }, { text: '税收金额<br>2' }, { text: '纳税调整金额<br>3(2-1)' }, { text: '账载金额<br>4' }, { text: '税收金额<br>5' }, { text: '纳税调整金额<br>6(5-4)' } ]
        ],
        rows: [
            ['1', {text: '一、债务重组', class: 'text-left'}, I, I, I, I, I, I, I],
            ['2', {text: '其中：以非货币性资产清偿债务', class: 'text-indent-1'}, I, I, I, I, I, I, I],
            ['3', {text: '债转股', class: 'text-indent-2'}, I, I, I, I, I, I, I],
            ['4', {text: '二、股权收购', class: 'text-left'}, I, I, I, I, I, I, I],
            ['5', {text: '其中：涉及跨境重组的股权收购', class: 'text-indent-1'}, I, I, I, I, I, I, I],
            ['6', {text: '三、资产收购', class: 'text-left'}, I, I, I, I, I, I, I],
            ['7', {text: '其中：涉及跨境重组的资产收购', class: 'text-indent-1'}, I, I, I, I, I, I, I],
            ['8', {text: '四、企业合并 (9+10)', class: 'text-left'}, I, I, I, I, I, I, I],
            ['9', {text: '（一）同一控制下企业合并', class: 'text-indent-1'}, I, I, I, I, I, I, I],
            ['10', {text: '（二）非同一控制下企业合并', class: 'text-indent-1'}, I, I, I, I, I, I, I],
            ['11', {text: '企业分立', class: 'text-left'}, I, I, I, I, I, I, I],
            ['12', {text: '六、非货币性资产对外投资', class: 'text-left'}, I, I, I, I, I, I, I],
            ['13', {text: '七、技术入股', class: 'text-left'}, I, I, I, I, I, I, I],
            ['14', {text: '八、股权划转、资产划转', class: 'text-left'}, I, I, I, I, I, I, I],
            ['15', {text: '九、基础设施领域不动产投资信托基金（□原始权益人 □项目公司）', class: 'text-left'}, I, I, I, I, I, I, I],
            ['15.1', {text: '（一）设立基础设施 REITs 前', class: 'text-indent-1'}, I, I, I, I, I, I, I],
            ['15.2', {text: '（二）设立基础设施 REITs 阶段', class: 'text-indent-1'}, I, I, I, I, I, I, I],
            ['16', {text: '十、其他', class: 'text-left'}, I, I, I, I, I, I, I],
            ['17', {text: '合计 (1+4+6+8+11+12+13+14+15+16)', class: 'text-left'}, I, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A105110',
        name: '政策性搬迁纳税调整明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', width: '50px' }, { text: '项    目', width:'400px' }, { text: '金    额', width: '250px' } ]
        ],
        rows: [
            ['1', {text: '一、搬迁收入 (2+8)', class: 'text-left'}, I],
            ['2', {text: '（一）搬迁补偿收入 (3+4+5+6+7)', class: 'text-indent-1'}, I],
            ['3', {text: '1. 对被征用资产价值的补偿', class: 'text-indent-2'}, I],
            ['4', {text: '2. 因搬迁、安置而给予的补偿', class: 'text-indent-2'}, I],
            ['5', {text: '3. 对停产停业形成的损失而给予的补偿', class: 'text-indent-2'}, I],
            ['6', {text: '4. 资产搬迁过程中遭到毁损而取得的保险赔款', class: 'text-indent-2'}, I],
            ['7', {text: '5. 其他补偿收入', class: 'text-indent-2'}, I],
            ['8', {text: '（二）搬迁资产处置收入', class: 'text-indent-1'}, I],
            ['9', {text: '二、搬迁支出 (10+16)', class: 'text-left'}, I],
            ['10', {text: '（一）搬迁费用支出 (11+12+13+14+15)', class: 'text-indent-1'}, I],
            ['11', {text: '1. 安置职工实际发生的费用', class: 'text-indent-2'}, I],
            ['12', {text: '2. 停工期间支付给职工的工资及福利费', class: 'text-indent-2'}, I],
            ['13', {text: '3. 临时存放搬迁资产而发生的费用', class: 'text-indent-2'}, I],
            ['14', {text: '4. 各类资产搬迁安装费用', class: 'text-indent-2'}, I],
            ['15', {text: '5. 其他与搬迁相关的费用', class: 'text-indent-2'}, I],
            ['16', {text: '（二）搬迁资产处置支出', class: 'text-indent-1'}, I],
            ['17', {text: '三、搬迁所得或损失 (1-9)', class: 'text-left'}, I],
            ['18', {text: '四、应计入本年应纳税所得额的搬迁所得或损失 (19+20+21)', class: 'text-left'}, I],
            ['19', {text: '其中：搬迁所得', class: 'text-indent-1'}, I],
            ['20', {text: '搬迁损失一次性扣除', class: 'text-indent-2'}, I],
            ['21', {text: '搬迁损失分期扣除', class: 'text-indent-2'}, I],
            ['22', {text: '五、计入当期损益的搬迁收益或损失', class: 'text-left'}, I],
            ['23', {text: '六、以前年度搬迁损失当期扣除金额', class: 'text-left'}, I],
            ['24', {text: '七、纳税调整金额 (18-22-23)', class: 'text-left'}, I]
        ]
    },
    {
        code: 'A105120',
        name: '特殊行业准备金及纳税调整明细表',
        layout: 'table',
        headers: [
            [
                { text: '行次', width: '50px' },
                { text: '项    目', colspan: 3 },
                { text: '账载金额<br>1', width: '120px' },
                { text: '税收金额<br>2', width: '120px' },
                { text: '纳税调整金额<br>3 (1-2)', width: '120px' }
            ]
        ],
        rows: [
            ['1', {text: '一、保险公司 (2+13+14+15+16+19+20)', colspan: 3, class: 'text-left'}, I, I, I],
            ['2', {text: '（一）保险保障基金 (3+4+5+…+12)', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['3', {text: '1. 财产保险业务', rowspan: 3, class: 'text-indent-2'}, {text: '非投资型', colspan: 2}, I, I, I],
            ['4', {text: '投资型', rowspan: 2}, '保证收益', I, I, I],
            ['5', '无保证收益', I, I, I],
            ['6', {text: '2. 人寿保险业务', rowspan: 2, class: 'text-indent-2'}, {text: '保证收益', colspan: 2}, I, I, I],
            ['7', {text: '无保证收益', colspan: 2}, I, I, I],
            ['8', {text: '3. 健康保险业务', rowspan: 2, class: 'text-indent-2'}, {text: '短期', colspan: 2}, I, I, I],
            ['9', {text: '长期', colspan: 2}, I, I, I],
            ['10', {text: '4. 意外伤害保险业务', rowspan: 3, class: 'text-indent-2'}, {text: '非投资型', colspan: 2}, I, I, I],
            ['11', {text: '投资型', rowspan: 2}, '保证收益', I, I, I],
            ['12', '无保证收益', I, I, I],
            ['13', {text: '（二）未到期责任准备金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['14', {text: '（三）寿险责任准备金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['15', {text: '（四）长期健康险责任准备金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['16', {text: '（五）未决赔款准备金 (17+18)', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['17', {text: '1. 已发生已报案未决赔款准备金', colspan: 3, class: 'text-indent-2'}, I, I, I],
            ['18', {text: '2. 已发生未报案未决赔款准备金', colspan: 3, class: 'text-indent-2'}, I, I, I],
            ['19', {text: '（六）大灾风险准备金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['20', {text: '（七）其他', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['21', {text: '二、证券行业 (22+23+24+25)', colspan: 3, class: 'text-left'}, I, I, I],
            ['22', {text: '（一）证券交易风险基金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['23', {text: '（二）证券结算风险基金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['24', {text: '（三）证券投资者保护基金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['25', {text: '（四）其他', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['26', {text: '三、期货行业 (27+28+29+30)', colspan: 3, class: 'text-left'}, I, I, I],
            ['27', {text: '（一）期货交易所风险准备金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['28', {text: '（二）期货公司风险准备金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['29', {text: '（三）期货投资者保障基金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['30', {text: '（四）其他', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['31', {text: '四、金融企业 (32+33+34)', colspan: 3, class: 'text-left'}, I, I, I],
            ['32', {text: '（一）涉农和中小企业贷款损失准备金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['33', {text: '（二）贷款损失准备金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['34', {text: '（三）其他', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['35', {text: '五、中小企业融资（信用）担保机构 (36+37+38)', colspan: 3, class: 'text-left'}, I, I, I],
            ['36', {text: '（一）担保赔偿准备', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['37', {text: '（二）未到期责任准备', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['38', {text: '（三）其他', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['39', {text: '六、小额贷款公司 (40+41)', colspan: 3, class: 'text-left'}, I, I, I],
            ['40', {text: '（一）贷款损失准备金', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['41', {text: '（二）其他', colspan: 3, class: 'text-indent-1'}, I, I, I],
            ['42', {text: '七、其他', colspan: 3, class: 'text-left'}, I, I, I],
            ['43', {text: '合计 (1+21+26+31+35+39+42)', colspan: 3, class: 'text-left'}, I, I, I]
        ]
    },
    {
        code: 'A106000',
        name: '企业所得税弥补亏损明细表',
        layout: 'table',
        headers: [
            [
                { text: '行次', rowspan: 2, width: '40px' },
                { text: '项目', rowspan: 2 },
                { text: '年度', rowspan: 2 },
                { text: '可弥补亏<br>损所得', rowspan: 2 },
                { text: '合并、分立<br>转入（转出）<br>可弥补的亏<br>损额', rowspan: 2 },
                { text: '当年可弥<br>补的亏损<br>额', rowspan: 2 },
                { text: '以前年度亏损已弥补额', colspan: 5 },
                { text: '本年实<br>际弥补的<br>以前年度<br>亏损额', rowspan: 2 },
                { text: '可结转以后<br>年度弥补的<br>亏损额', rowspan: 2 }
            ],
            [
                { text: '前四年度' }, { text: '前三年度' }, { text: '前二年度' }, { text: '前一年度' }, { text: '合计' }
            ],
            [
                { text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }, { text: '6' }, { text: '7' }, { text: '8' }, { text: '9' }, { text: '10' }, { text: '11' }
            ]
        ],
        rows: [
            ['1', '前五年度', I, I, I, I, I, I, I, I, I, I, R],
            ['2', '前四年度', I, I, I, I, R, I, I, I, I, I, I],
            ['3', '前三年度', I, I, I, I, R, R, I, I, I, I, I],
            ['4', '前二年度', I, I, I, I, R, R, R, I, I, I, I],
            ['5', '前一年度', I, I, I, I, R, R, R, R, R, I, I],
            ['6', '本年度', I, I, I, I, R, R, R, R, R, I, I],
            ['7', {text: '可结转以后年度弥补的亏损额合计', colspan: 11, class: 'text-center'}, I]
        ]
    },
    {
        code: 'A107011',
        name: '符合条件的居民企业之间的股息、红利等权益性投资收益优惠明细表',
        layout: 'table',
        headers: [
            [
                { text: '行次', rowspan: 2, width: '40px' },
                { text: '被投资企<br>业', rowspan: 2 },
                { text: '被投资企<br>业统一社<br>会信用代<br>码（纳税<br>人识别<br>号）', rowspan: 2 },
                { text: '投资性<br>质', rowspan: 2 },
                { text: '投资成<br>本', rowspan: 2 },
                { text: '投资比<br>例', rowspan: 2 },
                { text: '被投资企业利润分配<br>确认金额', colspan: 2 },
                { text: '被投资企业清算确认金额', colspan: 2 },
                { text: '撤回或减少投资确认金额', colspan: 6 },
                { text: '合计', rowspan: 2 }
            ],
            [
                { text: '被投资企<br>业做出利<br>润分配决<br>定时间' },
                { text: '依决定归属<br>于本公司的<br>股息、红利<br>等权益性投<br>资收益金额' },
                { text: '分得的<br>被投资<br>企业清<br>算剩余<br>资产' },
                { text: '被清算企业<br>累计未分配<br>利润和累计<br>盈余公积应<br>享有部分' },
                { text: '应确认的<br>股息所得<br>10(8与9<br>孰小)' },
                { text: '从被投资<br>企业撤回<br>或减少投<br>资取得的<br>资产' },
                { text: '减少投<br>资比例' },
                { text: '收回初始<br>投资成本<br>13(4×12)' },
                { text: '取得资产中<br>超过收回初<br>始投资成本<br>部分 14(11-13)' },
                { text: '撤回或减少投<br>资应享有被投<br>资企业累计未<br>分配利润和累<br>计盈余公积' },
                { text: '应确认<br>的股息<br>所得<br>16(14与<br>15孰小)' }
            ],
            [
                { text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }, { text: '6' }, { text: '7' }, { text: '8' }, { text: '9' }, { text: '10(8与9<br>孰小)' }, { text: '11' }, { text: '12' }, { text: '13(4×12)' }, { text: '14(11-13)' }, { text: '15' }, { text: '16(14与<br>15孰小)' }, { text: '17(7+<br>10+16)' }
            ]
        ],
        rows: [
            ['1', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['2', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['3', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['4', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['5', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['6', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['7', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['8', {text: '合计', colspan: 5, class:'text-center'}, I, I, I, I, I, I, I, I, I, I, I],
            ['9', {text: '其中：股票投资—沪港通H股', colspan: 15, class: 'text-indent-2'}, I],
            ['10', {text: '股票投资—深港通H股', colspan: 15, class: 'text-indent-2'}, I]
        ]
    },
    {
        code: 'A107012',
        name: '研发费用加计扣除优惠明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', width:'50px' }, { text: '项 目' }, { text: '金额(数量)', width:'200px' } ]
        ],
        rows: [
            [{text: '基本信息', colspan: 3, class: 'text-center section-title'}],
            ['1', {text: '<span style="float:left">□一般企业　　□科技型中小企业</span><span style="float:right">科技型中小企业登记编号</span>', class: 'text-left'}, I],
            ['2', {text: '本年可享受研发费用加计扣除项目数量', class: 'text-left'}, I],
            [{text: '研发活动费用明细', colspan: 3, class: 'text-center section-title'}],
            ['3', {text: '一、自主研发、合作研发、集中研发(4+8+17+20+24+35)', class: 'text-left'}, I],
            ['4', {text: '（一）人员人工费用(5+6+7)', class: 'text-indent-1'}, I],
            ['5', {text: '1. 直接从事研发活动人员工资薪金', class: 'text-indent-2'}, I],
            ['6', {text: '2. 直接从事研发活动人员五险一金', class: 'text-indent-2'}, I],
            ['7', {text: '3. 外聘研发人员的劳务费用', class: 'text-indent-2'}, I],
            ['8', {text: '（二）直接投入费用(9+10+11+12+13+14+15+16)', class: 'text-indent-1'}, I],
            ['9', {text: '1. 研发活动直接消耗材料费用', class: 'text-indent-2'}, I],
            ['10', {text: '2. 研发活动直接消耗燃料费用', class: 'text-indent-2'}, I],
            ['11', {text: '3. 研发活动直接消耗动力费用', class: 'text-indent-2'}, I],
            ['12', {text: '4. 用于中间试验和产品试制的模具、工艺装备开发及制造费', class: 'text-indent-2'}, I],
            ['13', {text: '5. 用于不构成固定资产的样品、样机及一般测试手段购置费', class: 'text-indent-2'}, I],
            ['14', {text: '6. 用于试制产品的检验费', class: 'text-indent-2'}, I],
            ['15', {text: '7. 用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用', class: 'text-indent-2'}, I],
            ['16', {text: '8. 通过经营租赁方式租入的用于研发活动的仪器、设备租赁费', class: 'text-indent-2'}, I],
            ['17', {text: '（三）折旧费用(18+19)', class: 'text-indent-1'}, I],
            ['18', {text: '1. 用于研发活动的仪器的折旧费', class: 'text-indent-2'}, I],
            ['19', {text: '2. 用于研发活动的设备的折旧费', class: 'text-indent-2'}, I],
            ['20', {text: '（四）无形资产摊销(21+22+23)', class: 'text-indent-1'}, I],
            ['21', {text: '1. 用于研发活动的软件的摊销费用', class: 'text-indent-2'}, I],
            ['22', {text: '2. 用于研发活动的专利权的摊销费用', class: 'text-indent-2'}, I],
            ['23', {text: '3. 用于研发活动的非专利技术(包括许可证等)的摊销费用', class: 'text-indent-2'}, I],
            ['24', {text: '（五）新产品设计费等(25+26+27+28)', class: 'text-indent-1'}, I],
            ['25', {text: '1. 新产品设计费', class: 'text-indent-2'}, I],
            ['26', {text: '2. 新工艺规程制定费', class: 'text-indent-2'}, I],
            ['27', {text: '3. 新药研制的临床试验费', class: 'text-indent-2'}, I],
            ['28', {text: '4. 勘探开发技术的现场试验费', class: 'text-indent-2'}, I],
            ['29', {text: '（六）其他相关费用(30+31+32+33+34)', class: 'text-indent-1'}, I],
            ['30', {text: '1. 技术图书资料费、专家咨询费、研发保险费等', class: 'text-indent-2'}, I],
            ['31', {text: '2. 研发成果的检索、分析、论证、评审等费用', class: 'text-indent-2'}, I],
            ['32', {text: '3. 知识产权的申请费、注册费、代理费', class: 'text-indent-2'}, I],
            ['33', {text: '4. 职工福利费、补充养老保险费、补充医疗保险费', class: 'text-indent-2'}, I],
            ['34', {text: '5. 差旅费、会议费', class: 'text-indent-2'}, I],
            ['35', {text: '（七）经限额调整后的其他相关费用', class: 'text-indent-1'}, I],
            ['36', {text: '二、委托研发(37+38+40)', class: 'text-left'}, I],
            ['37', {text: '（一）委托境内机构或个人进行研发活动所发生的费用', class: 'text-indent-1'}, I],
            ['38', {text: '（二）委托境外机构进行研发活动发生的费用', class: 'text-indent-1'}, I],
            ['39', {text: '其中：允许加计扣除的委托境外机构进行研发活动发生的费用', class: 'text-indent-2'}, I],
            ['40', {text: '（三）委托境外个人进行研发活动发生的费用', class: 'text-indent-1'}, I],
            ['41', {text: '三、年度研发费用小计(3+37×80%+39)', class: 'text-left'}, I],
            ['42', {text: '（一）本年费用化金额', class: 'text-indent-1'}, I],
            ['43', {text: '（二）本年资本化金额', class: 'text-indent-1'}, I],
            ['44', {text: '四、本年形成无形资产摊销额', class: 'text-left'}, I],
            ['45', {text: '五、以前年度形成无形资产本年摊销额', class: 'text-left'}, I],
            ['46', {text: '六、允许扣除的研发费用合计(42+44+45)', class: 'text-left'}, I],
            ['47', {text: '减:特殊收入部分', class: 'text-indent-1'}, I],
            ['48', {text: '七、允许扣除的研发费用抵减特殊收入后的金额(46-47)', class: 'text-left'}, I],
            ['49', {text: '减:当年销售产品对应的材料部分', class: 'text-indent-1'}, I],
            ['50', {text: '减:以前年度销售产品对应材料部分结转金额', class: 'text-indent-1'}, I],
            ['51', {text: '八、加计扣除比例及计算方法', class: 'text-left'}, I],
            ['52', {text: '九、本年研发费用加计扣除总额(48-49-50) ×50%', class: 'text-left'}, I],
            ['53', {text: '十、销售研发产品对应材料部分结转以后年度扣减金额', class: 'text-left'}, I]
        ]
    },
    {
        code: 'A107020',
        name: '所得减免优惠明细表',
        layout: 'table',
        headers: [
            [
                { text: '行次', rowspan: 2, width: '40px' },
                { text: '减免项目', rowspan: 2 },
                { text: '项目<br>名称', rowspan: 2 },
                { text: '优惠事项<br>名称', rowspan: 2 },
                { text: '优惠<br>方式', rowspan: 2 },
                { text: '项目收入', rowspan: 2 },
                { text: '项目成本', rowspan: 2 },
                { text: '相关税<br>费', rowspan: 2 },
                { text: '应分摊期<br>间费用', rowspan: 2 },
                { text: '纳税调整<br>额', rowspan: 2 },
                { text: '项目所得额', colspan: 2 },
                { text: '减免所得额', rowspan: 2 }
            ],
            [
                { text: '免税项目' }, { text: '减半项目' }
            ],
            [
                { text: '' }, { text: '' }, { text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }, { text: '6' }, { text: '7' }, { text: '8' }, { text: '9' }, { text: '10' }, { text: '11 (9+10×50%)' }
            ]
        ],
        rows: [
            ['1', {text: '一、农、林、牧、渔业项目', rowspan: 3, class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['2', I, I, I, I, I, I, I, I, I, I, I],
            ['3', {text: '小计', class: 'text-center'}, R, R, I, I, I, I, I, I, I, I],
            ['4', {text: '二、国家重点扶持的公共基础设施项目', rowspan: 3, class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['5', I, I, I, I, I, I, I, I, I, I, I],
            ['6', {text: '小计', class: 'text-center'}, R, R, I, I, I, I, I, I, I, I],
            ['7', {text: '三、符合条件的环境保护、节能节水项目', rowspan: 3, class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['8', I, I, I, I, I, I, I, I, I, I, I],
            ['9', {text: '小计', class: 'text-center'}, R, R, I, I, I, I, I, I, I, I],
            ['10', {text: '四、符合条件的技术转让项目', rowspan: 3, class: 'text-left'}, R, R, I, I, I, I, I, I, R, R, R],
            ['11', R, R, I, I, I, I, I, I, R, R, R],
            ['12', {text: '小计', class: 'text-center'}, R, R, I, I, I, I, I, I, I, I],
            ['13', {text: '五、实施清洁机制发展项目', rowspan: 3, class: 'text-left'}, R, I, I, I, I, I, I, I, I, I, I],
            ['14', R, I, I, I, I, I, I, I, I, I, I],
            ['15', {text: '小计', class: 'text-center'}, R, R, I, I, I, I, I, I, I, I],
            ['16', {text: '六、符合条件的节能服务公司实施合同能源管理项目', rowspan: 3, class: 'text-left'}, R, I, I, I, I, I, I, I, I, I, I],
            ['17', R, I, I, I, I, I, I, I, I, I, I],
            ['18', {text: '小计', class: 'text-center'}, R, R, I, I, I, I, I, I, I, I],
            ['19', {text: '七、其他', rowspan: 3, class: 'text-left'}, I, I, I, I, I, I, I, I, I, I, I],
            ['20', I, I, I, I, I, I, I, I, I, I, I],
            ['21', {text: '小计', class: 'text-center'}, R, R, I, I, I, I, I, I, I, I],
            ['22', '合计', R, R, R, I, I, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A107030',
        name: '抵扣应纳税所得额明细表',
        layout: 'table',
        headers: [
            [
                { text: '行次', rowspan: 2, width: '50px' },
                { text: '项    目', rowspan: 2 },
                { text: '合计金额', width: '150px' },
                { text: '投资于未上市中小高新技术企业', width: '180px' },
                { text: '投资于种子期、初创期科技型企业', width: '180px' }
            ],
            [
                { text: '1=2+3' }, { text: '2' }, { text: '3' }
            ]
        ],
        rows: [
            [{text: '一、创业投资企业直接投资按投资额一定比例抵扣应纳税所得额', colspan: 5, class: 'text-left section-title'}],
            ['1', {text:'本年新增的符合条件的股权投资额', class:'text-left'}, I, I, I],
            ['2', {text:'税收规定的抵扣率', class:'text-left'}, '70%', '70%', '70%'],
            ['3', {text:'本年新增的可抵扣的股权投资额（1×2）', class:'text-left'}, I, I, I],
            ['4', {text:'以前年度结转的尚未抵扣的股权投资余额', class:'text-left'}, I, R, R],
            ['5', {text:'本年可抵扣的股权投资额（3+4）', class:'text-left'}, I, R, R],
            ['6', {text:'本年可用于抵扣的应纳税所得额', class:'text-left'}, I, R, R],
            ['7', {text:'本年实际抵扣应纳税所得额', class:'text-left'}, I, I, I],
            ['8', {text:'结转以后年度抵扣的股权投资余额', class:'text-left'}, I, R, R],
            [{text: '二、通过有限合伙制创业投资企业投资按一定比例抵扣分得的应纳税所得额', colspan: 5, class: 'text-left section-title'}],
            ['9', {text:'本年从有限合伙创投企业应分得的应纳税所得额', class:'text-left'}, I, I, I],
            ['10', {text:'本年新增的可抵扣投资额', class:'text-left'}, I, I, I],
            ['11', {text:'以前年度结转的可抵扣投资额余额', class:'text-left'}, I, R, R],
            ['12', {text:'本年可抵扣投资额（10+11）', class:'text-left'}, I, R, R],
            ['13', {text:'本年实际抵扣应分得的应纳税所得额', class:'text-left'}, I, I, I],
            ['14', {text:'结转以后年度抵扣的投资额余额', class:'text-left'}, I, R, R],
            [{text: '三、抵扣应纳税所得额合计', colspan: 5, class: 'text-left section-title'}],
            ['15', {text:'合计（7+13）', class:'text-left'}, I, I, I]
        ]
    },
    {
        code: 'A107041',
        name: '高新技术企业优惠情况及明细表',
        layout: 'table',
        rows: [
            [{text:'基本信息', colspan:7, class:'text-center section-title'}],
            ['1', {text:'高新技术企业证书编号', colspan:2, class:'text-left'}, {text:I, colspan:2}, '高新技术企业证书取得时间', I],
            ['2', {text:'对企业主要产品（服务）发挥核心支持作用的技术所属范围', rowspan:2, colspan:2, class:'text-left'}, {text:'国家重点支持的高新技术领域', colspan:4}],
            [{text:'一级领域', class:'text-center'}, {text:'二级领域', colspan:2, class:'text-center'}, {text:'三级领域', class:'text-center'}],
            ['3', {text:'关键指标情况', colspan:6, class:'text-center section-title'}],
            ['4', {text:'收入指标', rowspan:7}, {text:'一、本年高新技术产品（服务）收入 (5+6)', class:'text-left'}, {text:I, colspan:4}],
            ['5', {text:'其中：产品（服务）收入', class:'text-indent-1'}, {text:I, colspan:4}],
            ['6', {text:'技术性收入', class:'text-indent-2'}, {text:I, colspan:4}],
            ['7', {text:'二、本年企业总收入 (8-9)', class:'text-left'}, {text:I, colspan:4}],
            ['8', {text:'其中：收入总额', class:'text-indent-1'}, {text:I, colspan:4}],
            ['9', {text:'不征税收入', class:'text-indent-2'}, {text:I, colspan:4}],
            ['10', {text:'三、本年高新技术产品（服务）收入占企业总收入的比例 (4÷7)', class:'text-left'}, {text:I, colspan:4}],
            ['11', {text:'人员指标', rowspan:3}, {text:'四、本年科技人员数', class:'text-left'}, {text:I, colspan:4}],
            ['12', {text:'五、本年职工总数', class:'text-left'}, {text:I, colspan:4}],
            ['13', {text:'六、本年科技人员占企业当年职工总数的比例 (11÷12)', class:'text-left'}, {text:I, colspan:4}],
            ['14', {text:'研发费用指标', rowspan:17}, {text:'高新研发费用归集年度', class:'text-center'}, '本年度<br>1', '前一年度<br>2', '前二年度<br>3', '合计<br>4'],
            ['15', {text:'七、归集的高新研发费用金额 (16+25)', class:'text-left'}, I, I, I, I],
            ['16', {text:'（一）内部研究开发投入 (17+…+22+24)', class:'text-indent-1'}, I, I, I, I],
            ['17', {text:'1. 人员人工费用', class:'text-indent-2'}, I, I, I, I],
            ['18', {text:'2.直接投入费用', class:'text-indent-2'}, I, I, I, I],
            ['19', {text:'3.折旧费用与长期待摊费用', class:'text-indent-2'}, I, I, I, I],
            ['20', {text:'4.无形资产摊销费用', class:'text-indent-2'}, I, I, I, I],
            ['21', {text:'5.设计费用', class:'text-indent-2'}, I, I, I, I],
            ['22', {text:'6.装备调试费与试验费用', class:'text-indent-2'}, I, I, I, I],
            ['23', {text:'7.其他费用', class:'text-indent-2'}, I, I, I, I],
            ['24', {text:'其中：可计入研发费用的其他费用', class:'text-indent-3'}, I, I, I, I],
            ['25', {text:'（二）委托外部研发费用 [ (26+28)×80% ]', class:'text-indent-1'}, I, I, I, I],
            ['26', {text:'1.境内的外部研发费', class:'text-indent-2'}, I, I, I, I],
            ['27', {text:'2.境外的外部研发费', class:'text-indent-2'}, I, I, I, I],
            ['28', {text:'其中：可计入研发费用的境外的外部研发费', class:'text-indent-3'}, I, I, I, I],
            ['29', {text:'八、销售（营业）收入', class:'text-left'}, I, I, I, I],
            ['30', {text:'九、三年研发费用占销售（营业）收入的比例 (15行4列÷29行4列)', class:'text-left'}, {text:I, colspan:4}],
            ['31', {text:'减免税额', rowspan:2}, {text:'十、国家需要重点扶持的高新技术企业减征企业所得税', class:'text-left', colspan:4}, I],
            ['32', {text:'十一、经济特区和上海浦东新区新设立的高新技术企业定期减免税额', class:'text-left', colspan:4}, I]
        ]
    },
    {
        code: 'A107042',
        name: '软件、集成电路企业优惠情况及明细表',
        layout: 'table',
        headers: [
            [ { text: '行号', width: '50px' }, { text: '企业类型', colspan: 2 }, { text: '减免方式' } ]
        ],
        rows: [
            ['1', {text:'一、集成电路生产企业', rowspan:3, class:'text-left'}, '（一）线宽小于 0.8 微米（含）', {text:'□二免三减半', class:'text-left'}],
            ['2', '（二）线宽小于 0.25 微米', {text:'□五免五减半 □15%税率', class:'text-left'}],
            ['3', '（三）投资额超过 80 亿元', {text:'□五免五减半 □15%税率', class:'text-left'}],
            ['4', {text:'二、集成电路设计企业', rowspan:2, class:'text-left'}, '（一）新办符合条件', {text:'□二免三减半', class:'text-left'}],
            ['5', '（二）重点企业 □大型 □领域', {text:'□10%税率', class:'text-left'}],
            ['6', {text:'三、软件企业 (□一般软件 □嵌入式或信息系统集成软件)', rowspan:2, class:'text-left'}, '（一）新办符合条件', {text:'□二免三减半', class:'text-left'}],
            ['7', '（二）重点企业 □大型 □领域 □出口', {text:'□10%税率', class:'text-left'}],
            ['8', {text:'四、集成电路封装测试企业', colspan:2, class:'text-left'}, {text:'□二免三减半', class:'text-left'}],
            ['9', {text:'五、集成电路关键专用材料或专用设备生产企业 (□关键专用材料 □专用设备)', colspan:2, class:'text-left'}, {text:'□二免三减半', class:'text-left'}],
            ['10', {text:'获利年度/开始计算优惠期年度', colspan:2, class:'text-left'}, I],
            [{text:'关键指标情况', colspan:4, class:'text-center section-title'}],
            ['11', {text:'人员指标', rowspan:5}, {text:'一、企业本年月平均职工总人数', class:'text-left'}, I],
            ['12', {text:'其中：签订劳动合同关系且具有大学专科以上学历的职工人数', class:'text-indent-1'}, I],
            ['13', {text:'研究开发人员人数', class:'text-indent-2'}, I],
            ['14', {text:'二、大学专科以上职工占企业本年月平均职工总人数的比例 (12÷11)', class:'text-left'}, I],
            ['15', {text:'三、研究开发人员占企业本年月平均职工总人数的比例 (13÷11)', class:'text-left'}, I],
            ['16', {text:'研发费用指标', rowspan:4}, {text:'四、研发费用总额', class:'text-left'}, I],
            ['17', {text:'其中：企业在中国境内发生的研发费用金额', class:'text-indent-1'}, I],
            ['18', {text:'五、研发费用占销售（营业）收入的比例', class:'text-left'}, I],
            ['19', {text:'六、境内研发费用占研发费用总额的比例 (17÷16)', class:'text-left'}, I],
            ['20', {text:'收入指标', rowspan:12}, {text:'七、企业收入总额', class:'text-left'}, I],
            ['21', {text:'八、符合条件的销售（营业）收入', class:'text-left'}, I],
            ['22', {text:'九、符合条件的收入占收入总额的比例 (21÷20)', class:'text-left'}, I],
            ['23', {text:'十、集成电路设计企业、软件企业填报', rowspan:2, class:'text-left'}, {text:'（一）自主设计/开发销售（营业）收入', class:'text-left'}, I],
            ['24', {text:'（二）自主设计/开发收入占企业收入总额的比例 (23÷20)', class:'text-left'}, I],
            ['25', {text:'十一、重点软件企业或重点集成电路设计企业符合“领域”的填报', rowspan:3, class:'text-left'}, {text:'（一）适用的领域', class:'text-left'}, I],
            ['26', {text:'（二）选择备案领域的销售（营业）收入', class:'text-left'}, I],
            ['27', {text:'（三）领域内的销售收入占符合条件的销售收入的比例 (26÷21)', class:'text-left'}, I],
            ['28', {text:'十二、重点软件企业符合“出口”的填报', rowspan:3, class:'text-left'}, {text:'（一）年度软件出口收入总额（美元）', class:'text-left'}, I],
            ['29', {text:'（二）年度软件出口收入总额（人民币）', class:'text-left'}, I],
            ['30', {text:'（三）软件出口收入总额占本企业年度收入总额的比例 (29÷20)', class:'text-left'}, I],
            ['31', {text:'十三、集成电路关键专用材料或专用设备生产企业填报', class:'text-left'}, {text:'产品适用目录', class:'text-left'}, I],
            ['32', {text:'减免税额', colspan:2, class:'text-left'}, I]
        ]
    },
    {
        code: 'A107050',
        name: '税额抵免优惠明细表',
        layout: 'table',
        headers: [
            [ { text: '行次', rowspan: 2 }, { text: '类别', rowspan: 2 }, { text: '项 目', rowspan: 2, width: '200px' }, { text: '当年抵免前<br>应纳税额' }, { text: '当年允许<br>抵免额' }, { text: '当年实际<br>可抵免税额' }, { text: '以前年度<br>已抵免额' }, { text: '本年实际<br>抵免税额' }, { text: '可结转以后<br>年度抵免额' } ],
            [ { text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }, { text: '6' } ]
        ],
        rows: [
            ['1', {text: '前五年度', rowspan: 5}, {text:'本年实际抵免各年度税额'}, R, R, I, I, I, I],
            ['2', '前四年度', R, R, I, I, I, I],
            ['3', '前三年度', R, R, I, I, I, I],
            ['4', '前二年度', R, R, I, I, I, I],
            ['5', '前一年度', R, R, I, I, I, I],
            ['6', {text: '本年度'}, {text:'本年度'}, I, I, I, R, I, I],
            ['7', {text: '合计', colspan: 2}, R, R, I, I, I, I]
        ]
    },
    {
        code: 'A108000',
        name: '境外所得税收抵免明细表',
        layout: 'table',
        headers: [
            [
                {text:'行次', rowspan:2, width:'40px'}, 
                {text:'国家<br>（地区）', rowspan:2, width:'60px'}, 
                {text:'境外<br>税前<br>所得', rowspan:2, width:'70px'}, 
                {text:'境外所得<br>纳税调整<br>后所得', rowspan:2, width:'70px'}, 
                {text:'弥补境外<br>以前年度<br>亏损', rowspan:2, width:'70px'}, 
                {text:'境外应<br>纳税所<br>得额', rowspan:2, width:'70px'}, 
                {text:'抵减境<br>内亏损', rowspan:2, width:'70px'}, 
                {text:'抵减境内<br>亏损后的境<br>外应纳税<br>所得额', rowspan:2, width:'70px'}, 
                {text:'税率', rowspan:2, width:'50px'}, 
                {text:'境外所得<br>应纳税额', rowspan:2, width:'70px'}, 
                {text:'境外所得<br>可抵免税额', rowspan:2, width:'70px'}, 
                {text:'境外所得<br>抵免限额', rowspan:2, width:'70px'}, 
                {text:'本年可抵<br>免境外所<br>得税额', rowspan:2, width:'70px'}, 
                {text:'未超过境<br>外所得抵<br>免限额的<br>余额', rowspan:2, width:'70px'}, 
                {text:'本年可抵免<br>以前年度未<br>抵免境外所<br>得税额', rowspan:2, width:'70px'}, 
                {text:'按简易办法计算', colspan:4}, 
                {text:'境外所得抵免<br>所得税额合计', rowspan:2, width:'80px'}
            ],
            [
                {text:'按低于<br>12.5%的<br>实际税率<br>计算的抵<br>免额', width:'70px'}, 
                {text:'按12.5%<br>计算的<br>抵免额', width:'70px'}, 
                {text:'按25%<br>计算的<br>抵免额', width:'70px'}, 
                {text:'小计', width:'70px'}
            ],
            [
                {text:''}, {text:'1'}, {text:'2'}, {text:'3'}, {text:'4'}, {text:'5<br>(3-4)'}, {text:'6'}, {text:'7<br>(5-6)'}, {text:'8'}, {text:'9<br>(7×8)'}, {text:'10'}, {text:'11'}, {text:'12'}, {text:'13<br>(11-12)'}, {text:'14'}, {text:'15'}, {text:'16'}, {text:'17'}, {text:'18(15+<br>16+17)'}, {text:'19(12+<br>14+18)'}
            ]
        ],
        rows: [
            ['1', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['2', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['3', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['4', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['5', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['6', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['7', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['8', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['9', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['10', '合计', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A108010',
        name: '境外所得纳税调整后所得明细表',
        layout: 'table',
        headers: [
            [
                {text:'行次', rowspan:2, width:'40px'}, 
                {text:'国家<br>（地区）', rowspan:2, width:'60px'}, 
                {text:'境外税后所得', colspan:8}, 
                {text:'境外所得可抵免的所得税额', colspan:4}, 
                {text:'境外税前<br>所得', rowspan:2, width:'70px'}, 
                {text:'境外分支<br>机构收入<br>与支出纳<br>税调整额', rowspan:2, width:'70px'}, 
                {text:'境外所得<br>对应相关<br>成本费用<br>支出', rowspan:2, width:'70px'}, 
                {text:'境外所得<br>纳税调整<br>后所得', rowspan:2, width:'70px'}
            ],
            [
                {text:'分支机构<br>营业利润<br>所得', width:'70px'}, 
                {text:'股息、红利<br>等权益性投<br>资所得', width:'70px'}, 
                {text:'利息<br>所得', width:'70px'}, 
                {text:'租金<br>所得', width:'70px'}, 
                {text:'特许权使用<br>费所得', width:'70px'}, 
                {text:'财产转<br>让所得', width:'70px'}, 
                {text:'其他<br>所得', width:'70px'}, 
                {text:'小计', width:'70px'},
                {text:'直接缴纳的<br>所得税额', width:'70px'}, 
                {text:'间接负担的<br>所得税额', width:'70px'}, 
                {text:'享受税收饶<br>让抵免税额', width:'70px'}, 
                {text:'小计', width:'70px'}
            ],
            [
                {text:''}, {text:'1'}, {text:'2'}, {text:'3'}, {text:'4'}, {text:'5'}, {text:'6'}, {text:'7'}, {text:'8'}, {text:'9(2+...<br>+8)'}, {text:'10'}, {text:'11'}, {text:'12'}, {text:'13(10+<br>11+12)'}, {text:'14(9+<br>10+11)'}, {text:'15'}, {text:'16'}, {text:'17'}, {text:'18(14+<br>15-16-17)'}
            ]
        ],
        rows: [
            ['1', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['2', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['3', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['4', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['5', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['6', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['7', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['8', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['9', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['10', '合计', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A108020',
        name: '境外分支机构弥补亏损明细表',
        layout: 'table',
        headers: [
            [
                {text:'行次', rowspan:3, width:'40px'}, 
                {text:'国家<br>（地区）', rowspan:3, width:'60px'}, 
                {text:'非实际亏损额的弥补', colspan:4}, 
                {text:'实际亏损额的弥补', colspan:14}
            ],
            [
                {text:'以前年度结<br>转尚未弥补<br>的非实际亏<br>损额'}, {text:'本年发生<br>的非实际<br>亏损额'}, {text:'本年弥补<br>的以前年<br>度非实际<br>亏损额'}, {text:'结转以后<br>年度弥补<br>的非实际<br>亏损额'},
                {text:'以前年度结转尚未弥补的实际亏损额', colspan:6}, 
                {text:'本年发<br>生的实<br>际亏损<br>额'}, {text:'本年弥补<br>的以前年<br>度实际亏<br>损额'}, 
                {text:'结转以后年度弥补的实际亏损额', colspan:6}
            ],
            [
                {text:'前五年'}, {text:'前四年'}, {text:'前三年'}, {text:'前二年'}, {text:'前一年'}, {text:'小计'},
                {text:'前四年'}, {text:'前三年'}, {text:'前二年'}, {text:'前一年'}, {text:'本年'}, {text:'小计'}
            ],
            [
                {text:''}, {text:'1'}, {text:'2'}, {text:'3'}, {text:'4'}, {text:'5<br>(2+3-4)'}, 
                {text:'6'}, {text:'7'}, {text:'8'}, {text:'9'}, {text:'10'}, {text:'11(6+<br>...+10)'}, 
                {text:'12'}, {text:'13'}, {text:'14'}, {text:'15'}, {text:'16'}, {text:'17'}, {text:'18'}, {text:'19(14+<br>...+18)'}
            ]
        ],
        rows: [
            ['1', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['2', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['3', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['4', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['5', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['6', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['7', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['8', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['9', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['10', '合计', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A108030',
        name: '跨年度结转抵免境外所得税明细表',
        layout: 'table',
        headers: [
            [
                {text:'行次', rowspan:3, width:'40px'}, 
                {text:'国家<br>（地区）', rowspan:3, width:'60px'}, 
                {text:'前五年境外所得已缴所得税未抵免余额', colspan:6}, 
                {text:'本年实际抵免以前年度未抵免的境外已缴所得税额', colspan:6}, 
                {text:'结转以后年度抵免的境外所得已缴所得税额', colspan:6}
            ],
            [
                {text:'前五年'}, {text:'前四年'}, {text:'前三年'}, {text:'前二年'}, {text:'前一年'}, {text:'小计'},
                {text:'前五年'}, {text:'前四年'}, {text:'前三年'}, {text:'前二年'}, {text:'前一年'}, {text:'小计'},
                {text:'前四年'}, {text:'前三年'}, {text:'前二年'}, {text:'前一年'}, {text:'本年'}, {text:'小计'}
            ],
            [
                {text:''}, {text:'1'}, {text:'2'}, {text:'3'}, {text:'4'}, {text:'5'}, {text:'6'}, {text:'7(2+<br>...+6)'}, 
                {text:'8'}, {text:'9'}, {text:'10'}, {text:'11'}, {text:'12'}, {text:'13(8+<br>...+12)'}, 
                {text:'14<br>(3-9)'}, {text:'15<br>(4-10)'}, {text:'16<br>(5-11)'}, {text:'17<br>(6-12)'}, {text:'18'}, {text:'19(14+<br>...+18)'}
            ]
        ],
        rows: [
            ['1', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['2', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['3', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['4', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['5', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['6', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['7', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['8', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['9', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
            ['10', '合计', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I]
        ]
    },
    {
        code: 'A109000',
        name: '跨地区经营汇总纳税企业年度分摊企业所得税明细表',
        layout: 'table',
        headers: [
            [ { text: '项    目', width: '500px' }, { text: '行次', width: '60px' }, { text: '金    额', width: '200px' } ]
        ],
        rows: [
            [{text: '一、实际应纳所得税额', class: 'text-left'}, '1', I],
            [{text: '减:境外所得应纳所得税额', class: 'text-indent-1'}, '2', I],
            [{text: '加:境外所得抵免所得税额', class: 'text-indent-1'}, '3', I],
            [{text: '二、本年实际应纳所得税额(1-2+3)', class: 'text-left'}, '4', I],
            [{text: '其中:总机构直接管理建筑项目部预分所得税额', class: 'text-indent-1'}, '5', I],
            [{text: '总机构实际应分摊所得税额[(4-5)×总机构分摊比例%]', class: 'text-indent-1'}, '6', I],
            [{text: '财政集中实际应分配所得税额[(4-5)×财政集中分摊比例%]', class: 'text-indent-1'}, '7', I],
            [{text: '分支机构实际应分摊所得税额[(4-5)×分支机构分摊比例%]', class: 'text-indent-1'}, '8', I],
            [{text: '其中:总机构主体生产经营部门实际应分摊所得税额[(8×总机构主体生产经营部门分摊比例%)]', class: 'text-indent-1'}, '9', I],
            [{text: '三、本年累计已预分、已分摊所得税额(11+12+13+14)', class: 'text-left'}, '10', I],
            [{text: '其中:总机构直接管理建筑项目部预分所得税额', class: 'text-indent-1'}, '11', I],
            [{text: '总机构已分摊所得税额', class: 'text-indent-1'}, '12', I],
            [{text: '财政集中已分配所得税额', class: 'text-indent-1'}, '13', I],
            [{text: '分支机构已分摊所得税额', class: 'text-indent-1'}, '14', I],
            [{text: '其中:总机构主体生产经营部门已分摊所得税额', class: 'text-indent-1'}, '15', I],
            [{text: '四、本年度应分摊的应补(退)的所得税额(4-10)', class: 'text-left'}, '16', I],
            [{text: '其中:总机构分摊本年应补(退)的所得税额(6-12)', class: 'text-indent-1'}, '17', I],
            [{text: '财政集中分配本年应补(退)的所得税额(7-13)', class: 'text-indent-1'}, '18', I],
            [{text: '分支机构分摊本年应补(退)的所得税额(8-14)', class: 'text-indent-1'}, '19', I],
            [{text: '其中:总机构主体生产经营部门分摊本年应补(退)的所得税额(9-15)', class: 'text-indent-1'}, '20', I],
            [{text: '五、境外所得抵免后的应纳所得税额(2-3)', class: 'text-left'}, '21', I],
            [{text: '六、总机构本年应补(退)所得税额(17+18+20+21)', class: 'text-left'}, '22', I],
            [{text: '七、总机构应享受民族地方优惠金额', class: 'text-left'}, '23', I],
            [{text: '总机构全年累计已享受民族地方优惠金额', class: 'text-indent-1'}, '24', I],
            [{text: '总机构因民族地方优惠调整分配金额(23-24)', class: 'text-indent-1'}, '25', I],
            [{text: '八、总机构本年实际应补(退)所得税额(22-25)', class: 'text-left'}, '26', I]
        ]
    },
    {
        code: 'A109010',
        name: '企业所得税汇总纳税分支机构所得税分配表',
        layout: 'table',
        headers: [
            [ 
                { text: '机构名称', rowspan: 2, width: '120px' }, 
                { text: '统一社会信用代码<br>(纳税人识别号)', rowspan: 2, width: '160px' }, 
                { text: '三项因素', colspan: 3 }, 
                { text: '分摊<br>比例', rowspan: 2 }, 
                { text: '实际应<br>分摊所<br>得税额', rowspan: 2 }, 
                { text: '累计已<br>分摊所<br>得税额', rowspan: 2 }, 
                { text: '分摊应<br>补(退)<br>所得税额', rowspan: 2 }, 
                { text: '民族自治地区企业<br>所得税地方分享部<br>分优惠金额', rowspan: 2, width: '140px' }, 
                { text: '实际分<br>摊应补<br>(退)<br>所得税<br>额', rowspan: 2 } 
            ],
            [ 
                { text: '营业收入' }, 
                { text: '职工薪酬' }, 
                { text: '资产总额' } 
            ]
        ],
        rows: [
            [I, I, I, I, I, I, I, I, I, I, I],
            [I, I, I, I, I, I, I, I, I, I, I],
            [I, I, I, I, I, I, I, I, I, I, I],
            [I, I, I, I, I, I, I, I, I, I, I],
            [{text: '合  计', colspan: 2, class:'text-center'}, I, I, I, I, I, I, I, I, I]
        ]
    },
    { code: 'EXT_01', displayCode: '附表1', name: '非货币性资产投资递延纳税调整明细表', fields: [] },
    { code: 'EXT_02', displayCode: '附表2', name: '居民企业资产（股权）划转特殊性税务处理申报表', fields: [] },
    { code: 'EXT_03', displayCode: '附表3', name: '企业重组所得税特殊性税务处理报告表（总信息表）', fields: [] }
];