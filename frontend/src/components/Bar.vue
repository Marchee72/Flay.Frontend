<template>
    <div>
        <v-toolbar color="primary">
            <v-toolbar-title>Flay</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Bar extends Vue {
    constructor() {
        super();
    }
}
</script>