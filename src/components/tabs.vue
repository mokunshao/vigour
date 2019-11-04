<template>
  <div class="vigour-tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-tabs',
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.vigour-tabs {
  border: 1px solid black;
}
</style>
