<template lang="html">
  <div class="home page">

    <!-- <h1>Bonjour {{ userName }} {{ userLastName }}</h1> -->
  </div>

</template>

<script>
export default {
  data() {
    return {
      userName: null,
      userLastName: null
    }
  },
  computed: {
    userID() {
      return this.$store.state.userID
    }
  },
  created() {
    // if (this.$store.state.loggedIn) {
    //   let userRef = db.collection('users').doc(this.$store.state.userID);
    //   userRef.get().then(data => {
    //     this.userName = data.data().prenom
    //     this.userLastName = data.data().nom
    //   })
    // }

  }
}
</script>

<style lang="scss" scoped>
</style>
