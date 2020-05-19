<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px">
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
            <v-form ref="form" v-model="valid" align="center" lazy-validation>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Nombre"
                  v-model="buildingName"
                  outlined
                  :rules="[v => !!v || 'El nombre es requerido.']"
                  required
                ></v-text-field>
                <v-text-field
                  label="Calle"
                  v-model="streetName"
                  outlined
                  :rules="[v => !!v || 'La calle es requerido.']"
                  required
                ></v-text-field>
                <v-text-field
                  label="Numero"
                  v-model="streetNumber"
                  outlined
                  :rules="[v => !!v || 'El numero es requerido.']"
                  required
                ></v-text-field>
                  <v-text-field
                  label="Dptos"
                  v-model="floors"
                  outlined
                  :rules="[v => !!v || 'Cant de dptos es requerida.']"
                  required
                ></v-text-field>
                 </v-col>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>

          <v-btn color="red darken-1" text @click="this.save">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import { IBuildingService } from "@/interfaces/IBuildingService";
import { Inject } from "inversify-props";
import { Building } from "@/models/Building";

@Component
export default class newBuildingForm extends Vue {
  @Inject("Buildings") private buildingService!: IBuildingService;
  buildingName!: string;
  streetName!: string;
  streetNumber!: string;
  floors!: string;
  dialog!: boolean;

  constructor() {
    super();
    this.dialog = false;
    this.buildingName = this.streetName = this.streetNumber = this.floors = "";
  }
  save() {
    var building = new Building(
      this.buildingName,
      this.streetName,
      this.streetNumber,
      this.floors,
   );
    this.buildingService.saveBuilding(building);
    this.dialog = false;
  }
}
</script>
