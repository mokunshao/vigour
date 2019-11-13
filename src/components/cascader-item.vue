<template>
  <div class="vigour-cascader-item">
    {{ option.name }}
    <vigour-cascader-item
      v-for="item in option.children"
      :key="item.name"
      :option="item"
    ></vigour-cascader-item>
  </div>
</template>

<script>
export default {
  name: 'vigour-cascader-item',
  props: {
    option: {
      type: Object,
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
