<template>
  <v-container>
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" fab right bottom fixed>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline red light">
          <span class="headline">Informacion basica</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" align="center">
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Edificio"
                  dense
                  outlined
                  v-model="name"
                  :rules="[
                    (v) => !!v || 'El nombre del edificio es requerido.',
                  ]"
                  required
                ></v-text-field>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      dense
                      v-model="street"
                      label="Calle"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      v-model="streetNumber"
                      label="Altura"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-checkbox label="Bis" v-model="bis" outlined>
                    </v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <CountInput
                      label="Torres"
                      :initialValue="1"
                      ref="towersComponent"
                    />
                  </v-col>
                  <v-col cols="4">
                    <CountInput
                      label="Pisos"
                      :initialValue="1"
                      ref="floorsComponent"
                    />
                  </v-col>
                  <v-col cols="4">
                    <CountInput
                      label="Deptos por piso"
                      :initialValue="1"
                      ref="apartmentComponent"
                    />
                  </v-col>
                </v-row>
                <AdminSelect ref="adminComponent" />
              </v-col>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>

          <v-btn color="red darken-1" text @click="partialSave">
            Continuar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script lang="ts">
import { Vue, Component, Ref, Watch } from "vue-property-decorator";
import CountInput from "../common/CountInput.vue";
import router from "../../router";
import AdminSelect from "../common/AdminSelect.vue";
import { Inject } from "inversify-props";
import { IBuildingService } from "../../interfaces/services/IBuildingService";
import Building from "../../models/Building";
import ICountInput from "../../interfaces/components/ICountInput";
import IAdminSelect from "../../interfaces/components/IAdminSelect";
import UserLw from "../../models/lw/UserLw";
import BuildingStore from "../../store/modules/buildingStore";
import MasterpageStore from "../../store/modules/masterpageStore";
import { getModule } from "vuex-module-decorators";

const buildingStore = getModule(BuildingStore);
const masterpageStore = getModule(MasterpageStore);

@Component({ components: { CountInput, AdminSelect } })
export default class BuildingForm extends Vue {
  @Inject("Buildings") buildingService!: IBuildingService;
  @Ref() readonly floorsComponent!: ICountInput;
  @Ref() readonly towersComponent!: ICountInput;
  @Ref() readonly apartmentComponent!: ICountInput;
  @Ref() readonly adminComponent!: IAdminSelect;

  dialog!: boolean;
  valid!: boolean;

  name!: string;
  street!: string;
  streetNumber!: number;
  bis!: boolean;
  apartmentsCount!: number;
  towersCount!: number;
  floorCount!: number;
  admin!: UserLw;

  // @buildingStore.Action
  // updateBuilding!: (building: Building) => void;

  // @buildingStore.State
  // building!: Building;
  /**
   *
   */
  constructor() {
    super();
    this.name = this.street = "";
    this.dialog = false;
    this.admin = null;
    this.streetNumber = 0;
    this.bis = false;
    this.apartmentsCount = this.towersCount = this.floorCount = 1;
    this.valid = true;
  }

  partialSave() {
    this.floorCount = this.floorsComponent.count;
    this.apartmentsCount = this.apartmentComponent.count;
    this.towersCount = this.towersComponent.count;
    this.admin = this.adminComponent.selectedAdmin;
    var building = new Building().set(
      this.name,
      this.street,
      this.streetNumber,
      this.bis,
      this.floorCount,
      this.towersCount,
      this.apartmentsCount,
      this.admin
    );
    masterpageStore.updateLoading(true);
    buildingStore.updateBuilding(building);
    router.push({name: "buildingNew"});
  }

  reset() {
    this.$refs.form.reset();
  }

  @Watch("dialog")
  cleanForm() {
    if (!this.dialog) this.reset();
  }
}
</script>

<style>
</style>