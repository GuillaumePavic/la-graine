<template>
  <main class="home">
    <div class="content">
      <section class="home-news">
        <div class="home-news-left">
          <img src="@/assets/campagne.jpg" alt="campagne" />
          <router-link to="/shop" class="home-btn"
            ><div><span>Nouvelles variétés !</span></div></router-link
          >
        </div>
        <div class="home-news-right">
          <div class="right-top">
            <img src="@/assets/seeding.jpg" alt="seeding" class="seeding" />
            <router-link to="/about" class="home-btn"
              ><div><span>Qui sommes-nous ?</span></div></router-link
            >
          </div>
          <div class="right-bottom">
            <img src="@/assets/varietes-tomates.jpg" alt="tomates" />
            <router-link to="/blog" class="home-btn"
              ><div><span>Que semer en août</span></div></router-link
            >
          </div>
        </div>
      </section>
      <section class="section2">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
          consequuntur quod laudantium ex omnis ipsum, labore, minus dicta
          cumque doloremque tempore vitae, aliquam temporibus totam. Id commodi
          libero quos mollitia.
        </p>
      </section>
      <section class="section3">Nos produits phares</section>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style scoped>
.content {
  width: 1100px;
  margin: auto;
  margin-top: 70px;
}

/*---News section---*/
.home-news {
  height: 509px;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
}

img {
  position: absolute;
  z-index: -100;
}

.home-news-left,
.home-news-right {
  width: 525px;
}

.home-news-left {
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.36);
}

.home-news-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right-top,
.right-bottom {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.36);

  position: relative;
  overflow: hidden;
}

.right-bottom p {
  margin: 0 16px;
}

.home-btn {
  background-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  width: 350px;
  height: 82px;
  border: 2px solid #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.home-btn div {
  border: 1px solid #ffffff;
  width: 340px;
  height: 72px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

/*Section 2*/
.section2 {
  margin-top: 40px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section2 p {
  font-size: 1.8rem;
  text-align: center;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.36);
  width: 100%;
  padding: 24px 64px;
}
.section3 {
  margin-top: 40px;
  margin-bottom: 70px;
  height: 400px;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.36);
}
</style>
