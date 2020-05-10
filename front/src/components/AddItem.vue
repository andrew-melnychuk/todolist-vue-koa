<template>
  <form id="add-item" class="display-none" @submit.prevent="onSubmit">
    <div id="add-item-top" class="flex">
      <input type="text" class="date" placeholder="Date" required minlength="1" v-model="date" />
      <input type="text" id="name" placeholder="Name" required minlength="1" v-model="name" />
    </div>
    <div id="add-item-bottom" class="flex">
      <textarea id="description" v-model="description"></textarea>
      <button type="submit" id="add-btn">
        <i class="fas fa-plus"></i>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      name: "",
      description: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.name.trim() && this.date.trim()) {
        const newItem = {
          WebAPIToken: localStorage.token,
          name: this.name,
          description: this.description,
          date: this.date
        };

        this.$emit("add-item", newItem);
        this.name = "";
        this.date = "";
        this.description = "";
      }
    }
  }
};
</script>

<style scoped>
#add-item {
  width: 100%;
}

#add-item-top {
  height: 30px;
  margin: 10px;
}

#add-item .date {
  width: 60px;
  font-size: 16px;
  background: #333;
  color: #fff;
  border: none;
  margin-right: 10px;
  text-align: center;
}

#add-item #name {
  width: calc(100% - 70px);
  font-size: 16px;
  background: #333;
  color: #fff;
  border: none;
  text-indent: 10px;
}

#add-item-bottom {
  height: 60px;
  margin: 0px 10px 5px;
}

#add-item textarea {
  width: calc(100% - 70px);
  font-size: 16px;
  resize: none;
  background: #333;
  border: none;
  margin-right: 10px;
  padding: 5px;
  text-indent: 10px;
  color: #fff;
}

#add-btn,
#update-btn {
  width: 60px;
  background: #333;
  color: #8c8c8c;
  border: none;
}

#add-btn .fa-plus {
  font-size: 30px;
}

#add-btn:hover,
#update-btn:hover {
  cursor: pointer;
  color: #fff;
}
</style>
