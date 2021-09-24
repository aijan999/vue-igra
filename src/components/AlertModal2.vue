<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <p>Your answer is:</p>
      </div>
      <hr />
      <div class="modal-body">
        <p>wrong!</p>
      </div>
      <hr />
      <div class="modal-footer">
        <button class="btn-close" @click="close">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alert-modal2",
  props: {
    showAlert2: Boolean,
    id: Number,
  },
  data() {
    return {
    
    };
  },
  methods: {
    close() {
      this.$emit("clicked1");
    },
     onGrandChildClick() {
      this.showModal = false
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: #87cefa;
  padding: 40px 30px 20px;
}
.modal-header {
  font-size: 32px;
  font-family: Snell Roundhand, cursive;
  font-weight: normal;
  color: #0000cd;
  margin-bottom: 40px;
}

.modal-header p {
  text-align: center;
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

.modal-body {
  font-size: 34px;
  font-family: Stencil Std, fantasy;
  color: #ffd700;
  font-weight: normal;
  background-color: #4169e1;
  text-align: center;
  letter-spacing: 3px;
}
</style>
