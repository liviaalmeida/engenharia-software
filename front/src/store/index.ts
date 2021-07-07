import Vue from 'vue'
import Vuex from 'vuex'
import cookie from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    // @ts-expect-error access cookie in server-side
    logged: !!cookie.get('token'),
  },
  mutations: {
    setLoading(state, payload: boolean) {
      state.loading = payload
    },
    setLogged(state, payload: boolean) {
      state.logged = payload
    },
  },
  actions: {
    startLoading({ commit }) {
      commit('setLoading', true)
    },
    stopLoading({ commit }) {
      commit('setLoading', false)
    },
    login({ commit }, payload: string) {
      commit('setLogged', true)
      // @ts-expect-error access cookie in server-side
      cookie.set('token', payload)
    },
    logout({ commit }) {
      commit('setLogged', false)
      // @ts-expect-error access cookie in server-side
      cookie.remove('token',)
    },
  },
  getters: {
    loading: (state) => state.loading,
    logged: (state) => state.logged,
  },
})
