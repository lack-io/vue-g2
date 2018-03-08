import Point from './main'


Point.install = function (Vue) {
    Vue.component(Point.name, Point)
}


export default Point