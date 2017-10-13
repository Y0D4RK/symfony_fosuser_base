import Vuex from 'vuex';
import Vue from 'vue';

import { getters, state } from './cards';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state, getters
})
