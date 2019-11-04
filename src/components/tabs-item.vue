<template>
  <div class="vigour-tabs-item" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-tabs-item',
  props: {
    disabled: {
      type: Boolean,
    },
    name: {
      type: String,
    },
  },
  inject: ['eventBus'],
  methods: {
    handleClick() {
      this.eventBus.$emit('update:selected', this.name);
    },
  },
  mounted() {
    this.eventBus.$on('update:selected', selected => console.log(selected));
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-tabs-item {
  border: 1px solid black;
  cursor: pointer;
  padding: $padding;
  display: flex;
  align-items: center;
}
</style>
