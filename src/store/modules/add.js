import Vue from 'vue'

const state = {
  name: []
}

const mutations = {
  'NAME_CREATE' (state) {
    state.name.push('AAAAA')
    console.log(state.name)
  },
}

const actions = {
  nameAdd: ({commit}) => {
    commit('NAME_CREATE');
  }
}

const getters = {
  currentName: state => {
    return state.name;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
