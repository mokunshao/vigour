<template>
  <div
    class="vigour-row"
    :style="{ marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-row',
  props: {
    gutter: [String, Number],
  },
};
</script>

<style lang="scss">
.vigour-row {
  display: flex;
  box-sizing: border-box;

  /*   box-sizing: border-box; */
}
</style>
