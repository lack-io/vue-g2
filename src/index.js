import VeLine from '../packages/line/index.js'
import VeBar from '../packages/bar/index.js'
import VePie from '../packages/pie/index.js'
import VeArea from '../packages/area/index.js'
import VePoint from '../packages/point/index.js'
import VeRadar from '../packages/radar/index.js'
import VeCloud from '../packages/cloud/index.js'


const compontents = [
    VeLine,
    VeBar,
    VePie,
    VeArea,
    VePoint,
    VeRadar,
    VeCloud
]

const install = function (Vue, _) {
    compontents.forEach(compontent => {
        Vue.compontent(compontent.name, compontent)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(paykeyboard);
}

module.exports =  {
    version: '1.0',
    VeLine,
    VeBar,
    VePie,
    VeArea,
    VePoint,
    VeRadar,
    VeCloud,
}

module.exports.default = module.exports;