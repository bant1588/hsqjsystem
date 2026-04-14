// forms/A102020.js
import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">金融企业支出明细表 (A102020)</h2>
            <table class="tax-table">
                <thead><tr><th width="10%">行次</th><th width="60%">项 目</th><th width="30%">金 额</th></tr></thead>
                <tbody>
                    <tr><td>1</td><td class="text-left font-bold">一、营业支出 (2+15+25+31+32)</td><td><input type="number" class="tax-input" v-model="db.A102020.L1"></td></tr>
                    
                    <tr><td>2</td><td class="text-left pl-2">（一）银行业务支出 (3+11)</td><td><input type="number" class="tax-input" v-model="db.A102020.L2"></td></tr>
                    <tr><td>3</td><td class="text-left pl-4">1. 银行利息支出 (4+5+6+7+8+9+10)</td><td><input type="number" class="tax-input" v-model="db.A102020.L3"></td></tr>
                    <tr><td>4</td><td class="text-left pl-6">（1）同业存放</td><td><input type="number" class="tax-input" v-model="db.A102020.L4"></td></tr>
                    <tr><td>5</td><td class="text-left pl-6">（2）向中央银行借款</td><td><input type="number" class="tax-input" v-model="db.A102020.L5"></td></tr>
                    <tr><td>6</td><td class="text-left pl-6">（3）拆入资金</td><td><input type="number" class="tax-input" v-model="db.A102020.L6"></td></tr>
                    <tr><td>7</td><td class="text-left pl-6">（4）吸收存款</td><td><input type="number" class="tax-input" v-model="db.A102020.L7"></td></tr>
                    <tr><td>8</td><td class="text-left pl-6">（5）卖出回购金融资产</td><td><input type="number" class="tax-input" v-model="db.A102020.L8"></td></tr>
                    <tr><td>9</td><td class="text-left pl-6">（6）发行债券</td><td><input type="number" class="tax-input" v-model="db.A102020.L9"></td></tr>
                    <tr><td>10</td><td class="text-left pl-6">（7）其他</td><td><input type="number" class="tax-input" v-model="db.A102020.L10"></td></tr>
                    <tr><td>11</td><td class="text-left pl-4">2. 银行手续费及佣金支出 (12+13+14)</td><td><input type="number" class="tax-input" v-model="db.A102020.L11"></td></tr>
                    <tr><td>12</td><td class="text-left pl-6">（1）手续费支出</td><td><input type="number" class="tax-input" v-model="db.A102020.L12"></td></tr>
                    <tr><td>13</td><td class="text-left pl-6">（2）佣金支出</td><td><input type="number" class="tax-input" v-model="db.A102020.L13"></td></tr>
                    <tr><td>14</td><td class="text-left pl-6">（3）其他</td><td><input type="number" class="tax-input" v-model="db.A102020.L14"></td></tr>

                    <tr><td>15</td><td class="text-left pl-2">（二）保险业务支出 (16+17-18+19-20+21+22-23+24)</td><td><input type="number" class="tax-input" v-model="db.A102020.L15"></td></tr>
                    <tr><td>16</td><td class="text-left pl-4">1. 退保金</td><td><input type="number" class="tax-input" v-model="db.A102020.L16"></td></tr>
                    <tr><td>17</td><td class="text-left pl-4">2. 赔付支出</td><td><input type="number" class="tax-input" v-model="db.A102020.L17"></td></tr>
                    <tr><td>18</td><td class="text-left pl-6">减：摊回赔付支出</td><td><input type="number" class="tax-input" v-model="db.A102020.L18"></td></tr>
                    <tr><td>19</td><td class="text-left pl-4">3. 提取保险责任准备金</td><td><input type="number" class="tax-input" v-model="db.A102020.L19"></td></tr>
                    <tr><td>20</td><td class="text-left pl-6">减：摊回保险责任准备金</td><td><input type="number" class="tax-input" v-model="db.A102020.L20"></td></tr>
                    <tr><td>21</td><td class="text-left pl-4">4. 保单红利支出</td><td><input type="number" class="tax-input" v-model="db.A102020.L21"></td></tr>
                    <tr><td>22</td><td class="text-left pl-4">5. 分保费用</td><td><input type="number" class="tax-input" v-model="db.A102020.L22"></td></tr>
                    <tr><td>23</td><td class="text-left pl-6">减：摊回分保费用</td><td><input type="number" class="tax-input" v-model="db.A102020.L23"></td></tr>
                    <tr><td>24</td><td class="text-left pl-4">6. 保险业务手续费及佣金支出</td><td><input type="number" class="tax-input" v-model="db.A102020.L24"></td></tr>

                    <tr><td>25</td><td class="text-left pl-2">（三）证券业务支出 (26+30)</td><td><input type="number" class="tax-input" v-model="db.A102020.L25"></td></tr>
                    <tr><td>26</td><td class="text-left pl-4">1. 证券业务手续费及佣金支出 (27+28+29)</td><td><input type="number" class="tax-input" v-model="db.A102020.L26"></td></tr>
                    <tr><td>27</td><td class="text-left pl-6">（1）证券经纪业务手续费支出</td><td><input type="number" class="tax-input" v-model="db.A102020.L27"></td></tr>
                    <tr><td>28</td><td class="text-left pl-6">（2）佣金支出</td><td><input type="number" class="tax-input" v-model="db.A102020.L28"></td></tr>
                    <tr><td>29</td><td class="text-left pl-6">（3）其他</td><td><input type="number" class="tax-input" v-model="db.A102020.L29"></td></tr>
                    <tr><td>30</td><td class="text-left pl-4">2. 其他证券业务支出</td><td><input type="number" class="tax-input" v-model="db.A102020.L30"></td></tr>

                    <tr><td>31</td><td class="text-left pl-2">（四）其他金融业务支出</td><td><input type="number" class="tax-input" v-model="db.A102020.L31"></td></tr>
                    <tr><td>32</td><td class="text-left pl-2">（五）其他业务成本</td><td><input type="number" class="tax-input" v-model="db.A102020.L32"></td></tr>

                    <tr><td>33</td><td class="text-left font-bold">二、营业外支出 (34+35+36+37+38+39)</td><td><input type="number" class="tax-input" v-model="db.A102020.L33"></td></tr>
                    <tr><td>34</td><td class="text-left pl-2">（一）非流动资产处置损失</td><td><input type="number" class="tax-input" v-model="db.A102020.L34"></td></tr>
                    <tr><td>35</td><td class="text-left pl-2">（二）非货币性资产交换损失</td><td><input type="number" class="tax-input" v-model="db.A102020.L35"></td></tr>
                    <tr><td>36</td><td class="text-left pl-2">（三）债务重组损失</td><td><input type="number" class="tax-input" v-model="db.A102020.L36"></td></tr>
                    <tr><td>37</td><td class="text-left pl-2">（四）捐赠支出</td><td><input type="number" class="tax-input" v-model="db.A102020.L37"></td></tr>
                    <tr><td>38</td><td class="text-left pl-2">（五）非常损失</td><td><input type="number" class="tax-input" v-model="db.A102020.L38"></td></tr>
                    <tr><td>39</td><td class="text-left pl-2">（六）其他</td><td><input type="number" class="tax-input" v-model="db.A102020.L39"></td></tr>
                </tbody>
            </table>
        </div>
    `,
    setup() { return { db } }
}