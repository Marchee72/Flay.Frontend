<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Informacion basica</v-card-title>
      <v-form ref="form" v-model="valid" align="center" lazy-validation>
        <v-col cols="12" sm="12" md="3">
          <v-text-field
            label="Nombre"
            :v-model="user.name"
            outlined
          ></v-text-field>
          <v-text-field
            label="Apellido"
            :v-model="user.lastname"
            outlined
          ></v-text-field>
          <v-text-field
            label="E-mail"
            :v-model="user.email"
            outlined
          ></v-text-field>
          <roleSelect v-on:value="this.role = value" />
        </v-col>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { User } from "@/models/User";
import roleSelect from "@/components/roleSelect.vue";

@Component({ components: { roleSelect } })
export default class Data extends Vue {
  user: User;

  constructor() {
    super();
    this.user = new User();
  }
}
</script>
