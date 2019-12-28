<template>
  <ul class="vigour-tree">
    <vigour-tree-item
      v-for="(item, index) in data"
      :key="item.id ? item.id : index"
      :item="item"
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
  padding: 0;
  margin: 0;
  margin-left: -1em;
}
</style>
