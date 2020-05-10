<template>
  <div id="item-list">
    <ul id="list">
      <TodoItem
        v-for="item of items"
        v-bind:item="item"
        v-on:remove-item="dropItem"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  props: ["items"],
  components: {
    TodoItem
  },
  methods: {
    dropItem(task_id) {
      this.$emit("remove-item", task_id);
    }
  }
};
</script>

<style scoped>
#list {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 206px;
  overflow: auto;
  border-bottom: solid 1px #737373;
}
</style>
