<template>
  <v-app id="inspire">
    <v-row align="center" justify="center" color="red">
      <v-col cols="6" align="right">
        <v-img
          src="@/resources/img/404-not-found-monkey.png"
          max-height="200"
          max-width="200"
        ></v-img>
      </v-col>
      <v-col cols="6">
        <h1 class="font-weight-thin">404 Not Found</h1>
        <h3 class="font-weight-thin">
          Ups! Parece que la pagina que estas buscando no existe.
        </h3>
      </v-col>
    </v-row>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Error404 extends Vue {}
</script>
