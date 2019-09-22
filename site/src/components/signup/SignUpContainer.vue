<template lang="html">

  <div class="container">

    <div class="row justify-content-center">

      <div class="col-4 align-self-center">

        <h1>Sign Up</h1>

        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
              v-model="email"
            >

          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
              v-model="password"
            >
          </div>

          <div class="form-group">
            <label for="exampleInputFirstName">First Name</label>
            <input type="text" class="form-control" id="exampleInputFirstName" placeholder="First Name"
              v-model="firstName"
            >
          </div>

          <div class="form-group">
            <label for="exampleInputLastName">Last Name</label>
            <input type="text" class="form-control" id="exampleInputLastName" placeholder="Last Name"
              v-model="lastName"
            >
          </div>

          <button type="submit" class="btn btn-primary"
            @click.prevent="submit"
          >Submit</button>

          <!-- <button type="submit" class="btn btn-primary"
            @click.prevent="checkUser"
          >Check</button> -->

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
      password: null,
      firstName: null,
      lastName: null
    };
  },
  methods: {
    submit() {
      // firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred => {
      //   this.$store.state.loggedIn = true;
      //   this.$store.state.userID = cred.user.uid;
      //
      //   db.collection("users").doc(cred.user.uid).set({
      //     prenom: this.firstName,
      //     nom: this.lastName
      //   }).then(() => {
      //     let userRef = db.collection('users').doc(cred.user.uid);
      //     userRef.get().then(data => {
      //       this.$store.state.userFirstName = data.data().prenom
      //       this.$store.state.userLastName = data.data().nom
      //     });
      //   })
      // });
      this.$store.dispatch('createAccount', {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
       })


      this.email = null;
      this.password = null;
      this.firstName = null;
      this.lastName = null;
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
