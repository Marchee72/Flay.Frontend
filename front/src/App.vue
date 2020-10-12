<template>
  <v-app id="app">
    <v-content>
      <v-snackbar v-model="error" color="error" :top="top" :timeout="timeout">
        <v-row align="center">
          <v-col class="grow">
            {{ this.errorMessage }}
          </v-col>
        </v-row>
      </v-snackbar>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import "reflect-metadata";
import { Component, Vue, Inject } from "vue-property-decorator";
import Vuetify from "vuetify";

Vue.use(Vuetify);

@Component
export default class App extends Vue {
  error!: boolean;
  errorMessage!: string;
  timeout!: number;
  top!: boolean;
  constructor() {
    super();
    this.timeout = 6000;
    this.errorMessage = "";
    this.$vuetify.theme.dark = true;
    this.error = false;
    this.top = true;
  }
  errorCaptured(err: string, vm: string, info: string) {
    this.errorMessage = "Ups! Algo salio mal: " + err;
    this.error = true;
  }
}
</script>

<style>
a {
  color: inherit;
  text-decoration: inherit;
}
</style>
