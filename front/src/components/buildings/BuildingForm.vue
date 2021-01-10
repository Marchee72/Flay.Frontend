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
                  :rules="[
                    (v) => !!v || 'El nombre del edificio es requerido.',
                  ]"
                  required
                ></v-text-field>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      dense
                      v-bind="street"
                      label="Calle"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      dense
                      v-bind="streetNumber"
                      label="Altura"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-checkbox label="Bis" v-bind="bis" outlined> </v-checkbox>
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
              </v-col>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>

          <v-btn color="red darken-1" text @click="save()"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script lang="ts">
import { Vue, Component, Ref } from "vue-property-decorator";
import CountInput from "../common/CountInput.vue";
import { Inject } from "inversify-props";
import { IBuildingService } from "../../interfaces/IBuildingService";
import { Building } from "../../models/Building";
import ICountInput from "../../interfaces/components/ICountInput";

@Component({ components: { CountInput } })
export default class BuildingForm extends Vue {
  @Inject("Buildings") buildingService!: IBuildingService;
  @Ref() readonly floorsComponent!: ICountInput;
  @Ref() readonly towersComponent!: ICountInput;
  @Ref() readonly apartmentComponent!: ICountInput;

  dialog!: boolean;
  valid!: boolean;

  name!: string;
  street!: string;
  streetNumber!: number;
  bis!: boolean;
  depCount!: number;
  towersCount!: number;
  floorCount!: number;
  /**
   *
   */
  constructor() {
    super();
    this.name = this.street = "";
    this.streetNumber = 0;
    this.bis = false;
    this.towersCount = 0;
    this.depCount = 1;
    this.dialog = false;
    this.valid = true;
  }

  set floors(value) {
    this.floorCount = value;
    console.log(value);
  }

  save() {
    this.floorCount = this.floorsComponent.count;
    console.log(this.floors);
    var building = new Building(
      this.name,
      this.street,
      this.streetNumber,
      this.bis,
      this.floorCount,
      new Userlw()
    );
    this.buildingService.saveBuilding(building);
  }
}
</script>

<style>
</style>