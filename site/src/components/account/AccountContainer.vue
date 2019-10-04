<template lang="html">

  <div class="account">
    <p>{{ userFirstName }}</p>
    <p>{{ userLastName }}</p>
    <router-link to="/admin" class="btn btn-danger goToAdmin">admin</router-link>
  </div>



</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      // checkAdmin: false
    }
  },
  computed: {
    ...mapGetters([
      "userID",
      "userFirstName",
      "userLastName"
    ]),
    checkAdmin() {
      let userRef = db.collection('users').doc(this.userID);
      userRef.get().then(data => {
        return data.data().admin
      })
    }
  },
  mounted() {
    let userRef = db.collection('users').doc(this.userID);
    userRef.get().then(data => {
      let button =   document.querySelector('.account .goToAdmin')
      if (data.data().admin) {
      button.style.display = "block";
    } else {
      button.remove();
    }
    })
  }
}
</script>

<style lang="css" scoped>
.goToAdmin {
  display: none;
}
</style>
