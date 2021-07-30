<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: 'Baloo Chettan 2', cursive;
}

main {
  width: 1100px;
  min-height: 80vh;
  margin: auto;
  margin-top: 70px;
}
</style>
