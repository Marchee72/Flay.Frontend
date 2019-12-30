<template>
  <v-app id="inspire">
    <v-content fluid>
       <router-view></router-view>>

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
 
  drawer!: boolean;
  actionItems!: { name: string; url: string; icon: string }[];
  constructor() {
    super();
    this.$vuetify.theme.dark = true;
    this.drawer = false;
    this.load();
  }

  private async load() {
    this.actionItems = [
        { name: "Dashboard", url: "/dashboard", icon: "mdi-view-dashboard" },
        { name: "Edifices", url: "/edifices", icon: "mdi-office-building"}
      ];
  }
}
</script>

<style>
a {
  color: inherit;
  text-decoration: inherit;
}
</style>