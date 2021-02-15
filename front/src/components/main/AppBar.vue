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
    <template v-if="masterpageStore.loading">
      <v-progress-linear indeterminate color="blue"></v-progress-linear>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Watch } from "vue-property-decorator";
import router from "../../router";
import { getModule } from "vuex-module-decorators";
import MasterpageStore from "../../store/modules/masterpageStore";

@Component
export default class AppBar extends Vue {
  masterpageStore = getModule(MasterpageStore);
	change!: boolean;	
	loading!: boolean;
	
	constructor(){
    super();
    //this.loading = masterpageStore.loading;
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