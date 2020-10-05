<template>
  <v-container>
    <v-card>
      <v-card-title>Informacion basica</v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-col cols="12" center>
          <v-row align>
            <v-col sm="6" md="3">
              <v-text-field label="Nombre edificio" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="6" md="3">
              <v-text-field label="Calle" outlined></v-text-field>
            </v-col>
            <v-col sm="6" md="3">
              <v-text-field label="Numero" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="4" md="2">
              <v-text-field label="Dptos" outlined></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BuildingNew extends Vue {}
</script>
