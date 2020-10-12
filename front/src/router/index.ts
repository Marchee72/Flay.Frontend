import Vue from "vue";
import VueRouter from "vue-router";
import Template from "../views/Template.vue";
import PassThrough from "../components/PassThrough.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { name: "home" } },
  { path: "/home", name: "home", component: () => import("../views/Home.vue") },
  { path: "/login", name: "login", component: () => import("../views/Login.vue") },
  {
    path: "/flay",
    name: "flay",
    component: Template,
    children: [
      {
        path: "/buildings",
        name: "buildings",
        component: PassThrough,
        children: [
          { path: "", redirect: { name: "buildingList" } },
          { path: "list", name: "buildingList", component: () => import("../views/building/BuildingList.vue") },
          { path: "new", name: "buildingNew", component: () => import("../views/building/BuildingNew.vue") }
        ]
      },
      { path: "/profile", name: "profile", component: () => import("../views/Profile.vue") },
      {
        path: "/user",
        name: "user",
        component: PassThrough,
        children: [
          { path: "", redirect: { name: "userList" } },
          { path: "list", name: "userList", component: () => import("../views/user/List.vue") }
        ]
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/About.vue")
  },
  //Siempre a lo ultimo
  { path: "*", component:() => import("../views/errors/404.vue") }
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
