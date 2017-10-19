import Vuex from 'vuex';
import Vue from 'vue';

import { LoginState } from '@types'
import { LoginModule,  } from './LoginStore'

Vue.use(Vuex);

export interface RootState {
  login: LoginState
}

export const store = new Vuex.Store({
  modules: {
    "login": LoginModule
  }
})
