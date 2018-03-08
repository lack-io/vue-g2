import Core from '../../core'

export default {
    name: 'v-radar',
    mixins: [Core],
    props: {
        min: { type: Number, default: 0, },
        max: { type: Number, default: 70 },
        fillColor: { type: Boolean, default: true },
        padding: { type: Array, default() { return [20, 20, 65, 20] } }
    },
    watch: {
        data: function () {
            if (this.flag && this.data.length !== 0 && this.position.length <= 2) {
                this.chart.changeData(this.data)
            } else if (this.flag && this.data.length !== 0) {
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
                    this.chart.source(this.data, {
                        transformValue: {
                            min: this.min,
                            max: this.max,
                        }
                    });
                    this.chart.coord('polar', {
                        radius: 0.8
                    });
                    this.chart.axis(this.position[0], {
                        line: null,
                        tickLine: null,
                        grid: {
                            lineStyle: {
                                lineDash: null
                            },
                            hideFirstLine: false
                        }
                    });
                    this.chart.legend(this.position[0], {
                        marker: 'circle',
                        offset: 30
                    });
                    this.chart.line().position(this.position).color(this.position[1]).size(2);
                    if (this.fillColor) { this.chart.area().position(this.position).color(this.position[1]); }
                    this.chart.render()
                } else {
                    this.dv = this.ds.createView().source(this.data);
                    this.dv.transform({
                        type: 'fold',
                        fields: this.position.slice(1), // 展开字段集
                        key: 'transformKey', // key字段
                        value: 'transformValue', // value字段
                    });
                    this.chart.source(this.dv, {
                        transformValue: {
                            min: this.min,
                            max: this.max,
                        }
                    });
                    this.chart.coord('polar', {
                        radius: 0.8
                    });
                    this.chart.axis(this.position[0], {
                        line: null,
                        tickLine: null,
                        grid: {
                            lineStyle: {
                                lineDash: null
                            },
                            hideFirstLine: false
                        }
                    });
                    this.chart.axis('transformValue', {
                        line: null,
                        tickLine: null,
                        grid: {
                            type: 'polygon',
                            lineStyle: {
                                lineDash: null
                            },
                        },
                    });
                    this.chart.legend('transformKey', {
                        marker: 'circle',
                        offset: 30
                    });
                    this.chart.line().position(`${this.position[0]}*transformValue`).color('transformKey').size(2);
                    if (this.fillColor) { this.chart.area().position(`${this.position[0]}*transformValue`).color('transformKey'); }
                    this.chart.render();
                }
            }
        }
    },
    mounted() {
        this.init()
    }
}