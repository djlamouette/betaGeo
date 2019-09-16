<template lang="html">
  <article class="">
    <div class="articleImage">
      <img :src="__article.img" alt="">
    </div>
    <div class="articleContent">
      <h2> {{ __article.title }} </h2>
      <p> {{ __article.content }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props:["__article"]
}
</script>

<style lang="scss" scoped>

  article {
    display: flex;
    height: 100%;
    // display: none;

    &.active {
      display: flex;
    }

    .articleImage {
      flex: 1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .articleContent {
      flex: 1;
      margin-left: 20px;

      h2 {
        text-align: left;
        margin-bottom: 30px;
      }

      p {
        text-align: justify;
      }
    }
  }
</style>
