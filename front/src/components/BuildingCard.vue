<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="this.img"
    >
      <v-card-title>{{this.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{this.adress}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{this.desc}}</div>
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

@Component
export default class buildingCard extends Vue {
  @Prop() id!: number;
  @Prop() name!: string;
  @Prop() adress!: string;
  @Prop() desc!: string;
  @Prop() img!: string;
}
</script>
