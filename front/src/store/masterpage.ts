import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
@Module({ namespaced: true})
export default class Masterpage extends VuexModule {
    public loading: boolean = false;

    @Mutation
    public setLoading(load: boolean): void {
        this.loading = load;
    }
    @Action
    public updateLoading(load: boolean): void {
        this.context.commit("setLoading", load)
    }
}