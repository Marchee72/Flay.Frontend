import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Template from "../views/Template.vue";
import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { name: "home" } },
  { path: "/home", name: "home", component: Home },
  { path: "/login", name: "login", component: Login },
  { path: "/flay", name: "flay", component: Template,
    children: [
      { path: "/dashboard", name: "dashboard", component: Dashboard },
      { path: "/profile", name: "profile", component: Profile },
    ]
  },
  { path: "/about", name: "about", component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login", "/home", "/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) return next("/login");
  if (!authRequired && loggedIn) {
    localStorage.clear();
    return next("/login");
  }

  next();
});

export default router;
