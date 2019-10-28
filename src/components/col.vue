<template>
  <div
    class="vigour-col"
    :class="[span && `vigour-col-span-${span}`, offset && `vigour-col-offset-${offset}`]"
    :style="{ paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' }"
  >
    <div style="border: 1px solid green; height: 100px;">
      <slot></slot>
    </div>
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
    gutter: {
      type: [String, Number],
    },
  },
  data() {
    return {
      // gutter: '',
    };
  },
};
</script>

<style lang="scss">
.vigour-col {
  width: 100%;
  box-sizing: border-box;

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
