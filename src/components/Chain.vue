<template>
    <div class="chain">
        <button class="refresh" @click="refresh">点击刷新历史信息</button>
        <table>
                <caption>
                    <font size="5" color="#ffffff"><b>以往中奖信息查询</b></font>
                </caption>
                <thead>
                    <tr>
                        <th>中奖期数</th>
                        <th>中奖者</th>
                        <th>中奖金额</th>
                        <th>中奖号码</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data,index) in this.chain_data" :key="index">
                        <th>
                            {{data.phase}}
                        </th>
                        <th>
                            {{data.winner}}
                        </th>
                        <th>
                            {{data.money}}
                        </th>
                        <th>
                            {{data.number}}
                        </th>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
/* eslint-disable */
import * as utils from "../utils.js"
export default {
    nema:"Chain",
    data() {
        return {
            chain_data: []
        }
    },
    methods: {
        async refresh() {
            console.log('refreshed chain data')
            var pk = document.getElementById("pk").value;
            var acc = document.getElementById("acc").value;
            if (!utils.logged()) {
                alert("请先登录！");
                return;
            }
            var chain_hist = await utils.chain_data();
            console.log(chain_hist)
            chain_hist.forEach(phase => {
                phase.forEach(data => {
                    this.chain_data.push({
                        "phase":phase.phase,
                        "winner":data.id,
                        "money": data.money,
                        "number": data.number
                    })
                });
            });
        }
    }
}
</script>
<style>
div.chain {
    
    justify-content: center;
    text-align: center;
    display: inline;
}
table {
    margin:auto;
    justify-content: center;
    align-self: center;
    table-layout: fixed;
}
th{
        text-align: center;
        border: 1px solid;
        background-color:#ffffff;
        width: 100px;
}
button.refresh {
    margin: 100px 0px 20px 0px;
    width: 300px;
    height: 50px;
    background-color: #FFAE00;
    border: 0px;
    font-size: 125%;
    font-weight: 600;
    color: #ffffff;
    
}
</style>