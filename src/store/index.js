import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";

export default new Vuex.Store({
  state: {
    playerNames: [],
    categories: [],
    questions: {},
    correct: 0,
    wrong: 0,
    value: 0,
    isAnswered: false,
  },
  getters: {
    CATEGORIES: (state) => state.categories,

    QUESTIONS: (state) => {
      return state.questions;
    },
    CORRECT: (state) => {
      return state.correct;
    },
    WRONG: (state) => {
      return state.wrong;
    },
    PLAYERNAMES: (state) => {
      return state.playerNames;
    },
    VALUE: (state) => {
      return state.value;
    }
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    SET_QUESTIONS: (state, questions) => {
      state.questions = questions;
    },
    SET_CORRECT: (state, question) => {
      state.value += question.value;
      state.correct += 1;

      state.questions.data.forEach((item, index) => {
        if (item.id === question.id) {
          console.log(
            "set_correct is working",
            state.questions.data[index].isAnswered
          );
          state.questions.data[index].isAnswered = true;
        }
      });
      console.log(state.questions.data);
    },
    SET_WRONG: (state, question) => {
      state.value -= parseInt(question.value);
      state.wrong += 1;

      state.questions.data.forEach((item, index) => {
        if (item.id === question.id) {
          state.questions.data[index].isAnswered = true;
        }
      });
    },
    GET_PLAYERNAMES: (state, playerNames) => {
      state.playerNames = playerNames;
    },
    POST_PLAYERNAMES: (state, playerNames) => {
      console.log(state, playerNames);
    },
  },

  actions: {
    GET_CATEGORIES: ({ commit }) => {
      axios.get("http://localhost:3000/categories").then((res) => {
        commit("SET_CATEGORIES", res);
      });
    },
    GET_QUESTIONS: ({ commit }) => {
      axios.get("http://localhost:3000/questions").then((res) => {
        commit("SET_QUESTIONS", res);
      });
    },
    GET_CORRECT: ({ commit }, value) => {
      commit("SET_CORRECT", value);
    },
    GET_WRONG: ({ commit }, value) => {
      commit("SET_WRONG", value);
    },
    POST_PLAYERNAMES: ({ commit }, data) => {
      axios
        .post("http://localhost:3000/playerNames", {
          playerName: data,
        })
        .then(() => commit("GET_PLAYERNAMES", data))
        .catch(() => {});
    },
    GET_PLAYERNAMES: ({ commit }) => {
      axios.get("http://localhost:3000/playerNames").then((res) => {
        commit("GET_PLAYERNAMES", res);
      });
    },
  },
});
