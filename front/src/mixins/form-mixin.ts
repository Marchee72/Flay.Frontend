import { Component, Vue } from "vue-property-decorator";

@Component
export default class formMixin extends Vue {
  validate() {
    this.$refs.form.validate();
  }

  reset() {
    this.$refs.form.reset();
  }
}