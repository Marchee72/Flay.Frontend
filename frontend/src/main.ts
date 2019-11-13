import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "@/plugins/vuetify";
import router from "./routes";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount("#app");

