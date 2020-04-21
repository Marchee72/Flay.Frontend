<template>
  <v-container>
    <v-col cols="12">
      <v-form>
        <v-row justify="space-around">
          <v-avatar color="orange" size="200">
            <v-img v-if="src" :src="src" alt="John" />
            <span v-else class="white--text headline">asd</span>
          </v-avatar>
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
            v-model="picture"
            label="Avatar"
          ></v-file-input>
        </v-row>
        <v-btn @click="save">
          Save
        </v-btn>
        <v-btn @click="deletePicture">
          Delete
        </v-btn>
      </v-form>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { IUserService } from "@/interfaces/IUserService";
import { Inject } from "inversify-props";
import toBase64 from "@/helpers/img-helpers";

@Component
export default class Profile extends Vue {
  @Inject("Users") private userService!: IUserService;

  picture!: File = null;
  src!: string = null;

  async created() {
    this.src = await this.userService.getProfilePicture();
  }

  async save() {
    var base64 = await toBase64(this.picture);
    this.userService.updateProfilePicture(base64);
  }

  async deletePicture() {
    this.userService.removeProfilePicture();
  }

  @Watch("picture")
  async showPicture(){
    if(this.picture)
      this.src = await toBase64(this.picture);
      else this.src = null;
  }
}
</script>
