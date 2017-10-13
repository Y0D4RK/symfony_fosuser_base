<template>
  <header>
    <div class='header-title'>
      Holidayz
    </div>
    <nav>
      <ul class='nav-list'>
        <router-link :to='item.link' v-for="item in nav" :key='item.name' :class='{ space: item.space}'>
          <li class='route' :class='{active: $route.name == item.name}' :size='26'>
            <SvgIcon :icon='item.icon'/>
            <span>{{item.name | uppercase}}</span>
          </li>
        </router-link>
      </ul>
    </nav>
    <footer>
      <div class='title'>Evénement</div>
      <div class='event'>Vacances 2k18</div>
      <div class='action'>
        <button>
           <SvgIcon :icon='leaveIcon'/>
          <span>SORTIR</span>
        </button>
      </div>
    </footer>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

import { Filters } from '@utils';
import * as Components from '@components';


@Component({
  components: {
    "SvgIcon": Components.SvgIcon
  },
  filters: {
    "uppercase": Filters.uppercase
  }
})
export default class HeaderComponent extends Vue {

  public leaveIcon = require('../../assets/leave.svg');

  public nav = [
    { name: 'Accueil', link: '/', icon: require('../../assets/home.svg') },
    { name: 'Maisons', link: '/homes', icon: require('../../assets/houses.svg') },
    { name: 'Participants', link: '/participants', icon: require('../../assets/people.svg') },
    { name: 'Discussion', link: '/chat', icon: require('../../assets/chat.svg') },
    { name: 'Ajouter', link: '/add', space: true, icon: require('../../assets/add.svg') },
  ]

}
</script>



<style lang='scss'>



</style>

