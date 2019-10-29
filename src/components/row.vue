<template>
  <div class="vigour-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-row',
  props: {
    gutter: [String, Number],
    align: {
      type: String,
      validator(value) {
        return ['left', 'center', 'right'].includes(value);
      },
    },
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
    rowClass() {
      const { align } = this;
      return [align && `vigour-row-${align}`];
    },
  },
};
</script>

<style lang="scss">
.vigour-row {
  display: flex;
  box-sizing: border-box;

  &-left {
    justify-content: flex-start;
  }

  &-center {
    justify-content: center;
  }

  &-right {
    justify-content: flex-end;
  }
}
</style>
