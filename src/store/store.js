import Vue from 'vue'
import Vuex from 'vuex'
import Add from './modules/add'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Add
  }
})
