import VLine from './packages/line'
import VBar from './packages/bar'
import VPie from './packages/pie'
import VArea from './packages/area'
import VPoint from './packages/point'
import VRadar from './packages/radar'
import VCloud from './packages/cloud'
import VLiqu from './packages/liqu'


const compontents = [
    VLine,
    VBar,
    VPie,
    VArea,
    VPoint,
    VRadar,
    VCloud,
    VLiqu
]

const install = function(Vue) {
    compontents.forEach(component => {
        Vue.component(component.name, component);
    });

};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const vueG2 = {
    version: '1.0',
    install,
    ...compontents,    
}

export default vueG2
