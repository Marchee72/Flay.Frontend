import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Template from "../views/Template.vue";
import BuildingList from "../views/building/BuildingList.vue";
import BuildingNew from "../views/building/BuildingNew.vue";
import Profile from "../views/Profile.vue";
import List from "../views/user/List.vue";
import Error404 from "../views/errors/404.vue";

import passThrough from "../components/passThrough.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { name: "home" } },
  { path: "/home", name: "home", component: Home },
  { path: "/login", name: "login", component: Login },
  {
    path: "/flay",
    name: "flay",
    component: Template,
    children: [
      {
        path: "/buildings",
        name: "buildings",
        component: passThrough,
        children: [
          { path: "", redirect: { name: "buildingList" } },
          { path: "list", name: "buildingList", component: BuildingList },
          { path: "new", name: "buildingNew", component: BuildingNew }
        ]
      },
      { path: "/profile", name: "profile", component: Profile },
      {
        path: "/user",
        name: "user",
        component: passThrough,
        children: [
          { path: "", redirect: { name: "userList" } },
          { path: "list", name: "userList", component: List }
        ]
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  //Siempre a lo ultimo
  { path: "*", component: Error404 }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/home", "/", "/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) return next("/login");
  if (!authRequired && loggedIn) {
    localStorage.removeItem("user");
    return next("/login");
  }

  next();
});

export default router;
