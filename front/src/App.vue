<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    dropItem(id) {
      this.items = this.items.filter((t) => t.id !== id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: url(./assets/img.jpg) center no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  color: #fff;
}

.flex {
  display: flex;
}

.display-none {
  display: none;
}
</style>
