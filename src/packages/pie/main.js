import Core from '../../core'

export default {
    name: 'v-pie',
    mixins: [Core],
    props: {
        radius: { type: Number, default: 0.8 },
        innerRadius: { type: Number, default: 0 },
        content: { type: Object, default() { return {} } }
    },
    watch: {
        content: function () {
            let element = document.getElementsByClassName("g2-pie-guide")[0]
            element.innerHTML = `<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;" class="g2-pie-guide">
                        ${this.content.title}<br><span style="color:#8c8c8c;font-size:20px">
                        ${this.content.content}</span>
                        ${this.content.extend}</div>`
        }
    },
    mounted() {
        let position = Object.keys(this.data[0])
        const dv = this.ds.createView().source(this.data);
        dv.transform();
        this.chart.source(dv)
        this.chart.coord('theta', {
            radius: this.radius,
            innerRadius: this.innerRadius
        });
        this.chart.tooltip({
            showTitle: false,
            itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
        });
        if (Object.keys(this.content).length !== 0) {
            this.chart.guide().html({
                position: ['50%', '50%'],
                html: `<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;" class="g2-pie-guide">
                        ${this.content.title}<br><span style="color:#8c8c8c;font-size:20px">
                        ${this.content.content}</span>
                        ${this.content.extend}</div>`,
                alignX: 'middle',
                alignY: 'middle'
            });
        }
        const intervalStack = this.chart.intervalStack()
            .position(position[1])
            .color(position[0])
        if (Object.keys(this.label).length !== 0) {
            intervalStack.label(this.label.field, this.label.option)
        }
        this.chart.render()
    }
}