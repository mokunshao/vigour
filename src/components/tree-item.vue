<template>
  <li class="vigour-tree-item">
    <div class="vigour-tree-item-row">
      <span
        class="vigour-tree-item-icon"
        @click="toggleExpanded"
        v-if="hasChild"
        >{{ isExpanded ? "-" : "+" }}</span
      >
      <span
        class="vigour-tree-item-label"
        :class="{ 'vigour-tree-item-label-selected': selected }"
        @click="handleClickLabel"
        >{{ item.label }}</span
      >
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
  inject: ['tree'],
  props: {
    item: {
      type: Object,
    },
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
    itemData() {
      return {
        ...this.item,
        isExpanded: this.isExpanded,
        hasChild: this.hasChild,
      };
    },
    selected() {
      return this.tree.state.selected === this.item;
    },
  },
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
      if (this.tree.onToggle) this.tree.onToggle(this.itemData);
    },
    handleClickLabel() {
      this.tree.state.selected = this.item;
      if (this.tree.onClick) this.tree.onClick(this.itemData);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-tree {
  padding: 0;
  margin: 0;
}

.vigour-tree-item {
  margin-left: 1em;
  list-style: none;

  &-row {
    cursor: pointer;
    display: inline-flex;
  }

  &-label {
    &:hover {
      background-color: $grey;
    }

    &-selected {
      background-color: $grey;
    }
  }
}
</style>
