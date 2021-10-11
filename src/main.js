import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import titleMixin from '@/mixins/title'


import Axios from "axios"

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.mixin(titleMixin)
Vue.use(Axios)

new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')