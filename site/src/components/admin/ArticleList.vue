<template lang="html">
    <div class="articleListContainer">
      <ul class="articleList">
        <appArticle v-for="article in articles" :__article="article"></appArticle>
      </ul>
    </div>
</template>

<script>
import article from './Article.vue'

export default {
  components: {
    appArticle: article
  },
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    db.collection('articles')
    .get()
    .then(data => {
      data.forEach(doc => {
        this.articles.push(doc.data());
      })
    })
    console.log(this.articles);
  }
}
</script>

<style lang="scss" scoped>
.articleListContainer {
  width: 100%;
  .articleList {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
}
</style>
