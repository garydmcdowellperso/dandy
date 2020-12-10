import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import Default from "./layouts/Default.vue";
import NoSidebar from "./layouts/NoSidebar.vue";
import None from "./layouts/None.vue";

Vue.component("default-layout", Default);
Vue.component("no-sidebar-layout", NoSidebar);
Vue.component("none-layout", None);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");