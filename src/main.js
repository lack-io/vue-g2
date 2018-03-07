// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import G2 from 'vue-g2/src/'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(G2)

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
