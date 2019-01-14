import Vue from 'vue';
import Vuex from 'vuex';

import name from './modules/name';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    name
  }
});