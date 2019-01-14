import Vue from 'vue'

const state = {
  candidatename: []
}

const mutations = {
  'ADD_CANDIDATENAME' (state) {
    state.candidatename = state.candidatename.push();
  },
  'DELETE_CANDIDATENAME' (state) {
    // state.Candidatename = state.Candidatename.shift();
  }
}
const actions = {
  addName: ({commit}) => {
    commit('ADD_CANDIDATENAME');
  },
  deleteName: ({commit}) => {
    commit('DELETE_CANDIDATENAME');
  }
}

const getters = {
  isCandidatename: state => {
    return state.candidatename;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}