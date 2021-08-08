<template>
  <aside class="cart">
    <div @click="onCartClick">
      <p v-if="!numberOfItems">Votre panier est vide</p>
      <p v-else>
        Votre panier contient <strong>{{ numberOfItems }}</strong> articles
      </p>
    </div>
    <div class="items-wrapper" v-if="cartIsClicked">
      <p v-if="!numberOfItems" class="empty-cart">Votre panier est vide</p>
      <button class="close-button" @click="onCloseButtonClick">
        <img
          src="@/assets/close.png"
          alt="close button"
          class="close-button-icon"
        />
      </button>
      <article v-for="item of items" :key="item.id">
        <img :src="getIconUrl(item.icon)" alt="icon" />
        <p class="item-name">{{ item.name }}</p>
        <p class="item-price">{{ item.price }}€</p>
        <p class="item-conditioning">- {{ item.conditioning }}</p>
        <p class="item-quantity">x {{ item.quantity }}</p>
        <button class="remove-item-button" @click="removeItemFromCart(item.id)">
          <p>Supprimer</p>
        </button>
      </article>
      <div class="total-price">Total panier : {{ totalPriceCart }}€</div>
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
    ...mapGetters(["numberOfItems", "totalPriceCart"]),
  },
  methods: {
    onCartClick() {
      this.cartIsClicked = true;
    },
    onCloseButtonClick() {
      this.cartIsClicked = false;
    },
    getIconUrl(icon) {
      return require("../assets/plant-icons/" + icon);
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

.cart strong {
  color: #65ad64;
  font-weight: 900;
}

.items-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;

  padding-top: 12px;
  padding-bottom: 42px;
  padding-right: 6px;
  min-height: 200px;
  min-width: 400px;
  background-color: #ffffff;
  border: 1px solid #000000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.empty-cart {
  width: 100%;
  text-align: center;
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
.item-name,
.item-price,
.item-conditioning {
  margin: 0 12px;
}

article img {
  width: 32px;
}

.item-name,
.item-price,
.item-conditioning {
  color: #65ad64;
}

.item-name {
  text-transform: uppercase;
  font-weight: 700;
}

.item-quantity {
  color: #000000;
  margin-left: 12px;
}

.remove-item-button {
  background-color: #9ad499;
  color: #ffffff;
  border: none;
  font-size: 0.8rem;
  margin-left: 12px;
  border-radius: 24px;
  padding: 6px;
}

.total-price {
  position: absolute;
  bottom: 6px;
  left: 6px;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
