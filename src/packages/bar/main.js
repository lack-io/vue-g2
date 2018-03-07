import Core from '../../core'

export default {
    name: 'v-bar',
    mixins: [Core],
    mounted() {
        let position = Object.keys(this.data[0])
        if (position.length <= 2) {
            this.chart.source(this.data)
            this.chart.interval().position(position).color(position[0])
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
            this.chart.interval().position("transformKey*transformValue").color(position[0]).adjust([{
                type: 'dodge',
                marginRatio: 1 / 32
            }]);
            this.chart.render()
        }
    }
}