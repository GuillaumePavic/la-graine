<template>
  <aside class="cart">
    <div @click="onCartClick">
      <p v-if="!numberOfItems">Votre panier est vide</p>
      <p v-else>
        Votre panier contient <strong>{{ numberOfItems }}</strong> articles
      </p>
    </div>
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
        <p class="item-quantity">x {{ item.quantity }} -</p>
        <img src="@/assets/ail.png" alt="icon" />
        <p class="item-name">{{ item.name }}</p>
        <p class="item-price">{{ item.price }}€</p>
        <p>- {{ item.conditioning }}</p>
        <button class="remove-item-button" @click="removeItemFromCart(item.id)">
          X
        </button>
      </article>
    </div>
  </aside>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
    ...mapGetters(["numberOfItems"]),
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

.cart strong {
  color: #65ad64;
  font-weight: 900;
}

.items-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
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

.item-quantity {
  color: #000000;
  font-size: 2rem;
  font-weight: 900;
}

.remove-item-button {
  border: none;
  background-color: inherit;
}
</style>
