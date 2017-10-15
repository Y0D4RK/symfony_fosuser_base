<template>
  <header>
    <div class="logo">
      <img src="~@images/logo_white.png" alt="">
    </div>
    <nav>
      <ul class='nav-list'>
        <router-link :to='item.link' v-for="item in nav" :key='item.name' :class='{ space: item.space }'>
          <li class='route' :class='{active: $route.name == item.name}' :size='26'>
            <SvgIcon :icon='item.icon' />
            <span>{{item.name}}</span>
          </li>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

import { Filters } from '@utils';
import * as Components from '@components';


@Component({
  components: [Components.SvgIcon],
  filters: {
    "uppercase": Filters.uppercase
  }
})
export default class HeaderComponent extends Vue {

  public nav = [
    { name: 'Déménagements', link: '/', icon: require('@icons/bus.svg') },
    { name: 'Les déménageurs', link: '/homes', icon: require('@icons/people.svg') },
  ]

}
</script>



<style lang='scss'>
header {
  position: fixed;
  top: 0px;
  left: 0px;
  height: $headerHeight;
  width: 100%;
  display: flex;
  background-color: $red1;
  color: white;
  z-index: 10000;
  flex-flow: row wrap;
  box-shadow: 0 0 5px transparentize($g20, 0.8);


  nav {
    display: flex;
    flex-flow: row wrap;
    flex: 0 0 auto;

    ul.nav-list {
      display: flex;
      flex-flow: row wrap;
      flex: 1 0 auto;
      padding: 5px 15px 5px 15px;

      a {
        display: flex;

        li {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: center;
          align-content: center;
          padding: 5px;
          border-radius: 2px;
          font-weight: bold;
          margin-right: 5px;

          &:hover {
            background-color: $w240;
          }


          div,
          svg {
            fill: white;
            height: 22px;
            width: 22px;
          }
        }
      }
    }
  }
}
</style>

