<template>
    <router-link to="this.url">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{this.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
                {{this.title}}
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </router-link>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";

@Component
export default class SideMenuItem extends Vue {
    @Prop() public icon: string;
    @Prop() public name: string;
    @Prop() public url: string;

    constructor(icon: string, name: string, url: string) {
        super();
        this.icon = icon;
        this.name = name;
        this.url = url;
    }
}
</script>

<style>
a {
  color: inherit;
  text-decoration: inherit;
}
</style>