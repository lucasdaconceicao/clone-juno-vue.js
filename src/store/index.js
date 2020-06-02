import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nameLogin:''
  },
  mutations: {
    setNomeLogin(state, payload){
      state.nameLogin = payload
    }
  },
  actions: {
    salvarNomeLogin({commit},valor){
      commit('setNomeLogin',valor);
    }
  },
  modules: {
  }
})
