<template>
  <div>
    <v-col v-for="(item, i) in items" :key="i" cols="12">
      <v-card :color="item.color" dark>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="item.nombre"></v-card-title>

            <v-card-subtitle v-text="item.direc"></v-card-subtitle>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="item.src"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";

@Component
export default class Dashboard extends Vue {
  items!: { color: string; src: string; nombre: string; direc: string }[];
  constructor() {
    super();
    this.items = [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        nombre: "Edificio 1",
        direc: "Sarmiento 1015"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        nombre: "Edificio 2",
        direc: "Segurola y Havanna"
      }
    ];
  }
}
</script>

<style></style>
