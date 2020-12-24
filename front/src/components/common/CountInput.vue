<template>
    <v-text-field
      v-model="count"
      :rules="[(v) => RegExp('^(0|[1-9][0-9]*)$').test(v) || 'no']"
      dense
      pattern='^(0|[1-9][0-9]*)$'
      :label="label"
      outlined
    >
      <v-icon id="plus" slot="append" v-on:click="count += 1">
        mdi-plus-circle-outline
      </v-icon>
      <v-icon id="minus" slot="append" v-on:click="count -= 1">
        mdi-minus-circle-outline
      </v-icon>
    </v-text-field>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class CountInput extends Vue {
  /**
   *
   */
  @Prop() label!: string;
  count: number;
  constructor() {
    super();
    this.count = 0;
  }

  @Emit()
  addOne()  {this.count += 1}
  

  @Emit()
  subOne()  {this.count -= 1}
  
}
</script>

