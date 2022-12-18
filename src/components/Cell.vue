<template id="cell">
    <div class="cell">
        <span class="number"> {{ number }} </span>
        <br>
        <input class="count" type="number" step="0.01" min="0" v-model="value" @blur="trim" />
    </div>
</template>
<style>

div.cell {
    flex-direction:column;
    display:flex !important;
    border:rgb(0, 0, 0) solid 1px;
    width:100px !important;
    background-color:#f8f5d6;
    justify-content:center;
}
span.number {
    width:100px;font-size:16px;text-align:center;
    color:rgb(21, 76, 76);
    font-weight:800;
    user-select:none;
    border:rgb(255, 255, 255, 1) solid 0;
    border-bottom:rgba(0, 0, 0, 1) solid 1px !important;
}
input.count {
    margin:0px 0px 10px 10px;
    width:85px;
    height: 30px;
    overflow-x:scroll;
    color:rgb(0, 0, 0);
    text-align:center;
    vertical-align:middle;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow-y:hidden;
    background-color:#f8f5d6;
    border:rgb(255, 255, 255, 1) solid 0;
    font-weight: 500;
    font-size: medium;
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
        var reg = /^[0-9]+[.]?[0-9]*$/
        if (reg.test(this.value))
            this.value = parseFloat(this.value)
        else 
            this.value = 0;
    }
  }
}
</script>