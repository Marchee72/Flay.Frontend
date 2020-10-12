<template>
  <v-app root>
    <AppBar app v-bind:drawer="this.showNavbar" @change="handle($event)" />
    <NavDrawer app v-bind:drawer="this.showNavbar" />
    <v-main>
      <v-container fluid>
        <v-card>
          <router-view></router-view>
        </v-card>
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ this.year }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "../components/main/AppBar.vue";
import NavDrawer from "../components/main/NavDrawer.vue";

@Component({ components: { AppBar, NavDrawer } })
export default class Template extends Vue {
  year = new Date().getFullYear();
  showNavbar!: boolean;

  constructor() {
    super();
    this.showNavbar = false;
  }
  
  handle(show: boolean) {
    this.showNavbar = !this.showNavbar;
  }
}
</script>

<style>
a {
  color: inherit;
  text-decoration: inherit;
}
</style>
