<template>
  <v-container>
    <v-card-title>
      <div>
        <v-icon id="editIcon" large left> mdi-office-building-outline </v-icon>
      </div>
      <span class="title font-weight-light"
        >{{ this.id ? "Editar " : "Nuevo " }} edificio</span
      >
    </v-card-title>
    <v-form>
      <v-text-field
        id="buildingName"
        prefix="Nombre: "
        v-bind:value="building.name"
      ></v-text-field>
      <v-subheader>Informacion basica</v-subheader>
      <v-row>
        <v-col cols="6" align-self="start">
          <v-row>
            <v-col cols="1">
              <v-icon large> mdi-map-marker </v-icon>
            </v-col>
            <v-col cols="6">
              <v-text-field
                outlined
                label="Calle"
                v-bind:value="building.streetName"
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                outlined
                label="Altura"
                v-bind:value="building.streetNumber"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-checkbox label="Bis" v-model="building.bis" outlined>
              </v-checkbox>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" align-self="end">
          <v-row>
            <v-col cols="1">
              <v-icon large> mdi-account </v-icon>
            </v-col>
            <v-col cols="11">
              <AdminSelect ref="adminComponent" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <CountInput label="Torres" :initialValue="1" ref="towersComponent" />
        </v-col>
        <v-col cols="4">
          <CountInput label="Pisos" :initialValue="1" ref="floorsComponent" />
        </v-col>
        <v-col cols="4">
          <BuildingLayout/>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import Building from "../../models/Building";
import BuildingStore from "../../store/modules/buildingStore";
import AdminSelect from "../../components/common/AdminSelect.vue";
import CountInput from "../../components/common/CountInput.vue";
import BuildingLayout from "../../components/buildings/BuildingLayout.vue";
import { IBuildingService } from "../../interfaces/services/IBuildingService";
import { Inject } from "inversify-props";
import MasterpageStore from "../../store/modules/masterpageStore";

const buildingStore = getModule(BuildingStore);
const masterpage = getModule(MasterpageStore);

@Component({ components: { AdminSelect, CountInput, BuildingLayout } })
export default class BuildingDetails extends Vue {
  @Prop() id!: string;
  @Inject("Buildings") buildingService!: IBuildingService;
  building!: Building;

  /**
   *
   */
  constructor() {
    super();
    console.log(this.building);
    console.log(this.id);
    masterpage.setLoading(false);
  }

  async created() {
    this.building = this.id
      ? await this.buildingService.getBuilding(this.id)
      : buildingStore.building;
  }
}
</script>
<style>
#buildingName {
  font-size: 40px;
  align-self: center;
  max-height: none;
}

#editIcon {
  vertical-align: middle;
}
</style>