import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Template from "../views/Template.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/login", name: "login", component: Login },
  { path: "/home", name: "home", component: Home },
  { path: "/", redirect: {name: "home"} },
  { path: "/flay", name: "flay",component: Template,
    children:[
      {path: "/dashboard", name: "dashboard", component: Dashboard},
    ]
  },

  {
    path: "/about", name: "about", component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
