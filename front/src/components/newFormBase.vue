<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="25%">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" fab right bottom fixed>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card name="base-form" :loading="loading">
        <v-card-title class="headline red light">
          <span class="headline">Informacion basica</span>
        </v-card-title>
        <v-card-content name="base-form-content">
          <v-container>
            <v-form ref="form" v-model="valid" align="center" lazy-validation>
              <v-col cols="12" sm="12" md="12">
                <slot name="content"></slot>
              </v-col>
            </v-form>
          </v-container>
        </v-card-content>
        <v-card-actions>
          <v-spacer></v-spacer>
          <slot name="actions"></slot>
          <!-- 
          <v-btn color="red darken-1" text @click="show = false">
            Cancelar
          </v-btn>
          <v-btn color="red darken-1" text @click="save()">
            Guardar
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import formMixin from "@/mixins/form-mixin";

@Component
export default class newFormBase extends Vue {
  @Prop({ default: false }) loading: boolean;
  @Prop({ default: false }) show: boolean;
  @Prop({ default: false }) validating: boolean;
  valid: boolean;
  constructor() {
    super();
    this.show = false;
    this.validating = false;
    this.valid = true;
    this.loading = false;
  }

  protected reset() {
    this.$refs.form.reset();
  }

   validateForm() {
    this.$refs.form.validate();
    return this.valid;
  }

  protected async save() {
    this.validate();
  }

  @Watch("show")
  cleanForm() {
    if(!this.show) return;
    this.reset();
    this.$emit("getFormRef", this.$refs.form);
  }

  @Watch("validating")
  validate() {
    if (!this.validating) return;
    this.$refs.form.validate();
    this.validating = false;
  }


}
</script>
