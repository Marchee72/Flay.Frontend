<template>
  <section>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="i in buildings" :key="i" :cols="2">
          <p v-if="i.administrator">{{ i.administrator.name }}</p>
        </v-col>
      </v-row>
      <!-- <v-dialog v-model="dialog" persistent max-width="400px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on" right bottom fixed>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template> -->
      <newBuildingForm :show="show" />
      <!-- </v-dialog> -->
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IAuthService } from "@/interfaces/IAuthService";
import { IUserService } from "@/interfaces/IUserService";
import { User } from "@/models/User";
import buildingCard from "../../components/buildingCard.vue";
import { IBuildingService } from "@/interfaces/IBuildingService";
import { Building } from "@/models/Building";
import { Inject } from "inversify-props";
import newBuildingForm from "@/components/newBuildingForm.vue";

@Component({ components: { buildingCard, newBuildingForm } })
export default class BuildingList extends Vue {
  @Inject("Buildings") private buildingservice!: IBuildingService;

  buildings!: Building[];
  fab!: boolean;
  show!: boolean;

  constructor() {
    super();
    this.buildings = [];
    this.fab = false;
    this.show = false;
  }
  async created() {
    this.buildings = await this.buildingservice.getAllBuildings();
    console.log(this.buildings);
  }
}
</script>

<style></style>
