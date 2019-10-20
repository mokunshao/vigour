<template>
  <button class='v-button'>
    button
  </button>
</template>

<script>
export default {
  name: 'button',
};
</script>

<style lang="scss">
@import "../common.scss";

.v-button {
  -webkit-appearance: none;
  outline: none;
  padding: 0.3em 0.5em;
  color: $color;
}
</style>
