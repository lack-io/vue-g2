import VLine from './src/packages/line/main'
import VBar from './src/packages/bar/main'
import VPie from './src/packages/pie/main'
import VArea from './src/packages/area/main'
import VPoint from './src/packages/point/main'
import VRadar from './src/packages/radar/main'
import VCloud from './src/packages/cloud/main'
import VLiqu from './src/packages/liqu/liqu'


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
    VLine,
    VBar,
    VPie,
    VArea,
    VPoint,
    VRadar,
    VCloud,
    VLiqu,    
}

export default vueG2
