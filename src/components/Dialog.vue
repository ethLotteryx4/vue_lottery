<template>
    <!--1.首先，弹窗页面中要有el-dialog组件即弹窗组件，我们把弹窗中的内容放在el-dialog组件中-->
    <!--2.设置:visible.sync属性，动态绑定一个布尔值，通过这个属性来控制弹窗是否弹出-->
    <div class="shadow" v-if="detailVisible">
        <div class="dialog"  :footer="null" >
            <span class="dialogDesc">
                请输入您的私钥
            </span>
            <br>
            <input class="pk" type="text" v-model="pk" @blur="save" placeholder="private-key"/>
            <br>
            <button class="close" @click="close">关闭</button>
        </div>
    </div>
    </template>
    
<script>
import * as utils from "../utils"
    export default {
        name: "Dialog",
        data(){
            return{
                pk:"",
                detailVisible:true
            }
        },
        mounted() {
            this.pk = localStorage.getItem("pk")
        },
        methods:{
            inputPK(){
                this.detailVisible=true;
            },
            save() {
                var flag = true;
                localStorage.setItem("pk", this.pk)
                utils.add_wallet(this.pk)
            },
            close() {
                this.detailVisible = false;
            }
        }
    }
</script>
<style>
span.dialogDesc {
    position: relative;
    top: 10%;
    font-weight: 700;
    font-size: 200%;
    place-self: center;
    color: black;
    
    user-select:none;
}
div.dialog {
    border-radius: 3%;
    position: absolute;
    left: 30%;
    top: 50%;
    margin: auto;
    background-color: rgba(176, 192, 204, 0.865);
    justify-self: center;
    flex-direction:column;
    width: 800px;
    height: 300px;
    text-align: center;
}
input.pk {
    text-align: center;
    position: relative;
    height: 50px;
    font-size: 100%;
    font-weight: 500;
    color: rgb(16, 26, 30);
    width: 600px;
    top: 20%;
    background-color: rgba(245, 245, 245, 0.864);
}
button.close {
    width: 120px;
    height: 70px;
    position: relative;
    top: 30%;
    user-select:none;
    background-color: rgba(135, 228, 212, 0.729);
    border: 1px;
}
div.shadow {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

}
</style>
    