<template>
  <div class="vigour-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-button-group',
};
</script>

<style lang="scss">
.vigour-button-group {
  display: inline-flex;
  vertical-align: middle;

  .vigour-button {
    border-radius: 0;
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    &:hover,
    &:focus {
      position: relative;
    }
  }
}
</style>
