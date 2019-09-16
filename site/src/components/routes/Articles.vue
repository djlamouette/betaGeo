<template lang="html">
  <div class="articles page">
    <div class="articleContainer">
      <div class="arrow leftArrow" @click="prevArticle"></div>
      <!-- <transition-group name="slide"> -->
        <app-article
          v-for="(article, key, index) in articles"
          :__article="article"
          :data-index="index"
          :v-show="indexArticle === index"
          :key="index"
          ></app-article>
      <!-- </transition-group> -->

      <div class="arrow rightArrow" @click="nextArticle"></div>
    </div>
  </div>
</template>

<script>
import Article from '../articles/Article.vue'

export default {
  components: {
    "app-article": Article
  },
  data() {
    return {
      articles: null,
      indexArticle: 0
    }
  },
  methods: {
    getArticles() {
      let that = this;
      let articlesCollection = {};
      db.collection('articles').get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          articlesCollection[doc.id] = {};
          articlesCollection[doc.id]["title"] = doc.data().titre;
          articlesCollection[doc.id]["img"] = doc.data().image;
          articlesCollection[doc.id]["content"] = doc.data().texte;
        });
      }).then(() => {
        this.articles = articlesCollection
      });
    },
    nextArticle() {
      this.indexArticle++;
    },
    prevArticle() {
      this.indexArticle--;
    }
  },
  mounted() {
    this.getArticles();
  }
}
</script>

<style lang="scss" scoped>

.articleContainer {
    height: 100%;
    padding: 20px 60px 60px;
    overflow: hidden;
}

.arrow {
    width: 50px;
    height: 50px;
    cursor: pointer;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);

    &::before {
        content: "";
        display: block;
        position: absolute;
        background-color: black;
        width: 3px;
        height: 30px;
        bottom: 0;
        left: 50%;
        transform: rotate(45deg);
    }
    &::after {
        content: "";
        display: block;
        position: absolute;
        background-color: black;
        width: 3px;
        height: 30px;
        top: 0;
        left: 50%;
        transform: rotate(-45deg);
    }

    &.leftArrow {
        left: 10px;
        &::before {
            transform: rotate(-45deg);
        }
        &::after {
            transform: rotate(45deg);
        }
    }
    &.rightArrow {
        right: 10px;
    }
}


</style>
