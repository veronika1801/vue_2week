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
const getCart = (payload) => {

  if(payload){
    return fetch('https://jurapro.bhuser.ru/api-shop/cart',{
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${payload}`
      }
    })
  }
}
const getOrders = (payload) => {
  if(payload){
    return fetch('https://jurapro.bhuser.ru/api-shop/order',{
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${payload}`
      }
    })
  }
}
export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
    products:[],
    cart:[],
    orders:[],
  },
  getters: {
    getToken(state){
      return state.token
    },
    isAuthenticated: (state) => !!state.token,
    getProducts(state){
      return state.products
    },
    getCart(state){
      return state.cart
    },
    getOrders(state){
      return state.orders
    }
  },
  mutations: {
    SET_TOKEN(state,payload){
      state.token=payload
    },
    DELETE_TOKEN(state){
      state.token=null
    },
    SET_PRODUCTS(state,payload){
      state.products=payload
    },
    SET_CART(state,payload){
      state.cart=payload
    },
    SET_ORDERS(state,payload){
      state.orders = payload
    }
  },
  actions: {
    setToken({commit}, payload){
      commit('SET_TOKEN',payload)
    },
    deleteToken({commit}){
      commit('DELETE_TOKEN')
    },
    async getProducts({commit}){
      try{
        const prod = await getProducts()
        console.log(prod.json().then(function(value){commit('SET_PRODUCTS', value)}))
      }
      catch(error){
        console.log(error)
      }
    },
    async getCart({commit}, payload){
      try{
        const prod = await getCart(payload)
        console.log(prod.json().then(function(value){commit('SET_CART', value)}))
      }
      catch(error){
        console.log(error)
      }
    },
    async getOrders({commit}, payload){
      try{
        const prod = await getOrders(payload)
        console.log(prod.json().then(function(value){commit('SET_ORDERS', value)}))
      }
      catch(error){
        console.log(error)
      }
    },   
  },
})
