import G2 from '@antv/g2'
import DataSet from '@antv/data-set'

export default {
    render(h) {
        return h('div', {
            class: "g2-canvas",
        }, [
            h('div', {
                class: 'canvas',
                ref: 'canvas'
            }),
            h('span', {
                class: "loading",
                ref: 'loading'
            }),
            h('div', {
                class: "slider",
                ref: 'slider',
            })
        ])
    },
    data() {
        return {
            flag: false,
        }
    },
    props: {
        loading: { type: Boolean, default: false },
        width: { type: Number, default: 500 },
        height: { type: Number, default: 400 },
        forceFit: { type: Boolean, default: true },
        background: { type: Object, default() { return {} } },
        plotBackground: { type: Object, default() { return {} } },
        animate: { type: Boolean, default: true },
        padding: { type: Array, default() { return [20, 20, 95, 80] } },
        data: { type: Array, default() { return [] } },
        position: { type: Array, default() { return [] } },
        label: { type: Object, default() { return {} } },
        legend: { type: Object, default() { return {} } },
        tooltip: { type: Object, default() { return {} } },
        // transform: { type: Object, default() { return {} } },
        // source: { type: Object, default() { return {} } },
        // scale: { type: Object, default() { return {} } },
        // legend: { type: Object, default() { return {} } },
    },

    created() {
        this.chart = null
        this.ds = null
    },

    mounted() {
        this.chart = new G2.Chart({
            container: this.$refs.canvas,
            width: this.width,
            height: this.height,
            forceFit: this.forceFit,
            background: this.background,
            plotBackground: this.plotBackground,
            padding: this.padding,
            animate: this.animate,
        })
        if (Object.keys(this.legend).length !== 0) {
            this.chart.legend(this.legend)
        }
        this.ds = new DataSet();
    },

    beforeDestroy() {
        this.chart.destroy()
    }
}