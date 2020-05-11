<template>
  <section>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(building, i) in this.buildings" :key="i" :cols="2">
          <buildingCard
            :buildingname="building.buildingname"
            :streetname="building.streetname"
            :streetnumber="building.streetnumber"
            :id="i"
            :floors="building.floors"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IAuthService } from "@/interfaces/IAuthService";
import { IUserService } from "@/interfaces/IUserService";
import buildingCard from "../components/buildingCard.vue";
import { IBuildingService } from "@/interfaces/IBuildingService";
import { Building } from "@/models/Building";
import { Inject } from "inversify-props";


@Component({ components: { buildingCard } })
export default class Dashboard extends Vue {  

  @Inject("Buildings") private buildingservice!: IBuildingService;

  buildings!: Building[];
  constructor() {
    super();
    this.buildings = [];
  }
  	async created() {
		this.buildings = await this.buildingservice.getAllBuildings();
		console.log(this.buildings);
  }

//  items!: { color: string; src: string; buildingname: string; streetname: string }[];
//   constructor() {
//     super();
//    this.items = [
//       {
//         color: "#1F7087",
//         src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
//         buildingname: "Edificio 1",
//         streetname: "Sarmiento 1015"
//       },
//       {
//         color: "#952175",
//         src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
//         nombre: "Edificio 2",
//         direc: "Segurola y Habana"
//       },
//       {
//         color: "#952175",
//         src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
//         nombre: "Edificio 2",
//         direc: "Segurola y Habana"
//       },
//       {
//         color: "#952175",
//         src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
//         nombre: "Edificio 2",
//         direc: "Segurola y Habana"
//       },
//       {
//         color: "#952175",
//         src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
//         nombre: "Edificio 2",
//         direc: "Segurola y Habana"
//       }
//     ];
//   }
}
</script>

<style></style>
