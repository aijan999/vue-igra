<template>
  <div id="game-board">
    <li class="router-text"><router-link to="stats">Stats</router-link></li>
    <li class="router-text">
      <router-link to="game-board">Game Board</router-link>
    </li>

    <h3 class="text">
      Player name :
      {{ plnames.playerName }}
    </h3>

    <ul class="screens">
      <li
        class="screen category"
        v-for="(category, id) in categories"
        :key="`category-${id}`"
      >
        {{ category.title }}
      </li>

      <li
        class="screen question"
        v-for="(question, id) in questions"
        :key="`question-${id}`"
      >
        <button
          v-if="!showModal"
          :disabled="question.isAnswered"
          class="btn-value"
          @click="openModal(question.id)"
        >
          ${{ question.value }}
        </button>
      </li>
      <app-modal
        v-if="showModal"
        :id="game_id"
        @clicked="onChildClick()"
        @clicked1="onGrandChildClick()"
      ></app-modal>
    </ul>
    <button class="btn-end" @click="endGame()">End the game</button>
  </div>
</template>

<script>
import AppModal from "./AppModal.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "game-board",
  components: {
    AppModal,
  },
  data() {
    return {
      categories: [],
      questions: {},
      showModal: false,
      game_id: null
    };
  },
  computed: {
    ...mapGetters(["CATEGORIES", "QUESTIONS", "PLAYERNAMES"]),

    plnames() {
      if (
        this.PLAYERNAMES &&
        this.PLAYERNAMES.data &&
        this.PLAYERNAMES.data.length
      ) {
        return this.PLAYERNAMES.data[this.PLAYERNAMES.data.length - 1];
      } else {
        return {};
      }
    },
  },

  methods: {
    ...mapActions(["GET_CATEGORIES", "GET_QUESTIONS", "GET_PLAYERNAMES"]),

    openModal(id) {
      this.showModal = true;
      this.game_id = id;
    },
    onChildClick() {
      this.showModal = false;
    },
    onGrandChildClick() {
      this.showModal = false;
    },
    endGame() {
      this.$router.push({ name: "stats" });
    },
  },

  mounted() {
    this.categories = this.CATEGORIES.data;
    this.questions = this.QUESTIONS.data;
    this.playerNames = this.plnames;
  },
};
</script>

<style scoped>
#game-board {
  width: 1200px;
}

.text {
  font-size: 34px;
  font-family: Stencil Std, fantasy;
  color: #ffd700;
  font-weight: normal;
  margin-left: 400px;
}

.screens {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0.8rem;
  padding: 0;
  margin: 0;
  height: 100%;
  margin-top: 60px;
}

li {
  list-style: none;
  margin-top: 20px;
}

.screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 2rem;
  text-transform: uppercase;
  padding: 1vw;
  transition: 0.2s all ease-in-out;
  border: 2px solid white;
  width: 200px;
}

.category {
  font-size: 2.3vw;
  line-height: 1;
}

.question {
  font-size: 16px;
}

.screen {
  border-radius: 1rem;
}

.category {
  font-size: 34px;
  font-family: Stencil Std, fantasy;
  color: #ffd700;
  font-weight: normal;
  background-color: #4169e1;
}

.screen.question {
  font-size: 14px;
}

.btn-value {
  width: 190px;
  height: 50px;
  cursor: pointer;
  background-color: #4169e1;
  color: #ffff00;
  font-family: Stencil Std, fantasy;
  font-size: 34px;
  border-radius: 0.9rem;
}

.btn-end {
  width: 190px;
  height: 50px;
  cursor: pointer;
  background-color: #4169e1;
  color: #ffff00;
  font-size: 20px;
  border-radius: 0.3rem;
  margin-top: 30px;
  margin-left: 30px;
  font-family: Stencil Std, fantasy;
}

.router-text {
  width: 150px;
  height: 35px;
  cursor: pointer;
  background-color: #4169e1;
  color: #ffff00;
  font-size: 20px;
  border-radius: 0.3rem;
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
  margin-top: 30px;
  margin-left: 30px;
  text-align: center;
}
</style>
