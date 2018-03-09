import Core from '../../core'

export default {
    name: 'v-bar',
    mixins: [Core],
    watch: {
        data: function () {
            if (this.flag && this.data.length !== 0 && this.position.length <= 2) {
                this.chart.changeData(this.data)
            } else if (this.flag) {
                this.dv.source(this.data)
            } else {
                this.init()
            }
        }
    },
    methods: {
        init() {
            if (this.data.length !== 0) {
                this.flag = true
                if (this.position.length <= 2) {
                    this.chart.source(this.data)
                    this.chart.interval().position(this.position)
                    this.chart.render()
                } else {
                    this.dv = this.ds.createView().source(this.data);
                    this.dv.transform({
                        type: 'fold',
                        fields: this.position.slice(1), // 展开字段集
                        key: 'transformKey', // key字段
                        value: 'transformValue', // value字段
                    });
                    this.chart.source(this.dv)
                    this.chart.interval().position("transformKey*transformValue").color(this.position[0]).adjust([{
                        type: 'dodge',
                        marginRatio: 1 / 32
                    }]);
                    this.chart.render()
                }
            }
        }
    },
    mounted() {
        this.init()
    }
}