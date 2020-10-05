<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="25%">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" fab right bottom fixed>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card name="stepper">
        <v-card-title class="headline red light">
          <span class="headline">Informacion basica</span>
        </v-card-title>
        <v-card-content name="stepper-card">
          <v-container>
            <v-form ref="form" v-model="valid" align="center" lazy-validation>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  dense
                  label="Nombre del edificio"
                  v-model="buildingName"
                  outlined
                  :rules="[v => !!v || 'El nombre es requerido.']"
                  required
                ></v-text-field>
                <v-text-field
                  dense
                  label="Calle"
                  v-model="streetName"
                  outlined
                  :rules="[v => !!v || 'La calle es requerido.']"
                  required
                ></v-text-field>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      dense
                      label="Numero"
                      v-model="streetNumber"
                      outlined
                      :rules="[
                        v => !!v || 'El numero es requerido.',
                        v => /^[0-9]*$/.test(v) || 'El numero no es valido'
                      ]"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-row align="center">
                      <v-checkbox v-model="bis" label="Bis"></v-checkbox>
                    </v-row>
                  </v-col>
                </v-row>
                <v-select
                  dense
                  v-model="selectedAdmin"
                  :items="admins"
                  return-object
                  item-text="userName"
                  item-value="id"
                  label="Administrador"
                  outlined
                  :rules="[v => !!v || 'El administrador es requerido.']"
                  required
                >
                </v-select>
              </v-col>
            </v-form>
          </v-container>
        </v-card-content>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="show = false">
            Cancelar
          </v-btn>

          <v-btn color="red darken-1" text @click="save()">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Inject } from "inversify-props";
import { IUserService } from "../interfaces/IUserService";
import { UserLw } from "../models/lw/UserLw";
import { IBuildingService } from "../interfaces/IBuildingService";
import { Building } from "../models/Building";

@Component
export default class NewBuildingForm extends Vue {
  @Inject("Users") private userService!: IUserService;
  @Inject("Buildings") private buildingservice!: IBuildingService;

  @Prop({ default: false }) show: boolean = false;
  valid!: boolean;
  //first step
  buildingName!: string;
  streetName!: string;
  streetNumber!: number;
  bis!: boolean;
  floors!: number;
  admins!: UserLw[];
  selectedAdmin!: UserLw;

  constructor() {
    super();
    this.show = false;
    this.bis = false;
    this.valid = true;
    this.buildingName = this.streetName = "";
    this.floors = this.streetNumber = 0;
  }

  async created() {
    this.admins = await this.userService.getAdmins();
  }

  async save() {
    this.validate();
    if (this.valid)
      await this.buildingservice.saveBuilding(
        new Building(
          this.buildingName,
          this.streetName,
          this.streetNumber,
          this.bis,
          this.floors,
          this.selectedAdmin
        )
      );
  }
  validate() {
    this.$refs.form.validate();
  }
  reset() {
    this.$refs.form.reset();
  }

  @Watch("show")
  cleanForm() {
    this.reset();
  }
}
</script>
