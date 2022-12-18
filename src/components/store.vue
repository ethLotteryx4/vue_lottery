<template>
    <div class="store">
        <Form ref="form" />
        <div class="hstack">
            <div class="vstack">
                <div class="hstack">
                    <span class="txt">钱包：</span>
                <input id="acc" ref="acc" placeholder="wallet-address" v-model="acc"/>
                </div>
                <div class="hstack">
                    <span class="txt">私钥：</span>
                <input id="pk" ref="pk" placeholder="private-key" v-model="pk" />
                </div>
            </div>
            <button class="login" @click="login">登录</button>
            <button class="buy" @click="submit">购买</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Form from '@/components/Form'
import * as utils from '../utils.js'
export default {
    name: 'Store',
    components: {
        Form
    },
    data () {
        return {
            rows: [],
            data: [],
            acc: "",
            pk: ""
        }
    },
    created () {
            this.acc = localStorage.getItem("acc");
            this.pk = localStorage.getItem("pk");
    },
    methods: {
        async login() {
            var state = await utils.login(this.pk, this.acc);
            if (state) {
                localStorage.setItem("acc", this.acc);
                localStorage.setItem("pk", this.pk);
                alert("登录成功！");
            } else {
                alert("登录失败");
            }
        },
        submit() {
            if (!utils.logged()) {
                alert("请先登录！")
                return;
            }
            if (utils.buy(this.data, this.pk, this.acc)) {
                alert("购买成功！")
            } else {
                alert("购买失败")
            }
        }
    }
}
</script>
<style>
button.login {
    background-color: #FFCCCC;
        margin:15px 0px 20px 20px;
        width: 100px;
        height: 100px;
        font-size: 125%;
        font-weight: 600;
        color: #7a366a;
}
button.buy {
    background-color: #FFCCCC;
        margin:15px 0px 20px 20px;
        width: 100px;
        height: 100px;
        font-size: 125%;
        font-weight: 600;
        color: #7a366a;
}
div.hstack {
    flex-direction:row;
    display:flex !important;
    justify-content:center;
}
div.vstack {
    font-size:20px;
    font-weight:bolder;
}
input {
    margin:10px 0px 10px 0px;
    flex-direction:row;
    display:flex !important;
    justify-content:center;
    text-align: center;
    width: 400px;
    height: 40px;
}
span.txt {
    margin:15px 0px 10px 0px;
}
</style>