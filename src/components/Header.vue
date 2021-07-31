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
    <Cart />
  </header>
</template>

<script>
import Cart from "./Cart.vue";

export default {
  name: "Header",
  components: {
    Cart
  }
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
</style>
