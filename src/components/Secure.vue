<template>
  <div id="secure">
    <h1>Welcome to a jeopardy game</h1>
    <router-link to="/game-board" tag="button" class="start">start</router-link>
  </div>
</template>

<script>
export default {
  name: "Secure",
  data() {
    return {};
  },
};
</script>

<style scoped>
#secure {
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
  height: 300px;
  background-color: #87ceeb;
  color: #ffff00;
  font-family: Stencil Std, fantasy;
  font-size: 20px;
  font-weight: normal;
  margin-top: 100px;
  border-radius: 0.5rem;
  text-align: center;
}

.start {
  width: 100px;
  height: 45px;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Snell Roundhand, cursive;
  color: #ffff00;
  font-size: 28px;
  text-align: center;
  background-color: #4169e1;
}

button {
  font-family: Snell Roundhand, cursive;
  color: #0000cd;
  font-size: 28px;
}
h1 {
  margin-bottom: 60px;
  margin-top: 20px;
}
</style>
