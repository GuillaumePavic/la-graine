<template>
  <div class="about">
    <p>
      <strong>La Graine</strong> est un site de e-commerce fictif proposant à la
      vente des graines potagères. L'idée derrière ce petit projet était de
      m'initier et de m'entraîner à Vue.JS
    </p>
    <p>
      La partie client est réalisée avec <strong>Vue.JS</strong> et
      <strong>Vuex</strong>.
    </p>
    <p>
      L'API maison a été bâtie à l'aide de <strong>Node.JS</strong> et
      <strong>Express</strong>. Concernant la base de données, c'est
      <strong>PostgreSQL</strong> qui a été utilisé.
    </p>
    <p>
      Retrouvez le code source de l'<a href=""><strong>API</strong></a> et du
      <a href=""><strong>client</strong></a> sur Github.
    </p>
    <p>
      N'hésitez pas prendre contact via
      <a href="https://www.linkedin.com/in/guillaume-pavic-dev/"
        ><strong>LinkedIn</strong></a
      >
      :)
    </p>
    <div class="logos">
      <img src="@/assets/logo.png" alt="Vue.js logo" />
      <img src="@/assets/node-js.png" alt="Node.js logo" />
      <img src="@/assets/postgresql.png" alt="PostgreSQL logo" />
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logos {
  margin-bottom: 70px;
}

p {
  font-size: 1.5rem;
  margin-bottom: 64px;
  text-align: center;
}

strong {
  font-weight: 600;
  color: #65ad64;
}

a {
  font-style: italic;
}

img {
  width: 64px;
}
</style>
