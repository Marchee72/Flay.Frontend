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
                  v-model="name"
                  outlined
                  :rules="[v => !!v || 'El nombre es requerido.']"
                  required
                ></v-text-field>
                <v-text-field
                  label="Apellido"
                  v-model="lastname"
                  outlined
                  :rules="[v => !!v || 'El apellido es requerido.']"
                  required
                ></v-text-field>
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  outlined
                  :rules="[
                    v => !!v || 'El e-mail es requerido.',
                    v => /.+@.+\..+/.test(v) || 'El e-mail debe ser valido.'
                  ]"
                  required
                ></v-text-field>
                <v-select
                  v-model="role"
                  :items="roles"
                  return-object
                  item-text="name"
                  item-value="id"
                  label="Tipo"
                  outlined
                  :rules="[v => !!v || 'El rol es requerido.']"
                  required
                >
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

          <v-btn color="red darken-1" text @click="this.save">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IUserService } from "../interfaces/IUserService";
import { Inject } from "inversify-props";
import { User } from "../models/User";
import { Role } from "../models/Role";

@Component
export default class NewUSerForm extends Vue {
  @Inject("Users") private userService!: IUserService;
  items!: { text: string; value: string }[];
  roles!: Role[];
  name!: string;
  lastname!: string;
  email!: string;
  role!: Role;
  dialog!: boolean;

  constructor() {
    super();
    this.items = [];
    this.dialog = false;
    this.role = new Role();
    this.name = this.lastname = this.email = "";
  }
  async created() {
    this.roles = await this.userService.getAllRoles();
  }
  save() {
    var user = new User(
      this.name,
      this.lastname,
      this.email,
      this.roles.find(_ => _.id === this.role.id)!
    );
    this.userService.saveUser(user);
    this.dialog = false;
  }
}
</script>
