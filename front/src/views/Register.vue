<template>
  <RegisterForm @register="register" />
</template>

<script>
import RegisterForm from "@/components/RegisterForm";

export default {
  name: "Register",
  components: {
    RegisterForm
  },
  methods: {
    async register(user) {
      let response = await fetch("http://localhost:3000/api/user/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        let result = await response.json();
        alert("Congrats, you have created an account.");
        this.$router.push("/");
      } else {
        let result = await response.json();
        console.log(`Registration error:${result.error}`);
      }
    }
  }
};
</script>
