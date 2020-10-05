<!-- PassThrough.vue -->
<!-- Solamente usar para las rutas  -->
<template>
  <router-view />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PassThrough extends Vue {
  constructor() {
    super();
  }
}
</script>
