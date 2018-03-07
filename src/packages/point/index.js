import Point from './main'

const VePoint = {
    install: function(Vue) {
        Vue.component(Point.name, Point)
    }
}

export default VePoint