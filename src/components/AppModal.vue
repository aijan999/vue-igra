<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        {{ questions.question }}
      </div>
      <hr />
      <div class="modal-body">
        <input
          ref="inputBar"
          class="reply_input"
          placeholder="Please reply here"
          v-model="reply"
          type="text"
        />
      </div>
      <hr />
      <div class="modal-footer">
        <button
          v-if="!showAlert || !showAlert2"
          class="btn-submit"
          @click="submit()"
          :disabled="isDisabled"
        >
          Reply
        </button>
        <button class="btn-close" @click="closeModal()">Close</button>
        <p class="timer-text">Time left: {{ timerCount }}</p>

        <alert-modal
          v-if="showAlert"
          @clicked1="onGrandChildClick()"
        ></alert-modal>
        <alert-modal-2
          v-if="showAlert2"
          @clicked1="onGrandChildClick()"
        ></alert-modal-2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import AlertModal from "./AlertModal.vue";
import AlertModal2 from "./AlertModal2.vue";

export default {
  components: { AlertModal, AlertModal2 },
  name: "app-modal",
  props: {
    showModal: Boolean,
    id: Number,
  },

  data() {
    return {
      questions: {},
      reply: "",
      timerCount: 30,
      showAlert: false,
      showAlert2: false,
    };
  },
  computed: {
    ...mapGetters(["CORRECT", "WRONG", "QUESTIONS"]),

    isDisabled() {
      return !this.reply;
    },
  },
  methods: {
    focusInput(ref) {
      this.$refs[ref].focus();
    },
    closeModal() {
      this.$emit("clicked");
    },
    onGrandChildClick() {
      this.$emit("clicked1");
    },
    ...mapActions(["GET_CORRECT", "GET_WRONG", "GET_QUESTIONS"]),
    ...mapMutations(["SET_CORRECT", "SET_WRONG"]),

    submit() {
      if (this.questions.answer.toLowerCase() === this.reply.toLowerCase()) {
        this.SET_CORRECT(this.questions);
        // alert("Bingo! The answer is correct");
        this.showAlert = true;
      } else {
        this.SET_WRONG(this.questions);
        // alert("The answer is wrong!");
        this.showAlert2 = true;
      }
    },
  },
 
  mounted() {
    this.focusInput("inputBar"),
      (this.questions = this.QUESTIONS.data.filter(
        (item) => item.id == this.id
      )[0]);
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.closeModal();
          this.SET_WRONG(this.questions.value);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 100%;
  height: 400px;
  max-height: 100%;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: #87cefa;
  padding: 40px 30px 20px;
}
.modal-header {
  font-size: 22px;
  font-family: Snell Roundhand, cursive;
  font-weight: normal;
  color: #0000cd;
  margin-bottom: 40px;
}
.reply_input {
  width: 55%;
  height: 30px;
  padding: 5px;
  font-size: 18px;
  background-color: #87ceeb;
  opacity: 0.9;
  color: #0000cd;
  font-family: Bookman, URW Bookman L, serif;
  border: 1px solid #800080;
  margin: 20px 110px;
  border-radius: 0.3rem;
  text-align: center;
}

.btn-submit {
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: #4169e1;
  color: #ffff00;
  font-style: cursive;
  font-weight: normal;
  font-size: 18px;
  border-radius: 0.4rem;
  margin-right: 30px;
  margin-left: 150px;
  margin-top: 30px;
}

.btn-close {
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: #4169e1;
  color: #ffff00;
  font-style: cursive;
  font-weight: normal;
  font-size: 18px;
  border-radius: 0.4rem;
}

.timer-text {
  font-size: 20px;
  font-family: Georgia, serif;
  font-weight: normal;
  color: #0000cd;
  margin-bottom: 40px;
}
</style>
