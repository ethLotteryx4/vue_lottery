<template class="default">
    <div class="pool" :style="{
        backgroundImage: 'url(' + bg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100%, 100%'}">
        <span class="desc">
            当前第{{ phase }}期奖池：
        </span>
    <br>
        <span class="pool" @mouseover="refresh">
            {{ pool }}
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
    refresh() {
        if (!utils.logged()) {
            alert("请先登录！");
            return;
        }
        var data = utils.pool_data();
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
    widows: 400px;
    height: 400px
}
span.desc {
    font-weight: 800;
    font-size:xxx-large;
}
span.pool {
    padding: 0px 0px 0px 0px;
    font-size: 750%;
    font-weight: 1000;
    color: #840303;
}
</style>