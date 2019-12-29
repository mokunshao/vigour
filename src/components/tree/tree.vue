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
  provide() {
    return {
      tree: {
        onClick: this.onClick,
        onToggle: this.onToggle,
        state: this,
      },
    };
  },
  components: {
    [TreeItem.name]: TreeItem,
  },
  props: {
    data: {
      type: Array,
    },
    onToggle: {
      type: Function,
    },
    onClick: {
      type: Function,
    },
  },
  data() {
    return {
      selected: null,
    };
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
