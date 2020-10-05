<template>
  <v-container>
    <v-card-title>
      Usuarios
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="this.headers"
      :items="this.users"
      :search="this.search"
    ></v-data-table>
    <NewUserForm />
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Inject } from "inversify-props";
import { User } from "../../models/User";
import NewUserForm from "@/components/newUserForm.vue";
import { IUserService } from "../../interfaces/IUserService";

@Component({ components: { NewUserForm } })
export default class List extends Vue {
  @Inject("Users") private userService!: IUserService;

  users!: User[];
  search!: string;
  fab!: boolean;
  headers = [
    { text: "Username", align: "start", value: "username" },
    { text: "Nombre", value: "name" },
    { text: "Apellido", value: "lastname" },
    { text: "Tipo", value: "role.name" }
  ];

  constructor() {
    super();
    this.fab = false;
    this.search = "";
    this.users = [];
  }

  async created() {
    this.users = await this.userService.getAllUsers();
    console.log(this.users);
  }
}
</script>
