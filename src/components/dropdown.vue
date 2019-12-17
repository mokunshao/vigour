<template>
  <div class="vigour-dropdown">
    <div ref="trigger" class="vigour-dropdown-trigger" @click="toggle">
      <slot></slot>
    </div>
    <div class="vigour-dropdown-content" v-if="contentVisible" ref="content">
      <slot name="content" :close="close"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vigour-dropdown',
  destroyed() {
    if (this.contentVisible) {
      this.removeClickEvent();
      this.removeEscEvent();
    }
  },
  watch: {
    contentVisible(visible) {
      if (visible) {
        this.$nextTick(() => {
          this.appendChild();
        });
        this.bindAllEvent();
      } else {
        this.removeAllEvent();
      }
    },
  },
  data() {
    return {
      contentVisible: false,
    };
  },
  computed: {
    triggerElement() {
      return this.$refs.trigger;
    },
    contentElement() {
      return this.$refs.contentt;
    },
  },
  methods: {
    bindAllEvent() {
      this.addClickEvent();
      this.addKeyEscEvent();
      this.addScrollEvent();
    },
    removeAllEvent() {
      this.removeClickEvent();
      this.removeEscEvent();
      this.removeScrollEvent();
    },
    scrollEvent() {
      this.setPosition();
    },
    addScrollEvent() {
      document.addEventListener('scroll', this.scrollEvent);
    },
    removeScrollEvent() {
      document.removeEventListener('scroll', this.scrollEvent);
    },
    clickEvent(e) {
      const { target } = e;
      const a = this.$refs.content && this.$refs.content.contains(target);
      const b = this.$refs.trigger.contains(target);
      if (!(a || b)) {
        this.close();
      }
    },
    addClickEvent() {
      document.addEventListener('click', this.clickEvent);
    },
    removeClickEvent() {
      document.removeEventListener('click', this.clickEvent);
    },
    addKeyEscEvent() {
      document.addEventListener('keydown', this.escEvent);
    },
    removeEscEvent() {
      document.removeEventListener('keydown', this.escEvent);
    },
    escEvent(e) {
      if (e.key === 'Escape' && this.contentVisible) {
        this.close();
      }
    },
    open() {
      this.contentVisible = true;
    },
    appendChild() {
      document.body.appendChild(this.$refs.content);
      this.setWidth();
      this.setPosition();
    },
    close() {
      this.contentVisible = false;
    },
    toggle() {
      if (this.contentVisible) {
        this.close();
      } else {
        this.open();
      }
    },
    setWidth() {
      const { style } = this.$refs.content;
      const triggerElementPosition = this.$refs.trigger.getBoundingClientRect();
      style.minWidth = `${triggerElementPosition.width}px`;
    },
    setPosition() {
      const { style } = this.$refs.content;
      const triggerElementPosition = this.$refs.trigger.getBoundingClientRect();
      style.top = `${triggerElementPosition.top + triggerElementPosition.height}px`;
      style.left = `${triggerElementPosition.left}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-dropdown {
  display: inline-flex;

  &-trigger {
    cursor: pointer;
  }

  &-content {
    position: fixed;
    background-color: white;
    box-shadow: $box-shadow;
  }
}
</style>
