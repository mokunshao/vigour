<template>
  <div class="vigour-tabs-head">
    <slot></slot>
    <div class="vigour-tabs-head-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigour-tabs-head',
};
</script>

<style lang="scss" scoped>
.vigour-tabs-head {
  border: 1px solid black;
  display: flex;

  &-actions {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
}
</style>
