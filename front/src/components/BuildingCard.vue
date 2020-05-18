<template>
  <v-card class="mx-auto" max-width="400">
    <!-- <v-img
      class="white--text align-end"
      height="200px"
      :src="this.img"
    > -->
    <v-card-title>{{ this.buildingname }}</v-card-title>
    <!-- </v-img> -->

    <v-card-subtitle class="pb-0">{{
      this.streetname + " " + this.streetnumber
    }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Cantidad de pisos: {{ this.floors }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text>
        Ver
      </v-btn>

      <v-btn color="orange" text>
        Editar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
// import { IUserService } from "@/interfaces/IUserService";
// import { IBuildingService } from "@/interfaces/IBuildingService";
import { Inject } from "inversify-props";

@Component
export default class buildingCard extends Vue {
  @Prop() id!: string;
  @Prop() buildingname!: string;
  @Prop() streetname!: string;
  @Prop() streetnumber!: string;
  @Prop() floors!: string;
}
</script>
