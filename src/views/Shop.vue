<template>
  <div class="wrapper">
    <article>
      <img src="@/assets/ail.png" alt="ail icon" />
      <h2>{{ name }}</h2>
      <p>{{ conditioning }}</p>
      <p>{{ price }}€</p>
      <button>AJouter au panier</button>
    </article>

    <article>
      <img src="@/assets/ail.png" alt="ail icon" />
      <h2>{{ name }}</h2>
      <p>{{ conditioning }}</p>
      <p>{{ price }}€</p>
      <button>AJouter au panier</button>
    </article>
    <article>
      <img src="@/assets/ail.png" alt="ail icon" />
      <h2>{{ name }}</h2>
      <p>{{ conditioning }}</p>
      <p>{{ price }}€</p>
      <button>AJouter au panier</button>
    </article>
    <article>
      <img src="@/assets/ail.png" alt="ail icon" />
      <h2>{{ name }}</h2>
      <p>{{ conditioning }}</p>
      <p>{{ price }}€</p>
      <button>AJouter au panier</button>
    </article>

    <article>
      <img src="@/assets/ail.png" alt="ail icon" />
      <h2>{{ name }}</h2>
      <p>{{ conditioning }}</p>
      <p>{{ price }}€</p>
      <button>AJouter au panier</button>
    </article>
    <article>
      <img src="@/assets/ail.png" alt="ail icon" />
      <h2>{{ name }}</h2>
      <p>{{ conditioning }}</p>
      <p>{{ price }}€</p>
      <button>AJouter au panier</button>
    </article>
    <article>
      <img src="@/assets/ail.png" alt="ail icon" />
      <h2>{{ name }}</h2>
      <p>{{ conditioning }}</p>
      <p>{{ price }}€</p>
      <button>AJouter au panier</button>
    </article>
  </div>
</template>

<script>
export default {
  name: "Shop",
  data: function () {
    return {
      id: 1,
      name: "ail",
      scientific_name: "allium sativum",
      sun: 2,
      difficulty: 1,
      water: 1,
      icon: "ail.png",
      image: "ail.png",
      description:
        "L'ail (pluriel : ails ou aulx), ail commun ou ail cultivé (Allium sativum) est une espèce de plante potagère vivace monocotylédone dont les bulbes, à l'odeur et au goût forts, sont souvent employés comme condiment en cuisine. La tête d'ail se compose de plusieurs caïeux ou « gousses » d'ail. La fleur d'ail est aussi consommée. On en distingue plusieurs types. Originaire d'Asie centrale, il aurait été utilisé depuis 5 000 ans en région méditerranéenne, en particulier en Égypte. Il est aujourd'hui toujours très apprécié dans de nombreuses régions pour ses qualités gustatives et médicinales.",
      size: 0.15,
      companion_pos: "{9, 49}",
      companion_neg: "{43, 30, 13, 14, 15, 16, 17, 18}",
      type_id: 4,
      price: 20,
      conditioning: "sac de 1kg",
    };
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
