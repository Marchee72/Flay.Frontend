<template>
  <v-container>
    <BuildingsTable @newActionType="setNewType($event)"/>
    <BuildingForm :actionType="actionType"/>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import BuildingsTable from "../../components/buildings/BuildingsTable.vue";
import { IBuildingService } from "../../interfaces/services/IBuildingService";
import Building from "../../models/Building";
import BuildingForm from "../../components/buildings/BuildingForm.vue";
import { ActionType } from "@/models/enums/ActionType";

@Component({ components: { BuildingForm, BuildingsTable } })
export default class BuildingList extends Vue {
  buildings!: Building[];
  fab!: boolean;
  show!: boolean;
  actionType!: ActionType;

  constructor() {
    super();
    this.actionType = ActionType.New;
    this.buildings = [];
    this.fab = false;
    this.show = false;
  }

  @Watch("actionType")
  watchAction(){
    console.log("Changed: " + this.actionType);
  }

  setNewType(actionType: ActionType) {
       this.actionType = actionType;
  }
}
</script>

<style></style>
