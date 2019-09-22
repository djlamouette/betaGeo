<template lang="html">
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/#" class="navbar-brand">Beta Geo</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/articles" class="nav-link">Articles</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/graph" class="nav-link">Graph</router-link>
          </li>
        </ul>
      </div>
      <p class="name" v-if="loggedIn">Bonjour : {{ userFirstName }} {{ userLastName }}</p>
      <router-link to="/signin" class="signIn btn btn-success" v-if="!loggedIn">Log In</router-link>
      <button type="button" name="button" class="btn btn-danger" @click.prevent="logout" v-if="loggedIn">Log Out</button>
      <router-link to="/signup" class="singUp btn btn-outline-success" v-if="!loggedIn">Sign up</router-link>
    </nav>


  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      log: null
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    ...mapGetters([
      'userFirstName',
      'userLastName',
      "userID",
      "loggedIn"
    ])
  },

}
</script>

<style lang="scss" scoped>
header {
    position: absolute;
    width: 100%;
    top: 0;
    nav.navbar {
        background-color: #29749e !important;

        a {
            color: #fff !important;
        }
    }

    .btn {
        margin-right: 10px;
    }

    .name {
      color: #fff;
      margin: 0;
      margin-right: 15px;
    }
}
</style>
