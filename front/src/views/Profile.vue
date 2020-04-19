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
      v-model="picture"
    ></v-file-input>
    <v-btn @click="save">
      Save
    </v-btn>
    imagen:
    <v-img :src="img" />
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
    console.log(this.picture);
    var base64 = await toBase64(this.picture);
    this.img = "data:image/png;base64," + base64;
    //this.userService.updateProfilePicture(base64);
  }
  async showImg() {
      this.img = await toBase64(this.picture);
  }
}
</script>
