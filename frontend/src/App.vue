<template>
  <div>
    <Bar/>
    <UserMenu/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Vuetify from "vuetify";
import UserMenu from "./components/UserMenu.vue";
import Bar from "./components/Bar.vue";

//Vue.use(Vuetify);

@Component({
  components: {UserMenu, Bar},
})
export default class App extends Vue {}
</script>
