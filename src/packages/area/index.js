import Area from './main'

const VeArea = {
    install: function(Vue) {
        Vue.component(Area.name, Area)
    }
}

export default VeArea