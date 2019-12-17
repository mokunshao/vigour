<template>
  <div class="vigour-dropdown">
    <div ref="trigger" class="vigour-dropdown-trigger" @click="click">
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
        this.addClickEvent();
        this.addKeyEscEvent();
        this.addScrollEvent();
      } else {
        this.removeClickEvent();
        this.removeEscEvent();
        this.removeScrollEvent();
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
      return this.$refs.content;
    },
  },
  methods: {
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
      const a = this.contentElement && this.contentElement.contains(target);
      const b = this.triggerElement.contains(target);
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
    close() {
      this.contentVisible = false;
      if (this.contentElement) {
        document.body.removeChild(this.contentElement);
      }
    },
    click() {
      this.open();
      this.$nextTick(() => {
        document.body.appendChild(this.contentElement);
        this.setWidth();
        this.setPosition();
      });
    },
    setWidth() {
      const { style } = this.contentElement;
      const triggerElementPosition = this.triggerElement.getBoundingClientRect();
      style.minWidth = `${triggerElementPosition.width}px`;
    },
    setPosition() {
      const { style } = this.contentElement;
      const triggerElementPosition = this.triggerElement.getBoundingClientRect();
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
