import { createStore } from 'vuex'

const getProducts = () => {
  return fetch('https://jurapro.bhuser.ru/api-shop/products',{
    method: "GET",
    headers:{
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${payload}`
    },
  })
}

export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
  },
  getters: {
    getToken(state){
      return state.token
    },
  },
  mutations: {
    SET_TOKEN(state,payload){
      state.token=payload
    },
    DELETE_TOKEN(state){
      state.token=null
    },
  },
  actions: {
    setToken({commit}, payload){
      commit('SET_TOKEN',payload)
    },
    deleteToken({commit}){
      commit('DELETE_TOKEN')
    },
  },
  modules: {
  }
})
