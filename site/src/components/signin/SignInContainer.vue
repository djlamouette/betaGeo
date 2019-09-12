<template lang="html">

  <div class="container">

    <div class="row justify-content-center">

      <div class="col-4 align-self-center">

        <h1>Identification</h1>

        <form>
          <transition>
            <app-email></app-email>
            <app-password></app-password>
          </transition>


          <button type="submit" class="btn btn-default">Continuer</button>
        </form>
      </div>

    </div>


  </div>


</template>

<script>
import Email from './Email.vue'
import Password from './Password.vue'

export default {
  components: {
    appEmail: Email,
    appPassword: Password
  }

}
</script>

<style lang="scss" scoped>

  .container {
    height: 100%;
  }

  .row {
    height: 100%
  }

  .btn-default {
    background-color: #29749e;
    color: #fff;
  }
</style>
