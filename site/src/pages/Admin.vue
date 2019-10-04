<template lang="html">
  <div class="admin">
    <div class="container">
      <div class="row">
        <button type="button" name="button" class="btn btn-primary" @click.prevent="selectedMainComponent = 'appNewArticle'">Article</button>
        <button type="button" name="button" class="btn btn-primary" @click.prevent="selectedMainComponent = 'appNewProduct'">Products</button>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <!-- <component :is="selectedMainComponent"></component> -->
        <appArticleList></appArticleList>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import newArticle from '../components/admin/NewArticle.vue'
import newProduct from '../components/admin/NewProduct.vue'
import articleList from '../components/admin/ArticleList.vue'

export default {
  components: {
    appNewArticle: newArticle,
    appNewProduct: newProduct,
    appArticleList: articleList
  },
  data() {
    return {
      selectedMainComponent: null
    }
  },
  computed: {
    ...mapGetters([
      "userID",
      "userFirstName",
      "userLastName"
    ]),
  }
}
</script>

<style lang="scss" scoped>

.admin {
  .row {
    justify-content: center;
    button {
      margin: 20px 20px;
    }
  }
}

</style>
