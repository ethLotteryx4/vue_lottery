<template>
    <div class="store">
        <Form ref="form" />
        <div class="hstack">
            <div class="vstack">
                <div class="hstack">
                    <span class="txt">账户：</span>
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
    methods: {
        login() {
            // TODO:
            if (!utils.is_address(acc)) {
                alert("请输入正确的账户地址！")
                return;
            }
        },
        submit() {
            if (!utils.is_address(acc)) {
                alert("请输入正确的账户地址！")
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
    background-color: #ffae00;
        margin:36px 0px 20px 20px;
        width: 100px;
        height: 60px;
        font-size: 125%;
        font-weight: 600;
        color: #ffffff;
        border: 0px;
        /* margin-top: 34px; */
}
button.buy {
    background-color: #ffae00;
        margin:36px 0px 20px 20px;
        width: 100px;
        height: 60px;
        font-size: 125%;
        font-weight: 600;
        border: 0px;
        color: #ffffff;
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
    color: #ffffff;
}
div.store {
    margin-top: 20px;

}
</style>