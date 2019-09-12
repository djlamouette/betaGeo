<template>
<div id="app">
  <app-header></app-header>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
import Header from './components/header/Header.vue'

export default {
  name: 'app',
  components: {
    appHeader: Header
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    padding-top: 56px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
    transition: 0.3s
  }
</style>
