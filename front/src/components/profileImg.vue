<template>
  <v-container>   
      <v-avatar size="200" :color="color">
        <v-img v-if="src" :src="src" :lazy-src="src">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="white lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <span
          v-else
          class="white--text display-4 text-uppercase font-weight-thin"
          >{{ this.initials }}</span
        >
        <!-- <v-btn
          class="d-flex align-end"
          @click="$refs.file.click()"
          color="orange"
          absolute
          right
          bottom
          fab
        >
          <v-icon>mdi-pencil-outline</v-icon>
        </v-btn> -->
      </v-avatar>
    <!-- <input type="file" :src="src" ref="file" style="display: none" /> -->
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { generateRandomColor } from "@/helpers/img-helpers";

@Component
export default class profileImg extends Vue {
  @Prop() src!: string;
  @Prop() initials!: string;
  color!: string;

  constructor() {
    super();
    this.color = generateRandomColor();
  }
}
</script>

<style>
.v-avatar {
  overflow: visible;
} 
.v-btn {
  margin-bottom: 10px;
}
</style>
