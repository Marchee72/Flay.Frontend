<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Bar/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Bar from '@/components/Bar.vue';
import {Component, Vue} from 'vue-property-decorator';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

@Component({
  components: { Bar },
})
export default class App extends Vue {}
</script>
