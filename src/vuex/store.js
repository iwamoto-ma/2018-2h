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

export default new Vuex.Store({
  state,
  getters,
  mutations
})
