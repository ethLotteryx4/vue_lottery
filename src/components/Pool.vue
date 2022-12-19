<template class="default">
    <div class="pool" :style="{
        // backgroundImage: 'url(' + bg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100%, 100%'}">
        <span class="desc">
            当前第{{ phase }}期奖池:
        </span>
    <br>
        <span class="pool" @click="refresh">
            {{ pool }}
        </span>
        <br>
        <span class="info">
            (点击刷新当前奖池大小, 单位wei)
        </span>
    </div>
</template>

<script>
/* eslint-disable */
import * as utils from "../utils.js"
export default {
  name: 'Pool',
  data () {
    return {
      pool: 0,
      phase: 0,
      bg: require('@/assets/red_pack.png')
    }
  },
  methods: {
    async refresh() {
        if (!utils.logged()) {
            alert("请先登录！");
            return;
        }
        var data = await utils.pool_data();
        var reg = /^[0-9]+[.]?[0-9]*$/
        if (reg.test(data.phase))
            this.phase = data.phase;
        if (reg.test(data.pool))
            this.pool = data.pool;
    }
  }
}
</script>

<style>
template.default {
    justify-content: center;
    align-content: center;
}
div.pool {
    widows: 450px;
    height: 180px;
    /* margin-bottom: 20px; */
    /* writing-mode: vertical-lr; */
}
span.desc {
    margin-left: 15px;
    font-weight: 800;
    font-size:xxx-large;
    color: #3d4353;
    user-select:none;
}
span.pool {
    padding: 0px 0px 0px 0px;
    font-size: 750%;
    font-weight: 800;
    text-align: center;
    color: #fbde00;
    width: 120px;
    height: 80px !important;
    user-select:none;
}
span.info {
    clear: left;
    padding: 0px 0px 0px 0px;
    font-size: 100%;
    /* font-weight: 1000; */
    color: #fbde00;
    margin-bottom: 20px;
}
</style>