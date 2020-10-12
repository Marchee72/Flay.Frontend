<template>
  <div>
    <v-navigation-drawer v-model="show" app clipped>
      <v-list dense>
        <v-list-item two-line to="/profile">
          <v-list-item-avatar color="orange">
            <v-img v-if="image" :src="image" />
            <span v-else class="white--text headline">{{ this.avatar }}</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              >{{ user.name }} {{ user.lastname }}</v-list-item-title
            >
            <v-list-item-subtitle>{{ user.role.name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

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
        <v-divider></v-divider>
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
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import router from "../../router";
import { Access } from "../../models/Access";
import { User } from "../../models/User";
import { IUserService } from "../../interfaces/IUserService";
import { Inject } from "inversify-props";

@Component
export default class AppLayout extends Vue {
  @Inject("Users") private userService!: IUserService;
  @Prop() drawer!: boolean;
  show!: boolean;
  actionItems!: Access[];
  user!: User;
  image!: string;
  avatar!: string;

  constructor() {
    super();
    this.applyTheme();
    this.show = false;
    this.image = "";
    this.actionItems = [];
    this.user = JSON.parse(localStorage.getItem("user"));
    this.avatar = (this.user.name[0] + this.user.lastname[0]).toUpperCase();
  }

  private async created() {
    this.actionItems = await this.userService.getUserPermissions();
    this.image = await this.userService.getProfilePicture();
  }

  logout() {
    localStorage.removeItem("user");
    router.push({ name: "home" });
  }

  applyTheme() {
    var darkTheme: boolean = JSON.parse(localStorage.getItem("darkTheme"));
    this.$vuetify.theme.dark = darkTheme;
  }

  @Watch("$vuetify.theme.dark")
  protected saveTheme() {
    localStorage.setItem("darkTheme", this.$vuetify.theme.dark);
  }

  @Watch("drawer")
  updateDrawer() {
    this.show = this.drawer;
  }
}
</script>
