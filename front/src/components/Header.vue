<template>
  <header id="header">
    <div id="user">
      <p id="current-user" v-html="username"></p>
      <button id="logout" v-on:click="logout">
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </div>
    <p id="current-date">
      {{ date.weekDay }}<span>,</span>
      {{ date.monthDate }}
    </p>
  </header>
</template>

<script>
const username = "";
const date = {
  weekDay: "",
  monthDate: ""
};

export default {
  data() {
    return { username, date };
  },
  created() {
    this.parseName();
    this.getDate();
  },
  methods: {
    parseName() {
      this.username = localStorage.getItem("username");
    },
    getDate() {
      let now = new Date();
      date.weekDay = now.toLocaleDateString("en-Us", { weekday: "long" });
      date.monthDate = now.toLocaleDateString("en-Us", {
        month: "short",
        day: "numeric"
      });
    },
    logout() {
      this.$emit("logout");
    }
  }
};
</script>

<style scoped>
#header {
  font-family: "why so serious", sans-serif;
  width: 100%;
  height: 200px;
  background: url(../assets/joker.jpg);
  opacity: 0.9;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-bottom: solid 1px #737373;
}

#user {
  position: absolute;
  top: 15px;
  right: 9px;
  display: flex;
  color: #fff;
  font-size: 16px;
}

#current-user {
  max-width: 120px;
  margin: 0px;
  text-align: end;
}

#logout {
  margin-left: 12px;
  color: #8c8c8c;
  background-color: transparent;
  border: none;
}

#logout i {
  font-size: 16px;
}

#logout:hover {
  cursor: pointer;
  color: #e50914;
}

#current-date {
  color: #fff;
  position: absolute;
  margin: 0px;
  bottom: 10px;
  left: 15px;
  font-size: 18px;
  max-width: 170px;
}

#current-date span {
  font-family: sans-serif;
}
</style>
