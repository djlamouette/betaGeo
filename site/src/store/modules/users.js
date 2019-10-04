const state = {
  loggedIn: false,
  userID: '',
  userFirstName: '',
  userLastName: '',
}

const getters = {
  loggedIn(state) {
    return state.loggedIn;
  },
  userID(state) {
    return state.userID;
  },
  userFirstName(state) {
    return state.userFirstName;
  },
  userLastName(state) {
    return state.userLastName;
  }
}

const mutations = {
  setAccountState(state, user) {
    state.loggedIn = true;
    state.userID = user.uid;
    let userRef = db.collection('users').doc(user.uid);
    userRef.get().then(data => {
      state.userFirstName = data.data().prenom
      state.userLastName = data.data().nom
    })
  },
  logout(state) {
    state.loggedIn = false;
    state.userID = "";
    state.userFirstName = "";
    state.userLastName = "";
  }
}

const actions = {
  createAccount(context, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(cred => {
      db.collection("users").doc(cred.user.uid).set({
        prenom: payload.firstName,
        nom: payload.lastName
      }).then(() => {
        context.commit('setAccountState', cred.user);
      })
    });
  },
  logIn(context, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(cred => {
      context.commit('setAccountState', cred.user);
    }).catch(error => {
      alert(error.message);
    });
  },
  logout(context) {
    firebase.auth().signOut().then(() => {
      context.commit('logout');
    });
  },
  initialAuth(context, user) {
    context.commit('setAccountState', user);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
