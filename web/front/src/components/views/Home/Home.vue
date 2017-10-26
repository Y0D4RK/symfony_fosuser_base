<template lang='html'>
  <transition name='slide'>
    <div class='view'>
      <section class='image-home'>
        <SearchComponent/>
      </section>

      
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { State, Getter, Mutation } from 'vuex-class';

import SearchComponent from './SearchComponent.vue';

@Component({
  components: {
    SearchComponent
  }
})
export default class Home extends Vue {

}
</script>


<style lang="scss" scoped>


section{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.image-home {
  background-image: url('~@images/home_image.jpg');
  height: 500px;
  @include bg-center;
}


</style>


