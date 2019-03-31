import Vue from 'vue'

export const state = () => ({
  cartTotal: 0,
  showCart: false,
  cart: {}
})

export const mutations = {
  addToCart (state, item) {
    state.cartTotal++
    if (item.title in state.cart) {
      state.cart[item.title].count++
    } else {
      let stateItem = Object.assign({}, item)
      stateItem.count = 1
      state.cart[item.title] = stateItem
    }
  },
  removeItem (state, item) {
    state.cartTotal -= item.count
    Vue.delete(state.cart, item.title)
  },
  showCart (state) {
    if (!state.showCart) {
      state.showCart = true
    }
  }
}

export const actions = {
  showCart ({ commit }) {
    commit('showCart')
  }
}
