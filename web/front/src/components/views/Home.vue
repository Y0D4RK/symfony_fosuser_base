<template lang='html'>
  <transition name='slide'>
    <div class='view'>
      <section>
        Hello
      </section>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { State, Getter, Mutation } from 'vuex-class';
import { Prop, Watch } from 'vue-property-decorator';

import { Types } from '@utils';

@Component({
  name: 'Home',
})
export default class Home extends Vue {

  mounted() {
    console.log('home');
  }
}
</script>


<style lang="scss" scoped>

</style>
