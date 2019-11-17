<template>
  <div class="vigour-cascader-content">
    <div class="vigour-cascader-content-column">
      <div
        class="vigour-cascader-content-tab"
        v-for="option in options"
        :key="option.name"
        @click="leftSelected = option"
      >
        {{ option.name }}
      </div>
    </div>
    <vigour-cascader-content
      :options="subColumn"
      v-if="subColumn"
    ></vigour-cascader-content>
  </div>
</template>

<script>
export default {
  name: 'vigour-cascader-content',
  props: {
    options: {
      type: Array,
    },
  },
  data() {
    return {
      leftSelected: null,
    };
  },
  computed: {
    subColumn: {
      get() {
        if (this.leftSelected && this.leftSelected.children) {
          return this.leftSelected.children;
        }
        return null;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-cascader-content {
  display: flex;
  flex-direction: row;
  align-items: stretch;

  &-tab {
    border: 1px solid black;
    padding: $padding;
  }
}
</style>
