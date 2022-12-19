<template>
    <div id="home">
      <Dialog ref="dialog" />
        <span class="title">ETH 大乐透</span>
      <Store />
      <Pool ref="pool"/>
      <Chain ref="chain"/>
      <Foot />
    </div>
  </template>

<script>
/* eslint-disable */
import Store from "@/components/Store";
import Pool from "@/components/Pool"
import Chain from "@/components/Chain"
import Foot from "@/components/Foot"
import Dialog from "@/components/Dialog"
  export default {
      name: 'Home',
      components: {
          Store,
          Pool,
          Chain,
          Foot,
          Dialog
      }
  }
</script>
<style>
body { height: 100%;  width: 100%;padding:0px;margin: 0px;background:url("../assets/background.png")no-repeat; background-size: 100% 100% ;background-attachment: fixed;} 
html {
  height: 100%;
  width: 100%;
}

span.title {
    padding: 0px 0px 0px 0px;
    font-size: 400%;
    font-weight: 700;
    color: rgb(255, 255, 255);
    margin-top: 100px;
    margin-bottom: 100px;
    user-select:none;
}
.main-container{
  /*  35 = footer  */
  min-height: calc(100vh - 55px);
}
Dialog {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>