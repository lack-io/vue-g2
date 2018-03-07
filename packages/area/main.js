import Core from '../../core'

export default {
    name: 'v-area',
    mixins: [Core],
    mounted() {
        let position = Object.keys(this.data[0])
        if (position.length <= 2) {
            this.chart.source(this.data)
            this.chart.area().position(position)
            this.chart.line().position(position).size(1);
            this.chart.render()
        } else {
            const dv = this.ds.createView().source(this.data);
            dv.transform({
                type: 'fold',
                fields: position.slice(1), // 展开字段集
                key: 'transformKey', // key字段
                value: 'transformValue', // value字段
            });
            this.chart.source(dv)
            this.chart.area().position(`${position[0]}*transformValue`).color('transformKey')
            this.chart.line().position(`${position[0]}*transformValue`).color('transformKey').size(1);
            this.chart.render()
        }
    }
}