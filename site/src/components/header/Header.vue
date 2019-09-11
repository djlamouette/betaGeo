<template lang="html">
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
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
    </nav>


  </header>
</template>

<script>
export default {
  data() {
    return {
      coucou: "Hello"
    }
  }
}
</script>

<style lang="scss" scoped>
.hello {
    h1 {
        color: green;
    }
}
</style>
