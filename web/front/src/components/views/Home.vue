<template lang='html'>
  <transition name='slide'>
    <div class='view'>
      <section>
        
      </section>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { State, Getter, Mutation } from 'vuex-class';
import { Prop, Watch } from 'vue-property-decorator';

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


section{
  display: flex;
  height: 500px;
  background-image: url('~@images/home_image.jpg');
  @include bg-center;
}


</style>


