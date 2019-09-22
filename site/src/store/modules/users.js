const state = {
  loggedIn: false,
  userID: '',
  userFirstName: '',
  userLastName: ''
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
  createAccount(state, {cred, payload}) {
    state.loggedIn = true;
    state.userID = cred.user.uid;
    state.userFirstName = payload.firstName;
    state.userLastName = payload.lastName;
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
      });
      context.commit('createAccount', {cred, payload});
    });
  },
  logout(context) {
    firebase.auth().signOut().then(() => {
      context.commit('logout');
    });
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
