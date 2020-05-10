<template>
  <div class="login" id="login-form">
    <h2>Sign In</h2>
    <form @submit.prevent="onSubmit">
      <input id="username" type="text" placeholder="Username" v-model="username" />
      <input id="password" type="password" placeholder="Password" v-model="password" />
      <button id="login-btn" type="submit">Sign In</button>
    </form>
    <p>
      New here?
      <router-link id="sign-up" to="/register">Sign up now</router-link>.
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

        this.$emit("login", user);
        this.username = "";
        this.password = "";
      }
    }
  }
};
</script>

<style scoped>
.login,
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

.login input,
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

.login input::placeholder,
.register input::placeholder {
  color: #8c8c8c;
}

.login button,
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

.login p,
.register p {
  font-size: 16px;
  font-weight: 500;
  color: #737373;
  margin-top: 16px;
  text-align: center;
}

.login p #sign-up,
.register p #sign-in {
  cursor: pointer;
  text-decoration: none;
  color: #fff;
}
</style>
