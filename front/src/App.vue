<template>
  <v-app id="inspire">
    <v-content fluid>
       <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import "reflect-metadata";
import { Component, Vue, Inject } from "vue-property-decorator";
import Vuetify from "vuetify";
import Home from "./views/Home.vue";

Vue.use(Vuetify);

@Component
export default class App extends Vue {
 
  constructor() {
    super();
    this.$vuetify.theme.dark = true;
  }
}
</script>

<style>
a {
  color: inherit;
  text-decoration: inherit;
}
</style>