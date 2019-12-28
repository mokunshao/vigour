<template>
  <ul class="vigour-tree">
    <vigour-tree-item
      v-for="(item, index) in data"
      :key="item.id ? item.id : index"
      :data="item"
    ></vigour-tree-item>
  </ul>
</template>

<script>
import TreeItem from './tree-item.vue';

export default {
  name: 'vigour-tree',
  components: {
    [TreeItem.name]: TreeItem,
  },
  props: {
    data: {},
  },
};
</script>

<style lang="scss" scoped>
.vigour-tree {
  border: 1px solid black;
  padding: 1em;
}
</style>
