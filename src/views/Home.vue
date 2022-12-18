<template>
    <div id="home">
        <span class="title">ETH 大乐透</span>
      <Store />
      <Pool />
      <Chain />
    </div>
  </template>

<script>
/* eslint-disable */
import Store from "@/components/Store";
import Pool from "@/components/Pool"
import Chain from "@/components/Chain"
  export default {
      name: 'Home',
      components: {
          Store,
          Pool,
          Chain
      }
  }
</script>
<style>
    body { padding:0px;margin: 0px;background:url("../assets/background.png")no-repeat; background-size: 100% 100% ;background-attachment: fixed;} 

    span.title {
        padding: 0px 0px 0px 0px;
        font-size: 400%;
        font-weight: 700;
        color: rgb(255, 255, 255);
        margin-top: 100px;
        margin-bottom: 100px;
    }
</style>