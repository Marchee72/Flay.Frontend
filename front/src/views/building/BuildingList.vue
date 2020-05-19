<template>
  <section>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="i in buildings" :key="i" :cols="2" >
          <buildingCard
            :buildingname= i.buildingName 
            :streetname= i.streetName 
            :streetnumber= i.streetNumber 
            :id= i 
            :floors= i.floors
          />
        <p v-if="i.administrator"> {{i.administrator.name}}</p>
        </v-col>
      </v-row>
      <newBuildingForm />
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IAuthService } from "@/interfaces/IAuthService";
import { IUserService } from "@/interfaces/IUserService";
import { User } from "@/models/User";
import buildingCard from "../../components/buildingCard.vue";
import { IBuildingService } from "@/interfaces/IBuildingService";
import { Building } from "@/models/Building";
import { Inject } from "inversify-props";
import newBuildingForm from "@/components/newBuildingForm";


@Component({ components: { buildingCard , newBuildingForm} })
export default class BuildingList extends Vue {  

  @Inject("Buildings") private buildingservice!: IBuildingService;
  // @Inject("Users") private userService!: IUserService;

  buildings!: Building[];
  fab!: boolean;
  // user!: User;

  constructor() {
    super();
    this.buildings = [];
    this.fab = false;
    

    // this.user = JSON.parse(localStorage.getItem("user"));
  }
  	async created() {
		this.buildings = await this.buildingservice.getAllBuildings();
		console.log(this.buildings);
  }
}
</script>

<style></style>
