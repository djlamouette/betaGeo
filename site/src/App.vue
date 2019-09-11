<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
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
}


.slide-enter {
  opacity: 0;
  transition: 1000ms;
  transform: translateY(30px);
}

.slide-enter-active {
  opacity: 1;
  transition: 1000ms;
  transform: translateY(0px);
}

.slide-leave {
  opacity: 1;
  transition: 1000ms;
  transform: translateY(0px);
}

.slide-leave-active {
  opacity: 0;
  transition: 1000ms;
  transform: translateY(30px);
}
</style>
