<template>
  <div class="content">
    <article v-for="article in articles" :key="article.message">
      <h2>{{ article.title }}</h2>
      <p>Le {{ article.date }}</p>
      <p>{{ article.message }}</p>
      <router-link :to="{ name: 'Article', params: {article: article.title.split(' ').join('-')} }" class="article-link">Lire la suite</router-link>
    </article>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data: function () {
    return {
      articles: [
        {
          title: "que semer en août",
          date: "27/07/2021",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "tailler les tomates",
          date: "02/08/2021",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "faire son compost",
          date: "28/06/2021",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "pêches, brugnons et nectarines",
          date: "24/04/2021",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "que semer en juillet ?",
          date: "14/06/2021",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "arrosage",
          date: "05/05/2021",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "radis&co",
          date: "02/07/2021",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
      ],
    };
  },
};
</script>

<style scoped>
article {
  margin-bottom: 32px;
  height: 192px;
  padding: 16px 72px 16px 16px;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.36);

  position: relative;
  transition: transform 0.2s ease;
}

article:nth-child(odd) {
  transform: translateX(50px);
}

h2 {
  margin-bottom: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #65ad64;
  text-transform: uppercase;
}

p {
  margin-bottom: 24px;
}

.article-link {
  position: absolute;
  bottom: 16px;
  font-size: 1.1rem;
  color: #9ad499;
  cursor: pointer;

  transition: color 0.2s ease;
}

article:hover .article-link {
  color: #65ad64;
  font-size: 1.2rem;
  border-bottom: 1px solid #65ad64;
}
</style>
