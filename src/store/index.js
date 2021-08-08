import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    plants: [],
    cart: [],
  },
  getters: {
    numberOfItems: (state) => {
      let totalItems = 0;

      for (let item of state.cart) {
        totalItems += item.quantity;
      }

      return totalItems;
    },
    totalPriceCart: (state) => {
      let totalPriceCart = 0;

      for (let item of state.cart) {
        totalPriceCart += item.price * item.quantity;
      }

      return totalPriceCart;
    },
  },
  mutations: {
    ADD_ALL_PLANTS(state, plants) {
      state.plants = plants;
    },
    ADD_ITEM_TO_CART(state, item) {
      let cartItem = state.cart.find((cartItem) => cartItem.id === item.id);

      if (!cartItem) {
        cartItem = {
          id: item.id,
          name: item.name,
          icon: item.icon,
          price: item.price,
          conditioning: item.conditioning,
          quantity: 0,
        };

        state.cart.push(cartItem);
      }

      cartItem.quantity++;
    },
    REMOVE_ITEM_FROM_CART(state, itemId) {
      //state.cart = state.cart.filter((item) => item.id !== itemId);
      let cartItem = state.cart.find((cartItem) => cartItem.id === itemId);
      if (cartItem.quantity === 1) {
        state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
      } else {
        cartItem.quantity--;
      }
    },
  },
  actions: {
    addAllPlants(context, plants) {
      context.commit("ADD_ALL_PLANTS", plants);
    },
    addItemToCart(context, item) {
      context.commit("ADD_ITEM_TO_CART", item);
    },
    removeItemFromCart(context, itemId) {
      context.commit("REMOVE_ITEM_FROM_CART", itemId);
    },
  },
  modules: {},
});
