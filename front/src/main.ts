import "reflect-metadata"
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import {containerBuilder} from "./app.container";

Vue.config.productionTip = false;
containerBuilder();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
