import Vue from 'vue'

const state = {
  candidatename: []
}

const mutations = {
  'ADD_CANDIDATENAME' (state, value) {
    state.candidatename.push(value)
  },
  'DELETE_CANDIDATENAME' (state, value) {
    state.candidatename.splice(value, 1)
  }
}
const actions = {
  addName: ({commit}, value) => {
    commit('ADD_CANDIDATENAME', value)
  },
  deleteName: ({commit}, index) => {
    commit('DELETE_CANDIDATENAME', index)
  }
}

const getters = {
  isCandidatename: state => {
    return state.candidatename
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}