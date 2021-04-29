import store from "@/store/index";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
@Module({dynamic: true, store: store, name: "masterpageStore", namespaced: true })
export default class MasterpageStore extends VuexModule {
    public loading: boolean = false;

    @Mutation
    public setLoading(load: boolean): void {
        this.loading = load;
    }
    @Action
    updateLoading(load: boolean): void {
        this.context.commit("setLoading", load)
    }
}