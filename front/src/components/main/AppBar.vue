<template>
  <div>
    <v-app-bar app clipped-left color="red">
      <v-app-bar-nav-icon @click="this.showNavbar" />
      <v-toolbar-title dark thin display-3>Flay</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn @click="logout">
        Logout
      </v-btn>
    </v-app-bar>
    <template v-if="loading">
      <v-progress-linear indeterminate color="blue"></v-progress-linear>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Watch } from "vue-property-decorator";
import router from "../../router";
import { namespace } from "vuex-class";
const masterpage = namespace("masterpage");

@Component
export default class AppBar extends Vue {
	change!: boolean;
	
	@masterpage.Getter
	loading!: boolean;
	
	constructor(){
		super();
		this.loading = false;
	}

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