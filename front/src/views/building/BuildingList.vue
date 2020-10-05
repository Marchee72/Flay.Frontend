<template>
  <section>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="i in buildings" :key="i" :cols="2">
          <p v-if="i.administrator">{{ i.administrator.name }}</p>
        </v-col>
      </v-row>
      <newFormTest :show="show" />
      <!-- </v-dialog> -->
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IAuthService } from "../../interfaces/IAuthService";
import { IUserService } from "../../interfaces/IUserService";
import { User } from "../../models/User";
import BuildingCard from "../components/BuildingCard.vue";
import { IBuildingService } from "../../interfaces/IBuildingService";
import { Building } from "../../models/Building";
import { Inject } from "inversify-props";
import NewBuildingForm from "../components/newBuildingForm.vue";
import NewFormTest from "../components/newFormTest.vue";

@Component({ components: { BuildingCard, NewBuildingForm, NewFormTest } })
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

  sayHello(): string {
    return "Hello!";
  }
}
</script>

<style></style>
