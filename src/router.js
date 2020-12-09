import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const base =
  process.env.NODE_ENV === "production"
    ? "/Layout-system-with-vue-and-vue-router/"
    : "/";

export default new Router({
  mode: "history",
  base,
  routes: [
    {
        path: "/",
        name: "home",
        component: require("@/pages/Home.vue").default // load sync home
    },
    {
        path: "/enter",
        name: "home",
        component: require("@/pages/Home.vue").default // load sync home
    },
    {
        path: "/gates-of-hell",
        name: "home",
        component: require("@/pages/Home.vue").default // load sync home
    },
    {
        path: "/setup",
        name: "setup",
        meta: { layout: "no-sidebar" },
        component: require("@/pages/Setup.vue").default
    },
    {
        path: "*",
        name: "404*",
        component: require("@/pages/404.vue").default
    },
    ]
});