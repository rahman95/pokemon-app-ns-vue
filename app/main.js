import Vue from 'nativescript-vue'
import Home from "./components/Home";
import VueDevtools from 'nativescript-vue-devtools'

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

Vue.config.silent = (TNS_ENV === 'production')
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

new Vue({
  render: h => h('frame', [
    h(Home)
  ])
}).$start()
