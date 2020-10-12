<template>
  <div>
    <v-app-bar app clipped-left color="red">
      <v-app-bar-nav-icon @click="this.showNavbar"/>
      <v-toolbar-title dark thin display-3>Flay</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn @click="logout">
        Logout
      </v-btn>
    </v-app-bar>
    <template>
      <v-progress-linear indeterminate color="blue"></v-progress-linear>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import router from "../../router";

@Component
export default class AppBar extends Vue {
	change!: boolean;
	thi

  logout() {
    localStorage.removeItem("user");
    router.push({ name: "home" });
	}
	
	@Emit("change")
  showNavbar() {
    this.change = true;
  }
}
</script>