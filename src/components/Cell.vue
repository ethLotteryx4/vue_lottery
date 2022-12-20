<template id="cell">
    <div class="cell">
        <span class="number"> {{ number }} </span>
        <!-- <br> -->
        <input class="count" type="number" step="1" min="0" v-model="value" @blur="trim" />
    </div>
</template>
<style>

div.cell {
    flex-direction:column;
    display:flex !important;
    border:rgb(0, 0, 0) solid 1px;
    width:120px !important;
    height: 100px;
    background-color:#ffffff;
    justify-content:center;
}
span.number {
    width:120px;font-size:20px;text-align:center;
    color:rgb(0, 0, 124);
    font-weight:800;
    user-select:none;
    border:rgb(255, 255, 255, 1) solid 0;
    border-bottom:rgba(0, 0, 0, 1) solid 1px !important;
    margin-bottom: 10px;
    padding-bottom: 10px;
    /* height: 40px; */
}
input.count {
    margin:2.5px 0px 0px 10px;
    width:90px;
    height: 30px;
    overflow-x:scroll;
    color:rgb(0, 0, 0);
    /* text-align:right; */
    padding-left: 12.5px;
    /* padding-top: 5px; */
    vertical-align:middle;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow-y:hidden;
    background-color:#ffffff;
    border:rgb(255, 255, 255, 1) solid 0;
    font-weight: 500;
    font-size: medium;
    text-align: center;
}
</style>
<script>
/* eslint-disable */
export default {
  name: 'Cell',
  props: [
    'number'
  ],
  data () {
    return {
      value: 0
    }
  },
  methods: {
    trim() {
        var reg = /^[0-9]+$/
        if (reg.test(this.value))
            this.value = parseInt(this.value)
        else 
            this.value = 0;
    }
  }
}
</script>