<template>
  <div id="stats">
    <li class="router-text"><router-link to="stats">Stats</router-link></li>

    <li class="router-text">
      <router-link to="game-board">Game Board</router-link>
    </li>

    <h3 class="text">
      Player name :
      {{ plnames.playerName }}
    </h3>

    <ul class="screens">
      <li class="screen correct">
        <span>Correct answers : {{ CORRECT }} </span>
      </li>
      <li class="screen wrong">
        <span>Wrong answers : {{ WRONG }}</span>
      </li>
      <li class="screen value-correct">
        <span>Value: {{ VALUE }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "stats",
  components: {},
  data() {
    return {};
  },
  computed: {
     ...mapGetters(["PLAYERNAMES", "CORRECT", "WRONG", "VALUE"]),

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
    ...mapActions(["GET_PLAYERNAMES", "GET_CORRECT", "GET_WRONG"]),
  },
  async created() {
    await this.GET_PLAYERNAMES();
  },
  mounted() {
    this.playerNames = this.plnames;
  },
};
</script>

<style scoped>
#stats {
  width: 1200px;
}

.text {
  font-size: 34px;
  font-family: Stencil Std, fantasy;
  color: #ffd700;
  font-weight: normal;
}

.screens {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 0;
  margin: 0;
  height: 100%;
  margin-top: 80px;
  border: 2px solid white;
  width: 800px;
  border-radius: 1rem;
  margin-left: 150px;
  background-color: #4169e1;
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

  font-size: 24px;
  font-family: Stencil Std, fantasy;
  color: #ffd700;
  font-weight: normal;
  width: 300px;
}

.wrong {
  margin-left: 30px;
}

.screen {
  border-radius: 1rem;
}

.text {
  margin: 20px 450px;
  font-weight: normal;
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
