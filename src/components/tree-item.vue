<template>
  <li class="vigour-tree-item">
    <div @click="toggleOpen" class="vigour-tree-item-label">
      <span v-if="hasChild">{{ isExpanded ? "-" : "+" }}</span>
      <span>{{ item.label }}</span>
    </div>
    <ul class="vigour-tree" v-if="hasChild">
      <vigour-tree-item
        v-show="isExpanded"
        v-for="(item, index) in item.children"
        :key="item.id ? item.id : index"
        :item="item"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'vigour-tree-item',
  props: {
    item: {},
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  computed: {
    hasChild() {
      return !!(this.item.children && this.item.children.length);
    },
  },
  methods: {
    toggleOpen() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.vigour-tree {
  padding: 0;
  margin: 0;
}

.vigour-tree-item {
  margin-left: 1em;
  list-style: none;

  &-label {
    cursor: pointer;
  }
}
</style>
