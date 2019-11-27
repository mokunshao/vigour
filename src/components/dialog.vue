<template>
  <div class="vigour-dialog" v-if="visible">
    <div class="vigour-dialog-header">
      <button @click="close">X</button>
    </div>
    <div class="vigour-dialog-content">
      <slot></slot>
    </div>
    <div class="vigour-dialog-footer">
      <button @click="close">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigour-dialog',
  props: {
    visible: {
      type: Boolean,
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
  padding: $padding;
  border: 1px solid black;
}
</style>
