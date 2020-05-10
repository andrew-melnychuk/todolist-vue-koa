<template>
  <LoginForm @login="login" />
</template>

<script>
import LoginForm from "@/components/LoginForm";

let tasks = [];

export default {
  name: "Login",
  data() {
    return {
      items: tasks
    };
  },
  components: {
    LoginForm
  },
  methods: {
    login(user) {
      (async () => {
        let response = await fetch("http://localhost:3000/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        });

        if (response.ok) {
          let result = await response.json();
          localStorage.setItem("token", result.WebAPIToken);
          localStorage.setItem("username", user.username);
          this.getTasks();
          this.$router.push("/list");
        } else {
          let result = await response.json();
          console.log(`LoginPage, error: ${result.error}`);
        }
      })();
    },
    async getTasks() {
      let response = await fetch("http://localhost:3000/api/tasks");

      if (response.ok) {
        let result = await response.json();
        tasks = result;
      } else {
        console.log(`Task List, error ${response.error}`);
      }
    }
  }
};
</script>
