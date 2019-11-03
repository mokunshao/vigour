<template>
  <div class="vigour-toast"><slot>toast</slot></div>
</template>

<script>
export default {
  name: 'vigour-toast',
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1em;
  padding: $padding;
  border-radius: $radius;
  margin-top: 0.5em;
  background-color: $color3;
  color: white;
}
</style>
