<template lang="html">
  <div class="articles page">
    <div class="articleContainer">
      <div class="arrow leftArrow" @click="prevArticle"></div>
      <transition :name="directionAnimation" mode="out-in" tag="div">
        <app-article
          v-for="(article, key, index) in articles"
          :__article="article"
          v-if="indexArticle === index"
          :key="index"
          ></app-article>
      </transition>

      <div class="arrow rightArrow" @click="nextArticle"></div>
    </div>
  </div>
</template>

<script>
import Article from '../components/articles/Article.vue'

export default {
  components: {
    "app-article": Article
  },
  data() {
    return {
      articles: null,
      indexArticle: 0,
      directionAnimation: ""
    }
  },
  computed: {
    lengthArticles() {
      return Object.keys(this.articles).length;
    }
  },
  methods: {
    getArticles() {
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
      this.directionAnimation = 'animationRight';
      if (this.indexArticle < this.lengthArticles - 1) {
        this.indexArticle++;
      }
    },
    prevArticle() {
      this.directionAnimation = 'animationLeft';
      if (this.indexArticle > 0) {
        this.indexArticle--;
      }
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

//transition-group

// .test-enter {
//   transform: translateX(-30px);
// }

.animationRight-enter-active {
  // transition: 0s;
  opacity: 0;
  transform: translateX(30px);
}

.animationRight-enter-to {
  transition: 0.5s;
  opacity: 1;
  transform: translateX(0);
}

.animationRight-leave {
  transform: translateX(0);
  opacity: 1
}

.animationRight-leave-active {
  transition: 0.5s;
  transform: translateX(-30px);
  opacity: 0
}


.animationLeft-enter-active {
  // transition: 0s;
  opacity: 0;
  transform: translateX(-30px);
}

.animationLeft-enter-to {
  transition: 0.5s;
  opacity: 1;
  transform: translateX(0);
}

.animationLeft-leave {
  transform: translateX(0);
  opacity: 1
}

.animationLeft-leave-active {
  transition: 0.5s;
  transform: translateX(30px);
  opacity: 0
}


</style>
