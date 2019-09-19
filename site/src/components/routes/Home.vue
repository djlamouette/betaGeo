<template lang="html">
  <div class="home page">

    {{ info }}
    <!-- <h1>Bonjour {{ userName }} {{ userLastName }}</h1> -->
  </div>

</template>

<script>
import axios from 'axios'
// import { CURRENT_WEATHER } from '../constant.js'

export default {
  data() {
    return {
      userName: null,
      userLastName: null,
      info: null
    }
  },
  computed: {
    userID() {
      return this.$store.state.userID
    }

  },
  mounted() {
    // this.info = this.$store.mutations.getWeather();
    axios
      .get("https://www.prevision-meteo.ch/services/json/paris")
      .then(response => {
        this.info = response
      });
  }
}
</script>

<style lang="scss" scoped>
</style>
