'use strict'
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  names: []
};

const mutations = {
  ADD_NAME (state, name) {
    state.names.push(name);
  },
  DELETE_NAME (state, index) {
    state.names.splice(index, 1);
  }
};

const getters = {
  currentNames: state => {
    return state.names;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
});
