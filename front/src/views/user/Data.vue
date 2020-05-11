<template>
  <v-container>
    <v-card>
      <v-card-title>Informacion basica</v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-col cols="6" center>
          <v-row cols="12">
            <v-col cols="12" sm="6" md="3">
              <v-text-field label="Nombre" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field label="Apellido" outlined></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="E-mail" outlined></v-text-field>
        </v-col>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Data extends Vue {}
</script>
