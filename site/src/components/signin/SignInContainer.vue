<template lang="html">

  <div class="container">

    <div class="row justify-content-center">

      <div class="col-4 align-self-center">

        <h1>Log In</h1>

        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
             v-model="email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
            v-model="password">
          </div>

          <button type="submit" class="btn btn-primary" @click.prevent="login">Submit</button>
        </form>
      </div>

    </div>


  </div>


</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login() {
      this.$store.dispatch('logIn', {
        email: this.email,
        password: this.password
      })

      this.email = null;
      this.password = null;
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
}

.row {
    height: 100%;
}

.btn-default {
    background-color: #29749e;
    color: #fff;
}
</style>
