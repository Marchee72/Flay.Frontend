<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img></v-img>
        </v-list-item-avatar>

        <v-list-item-title>user name</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";

@Component
export default class UserMenu extends Vue {

  items: {title: string, icon: string}[];
  drawer: boolean;
  mini: boolean;
  
  constructor() {
    super();
    this.items = [
            { title: "Home", icon: "mdi-home-city" },
            { title: "My Account", icon: "mdi-account" },
            { title: "Users", icon: "mdi-account-group-outline" },
          ];
    this.mini = true;
    this.drawer = true;
  }
}
</script>