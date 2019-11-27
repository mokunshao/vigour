<template>
  <div class="vigour-dialog-wrapper" v-if="visible">
    <div class="vigour-dialog-mask" v-if="mask"></div>
    <div class="vigour-dialog" :class="{ [`vigour-dialog-shadow`]: !mask }">
      <div class="vigour-dialog-header">
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
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
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

  &-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba($color: #000, $alpha: 0.1);
  }

  &-shadow {
    box-shadow: $box-shadow;
  }

  &-header {
    display: flex;

    &-close {
      appearance: none;
      margin-left: auto;
    }
  }
}
</style>
