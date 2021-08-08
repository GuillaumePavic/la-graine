<template>
  <footer>
    <section>Réseaux</section>
    <section>Mentions légales</section>
    <section>Plan du site</section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  height: 10vh;
  background-color: #348133;
  color: #ffffff;
  display: flex;
  justify-content: space-evenly;
}

section {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
