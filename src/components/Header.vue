<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/"
            ><img src="@/assets/seedling.png" alt="logo seedling"
          /></router-link>
        </li>
        <li><router-link to="/shop">Boutique</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/about">A propos</router-link></li>
      </ul>
    </nav>
    <aside class="cart">
      <div @click="onCartClick">Panier</div>
      <p>0</p>
      <div class="items-wrapper" v-if="cartIsClicked">
        <button class="close-button" @click="onCloseButtonClick">
          <img
            src="@/assets/close.png"
            alt="close button"
            class="close-button-icon"
          />
        </button>
        <p>Votre panier est vide</p>
      </div>
    </aside>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      cartIsClicked: false,
    };
  },
  methods: {
    onCartClick() {
      this.cartIsClicked = true;
    },
    onCloseButtonClick() {
      this.cartIsClicked = false;
    },
  },
};
</script>

<style scoped>
header {
  height: 10vh;
  box-shadow: 0px 3px 3px 0px rgb(0 0 0 / 15%);
  display: flex;
}

nav {
  width: 80%;
}

ul {
  display: flex;
  height: 100%;
}

img {
  width: 48px;
}

li {
  margin-left: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
</style>
