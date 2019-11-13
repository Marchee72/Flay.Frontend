<template>
      <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <SideMenuItem v-for="p in this.permissions" v-bind:key="p.name" :icon="p.icon" :name="p.name" :url="p.url"/>
      </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import SideMenuItem from "./SideMenuItem.vue";

@Component({
    components: {SideMenuItem}
})
export default class SideMenu extends Vue {
    permissions!: {icon: string, name: string, url: string}[];

    constructor() {
        super();
        this.permissions = [
            {icon: "mdi-view-dashboard", name: "Dashboard", url: "/dashboard"}
        ];
    }

}
</script>

<style>

</style>