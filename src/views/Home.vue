<template>
    <div id="home">
        <span class="title">大乐透</span>
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
span.title {
    padding: 0px 0px 0px 0px;
    font-size: 400%;
    font-weight: 700;
    color: rgb(46, 154, 89);
}
</style>