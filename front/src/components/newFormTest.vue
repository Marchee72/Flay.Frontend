<template>
  <newFormBase
    :valid="valid"
    :loading="loading"
    :validating="validating"
    @getFormRef="getFormRef($event)"
  >
    <template v-slot:content>
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
    </template>
    <template v-slot:actions>
      <v-btn color="red darken-1" text @click="show = false">
        Cancelar
      </v-btn>
      <v-btn color="red darken-1" text @click="save()">
        Guardar
      </v-btn>
    </template>
  </newFormBase>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Inject } from "inversify-props";
import { IUserService } from "../interfaces/IUserService";
import { UserLw } from "@/models/lw/UserLw";
import { IBuildingService } from "@/interfaces/IBuildingService";
import { Building } from "@/models/Building";
import newFormBase from "./newFormBase.vue";

@Component
export default class newBuildingTest extends newFormBase {
  @Inject("Users") private userService!: IUserService;
  @Inject("Buildings") private buildingservice!: IBuildingService;

  @Prop({ default: false }) show: boolean = false;
  valid!: boolean;
  validating!: boolean;
  form!: Vue;
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
    this.form = new Vue();
    this.show = false;
    this.bis = false;
    this.valid = true;
    this.validating = false;
    this.buildingName = this.streetName = "";
    this.floors = this.streetNumber = 0;
  }

  async created() {
    this.admins = await this.userService.getAdmins();
  }

  getFormRef(form: Vue) {
    this.form = form;
  }

  async save() {
    this.form.validate();
    if (this.valid) {
      this.loading = true;
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
    this.loading = false;
    this.show = false;
  }
}
</script>
