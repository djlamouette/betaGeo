import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users.js'
import weather from './modules/weather.js'


Vue.use(Vuex);

export const store = new Vuex.Store({

  modules: {
    users,
    weather
  }
})
