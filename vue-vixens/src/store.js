import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [
      {
        name: "Max",
        breed: "husky",
        img: "https://dog.ceo/api/img/husky/n02110185_1469.jpg"
      },
      {
        name: "Rusty",
        breed: "shiba",
        img: "https://dog.ceo/api/img/shiba/shiba-13.jpg"
      },
      {
        name: "Rocco",
        breed: "boxer",
        img: "https://dog.ceo/api/img/boxer/n02108089_14112.jpg"
      }
    ]
  },
  mutations: {
    addToFavorites(state, payload) {
      if (!state.favorites.includes(payload)) {
        state.favorites.push(payload);
      }
    },
    removeFromFavorites(state, payload) {
      state.favorites.splice(state.favorites.indexOf(payload), 1);
    },
    clearFavorites(state) {
      state.favorites = [];
    }
  },
  actions: {
    addToFavorites({ commit }, payload) {
      commit("addToFavorites", payload);
    },
    removeFromFavorites({ commit }, payload) {
      commit("removeFromFavorites", payload);
    },
    clearFavorites({ commit }) {
      commit("clearFavorites");
    }
  }
});
