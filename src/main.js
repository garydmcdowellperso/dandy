import Vue from "vue";
import axios from 'axios';

import App from "./App.vue";
import router from "./router";
import store from './store';

import Default from "./layouts/Default.vue";
import NoSidebar from "./layouts/NoSidebar.vue";
import None from "./layouts/None.vue";

Vue.component("default-layout", Default);
Vue.component("no-sidebar-layout", NoSidebar);
Vue.component("none-layout", None);

Vue.config.productionTip = false;

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://simpatico.cloud/api';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount("#app");