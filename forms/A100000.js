// forms/A100000.js
import { db, formulas } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">企业所得税年度纳税申报主表 (A100000)</h2>
            <table class="tax-table">
                <thead>
                    <tr>
                        <th width="8%">行次</th>
                        <th width="10%">类别</th>
                        <th width="62%">项 目</th>
                        <th width="20%">金 额</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td rowspan="18" style="writing-mode: vertical-rl; letter-spacing: 5px; text-align: center; vertical-align: middle;">利润总额计算</td>
                        <td class="text-left">一、营业收入（填写A101010/101020/103000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L1"></td></tr>
                    <tr><td>2</td><td class="text-left pl-2">减：营业成本（填写A102010/102020/103000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L2"></td></tr>
                    <tr><td>3</td><td class="text-left pl-2">减：税金及附加</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L3"></td></tr>
                    <tr><td>4</td><td class="text-left pl-2">减：销售费用（填写A104000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L4"></td></tr>
                    <tr><td>5</td><td class="text-left pl-2">减：管理费用（填写A104000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L5"></td></tr>
                    <tr><td>6</td><td class="text-left pl-2">减：研发费用（填写A104000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L6"></td></tr>
                    <tr><td>7</td><td class="text-left pl-2">减：财务费用（填写A104000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L7"></td></tr>
                    <tr><td>8</td><td class="text-left pl-2">加：其他收益</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L8"></td></tr>
                    <tr><td>9</td><td class="text-left pl-2">加：投资收益（损失以“-”号填列）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L9"></td></tr>
                    <tr><td>10</td><td class="text-left pl-2">加：净敞口套期收益（损失以“-”号填列）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L10"></td></tr>
                    <tr><td>11</td><td class="text-left pl-2">加：公允价值变动收益（损失以“-”号填列）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L11"></td></tr>
                    <tr><td>12</td><td class="text-left pl-2">加：信用减值损失（损失以“-”号填列）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L12"></td></tr>
                    <tr><td>13</td><td class="text-left pl-2">加：资产减值损失（损失以“-”号填列）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L13"></td></tr>
                    <tr><td>14</td><td class="text-left pl-2">加：资产处置收益（损失以“-”号填列）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L14"></td></tr>
                    <tr><td>15</td><td class="text-left font-bold">二、营业利润（亏损以“-”号填列）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L15"></td></tr>
                    <tr><td>16</td><td class="text-left pl-2">加：营业外收入（填写A101010/101020/103000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L16"></td></tr>
                    <tr><td>17</td><td class="text-left pl-2">减：营业外支出（填写A102010/102020/103000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L17"></td></tr>
                    <tr><td>18</td><td class="text-left font-bold">三、利润总额（15+16-17）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L18"></td></tr>

                    <tr><td>19</td><td rowspan="11" style="writing-mode: vertical-rl; letter-spacing: 5px; text-align: center; vertical-align: middle;">应纳税所得额计算</td>
                        <td class="text-left pl-2">减：境外所得（填写A108010）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L19"></td></tr>
                    <tr><td>20</td><td class="text-left pl-2">加：纳税调整增加额（填写A105000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L20"></td></tr>
                    <tr><td>21</td><td class="text-left pl-2">减：纳税调整减少额（填写A105000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L21"></td></tr>
                    <tr><td>22</td><td class="text-left pl-2">减：免税、减计收入及加计扣除（22.1+22.2+…）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L22"></td></tr>
                    <tr><td>22.1</td><td class="text-left pl-4">（填写优惠事项名称）<input type="text" class="inline-input" style="width:200px;" v-model="db.A100000.L22_1_name"></td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L22_1"></td></tr>
                    <tr><td>22.2</td><td class="text-left pl-4">（填写优惠事项名称）<input type="text" class="inline-input" style="width:200px;" v-model="db.A100000.L22_2_name"></td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L22_2"></td></tr>
                    <tr><td>23</td><td class="text-left pl-2">加：境外应税所得抵减境内亏损（填写A108000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L23"></td></tr>
                    <tr><td>24</td><td class="text-left font-bold">四、纳税调整后所得（18-19+20-21-22+23）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L24"></td></tr>
                    <tr><td>25</td><td class="text-left pl-2">减：所得减免（填写A107020）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L25"></td></tr>
                    <tr><td>26</td><td class="text-left pl-2">减：弥补以前年度亏损（填写A106000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L26"></td></tr>
                    <tr><td>27</td><td class="text-left pl-2">减：抵扣应纳税所得额（填写A107030）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L27"></td></tr>

                    <tr><td>28</td><td rowspan="10" style="writing-mode: vertical-rl; letter-spacing: 5px; text-align: center; vertical-align: middle;">应纳税额计算</td>
                        <td class="text-left font-bold">五、应纳税所得额（24-25-26-27）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L28"></td></tr>
                    <tr><td>29</td><td class="text-left pl-2">税率（25%）</td>
                        <td><input type="number" class="tax-input" value="0.25" readonly></td></tr>
                    <tr><td>30</td><td class="text-left font-bold">六、应纳所得税额（28×29）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L30"></td></tr>
                    <tr><td>31</td><td class="text-left pl-2">减：减免所得税额（31.1+31.2+…）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L31"></td></tr>
                    <tr><td>31.1</td><td class="text-left pl-4">（填写优惠事项名称）<input type="text" class="inline-input" style="width:200px;" v-model="db.A100000.L31_1_name"></td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L31_1"></td></tr>
                    <tr><td>31.2</td><td class="text-left pl-4">（填写优惠事项名称）<input type="text" class="inline-input" style="width:200px;" v-model="db.A100000.L31_2_name"></td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L31_2"></td></tr>
                    <tr><td>32</td><td class="text-left pl-2">减：抵免所得税额（填写A107050）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L32"></td></tr>
                    <tr><td>33</td><td class="text-left font-bold">七、应纳税额（30-31-32）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L33"></td></tr>
                    <tr><td>34</td><td class="text-left pl-2">加：境外所得应纳所得税额（填写A108000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L34"></td></tr>
                    <tr><td>35</td><td class="text-left pl-2">减：境外所得抵免所得税额（填写A108000）</td>
                        <td><input type="number" class="tax-input" v-model="db.A100000.L35"></td></tr>
                </tbody>
            </table>
        </div>
    `,
    setup() { return { db, formulas } }
}