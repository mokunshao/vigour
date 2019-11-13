<template>
  <div class="vigour-cascader-item">
    <div v-for="item in options" :key="item.name">
      {{ item.name }}
      <vigour-cascader-item :options="item.children"></vigour-cascader-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigour-cascader-item',
  props: {
    options: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.vigour-cascader-item {
  border: 1px solid red;
  padding: 1em;
}
</style>
