<template>
  <v-app app root>
    <appLayout />

    <router-view></router-view>

    <v-footer app>
      <span>&copy; {{ this.year }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import appLayout from "../components/appLayout.vue";

@Component({ components: { appLayout } })
export default class Template extends Vue {
  year = new Date().getFullYear();
}
</script>

<style>
a {
  color: inherit;
  text-decoration: inherit;
}
</style>
