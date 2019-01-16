'use strict'
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todos: []
};

const mutations = {
  ADD_TODO (state, text) {
      state.todos.push(text);
  },
  DELETE_TODO (state, index) {
      state.todos.splice(index, 1);
  }
};

const getters = {
  currentTodo: state => {
    return state.todos;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
});