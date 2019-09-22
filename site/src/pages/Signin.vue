<template lang="html">
  <div class="page">
    <app-sign-in-container></app-sign-in-container>
  </div>
</template>

<script>
import SignInContainer from "../components/signin/SignInContainer.vue"
export default {
  components: {
    appSignInContainer: SignInContainer
  }

}
</script>

<style lang="scss" scoped>
</style>
