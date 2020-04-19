<template>
  <section>
    <v-file-input
      :rules="[
        (value) =>
          !value ||
          value.size < 2000000 ||
          'Avatar size should be less than 2 MB!',
      ]"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Avatar"
    ></v-file-input>
    <v-btn @click="save">
      Save
    </v-btn>
    <v-btn @click="deletePicture">
      Delete
    </v-btn>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IUserService } from "@/interfaces/IUserService";
import { Inject } from "inversify-props";
import toBase64 from "@/helpers/img-helpers";

@Component
export default class Profile extends Vue {
  @Inject("Users") private userService!: IUserService;

  picture!: File;
  img!: string;

  async save() {
    var base64 = await toBase64(this.picture);
    this.userService.updateProfilePicture(base64);
  }

  async deletePicture(){
      this.userService.removeProfilePicture();
  }
}
</script>
