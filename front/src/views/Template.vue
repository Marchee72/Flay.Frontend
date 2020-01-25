<template>
  <v-app app>
    <AppLayout />

    <router-view></router-view>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppLayout from "../components/AppLayout.vue";

@Component({ components: { AppLayout } })
export default class Template extends Vue {}
</script>

<style>
a {
  color: inherit;
  text-decoration: inherit;
}
</style>
