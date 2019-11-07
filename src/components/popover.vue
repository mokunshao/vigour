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
      console.log('clickoutside');
      const condition1 = this.$refs.popover.contains(e.target);
      const condition2 = this.$refs.content.contains(e.target);
      if (!(condition1 || condition2)) {
        this.close();
      }
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.setPosition();
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
    },
    setPosition() {
      const { left, top } = this.$refs.trigger.getBoundingClientRect();
      this.$refs.content.style.left = `${left + window.scrollX}px`;
      this.$refs.content.style.top = `${top + window.scrollY}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
.vigour-popover {
  display: inline-flex;
  vertical-align: middle;
  position: relative;

  &-content {
    border: 1px solid red;
    position: absolute;
    transform: translateY(-100%);
  }
}
</style>
