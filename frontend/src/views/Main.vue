<template>
  <Bar/>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator';
import Bar from 'components/Bar.vue';

@Component({
    components: {Bar},
})

@Path('/main')
export default class Main extends Vue {
}
</script>

<style>

</style>