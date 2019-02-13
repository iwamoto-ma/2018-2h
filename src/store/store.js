'use strict'
import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios'

Vue.use(Vuex);

const state = {
  todos: [],
  genre: []
};

const mutations = {
  ADD_TODO (state, text) {
      state.todos.push(text);
  },
  DELETE_TODO (state, index) {
      state.todos.splice(index, 1);
  },
  GET_GENRE (state, payload) {
    state.genre = payload.genre;
  },
};

const getters = {
  currentTodo: state => {
    return state.todos;
  },

  genre: state => {
    return state.genre;
  },
};


const actions = {
  async genre(context, value) {
    const payload = {
      genre: [],
    };

    await axios.get(value.endPoint)
      .then((res) => {
        const items = []

        for (const item of res.data.category_l) {
          items.push(item.category_l_name)
        }

        payload.genre = items;
      });

      context.commit('GET_GENRE', payload);
  },
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});