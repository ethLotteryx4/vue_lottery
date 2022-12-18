<template>
    <div class="store">
        <Form ref="form" />
        <div class="hstack">
            <div class="vstack">
                <div class="hstack">
                    <span class="txt">钱包：</span>
                <input id="acc" ref="acc" placeholder="wallet-address"/>
                </div>
                <div class="hstack">
                    <span class="txt">私钥：</span>
                <input id="pk" ref="pk" placeholder="private-key" />
                </div>
            </div>
            <button class="buy" @click="submit">购买</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Form from '@/components/Form'
import {buy} from '../utils.js'
export default {
    name: 'Store',
    components: {
        Form
    },
    data () {
        return {
            rows: []
        }
    },
    methods: {
        submit() {
            var data = this.$refs.form.form_data()
            var acc = this.$refs.acc.value
            var pk = this.$refs.pk.value
            if (buy(data, pk, acc)) {
                alert("购买成功！")
            } else {
                alert("")
            }
        }
    }
}
</script>
<style>
button.buy {
    background-color: #FFCCCC;
        margin:15px 0px 20px 20px;
        width: 100px;
        height: 100px;
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