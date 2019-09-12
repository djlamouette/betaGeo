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
      <router-link to="/signin" class="btn btn-danger">Sign in</router-link>
    </nav>


  </header>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

  header {
    position: absolute;
    width: 100%;
    top: 0px;
    nav.navbar {
      background-color: #29749e !important;

      a {
        color: #fff !important;
      }
    }
  }

</style>
