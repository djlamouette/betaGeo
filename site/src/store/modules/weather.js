import axios from 'axios'

const state = {
  weather: {},
  gotWeather: false,
  condition: ""
}

const getters = {
  weather(state) {
    return state.weather;
  },
  gotWeather(state) {
    return state.gotWeather;
  }
}

const mutations = {
  getCondition(state, initialCondition) {
    switch (initialCondition) {
      case "Ensoleillé":
      case "Nuit claire":
      case "Nuit bien dégagée":
        state.condition = "day"
        break

      case "Ciel voilé":
      case "Nuit légèrement voilée":
      case "Faibles passages nuageux":
      case "Brouillard":
      case "Stratus":
      case "Stratus se dissipant":
      case "Nuit claire et stratus":
      case "Eclaircies":
      case "Nuit nuageuse":
      case "Fortement nuageux":
      case "Faiblement nuageux":
      case "Développement nuageux":
      case "Nuit avec développement nuageux":
        state.condition = "cloudy"
        break

      case "Averses de pluie faible":
      case "Nuit avec averses":
      case "Averses de pluie modérée":
      case "Averses de pluie forte":
      case "Couvert avec averses":
      case "Pluie faible":
      case "Pluie forte":
      case "Pluie modérée":
        state.condition = "rainy-1"
        break

      case "Faiblement orageux":
      case "Nuit faiblement orageuse":
      case "Orage modéré":
      case "Fortement orageux":
        state.condition = "thunder"
        break

      case "Averses de neige faible":
      case "Nuit avec averses de neige faible":
      case "Neige faible":
      case "Neige modérée":
      case "Neige forte":
      case "Pluie et neige mêlée faible":
      case "Pluie et neige mêlée modérée":
      case "Pluie et neige mêlée forte":
        state.condition = "snowy-6"
        break;
      default:

    }
  }
}

const actions = {
  getWeather(context) {
    axios
      .get("https://www.prevision-meteo.ch/services/json/Lille")
      .then(response => {
        context.state.weather = response;
        context.state.gotWeather = true;
        context.commit('getCondition', response.data.current_condition.condition)
      });
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
