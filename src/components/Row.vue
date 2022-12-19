<template id="row">
    <div class="row">
        <div v-for="num in this.numbers" :key="num" >
        <Cell :number="num+1" ref="cell" />
    </div>
</div>
</template>

<script>
/* eslint-disable */
import Cell from "@/components/Cell";
export default {
    name: 'Row',
    components: {
        Cell
    },
    props: [
        'row_id'
    ],
    data () {
        return {
            numbers: []
        }
    },
    created () {
        for (var i = this.row_id * 10; i < this.row_id*10 + 10; ++i) {
            this.numbers.push(i)
        }
    },
    methods: {
        debug() {
            console.log(this.row_id)
        },
        form_data() {
            var ret = []
            this.$refs.cell.forEach(cell => {
                ret.push({
                    "num":cell.number,
                    "value": cell.value
                })
            });
            return ret;
        }
    }
}
</script>

<style>
div.row {
    flex-direction:row;
    display:flex !important;
    justify-content:center;
}
</style>