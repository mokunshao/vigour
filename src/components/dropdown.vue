<template>
  <div class="vigour-dropdown">
    <div ref="trigger" class="vigour-dropdown-trigger" @click="click">
      <slot></slot>
    </div>
    <div class="vigour-dropdown-content" v-if="contentVisible" ref="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vigour-dropdown',
  destroyed() {
    if (this.contentVisible) {
      this.removeClickEvent();
    }
  },
  watch: {
    contentVisible(visible) {
      if (visible) {
        this.addClickEvent();
      } else {
        this.removeClickEvent();
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
    triggerElementPosition() {
      return this.triggerElement.getBoundingClientRect();
    },
    contentElement() {
      return this.$refs.content;
    },
  },
  methods: {
    when2Close(e) {
      const { target } = e;
      const a = this.contentElement && this.contentElement.contains(target);
      const b = this.triggerElement.contains(target);
      if (!(a || b)) {
        this.close();
      }
    },
    addClickEvent() {
      document.addEventListener('click', this.when2Close);
    },
    removeClickEvent() {
      document.removeEventListener('click', this.when2Close);
    },
    addKeyEscEvent() {
      document.addEventListener('keydown', this.escEvent);
    },
    escEvent(e) {
      if (e.key === 'Escape') {
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
        this.contentElement.style.top = `${this.triggerElementPosition.top + this.triggerElementPosition.height + 5}px`;
        this.contentElement.style.minWidth = `${this.triggerElementPosition.width}px`;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-dropdown {
  border: 1px solid red;
  display: inline-flex;

  &-trigger {
    cursor: pointer;
  }

  &-content {
    position: fixed;
    background-color: white;
    box-shadow: $box-shadow;
    border: 1px solid black;
  }
}
</style>
