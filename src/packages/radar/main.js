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
    mounted() {
        let position = Object.keys(this.data[0])
        if (position.length <= 2) {
            this.chart.source(this.data, {
                transformValue: {
                    min: this.min,
                    max: this.max,
                }
            });
            this.chart.coord('polar', {
                radius: 0.8
            });
            this.chart.axis(position[0], {
                line: null,
                tickLine: null,
                grid: {
                    lineStyle: {
                        lineDash: null
                    },
                    hideFirstLine: false
                }
            });
            this.chart.legend(position[0], {
                marker: 'circle',
                offset: 30
            });
            this.chart.line().position(position).color(position[1]).size(2);
            if (this.fillColor) { this.chart.area().position(position).color(position[1]); }
            this.chart.render()
        } else {
            const dv = this.ds.createView().source(this.data);
            dv.transform({
                type: 'fold',
                fields: position.slice(1), // 展开字段集
                key: 'transformKey', // key字段
                value: 'transformValue', // value字段
            });
            this.chart.source(dv, {
                transformValue: {
                    min: this.min,
                    max: this.max,
                }
            });
            this.chart.coord('polar', {
                radius: 0.8
            });
            this.chart.axis(position[0], {
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
            this.chart.line().position(`${position[0]}*transformValue`).color('transformKey').size(2);
            if (this.fillColor) { this.chart.area().position(`${position[0]}*transformValue`).color('transformKey'); }
            this.chart.render();
        }
    }
}