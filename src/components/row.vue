<template>
  <div class="vigour-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-row',
  props: {
    gutter: [String, Number],
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.$data.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      const { gutter } = this;
      return { marginLeft: `${-gutter / 2}px`, marginRight: `${-gutter / 2}px` };
    },
  },
};
</script>

<style lang="scss">
.vigour-row {
  display: flex;
  box-sizing: border-box;
}
</style>
