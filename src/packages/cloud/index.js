import Cloud from './main'

const VeCloud = {
    install: function(Vue) {
        Vue.component(Cloud.name, Cloud)
    }
}

export default VeCloud