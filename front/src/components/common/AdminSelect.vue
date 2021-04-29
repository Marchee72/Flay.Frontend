<template>
  <v-select
    :dense="dense"
    v-model="selectedAdmin"
    :items="admins"
    return-object
    item-text="userName"
    item-value="id"
    label="Administrador"
    outlined
  >
  </v-select>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Inject } from "inversify-props";
import UserLw from "../../models/lw/UserLw";
import { IUserService } from "../../interfaces/services/IUserService";
import IAdminSelect from "../../interfaces/components/IAdminSelect";

@Component
export default class AdminSelect extends Vue implements IAdminSelect {
  @Inject("Users") private userService!: IUserService;

  @Prop({default: false}) dense!: boolean;
  admins!: UserLw[];
  selectedAdmin!: UserLw;
  /**
   *
   */
  constructor() {
    super();
    this.admins = [];
    this.selectedAdmin = null;
  }

  async created() {
    this.admins = await this.userService.getAdmins();
  }
}
</script>

<style>
</style>