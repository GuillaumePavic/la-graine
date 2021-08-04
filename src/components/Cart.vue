<template>
  <aside class="cart">
    <div @click="onCartClick">Panier</div>
    <p>{{ numberOfItems }}</p>
    <div class="items-wrapper" v-if="cartIsClicked">
      <button class="close-button" @click="onCloseButtonClick">
        <img
          src="@/assets/close.png"
          alt="close button"
          class="close-button-icon"
        />
      </button>
      <!-- <p>Votre panier est vide</p> -->
      <article v-for="item of items" :key="item.id">
        <img src="@/assets/ail.png" alt="icon" />
        <p class="item-name">{{ item.name }}</p>
        <p class="item-price">{{ item.price }}€</p>
        <p>- {{ item.conditioning }}</p>
        <button class="remove-item-button" @click="removeItemFromCart(item.id)">X</button>
      </article>
    </div>
  </aside>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Cart",
  data: () => {
    return {
      cartIsClicked: false,
    };
  },
  computed: {
    items() {
      return this.$store.state.cart;
    },
    numberOfItems() {
      return this.$store.state.cart.length;
    },
  },
  methods: {
    onCartClick() {
      this.cartIsClicked = true;
    },
    onCloseButtonClick() {
      this.cartIsClicked = false;
    },
    ...mapActions(["removeItemFromCart"]),
  },
};
</script>

<style scoped>
.cart {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart div {
  cursor: pointer;
}

.cart p {
  margin: 0 4px;
}

.items-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  width: 20%;
  min-height: 200px;

  background-color: #ffffff;
  border: 1px solid #000000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close-button {
  background-color: inherit;
  border: none;
  position: absolute;
  top: 2px;
  right: 4px;
  cursor: pointer;
}

.close-button-icon {
  width: 16px;
}

article {
  padding-top: 16px;
  margin-bottom: 12px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

article img,
article p {
  margin: 0 12px;
}

article img {
  width: 32px;
}

article p {
  color: #65ad64;
}

.item-name,
.item-price {
  text-transform: uppercase;
  font-weight: 900;
}

.remove-item-button {
  border: none;
  background-color: inherit;
}
</style>
