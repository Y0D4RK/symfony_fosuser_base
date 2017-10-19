<template>
  <div id='app'>
    <HeaderComponent></HeaderComponent>
    <transition name='fade' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>


<script lang="ts"> 
import Vue from 'vue';
import router from './router';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { store } from '@store';

import * as Components from '@components';

@Component({
  components: {
    "HeaderComponent": Components.HeaderComponent
  },
  router,
  store
})
export default class App extends Vue {

}


</script> 