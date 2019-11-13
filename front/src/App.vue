<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="red"
    > 
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title thin display-3>Flay</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import SideMenu from "./components/SideMenu.vue";
import Vuetify from "Vuetify";

Vue.use(Vuetify);

@Component({
  components: {
    SideMenu,
  }
})
export default class App extends Vue {
  drawer!: boolean;

  constructor() {
    super();
    this.$vuetify.theme.dark = true
    this.drawer = false;
  }
}
</script>