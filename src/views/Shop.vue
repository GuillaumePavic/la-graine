<template>
  <div class="wrapper">
    <article v-for="plant of plants" :key="plant.id">
      <img :src="getIconUrl(plant.icon)" v-bind:alt="plant.name" />
      <h2>{{ plant.name }}</h2>
      <p>{{ plant.conditioning }}</p>
      <p>{{ plant.price }}€</p>
      <button @click="addItemToCart(plant)">Ajouter au panier</button>
    </article>
  </div>
</template>

<script>
import { mapActions } from "vuex";
const allPlants = require("../assets/data/plants.json");

export default {
  name: "Shop",
  computed: {
    plants() {
      return this.$store.state.plants;
    },
  },
  mounted() {
    //Should be axios call to API
    this.addAllPlants(allPlants);
  },
  methods: {
    getIconUrl(icon) {
      return require("../assets/plant-icons/" + icon);
    },
    ...mapActions(["addItemToCart", "addAllPlants"]),
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

article {
  border: 1px solid #000000;
  margin-bottom: 32px;
  font-size: 1.2rem;
  width: 280px;
  height: 280px;
  padding: 24px;
  text-align: center;
}

img {
  width: 92px;
  margin-bottom: 8px;
}

h2 {
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 12px;
}

p {
  margin-bottom: 6px;
}

button {
  background-color: #9ad499;
  color: #ffffff;
  font-size: 1.4rem;
  border: none;
  border-radius: 24px;
  padding: 6px;
  margin-top: 6px;
}
</style>
