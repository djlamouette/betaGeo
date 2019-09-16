<template lang="html">
  <div class="page">
    <app-sign-up-container></app-sign-up-container>
  </div>
</template>

<script>
import SignUpContainer from "../signup/SignUpContainer.vue"
export default {
  components: {
    appSignUpContainer: SignUpContainer
  }

}
</script>

<style lang="scss" scoped>
</style>
