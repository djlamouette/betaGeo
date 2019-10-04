<template lang="html">
  <div class="home page">

    <appWeather v-if="gotWeather"></appWeather>
    <!-- {{ info }} -->
    <!-- <p v-if="gotWeather"> -->
      <!-- {{ weather.data.city_info.name }}
    </p>
    <h1 v-if="loggedIn">Bonjour {{ userID }} </h1> -->
  </div>

</template>

<script>
import weather from '../components/home/Weather.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    appWeather: weather
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'weather',
      'gotWeather',
      "userID",
      "loggedIn"
    ])
  },
  mounted() {
    this.$store.dispatch('getWeather');
  }
}
</script>

<style lang="scss" scoped>
</style>
