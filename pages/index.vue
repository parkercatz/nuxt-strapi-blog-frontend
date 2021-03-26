<template>
  <div class="home">
    <h1 class="headline center">Blog</h1>
    <div class="sections">
      <div class="group">
        <div
          v-for="article in articles"
          v-bind:key="article.id"
          class="section"
        >
          <div class="entry">
            <nuxt-link :to="{ path: article.slug, query: { id: article.id } }">
              <h3>
                {{ article.title }}
                <span class="subtitle">{{ article.date }}</span>
              </h3>
            </nuxt-link>
            <p>{{ article.description }}</p>
          </div>
        </div>
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
