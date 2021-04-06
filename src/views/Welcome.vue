<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content">
        <h2 class="teal-text center-align">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name" />
          <div class="center-align">
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
            <button class="btn teal">Enter Chat</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.feedback = null;
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "Please enter a name.";
      }
    },
  },
};
</script>

<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
  margin-bottom: 40px;
}
.welcome button {
  margin: 30px auto;
}
</style>
