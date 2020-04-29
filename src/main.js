import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';

import { store } from './store';
import { router } from './router';
import App from './App.vue';

// Vue.use(VeeValidate);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});