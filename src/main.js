import Vue from 'vue'
import App from './App.vue'
import routerConfig from './router'


new Vue({
  el: '#app',
  router: routerConfig,
  render: h => h(App)
})
