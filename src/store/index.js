import Vue from 'vue'
import Vuex from 'vuex'
import Products from "../assets/products.json"

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    products: [...Products],
    cart: [],
    articles: []
  },
  mutations: {
    cartPush(state, obj) {
      const needle = state.cart.find(prod => obj.name === prod.name)
      if (needle) {
        needle.amount++
      } else {
        state.cart.push({ ...obj, amount: 1 })
      }
    },
    decreaser(state, obj) {
      const objInCart = state.cart.find(prod => obj.name === prod.name)
      objInCart.amount--
      if (objInCart.amount < 1) {
        state.cart.splice(state.cart.indexOf(objInCart), 1)
      }
    },
    increaser(state, obj) {
      state.cart.find(prod => obj.name === prod.name).amount++
    },
    saveArticles(state, articles){
      state.articles = articles
    }

  },
  actions: {
    toCart(context, obj) {
      context.commit('cartPush', obj)
    },
    decrease(context, obj) {
      context.commit('decreaser', obj)
    },
    increase(context, obj) {
      context.commit('increaser', obj)
    },
     async fetchArticles(context) {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=6")
        const data = await response.json()
        context.commit("saveArticles", data)
      } catch (error) {
        console.error(error)
        }
      }
    },
    getters: {
      calcTotalCart(state) {
        return state.cart.reduce((total, elem) => total += elem.amount * elem.price, 0)
      },
      calcQuantity(state) {
        return state.cart.reduce((x, y) =>
          x += y.amount, 0);
      }
    }
  })
