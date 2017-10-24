<template lang='html'>
  <transition name='slide'>
    <div class='view'>
      <section>
        <h1>Moving</h1>
      </section>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { State, Getter, Mutation } from 'vuex-class';

@Component({
  name: 'Moving',
})
export default class Moving extends Vue {

}
</script>


<style lang="scss" scoped>




</style>


