<template>
  <div class="vigour-tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-tabs-pane',
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-tabs-pane {
  border: 1px solid black;
  padding: $padding;
}
</style>
