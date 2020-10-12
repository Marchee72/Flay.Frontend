<template>
  <v-app app root>
    <AppLayout />
      <v-container fluid>
        <v-card>
          <router-view></router-view>
        </v-card>
      </v-container>
    <v-footer app>
      <span>&copy; {{ this.year }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppLayout from "../components/AppLayout.vue";

@Component({ components: { AppLayout } })
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
