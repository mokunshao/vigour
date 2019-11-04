<template>
  <div class="vigour-tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-tabs-pane',
  inject: ['eventBus'],
  props: {
    name: {
      type: String,
    },
  },
  mounted() {
    this.eventBus.$on('update:selected', selected => console.log(selected));
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-tabs-pane {
  border: 1px solid black;
  padding: $padding;
}
</style>
