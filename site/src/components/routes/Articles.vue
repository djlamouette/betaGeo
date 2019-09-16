<template lang="html">
  <div class="articles page">
    <ul>
      <li :for="article in articles">
        <p>{{ article.title }}</p>


      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [{
        titre: "coucou",
        data: "data"
      }, {
        titre: "hello",
        data: "data"
      }]
    }
  },

  created() {
    let that = this;
    let articlesCollection = {};
    db.collection('articles').get().then(function(querySnapshot) {

      querySnapshot.forEach(function(doc) {
        let id = doc.id;
        let title = doc.data().titre;
        let img = doc.data().image;
        let content = doc.data().texte;

        articlesCollection[id] = {};
        articlesCollection[id]["title"] = title;
        articlesCollection[id]["img"] = img;
        articlesCollection[id]["content"] = content;
      });
    });
    // this.articles = articlesCollection
  }
}
</script>

<style lang="scss" scoped>
</style>
