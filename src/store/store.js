'use strict'
import Vue from 'vue';
import Vuex from 'vuex';
import Category from '../assets/genre_s.json';

Vue.use(Vuex);

const state = {
  todos: [],
  foods: Category
};

const mutations = {
  ADD_TODO (state, text) {
      state.todos.push(text);
  },
  DELETE_TODO (state, index) {
      state.todos.splice(index, 1);
  },
  ADD_CATEGORY (state, category) {
    state.category.push(category);
  }
};

const getters = {
  currentTodo: state => {
    return state.todos;
  },
  currentCategory: state => {
    return state.foods;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
});