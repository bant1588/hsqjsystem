// forms/A101020.js
import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">金融企业收入明细表 (A101020)</h2>
            <table class="tax-table">
                <thead><tr><th width="10%">行次</th><th width="60%">项 目</th><th width="30%">金 额</th></tr></thead>
                <tbody>
                    <tr><td>1</td><td class="text-left font-bold">一、营业收入 (2+18+27+32+33+34)</td><td><input type="number" class="tax-input" v-model="db.A101020.L1"></td></tr>
                    <tr><td>2</td><td class="text-left pl-2">（一）银行业务收入 (3+10)</td><td><input type="number" class="tax-input" v-model="db.A101020.L2"></td></tr>
                    <tr><td>3</td><td class="text-left pl-4">1. 利息收入 (4+5+6+7+8+9)</td><td><input type="number" class="tax-input" v-model="db.A101020.L3"></td></tr>
                    <tr><td>4</td><td class="text-left pl-6">（1）存放同业</td><td><input type="number" class="tax-input" v-model="db.A101020.L4"></td></tr>
                    <tr><td>5</td><td class="text-left pl-6">（2）存放中央银行</td><td><input type="number" class="tax-input" v-model="db.A101020.L5"></td></tr>
                    <tr><td>6</td><td class="text-left pl-6">（3）拆出资金</td><td><input type="number" class="tax-input" v-model="db.A101020.L6"></td></tr>
                    <tr><td>7</td><td class="text-left pl-6">（4）发放贷款及垫资</td><td><input type="number" class="tax-input" v-model="db.A101020.L7"></td></tr>
                    <tr><td>8</td><td class="text-left pl-6">（5）买入返售金融资产</td><td><input type="number" class="tax-input" v-model="db.A101020.L8"></td></tr>
                    <tr><td>9</td><td class="text-left pl-6">（6）其他</td><td><input type="number" class="tax-input" v-model="db.A101020.L9"></td></tr>
                    
                    <tr><td>10</td><td class="text-left pl-4">2. 手续费及佣金收入 (11+12+13+14+15+16+17)</td><td><input type="number" class="tax-input" v-model="db.A101020.L10"></td></tr>
                    <tr><td>11</td><td class="text-left pl-6">（1）结算与清算手续费</td><td><input type="number" class="tax-input" v-model="db.A101020.L11"></td></tr>
                    <tr><td>12</td><td class="text-left pl-6">（2）代理业务手续费</td><td><input type="number" class="tax-input" v-model="db.A101020.L12"></td></tr>
                    <tr><td>13</td><td class="text-left pl-6">（3）信用承诺手续费及佣金</td><td><input type="number" class="tax-input" v-model="db.A101020.L13"></td></tr>
                    <tr><td>14</td><td class="text-left pl-6">（4）银行卡手续费</td><td><input type="number" class="tax-input" v-model="db.A101020.L14"></td></tr>
                    <tr><td>15</td><td class="text-left pl-6">（5）顾问和咨询费</td><td><input type="number" class="tax-input" v-model="db.A101020.L15"></td></tr>
                    <tr><td>16</td><td class="text-left pl-6">（6）托管及其他受托业务佣金</td><td><input type="number" class="tax-input" v-model="db.A101020.L16"></td></tr>
                    <tr><td>17</td><td class="text-left pl-6">（7）其他</td><td><input type="number" class="tax-input" v-model="db.A101020.L17"></td></tr>

                    <tr><td>18</td><td class="text-left pl-2">（二）证券业务收入 (19+26)</td><td><input type="number" class="tax-input" v-model="db.A101020.L18"></td></tr>
                    <tr><td>19</td><td class="text-left pl-4">1. 证券业务手续费及佣金收入 (20+21+22+23+24+25)</td><td><input type="number" class="tax-input" v-model="db.A101020.L19"></td></tr>
                    <tr><td>20</td><td class="text-left pl-6">（1）证券承销业务</td><td><input type="number" class="tax-input" v-model="db.A101020.L20"></td></tr>
                    <tr><td>21</td><td class="text-left pl-6">（2）证券经纪业务</td><td><input type="number" class="tax-input" v-model="db.A101020.L21"></td></tr>
                    <tr><td>22</td><td class="text-left pl-6">（3）受托客户资产管理业务</td><td><input type="number" class="tax-input" v-model="db.A101020.L22"></td></tr>
                    <tr><td>23</td><td class="text-left pl-6">（4）代理兑付证券</td><td><input type="number" class="tax-input" v-model="db.A101020.L23"></td></tr>
                    <tr><td>24</td><td class="text-left pl-6">（5）代理保管证券</td><td><input type="number" class="tax-input" v-model="db.A101020.L24"></td></tr>
                    <tr><td>25</td><td class="text-left pl-6">（6）其他</td><td><input type="number" class="tax-input" v-model="db.A101020.L25"></td></tr>
                    <tr><td>26</td><td class="text-left pl-4">2. 其他证券业务收入</td><td><input type="number" class="tax-input" v-model="db.A101020.L26"></td></tr>

                    <tr><td>27</td><td class="text-left pl-2">（三）已赚保费 (28-30-31)</td><td><input type="number" class="tax-input" v-model="db.A101020.L27"></td></tr>
                    <tr><td>28</td><td class="text-left pl-4">1. 保险业务收入</td><td><input type="number" class="tax-input" v-model="db.A101020.L28"></td></tr>
                    <tr><td>29</td><td class="text-left pl-6">其中：分保费收入</td><td><input type="number" class="tax-input" v-model="db.A101020.L29"></td></tr>
                    <tr><td>30</td><td class="text-left pl-4">2. 分出保费</td><td><input type="number" class="tax-input" v-model="db.A101020.L30"></td></tr>
                    <tr><td>31</td><td class="text-left pl-4">3. 提取未到期责任准备金</td><td><input type="number" class="tax-input" v-model="db.A101020.L31"></td></tr>

                    <tr><td>32</td><td class="text-left pl-2">（四）其他金融业务收入</td><td><input type="number" class="tax-input" v-model="db.A101020.L32"></td></tr>
                    <tr><td>33</td><td class="text-left pl-2">（五）汇兑收益（损失以“-”号填列）</td><td><input type="number" class="tax-input" v-model="db.A101020.L33"></td></tr>
                    <tr><td>34</td><td class="text-left pl-2">（六）其他业务收入</td><td><input type="number" class="tax-input" v-model="db.A101020.L34"></td></tr>

                    <tr><td>35</td><td class="text-left font-bold">二、营业外收入 (36+37+38+39+40+41+42)</td><td><input type="number" class="tax-input" v-model="db.A101020.L35"></td></tr>
                    <tr><td>36</td><td class="text-left pl-2">（一）非流动资产处置利得</td><td><input type="number" class="tax-input" v-model="db.A101020.L36"></td></tr>
                    <tr><td>37</td><td class="text-left pl-2">（二）非货币性资产交换利得</td><td><input type="number" class="tax-input" v-model="db.A101020.L37"></td></tr>
                    <tr><td>38</td><td class="text-left pl-2">（三）债务重组利得</td><td><input type="number" class="tax-input" v-model="db.A101020.L38"></td></tr>
                    <tr><td>39</td><td class="text-left pl-2">（四）政府补助利得</td><td><input type="number" class="tax-input" v-model="db.A101020.L39"></td></tr>
                    <tr><td>40</td><td class="text-left pl-2">（五）盘盈利得</td><td><input type="number" class="tax-input" v-model="db.A101020.L40"></td></tr>
                    <tr><td>41</td><td class="text-left pl-2">（六）捐赠利得</td><td><input type="number" class="tax-input" v-model="db.A101020.L41"></td></tr>
                    <tr><td>42</td><td class="text-left pl-2">（七）其他</td><td><input type="number" class="tax-input" v-model="db.A101020.L42"></td></tr>
                </tbody>
            </table>
        </div>
    `,
    setup() { return { db } }
}