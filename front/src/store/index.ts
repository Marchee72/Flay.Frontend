import Vue from "vue";
import Vuex from "vuex";
import Masterpage from "./masterpage";
import BuildingStore from "./buildingStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Masterpage,
    BuildingStore
  }
});
