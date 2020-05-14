<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" fab right bottom fixed>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline red light">
          <span class="headline">Informacion basica</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" align="center" lazy-validation>
              <v-col cols="12" sm="12" md="12">
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
                <v-select v-model="value" :items="items" label="Tipo" outlined>
                </v-select>
              </v-col>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>

          <v-btn color="red darken-1" text @click="dialog = false">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IUserService } from "@/interfaces/IUserService";
import { Inject } from "inversify-props";
import { User } from "@/models/User";

@Component
export default class newUSerForm extends Vue {
  @Inject("Users") private userService!: IUserService;
  items!: { text: string; value: string }[];
  user: User;
  dialog!: boolean;
  constructor() {
    super();
    this.items = [];
    this.dialog = false;
    this.user = new User();
  }
  async created() {
    var roles = await this.userService.getAllRoles();
    this.items = roles.map(role => {
      return {
        text: role.name,
        value: role.name
      };
    });
  }
}
</script>
