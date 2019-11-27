<template>
  <div class="vigour-dialog-wrapper" v-if="visible">
    <div class="vigour-dialog-mask" v-if="mask" @click="clickMask"></div>
    <div class="vigour-dialog">
      <div class="vigour-dialog-header">
        {{ title }}
        <vigour-button class="vigour-dialog-header-close" @click="close"
          >X</vigour-button
        >
      </div>
      <div class="vigour-dialog-content">
        <slot></slot>
      </div>
      <div class="vigour-dialog-footer">
        <slot name="footer">
          <vigour-button @click="close">close</vigour-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import button from './button.vue';

export default {
  name: 'vigour-dialog',
  components: {
    [button.name]: button,
  },
  props: {
    visible: {
      type: Boolean,
    },
    mask: {
      type: Boolean,
      default: true,
    },
    closeOnClickMask: {
      type: Boolean,
      default: true,
    },
    title: {},
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    },
    clickMask() {
      if (this.closeOnClickMask) {
        this.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
  box-shadow: $box-shadow;

  &-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba($color: #000, $alpha: 0.1);
  }

  &-header {
    display: flex;
    align-items: center;

    &-close {
      appearance: none;
      margin-left: auto;
    }
  }
}
</style>
