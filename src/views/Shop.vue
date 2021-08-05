<template>
  <div class="wrapper">
    <article v-for="plant of plants" :key="plant.id">
      <img src="@/assets/ail.png" alt="ail icon" />
      <h2>{{ plant.name }}</h2>
      <p>{{ plant.conditioning }}</p>
      <p>{{ plant.price }}€</p>
      <button @click="addItemToCart(plant)">Ajouter au panier</button>
    </article>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Shop",
  data: function () {
    return {
      plants: [
        {
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
        },
        {
          id: 2,
          name: "fraise",
          scientific_name: "fragaria × ananassa",
          sun: 2,
          difficulty: 1,
          water: 2,
          icon: "fraise.png",
          image: "fraise.png",
          description:
            "Le fraisier cultivé (Fragaria ×ananassa), plus rarement appelé fraisier ananas, est une espèce hybride de fraisiers cultivée pour son fruit qui est la fraise de jardin. Ce fruit n'est en fait pas une baie au sens botanique, mais un faux-fruit. Il est mondialement apprécié pour son arôme caractéristique, sa couleur rouge brillant, sa texture juteuse, et sa douceur. Il est consommé en large quantité, à la fois frais ou incorporé dans des aliments préparés comme des confitures, des compotes, des jus de fruits, des tartes, des crèmes glacées, ou des milkshakes. Le Fraisier cultivé a été obtenu pour la première fois en Bretagne en France dans les années 1750 par croisement entre Fragaria virginiana de l'est de l'Amérique du Nord et Fragaria chiloensis qui a été rapporté du Chili par Amédée-François Frézier en 1714.",
          size: 0.2,
          companion_pos: "{30, 31, 41, 49}",
          companion_neg: "{15, 16, 17, 18}",
          type_id: 6,
          price: 4.5,
          conditioning: "4 plants",
        },
        {
          id: 3,
          name: "artichaut",
          scientific_name: "cynara cardunculus",
          sun: 2,
          difficulty: 3,
          water: 1,
          icon: "artichaut.png",
          image: "artichaut.png",
          description:
            "L’artichaut (Cynara cardunculus var. scolymus (L.) Benth.) est une plante dicotylédone de la famille des Astéracées (ou Composées) appartenant au genre Cynara. L'artichaut lui-même est un chardon domestiqué et cultivé, de l'espèce Cynara cardunculus, dont la variété sauvage est sans doute Cynara cardunculus var. sylvestris (Lamk.) Fiori, ayant donné naissance à deux formes : C. cardunculus f. cardunculus, le cardon, et C. cardunculus f. scolymus, l'artichaut2. Ces deux formes ont longtemps été considérées comme des espèces différentes. On désigne sous le nom d'artichaut à la fois la plante entière et sa partie comestible, l'inflorescence en capitule, appelée aussi tête d'artichaut. Le mot, apparu à la Renaissance, est emprunté à son nom arabe الأرضي-شوكي (ʾarḍiyy šawkiyy) par l'intermédiaire du lombard articiocco.",
          size: 2,
          companion_pos: "{}",
          companion_neg: "{}",
          type_id: 3,
          price: 3.5,
          conditioning: "25 graines",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["addItemToCart"]),
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
