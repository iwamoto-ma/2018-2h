'use strict'
import Vue from 'vue';
import Vuex from 'vuex';
import Category from '../assets/genre_s.json';

Vue.use(Vuex);

const state = {
  members: [],
  foods: Category
};

const mutations = {
  ADD_MEMBER (state, text) {
      let result = false;
      for(let i = 0; i < state.members.length; i++){
        if(state.members[i] === text){
          alert('既に登録されています');
          return result = true;
        }
      }

      if(!result) {
        state.members.push(text);
      }
  },
  DELETE_MEMBER (state, index) {
      state.members.splice(index, 1);
  },
  ADD_CATEGORY (state, category) {
    state.category.push(category);
  }
};

const getters = {
  currentMember: state => {
    return state.members;
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