<template>
  <button
    type="text"
    class="vigour-button"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-button',
  methods: {
    onClick(e) {
      e.currentTarget.blur();
    },
  },
};
</script>

<style lang="scss">
@import "../common.scss";

.vigour-button {
  -webkit-appearance: none;
  outline: none;
  padding: 0.3em 0.5em;
  color: $color1;
  border: 1px solid $color1;
  cursor: pointer;
  border-radius: 3px;

  &:focus,
  &:hover {
    background-color: $color1;
    color: $color4;
  }
}
</style>
