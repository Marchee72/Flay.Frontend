<template>
  <v-app id="inspire">

    <v-app-bar app clipped-left color="red">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title thin display-3>Flay</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
          <v-list-item link v-for="item in this.actionItems" v-bind:key="item.name" :to=item.url>
              <v-list-item-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{item.name}}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content fluid>
      <router-view/>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import Vuetify from "vuetify";

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