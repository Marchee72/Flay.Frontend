<template>
    <div>
        <v-toolbar color="primary">
            <v-toolbar-title>Flay</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Bar extends Vue {
    constructor() {
        super();
        //let a = this.GetWeather();
    }

    private async GetWeather(){
        const response = await fetch("/Flay.API/Controllers/weatherForecas/Get", { credentials: "same-origin" });
        return (await response.json());
    }
}
</script>