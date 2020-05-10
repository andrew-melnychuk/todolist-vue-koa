<template>
  <div id="list">
    <Header @logout="logout" />
    <div id="wrapper">
      <TodoList v-bind:items="items" @remove-item="dropItem" />
      <AddItem @add-item="addItem" />
      <AddItemHidder @hide-item="hideItem" />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddItem from "@/components/AddItem";
import AddItemHidder from "@/components/AddItemHidder";
import Header from "@/components/Header";
import Login from "@/views/Login";

let tasks = Login.data();

export default {
  name: "List",
  data() {
    return tasks;
  },
  components: {
    Header,
    TodoList,
    AddItem,
    AddItemHidder
  },
  // mounted() {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //     .then(response => response.json())
  //     .then(json => {
  //       this.items = json;
  //     });
  // },
  methods: {
    async logout() {
      let response = await fetch("http://localhost:3000/api/auth/out");
      if (response.ok) {
        let result = await response.json();
        console.log(result.message);
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        this.$router.push("/");
      } else {
        let result = await response.json();
        console.log(result.error);
      }
    },
    async dropItem(task_id) {
      let body = {
        WebAPIToken: localStorage.token,
        task_id: task_id
      };

      let response = await fetch(`http://localhost:3000/api/tasks/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        let result = await response.json();
        console.log(`Task List, delete task message: ${result.message}`);
        this.items = this.items.filter(t => t.task_id !== task_id);
      } else {
        let result = await response.json();
        console.log(`Task List, error: ${result.error}`);
      }
    },
    addItem(item) {
      (async () => {
        let response = await fetch("http://localhost:3000/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(item)
        });

        if (response.ok) {
          let result = await response.json();
          this.items.push(result);
        } else {
          let result = await response.json();
          console.log(`Task List, add task error: ${result.error}`);
        }
      })();
    },
    hideItem() {
      let elem = event.target;
      let addItemForm = document.getElementById("add-item");

      addItemForm.classList.toggle("display-none");
      elem.classList.toggle("fa-chevron-up");
      elem.classList.toggle("fa-chevron-down");
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "why so serious";
  src: url(../assets/fonts/whysoserious.ttf);
}

#wrapper {
  width: 600px;
  background: rgba(0, 0, 0, 0.85);
}

.flex {
  display: flex;
}

.display-none {
  display: none;
}
</style>
