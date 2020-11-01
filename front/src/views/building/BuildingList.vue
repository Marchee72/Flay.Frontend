<template>
  <v-container>
    <BuildingsTable/>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BuildingCard from "../../components/BuildingCard.vue";
import BuildingsTable from "../../components/buildings/BuildingsTable.vue";
import { IBuildingService } from "../../interfaces/IBuildingService";
import { Building } from "../../models/Building";
import NewBuildingForm from "../../components/NewBuildingForm.vue";

@Component({ components: { BuildingCard, NewBuildingForm, BuildingsTable } })
export default class BuildingList extends Vue {
  buildings!: Building[];
  fab!: boolean;
  show!: boolean;

  constructor() {
    super();
    this.buildings = [];
    this.fab = false;
    this.show = false;
  }

  sayHello(): string {
    return "Hello!";
  }
}
</script>

<style></style>
