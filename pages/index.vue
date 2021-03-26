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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
