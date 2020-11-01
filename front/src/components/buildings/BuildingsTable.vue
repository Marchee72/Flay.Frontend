<template>
  <v-container>
    <v-card-title>
      <v-card-title>
      <v-icon
        large
        left
      >
        mdi-domain
      </v-icon>
      <span class="title font-weight-light">Edificios</span>
    </v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
    dense
      :headers="this.headers"
      :items="this.buildings"
      :search="this.search"
    >
    <template v-slot:[`item.streetName`]="{ item }"
      >
        {{ showAddress(item) }}
      </template></v-data-table>
  </v-container>
</template>
<script lang="ts">
import { Inject } from "inversify-props";
import { Vue, Component } from "vue-property-decorator";
import { IBuildingService } from "../../interfaces/IBuildingService";
import { Building } from "../../models/Building";

@Component
export default class BuildingsTable extends Vue {
  @Inject("Buildings") private _buildingService: IBuildingService;

  buildings!: Building[];
  search!: string;
  headers = [
    { text: "Nombre", align: "start", value: "buildingName" },
    { text: "Direccion", value: "streetName" },
    { text: "Administrador", value: "administrator.name" }
  ];

  constructor() {
    super();
    this.buildings = [];
    this.search = "";
  }

  async created() {
    this.buildings = await this._buildingService.getAllBuildings();
  }

  showAddress(item: Building): string{
    var direc = item.streetName + " " + item.streetNumber;
    if(item.bis) direc = direc + " bis";
    return direc;
  }
}
</script>