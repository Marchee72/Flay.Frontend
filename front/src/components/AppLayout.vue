<template>
  <div>
    <v-app-bar app clipped-left color="red">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title thin display-3>Flay</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn @click="logout">
        Logout
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item
          link
          v-for="item in this.actionItems"
          v-bind:key="item.name"
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-switch
            v-model="$vuetify.theme.dark"
            hide-details
            inset
            label="Dark theme"
          ></v-switch>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import router from "../router";
import { Access } from "@/models/Access";
import { IUserService } from "@/interfaces/IUserService";
import { Inject } from "inversify-props";

@Component
export default class AppLayout extends Vue {
  @Inject("Users") private userService!: IUserService;

  drawer!: boolean;
  actionItems!: Access[];
  constructor() {
    super();
    this.applyTheme();
    this.drawer = false;
  }

  private async created() {
    this.actionItems = await this.userService.getUserPermissions();
  }

  logout() {
    localStorage.clear();
    router.push({ name: "home" });
  }

  applyTheme() {
    var darkTheme = JSON.parse(localStorage.getItem("darkTheme"));
    this.$vuetify.theme.dark = darkTheme;
  }

  @Watch("$vuetify.theme.dark")
  protected saveTheme() {
    localStorage.setItem("darkTheme", this.$vuetify.theme.dark);
  }
}
</script>
