import Vue from 'vue';
import App from './App';
import '@dm/reset.css';
import routerConfig from './router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routerConfig,
  render: h => h(App),
});
