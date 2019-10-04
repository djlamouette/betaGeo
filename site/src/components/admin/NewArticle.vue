<template lang="html">

  <div class="newArticle">

    <form class="border border-light p-5">

    <p class="h4 mb-4 text-center">Nouvel Article</p>

    <input type="text" id="newArticleTitle" class="form-control mb-4" placeholder="Titre" v-model="title">

    <input type="text" id="newArticleImg" class="form-control mb-4" placeholder="URL Image" v-model="img">

    <textarea class="form-control rounded-0" id="newArticleTexte" rows="10" placeholder="Contenu" v-model="content"></textarea>

    <button class="btn btn-info btn-block" type="submit" @click.prevent="submitNewArticle">Créer</button>
</form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      title: null,
      img: null,
      content: null
    }
  },
  methods: {
    submitNewArticle() {
      this.$store.dispatch('createArticle', {
        title: this.title,
        img: this.img,
        content: this.content
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  .newArticle {
    width: 100%;
    button {
      margin-top: 20px;
    }
  }


</style>
