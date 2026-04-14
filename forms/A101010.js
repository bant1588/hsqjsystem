import { db } from '../js/engine.js'

export default {
    template: `
        <div class="form-card">
            <h2 style="text-align: center; margin-bottom: 20px;">一般企业收入明细表 (A101010)</h2>
            <table class="tax-table">
                <thead><tr><th width="10%">行次</th><th width="60%">项 目</th><th width="30%">金 额</th></tr></thead>
                <tbody>
                    <tr><td>1</td><td class="text-left font-bold">一、营业收入 (2+9)</td><td><input type="number" class="tax-input" v-model="db.A101010.L1"></td></tr>
                    <tr><td>2</td><td class="text-left pl-2">（一）主营业务收入 (3+5+6+7+8)</td><td><input type="number" class="tax-input" v-model="db.A101010.L2"></td></tr>
                    <tr><td>3</td><td class="text-left pl-4">1. 销售商品收入</td><td><input type="number" class="tax-input" v-model="db.A101010.L3"></td></tr>
                    <tr><td>4</td><td class="text-left pl-6">其中：非货币性资产交换收入</td><td><input type="number" class="tax-input" v-model="db.A101010.L4"></td></tr>
                    <tr><td>5</td><td class="text-left pl-4">2. 提供劳务收入</td><td><input type="number" class="tax-input" v-model="db.A101010.L5"></td></tr>
                    <tr><td>6</td><td class="text-left pl-4">3. 建造合同收入</td><td><input type="number" class="tax-input" v-model="db.A101010.L6"></td></tr>
                    <tr><td>7</td><td class="text-left pl-4">4. 让渡资产使用权收入</td><td><input type="number" class="tax-input" v-model="db.A101010.L7"></td></tr>
                    <tr><td>8</td><td class="text-left pl-4">5. 其他</td><td><input type="number" class="tax-input" v-model="db.A101010.L8"></td></tr>
                    
                    <tr><td>9</td><td class="text-left pl-2">（二）其他业务收入 (10+12+13+14+15)</td><td><input type="number" class="tax-input" v-model="db.A101010.L9"></td></tr>
                    <tr><td>10</td><td class="text-left pl-4">1. 销售材料收入</td><td><input type="number" class="tax-input" v-model="db.A101010.L10"></td></tr>
                    <tr><td>11</td><td class="text-left pl-6">其中：非货币性资产交换收入</td><td><input type="number" class="tax-input" v-model="db.A101010.L11"></td></tr>
                    <tr><td>12</td><td class="text-left pl-4">2. 出租固定资产收入</td><td><input type="number" class="tax-input" v-model="db.A101010.L12"></td></tr>
                    <tr><td>13</td><td class="text-left pl-4">3. 出租无形资产收入</td><td><input type="number" class="tax-input" v-model="db.A101010.L13"></td></tr>
                    <tr><td>14</td><td class="text-left pl-4">4. 出租包装物和商品收入</td><td><input type="number" class="tax-input" v-model="db.A101010.L14"></td></tr>
                    <tr><td>15</td><td class="text-left pl-4">5. 其他</td><td><input type="number" class="tax-input" v-model="db.A101010.L15"></td></tr>

                    <tr><td>16</td><td class="text-left font-bold">二、营业外收入 (17+18+19+20+21+22+23+24+25+26)</td><td><input type="number" class="tax-input" v-model="db.A101010.L16"></td></tr>
                    <tr><td>17</td><td class="text-left pl-2">（一）非流动资产处置利得</td><td><input type="number" class="tax-input" v-model="db.A101010.L17"></td></tr>
                    <tr><td>18</td><td class="text-left pl-2">（二）非货币性资产交换利得</td><td><input type="number" class="tax-input" v-model="db.A101010.L18"></td></tr>
                    <tr><td>19</td><td class="text-left pl-2">（三）债务重组利得</td><td><input type="number" class="tax-input" v-model="db.A101010.L19"></td></tr>
                    <tr><td>20</td><td class="text-left pl-2">（四）政府补助利得</td><td><input type="number" class="tax-input" v-model="db.A101010.L20"></td></tr>
                    <tr><td>21</td><td class="text-left pl-2">（五）盘盈利得</td><td><input type="number" class="tax-input" v-model="db.A101010.L21"></td></tr>
                    <tr><td>22</td><td class="text-left pl-2">（六）捐赠利得</td><td><input type="number" class="tax-input" v-model="db.A101010.L22"></td></tr>
                    <tr><td>23</td><td class="text-left pl-2">（七）罚没利得</td><td><input type="number" class="tax-input" v-model="db.A101010.L23"></td></tr>
                    <tr><td>24</td><td class="text-left pl-2">（八）确实无法偿付的应付款项</td><td><input type="number" class="tax-input" v-model="db.A101010.L24"></td></tr>
                    <tr><td>25</td><td class="text-left pl-2">（九）汇兑收益</td><td><input type="number" class="tax-input" v-model="db.A101010.L25"></td></tr>
                    <tr><td>26</td><td class="text-left pl-2">（十）其他</td><td><input type="number" class="tax-input" v-model="db.A101010.L26"></td></tr>
                </tbody>
            </table>
        </div>
    `,
    setup() { return { db } }
}