import "reflect-metadata"
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { containerBuilder } from "./app.container";

Vue.config.productionTip = false;
Vue.config.errorHandler = function(err, vm, info) {
  console.log(`Error: ${err.toString()}\nInfo: ${info}`);
};
containerBuilder();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
