import Core from '../../core'

export default {
    name: 'v-cloud',
    mixins: [Core],
    mounted() {
        // 给point注册一个词云的shape
        G2.Shape.registerShape('point', 'cloud', {
            draw(cfg, container) {
                return container.addShape('text', {
                    attrs: {
                        fillOpacity: cfg.opacity,
                        fontSize: cfg.origin._origin.size,
                        rotate: cfg.origin._origin.rotate,
                        text: cfg.origin._origin.text,
                        textAlign: 'center',
                        fontFamily: cfg.origin._origin.font,
                        fill: cfg.color,
                        textBaseline: 'Alphabetic',
                        ...cfg.style,
                        x: cfg.x,
                        y: cfg.y,
                    },
                });
            }
        });;
        let position = Object.keys(this.data[0])
        const dv = this.ds.createView().source(this.data);
        const range = dv.range(position[1]);
        const min = range[0];
        const max = range[1];
        dv.transform({
            type: 'tag-cloud',
            fields: position.slice(0, 2),
            size: [this.width, this.height],
            font: 'Verdana',
            padding: 0,
            timeInterval: 5000, // max execute time
            rotate() {
                let random = ~~(Math.random() * 4) % 4;
                if (random == 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            fontSize(d) {
                if (d[position[1]]) {
                    return ((d[position[1]] - min) / (max - min)) * (80 - 24) + 14;
                }
                return 0;
            }
        });
        this.chart.source(dv, {
            x: { nice: false },
            y: { nice: false }
        });
        this.chart.legend(false);
        this.chart.axis(false);
        this.chart.tooltip({
            showTitle: false
        });
        this.chart.coord().reflect();
        this.chart.point()
            .position('x*y')
            .color(position[position.length - 1])
            .shape('cloud')
            .tooltip(`${position[position.length - 2]}*${position[position.length - 1]}`);
        this.chart.render();
    }
}