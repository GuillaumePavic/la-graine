<template>
  <div class="content">
    <article v-for="article in articles" :key="article.message">
      <h2>{{ article.title }}</h2>
      <p>{{ article.message }}</p>
      <a>Lire la suite</a>
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
          title: "Lorem ipsum",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "Lorem ipsum",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "Lorem ipsum",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "Lorem ipsum",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "Lorem ipsum",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "Lorem ipsum",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "Lorem ipsum",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
        {
          title: "Lorem ipsum",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  width: 1100px;
  margin: auto;
  margin-top: 70px;
}

article {
  margin-bottom: 32px;
  height: 192px;
  padding: 16px 72px 16px 16px;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.36);

  position: relative;
}

article:nth-child(odd) {
  transform: translateX(50px);
}

h2 {
  margin-bottom: 16px;
  font-size: 1.2rem;
}

a {
  position: absolute;
  bottom: 16px;
}
</style>
