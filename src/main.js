import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDuoBYfQC53rIr2v3l8-09Ucr1W0sO5Q-g',
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})
// .$mount('#app')