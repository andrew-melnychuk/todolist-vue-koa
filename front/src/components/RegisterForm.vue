<template>
  <div class="register" id="register-form">
    <h2>Sign Up</h2>
    <form @submit.prevent="onSubmit">
      <input v-model="username" id="username" type="text" placeholder="Username" />
      <input v-model="password" id="password" type="password" placeholder="Password" />
      <button type="submit" id="register-btn">Sign Up</button>
    </form>
    <p>
      Have an account?
      <router-link id="sign-in" to="/">Sign In</router-link>.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.username.trim() && this.password.trim()) {
        const user = {
          username: this.username,
          password: this.password
        };

        this.$emit("register", user);
        this.username = "";
        this.password = "";
      }
    }
  }
};
</script>

<style scoped>
.register {
  width: 400px;
  min-height: 460px;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px 68px;
  border-radius: 4px;
}

h2 {
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 28px;
}

.register input {
  width: 100%;
  height: 50px;
  text-indent: 10px;
  margin: 0px auto 30px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background: #333;
  color: #fff;
}

.register input::placeholder {
  color: #8c8c8c;
}

.register button {
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  background-color: #e50914;
  color: #fff;
  margin: 12px 0px 12px;
  border: none;
  border-radius: 4px;
  letter-spacing: 0.1px;
  cursor: pointer;
}

.register p {
  font-size: 16px;
  font-weight: 500;
  color: #737373;
  margin-top: 16px;
  text-align: center;
}

.register p #sign-in {
  cursor: pointer;
  text-decoration: none;
  color: #fff;
}
</style>
