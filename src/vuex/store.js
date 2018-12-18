'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  'candidateNames': []
}

const getters = {
  candidateNames (state) {
    return state.candidateNames
  }
}

const mutations = {
  [types.ADD_CANDIDATENAMES] (state, value) {
    state.candidateNames.push(value)
  },

  [types.REMOVE_CANDIDATENAMES] (state, value) {
    state.candidateNames.splice(value, 1)
  }
}

const actions = {
  addCandidatenames: ({commit}, value) => {
    commit(types.ADD_CANDIDATENAMES, value)
  },

  removeCandidatenames: ({commit}, index) => {
    commit(types.REMOVE_CANDIDATENAMES, index)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
