import Bar from './main'

const VeBar = {
    install: function(Vue) {
        Vue.component(Bar.name, Bar)
    }
}

export default VeBar