<template>
    <div class="store">
        <Form ref="form" />
        <div class="hstack">
            <!-- <button class="login" @click="login">登录</button> -->
            <button class="buy" @click="submit">购买</button>
        </div>
        
    </div>
</template>

<script>
/* eslint-disable */
import Form from '@/components/Form'
import Dialog from '@/components/Dialog'
import * as utils from '../utils.js'
export default {
    name: 'Store',
    components: {
        Form,
        Dialog
    },
    data () {
        return {
            rows: []
        }
    },
    mounted () {
        this.login();
        var pk = localStorage.getItem("pk");
        if (!pk) {
            this.$parent.$refs.dialog.inputPK();
        }
    },
    methods: {
        async login() {
            if (utils.logged()) {
                alert("已经登录！请勿重复登录！");
                return;
            }
            var state = await utils.getWallet();
            if (state) {
                alert("登录成功！");
                this.$parent.$refs.pool.refresh();
                this.$parent.$refs.chain.refresh();
            } else {
                alert("登录失败！");
            }
        },
        submit() {
            if (!utils.logged()) {
                alert("请先登录！")
                return;
            }
            var data = this.$refs.form.form_data();
            var flag = true;
            utils.buy(data).catch((e) => {
                this.$parent.$refs.dialog.inputPK();
                alert("请检查私钥是否正确！")
                flag = false;
            }).then(() => {
                if (flag)
                    alert("购买成功！")
            })
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
        margin:36px 0px 20px 0px;
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
span.txt {
    margin:15px 0px 10px 0px;
    color: #ffffff;
    user-select:none;
}
div.store {
    margin-top: 20px;

}
</style>