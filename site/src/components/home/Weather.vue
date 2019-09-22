<template lang="html">

  <div class="weather">

    <img :src="currentCondition" alt="">


  </div>

</template>

<script>
export default {
  computed: {
    currentCondition() {
      return require("../../assets/animated/" + this.$store.state.weather.condition + ".svg")
    }
  }
}
</script>

<style lang="css" scoped>
</style>
