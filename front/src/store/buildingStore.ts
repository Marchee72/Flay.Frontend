import Building from "@/models/Building";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
@Module({ namespaced: true})
export default class BuildingStore extends VuexModule {
    public building: Building = new Building();

    @Mutation
    public setPartialBuilding(building: Building): void {
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