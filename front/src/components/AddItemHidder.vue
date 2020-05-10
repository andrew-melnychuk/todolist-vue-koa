<template>
  <button id="add-item-btn">
    <i v-on:click="$emit('hide-item')" class="fas fa-chevron-down"></i>
  </button>
</template>

<script>
// export default {};
</script>

<style scoped>
#add-item-btn {
  width: 100%;
  height: 30px;
  background: transparent;
  border: none;
  padding: 0px;
}

#add-item-btn i {
  color: #8c8c8c;
  font-size: 24px;
  width: 100%;
}

#add-item-btn i:hover {
  cursor: pointer;
  color: #fff;
}
</style>