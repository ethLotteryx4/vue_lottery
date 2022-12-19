<template>
    <div class="form">
        <div v-for="row in this.rows" :key="row">
            <Row :row_id="row" ref="row" />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Row from '@/components/Row'
export default {
    name: 'Form',
    components: {
        Row
    },
    data () {
        return {
            rows: []
        }
    },
    created () {
        for (var i = 0; i < 10; ++i) {
            this.rows.push(i)
        }
    },
    methods: {
        form_data() {
            var data = []
            this.$refs.row.forEach(row => {
                var row_data = row.form_data()
                row_data.forEach(cell => {
                    data.push(cell)
                });
            });
            return data;
        }
    }
}
</script>
<sytle>
div.form {
    flex-direction:row;
    display:flex !important;
    justify-content:center;
    border-radius: 2%;
}
</sytle>