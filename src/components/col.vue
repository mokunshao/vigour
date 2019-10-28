<template>
  <div
    class="vigour-col"
    :class="[span && `vigour-col-span-${span}`, offset && `vigour-col-offset-${offset}`]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-col',
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
  },
};
</script>

<style lang="scss">
.vigour-col {
  height: 100px;
  width: 100%;
  background-color: yellow;
  border: 1px solid blue;

  @for $i from 1 through 24 {
    &-span-#{$i} {
      width: ($i/24) * 100%;
    }

    &-offset-#{$i} {
      margin-left: ($i/24) * 100%;
    }
  }
}
</style>
