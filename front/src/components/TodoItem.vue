<template>
  <li>
    <div class="item-head flex">
      <p class="date">{{ item.date }}</p>
      <i v-on:click="show" class="fas fa-caret-down"></i>
      <p class="name">{{ item.name }}</p>
      <i
        v-on:click="$emit('remove-item', item.task_id)"
        class="fa fa-trash-o"
      ></i>
    </div>
    <p class="item-body display-none">
      {{ item.description }}
    </p>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    show() {
      let elem = event.target;
      let elemDescription = elem.parentElement.nextElementSibling;

      let margin = elem.previousElementSibling.offsetWidth;
      let width = elem.nextElementSibling.offsetWidth;

      elemDescription.style.margin = `0px 0px 0px ${margin + 44}px`;
      elemDescription.style.width = `${width}px`;

      elemDescription.classList.toggle("display-none");
      elem.classList.toggle("fa-caret-up");
      elem.classList.toggle("fa-caret-down");
    }
  }
};
</script>

<style scoped>
li {
  width: 100%;
  list-style: none;
  border-bottom: solid 1px #737373;
}

.item-head {
  min-height: 40px;
  color: #fff;
  font-size: 16px;
  align-items: center;
}

.item-body {
  /* max-width: calc(100% - 118.05px); */
  /* margin-left: 74.05px; */
  color: #fff;
  font-size: 15px;
  line-height: 1.2em;
}

.date {
  margin: 0px 15px;
}

.name {
  margin: 0px 0px;
  width: 100%;
  text-align: start;
}

.fa-caret-down,
.fa-caret-up {
  margin-right: 4px;
}

.fa-caret-down:hover,
.fa-caret-up:hover {
  cursor: pointer;
}

.fa-trash-o {
  margin: 0px 15px;
  color: #8c8c8c;
}

.fa-trash-o:hover {
  color: #e50914;
  cursor: pointer;
}
</style>
