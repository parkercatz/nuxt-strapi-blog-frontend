<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-strapi-blog-frontend
      </h1>
      <div v-for="article in articles" v-bind:key="article.id">
        <h2>{{ article.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { allArticlesQuery } from "~/graphql/queries";
export default {
  data() {
    return {
      articles: []
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: allArticlesQuery
    }
  }
};
</script>

<style>
.center {
  text-align: center;
}
.headline {
  text-transform: uppercase;
  margin: 4rem auto;
  font-size: 4rem;
}
img {
  display: block;
  margin: 0 auto;
  width: 150px;
}
h2 {
  color: #35495e;
  text-transform: capitalize;
  margin-bottom: 2rem;
}
h3 {
  color: #42b883;
  margin-bottom: 0;
  cursor: pointer;
}
h3 > .subtitle {
  color: gray;
  font-size: 0.98rem;
  float: right;
  font-weight: normal;
}
h3:hover {
  text-decoration: underline;
}
p {
  margin-top: 0.4rem;
}
.sections {
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 4rem;
}
.section {
  margin-bottom: 3rem;
}
.group {
  margin-bottom: 4rem;
}
</style>
