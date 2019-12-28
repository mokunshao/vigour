<template>
  <li class="vigour-tree-item">
    <span>{{ data.label }}</span>
    <ul>
      <vigour-tree-item
        v-for="(item, index) in data.children"
        :key="item.id ? item.id : index"
        :data="item"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'vigour-tree-item',
  components: {
    // [Tree.name]: Tree,
  },
  props: {
    data: {},
  },
};
</script>

<style lang="scss" scoped>
.vigour-tree-tree {
  border: 1px solid blueviolet;
}
</style>
