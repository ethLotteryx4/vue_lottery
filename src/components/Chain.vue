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
            if (!utils.logged()) {
                alert("请先登录！");
                return;
            }
            var chain_hist = await utils.chain_data();
            this.chain_data = [];
            if (chain_hist.length == 0)
                alert("无历史信息！");
            chain_hist.forEach(phase => {
                if (phase.phase_data.length == 0) {
                    this.chain_data.push({
                        "phase":phase.phase + 1,
                        "winner":"无人中奖，奖池累计",
                        "money": 0,
                        "number": phase.number
                    })
                }
                phase.phase_data.forEach(data => {
                    this.chain_data.push({
                        "phase":phase.phase + 1,
                        "winner":data.id,
                        "money": data.money,
                        "number": phase.number
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
    padding: 20px 0px 100px 0px;
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