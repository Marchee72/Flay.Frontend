import store from "@/store/index";
import Building from "@/models/Building";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
@Module({dynamic: true, store: store, name: "buildingModule", namespaced: true })
export default class BuildingStore extends VuexModule {
    public building: Building = new Building();

    @Mutation
    private setPartialBuilding(building: Building): void {
        this.building = building;
    }
    @Action
    public updateBuilding(building: Building): void {
        this.context.commit("setPartialBuilding", building)
    }

    // get getBuilding(){
    //   return this.building;
    // }
}