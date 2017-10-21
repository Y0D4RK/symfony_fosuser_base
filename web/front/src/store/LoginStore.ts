import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { LoginState } from '@types';
import { RootState } from './index';
import { Filters, $timeout} from '@utils';
import axios from 'axios'

const state: LoginState = {
  name: null,
  surname: null,
  id: null,
  isLoggedIn: false,
  isAdmin: false,
  status: null,
  showModal: false,
  reset() {
    this.name = null;
    this.surname = null;
    this.id = null;
    this.isLoggedIn = false;
    this.status = null;
  }
}

const getters: GetterTree<LoginState, RootState> = {
  fullName(state) {
    return Filters.capitalize(state.surname) + " " + Filters.capitalize(state.name)
  }
}

const mutations: MutationTree<LoginState> = {
  connectUser(state, data) {
    state.isLoggedIn = true;
  },
  disconnectUser(state, data) {
    state.reset()
  }
}

const actions: ActionTree<LoginState, RootState> = {
  async connexionRequest({commit, rootState}, loginData) {
    return new Promise( async (resolve, reject) => {
      // axios.get("", loginData).then(response => {
      //   resolve();
      // })

      $timeout(() => {
        resolve()
      }, 1000)
      
    })
  }
}

export const LoginModule: Module<LoginState, RootState> = {
  state,
  getters,
  mutations,
  actions
}