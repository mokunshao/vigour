<template>
  <div class="vigour-popover" ref="popover">
    <div class="vigour-popover-content" ref="content" v-if="visible">
      <slot name="content"></slot>
    </div>
    <div class="vigour-popover-trigger" ref="trigger" @click="clickTrigger">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigour-popover',
  data() { return { visible: false }; },
  methods: {
    clickOutside(e) {
      const condition1 = this.$refs.popover.contains(e.target);
      const condition2 = this.$refs.content.contains(e.target);
      if (!(condition1 || condition2)) {
        this.close();
      }
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        document.addEventListener('click', this.clickOutside);
        document.body.appendChild(this.$refs.content);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener('click', this.clickOutside);
    },
    clickTrigger() {
      if (this.visible) {
        this.close();
      } else {
        this.open();
      }
      // const { left, top } = this.$refs.trigger.getBoundingClientRect();
      // console.log(left, top);
      // this.$refs.content.style.left = left;
      // this.$refs.content.style.top = top;
    },
  },
};
</script>

<style lang="scss">
.vigour-popover {
  display: inline-flex;
  vertical-align: middle;
  position: relative;

  &-content {
    border: 1px solid red;
  }
}
</style>
