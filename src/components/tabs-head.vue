<template>
  <div
    class="vigour-tabs-head"
    :class="{ [`vigour-tabs-head-vertical`]: isVertical }"
  >
    <slot></slot>
    <div class="vigour-tabs-head-underline" ref="underline"></div>
    <div class="vigour-tabs-head-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigour-tabs-head',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (selected, vm) => {
      if (this.isVertical) {
        const height = vm.$el.offsetHeight;
        const top = vm.$el.offsetTop;
        this.$refs.underline.style.height = `${height}px`;
        this.$refs.underline.style.top = `${top}px`;
        return;
      }
      const width = vm.$el.offsetWidth;
      const left = vm.$el.offsetLeft;
      this.$refs.underline.style.left = `${left}px`;
      this.$refs.underline.style.width = `${width}px`;
    });
  },
  computed: {
    isVertical() { return this.$parent.direction === 'vertical'; },
  },
};
</script>

<style lang="scss" scoped>
.vigour-tabs-head {
  display: flex;
  position: relative;
  flex-direction: row;

  &-underline {
    position: absolute;
    bottom: 0;
    border-bottom: 3px solid black;
    transition: all 300ms;
  }

  &-actions {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  &-vertical {
    flex-direction: column;
  }

  &-vertical &-underline {
    bottom: auto;
    border-bottom: none;
    right: 0;
    border-right: 3px solid black;
  }
}
</style>
