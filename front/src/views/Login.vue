<template>
  <v-app id="inspire">
    <v-container class="fill-height" fluid>
      <v-main>
        <v-parallax
          class="fill-height"
          src="../resources/img/monumento.jpg"
          height="500"
        >
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12" :loading="loading">
                <v-toolbar color="red" dark flat>
                  <v-toolbar-title>Login</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <p class="text-center red--text" v-if="error">
                      {{ error }}
                    </p>
                    <v-text-field
                      label="Username"
                      name="username"
                      :rules="[(v) => !!v || 'El usuario es requerido.']"
                      :error="badLogin"
                      @keyup.enter="login"
                      prepend-icon="person"
                      type="text"
                      v-model="user"
                      required
                    />

                    <v-text-field
                      id="password"
                      label="Contraseña"
                      name="password"
                      :rules="[(v) => !!v || 'La contraseña es requerida.']"
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
      </v-main>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { IAuthService } from "../interfaces/services/IAuthService";
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
  loading!: boolean;
  constructor() {
    super();
    if (!this.$vuetify.theme.dark) this.$vuetify.theme.dark = true;

    this.user = "";
    this.pass = "";
    this.error = "";
    this.badLogin = this.loading = false;
  }

  async login() {
    this.badLogin = false;
    this.loading = true;
    this.$refs.form.resetValidation();
    this.$refs.form.validate();
    if (this.valid) {
      var user = await this.authenticationService
        .authenticate(this.user, this.pass)
        .catch((e) => {
          this.loading = false;
          throw Error(
            "No es posible conectarse con el servidor. Intente mas tarde."
          );
        });
      if (user.username && user.token) {
        localStorage.setItem("user", JSON.stringify(user));
        console.log("Welcome " + user.username);
        router.push({ name: "user" });
        return;
      }
    }
    this.badLogin = true;
    this.loading = false;
    this.$refs.form.resetValidation();
    this.error = "Usuario o contraseña incorrecta.";
  }

  @Watch("valid")
  isValid(){
    console.log(this.valid);
  }
}
</script>
