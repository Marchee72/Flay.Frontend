<template>
  <v-container>
    <BuildingsTable />
    <BuildingForm />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BuildingsTable from "../../components/buildings/BuildingsTable.vue";
import { IBuildingService } from "../../interfaces/IBuildingService";
import { Building } from "../../models/Building";
import BuildingForm from "../../components/buildings/BuildingForm.vue";

@Component({ components: { BuildingForm, BuildingsTable } })
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
