import Core from '../../core'

export default {
    name: 'v-point',
    mixins: [Core],
    mounted() {
        const position = Object.keys(this.data[0])
        this.chart.tooltip({
            showTitle: false,
            crosshairs: {
                type: 'cross'
            },
            itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
            + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
            + '{name}<br/>'
            + '{value}'
            + '</li>'
        });
        this.chart.source(this.data);
        const point = this.chart.point().position(position.slice(position.length - 2))
            .color(position[0])
            .size(4)
            .shape('circle')
            .opacity(0.65)     
        if(Object.keys(this.tooltip).length !== 0) {
            point.tooltip(this.tooltip.field, this.tooltip.callback)
        }   
        this.chart.render();
    }
}