<template lang="html">
  <li :style="">
    <img :src="__article.image" alt="">
    <h2>
      {{ __article.titre }}
    </h2>
  </li>
</template>

<script>
export default {
  props: ["__article"]
}
</script>

<style lang="scss" scoped>
li {
  position: relative;
  width: 200px;
  height: 320px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 10;
  }

  img {
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  h2 {
    position: relative;
    text-align: left;
    padding: 0 5px;
    font-size: 20px;
    z-index: 999;
    color: #fff;
  }
}
</style>
