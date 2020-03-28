<template>
  <section>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" :cols="2">
          <BuildingCard
            :name="item.nombre"
            :adress="item.direc"
            :img="item.src"
            :id="i"
            :desc="item.color"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import { IForecastService } from "../Interfaces/IForecastService";
import { Inject } from "inversify-props";
import ForecastModel from "../models/ForecastModel";
import BuildingCard from "../components/BuildingCard.vue";

@Component({ components: { BuildingCard } })
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
        direc: "Segurola y Habana"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        nombre: "Edificio 2",
        direc: "Segurola y Habana"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        nombre: "Edificio 2",
        direc: "Segurola y Habana"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        nombre: "Edificio 2",
        direc: "Segurola y Habana"
      }
    ];
    var a = this.showItems()
  }

  private async showItems() {
    // for (var weather of a) {
    //   this.items.push({
    //     color: "red",
    //     src: "",
    //     nombre: weather.date,
    //     direc: weather.summary
    //   });
    //}
  }
}
</script>

<style></style>
