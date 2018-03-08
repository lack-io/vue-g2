<template>
    <div ref="canvas" :style="style">
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-liquidfill/src/liquidFill.js'
// const liquidFill = require('echarts-liquidfill')
export default {
    name: 'v-liqu',
    data: function() {
        return {
            style: {
                width: `${this.width}px`,
                height: `${this.height}px`
            }
        }
    },
    props: {
        width: { type: Number, default: 200 },
        height: { type: Number, default: 200 },
        data: { type: Array, default() { return [] } },
        name: { type: String, default: "" },
        tooltip: { type: Object, default() { return {show: false} } },
        label: { type: Object, default() { return {} } },
        background: { type: Object, default() { return {} } },
        shape: { type: String, default: 'circle' }
    },
    created() {
        this.chart = null
        this.option = null
    },
    watch: {
        data: function() {
            this.option.data = this.data
            this.chart.setOption({ series: [this.option] })
        }
    },
    methods: {
        init() {
            this.chart = echarts.init(this.$refs.canvas);
            this.option = {
                data: this.data,
                type: 'liquidFill',
                color: ['#294D99', '#156ACF', '#1598ED', '#45BDFF'],
                center: ['50%', '50%'],
                radius: '95%',
                amplitude: '8%',
                waveLength: '80%',
                phase: 'auto',
                period: 'auto',
                direction: 'right',
                shape: this.shape,
                // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                waveAnimation: true,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear',
                animationDuration: 2000,
                animationDurationUpdate: 1000,
                outline: {
                    show: true,
                    borderDistance: 8,
                    itemStyle: {
                        color: 'none',
                        borderColor: '#294D99',
                        borderWidth: 8,
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.25)'
                    }
                },

                backgroundStyle: this.background,
                itemStyle: {
                    opacity: 0.95,
                    shadowBlur: 50,
                    shadowColor: 'rgba(0, 0, 0, 0.4)'
                },

                label: this.label,
                emphasis: {
                    itemStyle: {
                        opacity: 0.8
                    }
                }
            }
            this.chart.setOption({
                name: this.name,
                series: [this.option], 
                tooltip: this.tooltip,
            });
        }
    },
    mounted() {
        this.init()
    },
    beforeDestroy() {
        this.chart.dispose()
    }
}
</script>

<style scoped>

</style>