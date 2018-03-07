import Pie from './main'

const VePie = {
    install: function(Vue) {
        Vue.component(Pie.name, Pie)
    }
}

export default VePie