import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    ADD_ITEM_TO_CART(state, item) {
      state.cart.push(item);
    },
    REMOVE_ITEM_FROM_CART(state, itemId) {
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
  },
  actions: {
    addItemToCart(context, item) {
      context.commit("ADD_ITEM_TO_CART", item);
    },
    removeItemFromCart(context, itemId) {
      context.commit("REMOVE_ITEM_FROM_CART", itemId);
    },
  },
  modules: {},
});
