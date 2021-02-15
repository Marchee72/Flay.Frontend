<template>
  <v-container>
    
  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import Building from "../../models/Building";
import BuildingStore from "../../store/modules/buildingStore";


const buildingStore = getModule(BuildingStore);
@Component
export default class BuildingEdit extends Vue {
  @Prop() isNew!: boolean;
  building!: Building;

  /**
   *
   */
  constructor() {
    super();
    this.building = buildingStore.building;
  }
}
</script>