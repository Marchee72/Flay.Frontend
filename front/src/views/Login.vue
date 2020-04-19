<template>
  <v-app id="inspire">
    <v-container class="fill-height" fluid>
      <v-content>
        <v-parallax
          class="fill-height"
          src="../resources/img/monumento.jpg"
          height="500"
        >
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="red" dark flat>
                  <v-toolbar-title>Login</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form ref="form" v-model="valid">
                    <p class="text-center red--text" v-if="error">
                      {{ error }}
                    </p>
                    <v-text-field
                      label="Username"
                      name="username"
                      :rules="[v => !!v || 'Username is required']"
                      :error="badLogin"
                      @keyup.enter="login"
                      prepend-icon="person"
                      type="text"
                      v-model="user"
                      required
                    />

                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      :rules="[v => !!v || 'Password is required']"
                      :error="badLogin"
                      @keyup.enter="login"
                      prepend-icon="lock"
                      type="password"
                      v-model="pass"
                      required
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="primary" @click="login">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-parallax>
      </v-content>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IAuthService } from "@/interfaces/IAuthService";
import { Inject } from "inversify-props";
import router from "../router";

@Component
export default class Login extends Vue {
  @Inject("Authentication") private authenticationService!: IAuthService;
  user!: string;
  pass!: string;
  valid!: boolean;
  error!: string;
  badLogin!: boolean;
  constructor() {
    super();
    if(!this.$vuetify.theme.dark) this.$vuetify.theme.dark = true;

    this.user = "";
    this.pass = "";
    this.error = "";
    this.valid = true;
    this.badLogin = false;
  }

  async login() {
    this.badLogin = false;
    this.$refs.form.validate();
    if (this.valid)
      var user = await this.authenticationService.authenticate(
        this.user,
        this.pass
      );
    if (user.username && user.token) {
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Welcome " + user.username);
      router.push({ name: "dashboard" });
    }
    this.$refs.form.resetValidation();
    this.badLogin = true;
    this.error = "User or password invalid";
  }
}
</script>
