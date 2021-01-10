<template>
  <v-text-field
    v-model="count"
    :rules="[(v) => RegExp('^(0|[1-9][0-9]*)$').test(v) || 'Valor incorrecto.']"
    dense
    :label="label"
    outlined
    readonly
  >
    <v-icon slot="append" v-on:click="addOne()"> mdi-plus </v-icon>
    <v-icon slot="append" v-on:click="subOne()"> mdi-minus </v-icon>
  </v-text-field>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";
import ICountInput from "../../interfaces/components/ICountInput";

@Component
export default class CountInput extends Vue implements ICountInput {
  /**
   *
   */
  @Prop({ default: 0 }) initialValue!: number;
  @Prop() label!: string;
  count: number;
  constructor() {
    super();
    this.count = +this.initialValue;
  }

  addOne() {
    this.count ++;
  }

  subOne() {
    if (this.count > 0) this.count--;
  }

  //@Watch("count")
  checkInput() {
    var s = this.count.toString();
    if (isNaN(+s[s.length - 1])) {
      s = s.slice(0, -1);
      this.count = s.length === 0 ? 0 : +s;
    }
  }
  @Emit("value")
  returnCount(){
    return this.count;
  }


}
</script>

