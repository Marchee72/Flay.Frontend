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
                    <v-text-field dense label="Calle" outlined></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field dense label="Numero" outlined></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-checkbox label="Bis" outlined> </v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <CountInput label="culo"/>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field dense label="Torres" outlined></v-text-field>
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

          <v-btn color="red darken-1" text> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CountInput from "../common/CountInput.vue";

@Component({components: {CountInput}})
export default class BuildingForm extends Vue {
  dialog: boolean;
  valid: boolean;
  depCount: number;
  /**
   *
   */
  constructor() {
    super();
    this.depCount = 1;
    this.dialog = false;
    this.valid = true;
  }
}
</script>

<style>
</style>