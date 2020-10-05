<template>
  <v-container>
    <v-col cols="12">
      <v-form>
        <v-row justify="space-around">
          <v-col cols="3">
            <profileImg
              :src="this.src"
              :initials="this.initials"
              align="center"
            />
            <v-file-input
              :rules="[
                value =>
                  !value ||
                  value.size < 2000000 ||
                  'Avatar size should be less than 2 MB!'
              ]"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              v-model="picture"
              label="Avatar"
            ></v-file-input>
          </v-col>
          <v-col cols="8">
            <h1
              align="center"
              class="font-weight-thin display-4 text-capitalize"
            >
              {{ this.user.name }} {{ this.user.lastname }}
            </h1>
          </v-col>
          <v-col cols="8"> </v-col>
        </v-row>
        <v-btn-toggle v-model="toggle_exclusive" rounded>
          <v-btn color="primary" @click="save">Save </v-btn>
          <v-btn color="default" @click="deletePicture"> Delete </v-btn>
          <v-btn color="default" @click="deletePicture"> Delete </v-btn>
        </v-btn-toggle>
      </v-form>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { IUserService } from "../interfaces/IUserService";
import { Inject } from "inversify-props";
import { toBase64, generateRandomColor } from "../helpers/img-helpers";
import { User } from "../models/User";
import ProfileImg from "../components/ProfileImg.vue";

@Component({ components: { ProfileImg } })
export default class Profile extends Vue {
  @Inject("Users") private userService!: IUserService;

  picture!: File | null;
  src!: string | null;
  user!: User | null;
  initials!: string;

  constructor() {
    super();
    this.picture = null;
    this.src = null;
    this.user = null;
  }

  async created() {
    this.src = await this.userService.getProfilePicture();
    this.user = await this.userService.getUserInformation();
    this.initials = this.user.name[0] + this.user.lastname[0];
  }

  async save() {
    var base64 = (await toBase64(this.picture)) as string;
    this.userService.updateProfilePicture(base64);
  }

  async deletePicture() {
    this.userService.removeProfilePicture();
  }

  @Watch("picture")
  async showPicture() {
    if (this.picture) this.src = (await toBase64(this.picture)) as string;
    else this.src = null;
  }
}
</script>
<style></style>
