<template>
  <svg class="vigour-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import '../icons';

export default {
  name: 'vigour-icon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.vigour-icon {
  height: 1em;
  width: 1em;
  fill: currentColor;
}
</style>
