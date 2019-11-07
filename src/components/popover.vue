<template>
  <div class="vigour-popover" ref="popover">
    <div
      class="vigour-popover-content"
      :class="[`vigour-popover-content-${position}`]"
      ref="content"
      v-if="visible"
    >
      <slot name="content"></slot>
    </div>
    <div class="vigour-popover-trigger" ref="trigger">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigour-popover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'left', 'bottom', 'right'].indexOf(value) > -1;
      },
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) > -1;
      },
    },
  },
  data() { return { visible: false, timer: null }; },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.trigger.addEventListener('click', this.click);
    }
    if (this.trigger === 'hover') {
      this.$refs.trigger.addEventListener('mouseenter', this.mouseenter);
      this.$refs.trigger.addEventListener('mouseleave', this.mouseleave);
    }
  },
  destroyed() {
    if (this.trigger === 'click') {
      this.$refs.trigger.removeEventListener('click', this.click);
    }
    if (this.trigger === 'hover') {
      this.$refs.trigger.removeEventListener('mouseenter', this.mouseenter);
      this.$refs.trigger.removeEventListener('mouseleave', this.mouseleave);
      this.$refs.content.removeEventListener('mouseenter', this.contentMouseenter);
      this.$refs.content.removeEventListener('mouseleave', this.contentMouseleave);
    }
  },
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
        this.setPosition();
        document.addEventListener('click', this.clickOutside);
        document.body.appendChild(this.$refs.content);
        this.bindContentEvent();
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener('click', this.clickOutside);
    },
    click() {
      if (this.visible) {
        this.close();
      } else {
        this.open();
      }
    },
    setPosition() {
      const {
        left, top, height, width,
      } = this.$refs.trigger.getBoundingClientRect();
      const { content } = this.$refs;
      const positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY,
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY,
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY,
        },
        right: {
          left: left + width + window.scrollX,
          top: top + window.scrollY,
        },
      };
      content.style.left = `${positions[this.position].left}px`;
      content.style.top = `${positions[this.position].top}px`;
    },
    bindContentEvent() {
      if (this.trigger === 'hover') {
        this.$refs.content.addEventListener('mouseenter', this.contentMouseenter);
        this.$refs.content.addEventListener('mouseleave', this.contentMouseleave);
      }
    },
    mouseenter() {
      this.open();
    },
    mouseleave() {
      this.timer = setTimeout(() => {
        this.close();
      }, 2000);
    },
    contentMouseenter() {
      clearInterval(this.timer);
    },
    contentMouseleave() {
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-popover {
  display: inline-flex;
  vertical-align: middle;
  position: relative;

  &-content {
    border: 1px solid $color1;
    position: absolute;
    padding: $padding;
    border-radius: $border-radius;
    max-width: 20em;
    background-color: white;
    filter: drop-shadow(1px 1px 1px #888);

    &::before,
    &::after {
      content: "";
      display: block;
      border: 10px solid transparent;
      position: absolute;
    }

    &-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::before,
      &::after {
        border-bottom: none;
      }

      &::before {
        top: 100%;
        border-top-color: $color1;
      }

      &::after {
        top: calc(100% - 1px);
        border-top-color: white;
      }
    }

    &-bottom {
      margin-top: 10px;

      &::before,
      &::after {
        border-top: none;
      }

      &::before {
        bottom: 100%;
        border-bottom-color: $color1;
      }

      &::after {
        bottom: calc(100% - 1px);
        border-bottom-color: white;
      }
    }

    &-left {
      transform: translateX(-100%);
      margin-left: -10px;

      &::before,
      &::after {
        top: 10px;
        border-right: none;
      }

      &::before {
        left: 100%;
        border-left-color: $color1;
      }

      &::after {
        left: calc(100% - 1px);
        border-left-color: white;
      }
    }

    &-right {
      margin-left: 10px;

      &::before,
      &::after {
        top: 10px;
        border-left: none;
      }

      &::before {
        right: 100%;
        border-right-color: $color1;
      }

      &::after {
        right: calc(100% - 1px);
        border-right-color: white;
      }
    }
  }
}
</style>
