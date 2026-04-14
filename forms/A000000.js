import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">企业所得税年度纳税申报基础信息表 (A000000)</h2>
            <table class="tax-table">
                <colgroup>
                    <col width="15%">
                    <col width="20%">
                    <col width="15%">
                    <col width="15%">
                    <col width="20%">
                    <col width="15%">
                </colgroup>
                <tbody>
                    <tr><td colspan="6" class="font-bold text-center" style="background:#f5f7fa;">基本经营情况（必填项目）</td></tr>
                    <tr>
                        <td colspan="2" class="text-left">101 纳税申报企业类型（填写代码）</td>
                        <td><input type="text" class="tax-input" v-model="db.A000000.L101"></td>
                        <td colspan="2" class="text-left">102 分支机构就地纳税比例（%）</td>
                        <td><input type="number" class="tax-input" v-model="db.A000000.L102"></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">103 资产总额（填写平均值，单位：万元）</td>
                        <td><input type="number" class="tax-input" v-model="db.A000000.L103"></td>
                        <td colspan="2" class="text-left">104 从业人数（填写平均值，单位：人）</td>
                        <td><input type="number" class="tax-input" v-model="db.A000000.L104"></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">105 所属国民经济行业（填写代码）</td>
                        <td><input type="text" class="tax-input" v-model="db.A000000.L105"></td>
                        <td colspan="2" class="text-left">106 从事国家限制或禁止行业</td>
                        <td class="text-left">
                            <label><input type="radio" value="是" v-model="db.A000000.L106"> □是</label>
                            <label style="margin-left:10px;"><input type="radio" value="否" v-model="db.A000000.L106"> □否</label>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">107 适用会计准则或会计制度（填写代码）</td>
                        <td><input type="text" class="tax-input" v-model="db.A000000.L107"></td>
                        <td colspan="2" class="text-left">108 采用一般企业财务报表格式（2019年版）</td>
                        <td class="text-left">
                            <label><input type="radio" value="是" v-model="db.A000000.L108"> □是</label>
                            <label style="margin-left:10px;"><input type="radio" value="否" v-model="db.A000000.L108"> □否</label>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">109 小型微利企业</td>
                        <td class="text-left">
                            <label><input type="radio" value="是" v-model="db.A000000.L109"> □是</label>
                            <label style="margin-left:10px;"><input type="radio" value="否" v-model="db.A000000.L109"> □否</label>
                        </td>
                        <td class="text-left">110 上市公司</td>
                        <td colspan="2" class="text-left">
                            <label><input type="radio" value="是_境内" v-model="db.A000000.L110"> □是 (□境内</label>
                            <label style="margin-left:5px;"><input type="radio" value="是_境外" v-model="db.A000000.L110"> □境外)</label>
                            <label style="margin-left:10px;"><input type="radio" value="否" v-model="db.A000000.L110"> □否</label>
                        </td>
                    </tr>
                    
                    <tr><td colspan="6" class="font-bold text-center" style="background:#f5f7fa;">有关涉税事项情况（存在或者发生下列事项时必填）</td></tr>
                    <tr>
                        <td colspan="2" class="text-left">201 从事股权投资业务</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L201"> □是</label></td>
                        <td colspan="2" class="text-left">202 存在境外关联交易</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L202"> □是</label></td>
                    </tr>
                    <tr>
                        <td rowspan="2" class="text-left">203 境外所得信息</td>
                        <td class="text-left">203-1 选择采用的境外所得抵免方式</td>
                        <td colspan="4" class="text-left">
                            <label><input type="radio" value="分国不分项" v-model="db.A000000.L203_1"> □分国（地区）不分项</label>
                            <label style="margin-left: 20px;"><input type="radio" value="不分国不分项" v-model="db.A000000.L203_1"> □不分国（地区）不分项</label>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-left">203-2 新增境外直接投资信息</td>
                        <td colspan="4" class="text-left">
                            <label><input type="checkbox" v-model="db.A000000.L203_2"> □是</label>
                            <span style="margin-left: 10px;">（产业类别：</span>
                            <label><input type="checkbox" value="旅游业" v-model="db.A000000.L203_2_type"> □旅游业</label>
                            <label><input type="checkbox" value="现代服务业" v-model="db.A000000.L203_2_type"> □现代服务业</label>
                            <label><input type="checkbox" value="高新技术产业" v-model="db.A000000.L203_2_type"> □高新技术产业</label>
                            <span>）</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">204 有限合伙制创业投资企业的法人合伙人</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L204"> □是</label></td>
                        <td colspan="2" class="text-left">205 创业投资企业</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L205"> □是</label></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">206 技术先进型服务企业类型（填写代码）</td>
                        <td><input type="text" class="tax-input" v-model="db.A000000.L206"></td>
                        <td colspan="2" class="text-left">207 非营利组织</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L207"> □是</label></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">208 软件、集成电路企业类型（填写代码）</td>
                        <td><input type="text" class="tax-input" v-model="db.A000000.L208"></td>
                        <td colspan="2" class="text-left">209 集成电路生产项目类型</td>
                        <td class="text-left">
                            <label><input type="radio" value="130" v-model="db.A000000.L209"> □130纳米</label>
                            <label><input type="radio" value="65" v-model="db.A000000.L209"> □65纳米</label>
                            <label><input type="radio" value="28" v-model="db.A000000.L209"> □28纳米</label>
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="2" class="text-left">210 科技型中小企业</td>
                        <td class="text-left">210-1 <input type="text" class="inline-input" style="width:30px;" v-model="db.A000000.L210_1_year">年（申报所属期年度）入库编号 1</td>
                        <td><input type="text" class="tax-input" v-model="db.A000000.L210_1"></td>
                        <td colspan="2" class="text-left">210-2 入库时间 1</td>
                        <td><input type="date" class="tax-input" v-model="db.A000000.L210_2"></td>
                    </tr>
                    <tr>
                        <td class="text-left">210-3 <input type="text" class="inline-input" style="width:30px;" v-model="db.A000000.L210_3_year">年（所属期下一年度）入库编号 2</td>
                        <td><input type="text" class="tax-input" v-model="db.A000000.L210_3"></td>
                        <td colspan="2" class="text-left">210-4 入库时间 2</td>
                        <td><input type="date" class="tax-input" v-model="db.A000000.L210_4"></td>
                    </tr>
                    <tr>
                        <td rowspan="2" class="text-left">211 高新技术企业申报所属期年度有效的高新技术企业证书</td>
                        <td class="text-left">211-1 证书编号 1</td>
                        <td><input type="text" class="tax-input" v-model="db.A000000.L211_1"></td>
                        <td colspan="2" class="text-left">211-2 发证时间 1</td>
                        <td><input type="date" class="tax-input" v-model="db.A000000.L211_2"></td>
                    </tr>
                    <tr>
                        <td class="text-left">211-3 证书编号 2</td>
                        <td><input type="text" class="tax-input" v-model="db.A000000.L211_3"></td>
                        <td colspan="2" class="text-left">211-4 发证时间 2</td>
                        <td><input type="date" class="tax-input" v-model="db.A000000.L211_4"></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">212 重组事项税务处理方式</td>
                        <td class="text-left">
                            <label><input type="radio" value="一般性" v-model="db.A000000.L212"> □一般性</label>
                            <label style="margin-left:10px;"><input type="radio" value="特殊性" v-model="db.A000000.L212"> □特殊性</label>
                        </td>
                        <td colspan="2" class="text-left">213 重组交易类型（填写代码）</td>
                        <td><input type="text" class="tax-input" v-model="db.A000000.L213"></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">214 重组当事方类型（填写代码）</td>
                        <td><input type="text" class="tax-input" v-model="db.A000000.L214"></td>
                        <td colspan="2" class="text-left">215 政策性搬迁开始时间</td>
                        <td><input type="month" class="tax-input" v-model="db.A000000.L215"></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">216 发生政策性搬迁且停止生产经营无所得年度</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L216"> □是</label></td>
                        <td colspan="2" class="text-left">217 政策性搬迁损失分期扣除年度</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L217"> □是</label></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">218 发生非货币性资产对外投资递延纳税事项</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L218"> □是</label></td>
                        <td colspan="2" class="text-left">219 非货币性资产对外投资转让所得递延纳税年度</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L219"> □是</label></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">220 发生技术成果投资入股递延纳税事项</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L220"> □是</label></td>
                        <td colspan="2" class="text-left">221 技术成果投资入股递延纳税年度</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L221"> □是</label></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="text-left">222 发生资产（股权）划转特殊性税务处理事项</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L222"> □是</label></td>
                        <td colspan="2" class="text-left">223 债务重组所得递延纳税年度</td>
                        <td class="text-left"><label><input type="checkbox" v-model="db.A000000.L223"> □是</label></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-left">224 研发支出辅助账样式</td>
                        <td colspan="3" class="text-left">
                            <label><input type="radio" value="2015版" v-model="db.A000000.L224"> □2015版</label>
                            <label style="margin-left:20px;"><input type="radio" value="2021版" v-model="db.A000000.L224"> □2021版</label>
                            <label style="margin-left:20px;"><input type="radio" value="自行设计" v-model="db.A000000.L224"> □自行设计</label>
                        </td>
                    </tr>

                    <tr><td colspan="6" class="font-bold text-center" style="background:#f5f7fa;">主要股东及分红情况（必填项目）</td></tr>
                    <tr>
                        <th class="text-center">股东名称</th>
                        <th class="text-center">证件种类</th>
                        <th class="text-center">证件号码</th>
                        <th class="text-center">投资比例（%）</th>
                        <th class="text-center">当年（决议日）分配的股息、红利等权益性投资收益金额</th>
                        <th class="text-center">国籍（注册地址）</th>
                    </tr>
                    <tr>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S1_Name"></td>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S1_Type"></td>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S1_ID"></td>
                        <td><input type="number" class="tax-input" v-model="db.A000000.S1_Ratio"></td>
                        <td><input type="number" class="tax-input" v-model="db.A000000.S1_Amount"></td>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S1_Nation"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S2_Name"></td>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S2_Type"></td>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S2_ID"></td>
                        <td><input type="number" class="tax-input" v-model="db.A000000.S2_Ratio"></td>
                        <td><input type="number" class="tax-input" v-model="db.A000000.S2_Amount"></td>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S2_Nation"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S3_Name"></td>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S3_Type"></td>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S3_ID"></td>
                        <td><input type="number" class="tax-input" v-model="db.A000000.S3_Ratio"></td>
                        <td><input type="number" class="tax-input" v-model="db.A000000.S3_Amount"></td>
                        <td><input type="text" class="tax-input text-center" v-model="db.A000000.S3_Nation"></td>
                    </tr>
                    <tr>
                        <td class="font-bold text-center">其余股东合计</td>
                        <td class="text-center">——</td>
                        <td class="text-center">——</td>
                        <td><input type="number" class="tax-input" v-model="db.A000000.S_Rest_Ratio"></td>
                        <td><input type="number" class="tax-input" v-model="db.A000000.S_Rest_Amount"></td>
                        <td class="text-center">——</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    setup() { return { db } }
}