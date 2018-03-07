import Radar from './main'

const VeRadar = {
    install: function(Vue) {
        Vue.component(Radar.name, Radar)
    }
}

export default VeRadar
