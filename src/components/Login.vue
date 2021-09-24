<template>
  <div id="login">
    <input
      ref="inputBar"
      class="login-input"
      type="text"
      v-model="playerName"
      placeholder="Please enter your name"
      @keyup.enter="login()"
    /><br />

    <button class="btn-login" type="button" @click="login()">Sign in</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      playerName: "",
    };
  },

  computed: {
    ...mapGetters(["PLAYERNAMES"]),
  },

  mounted() {
    this.focusInput("inputBar");
  },

  methods: {
    focusInput(ref) {
      this.$refs[ref].focus();
    },

    ...mapActions([
      "POST_PLAYERNAMES",
      "GET_CATEGORIES",
      "GET_QUESTIONS",
      "GET_PLAYERNAMES",
    ]),

    async login() {
      this.focusInput("inputBar");
      await this.POST_PLAYERNAMES(this.playerName);
      if (this.playerName != "") {
        let index = /[a-z]/;
        if (this.playerName.match(index)) {
          this.$emit("authenticated", true);
          this.$router.push({ name: "secure" });
          await this.GET_CATEGORIES();
          await this.GET_QUESTIONS();
          await this.GET_PLAYERNAMES();
        } else {
          alert(
            "The playerName is incorrect. Please use letters, numbers, symbols mixed or just letters. Only numbers are invalid."
          );
        }
      } else {
        alert("The playerName is invalid. Try again!");
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  height: 100px;
  background-color: #87ceeb;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
  border-radius: 0.5rem;
  display: flex;
}

.login-input {
  width: 200px;
  height: 30px;
  color: blue;
  font-size: 20px;
  border-radius: 0.3rem;
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
  margin-top: 30px;
  margin-left: 40px;
  background-color: #87ceeb;
  border: 2px solid #4169e1;
}

.btn-login {
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
}
</style>
