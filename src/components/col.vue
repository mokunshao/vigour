<template>
  <div class="vigour-col-wrapper" :class="colClasses" :style="colStyle">
    <div class="vigour-col">
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
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colStyle() {
      const { gutter } = this;
      return { paddingLeft: `${gutter / 2}px`, paddingRight: `${gutter / 2}px` };
    },
    colClasses() {
      const { span, offset } = this;
      return [span && `vigour-col-span-${span}`, offset && `vigour-col-offset-${offset}`];
    },
  },
};
</script>

<style lang="scss">
.vigour-col {
  &-wrapper {
    width: 100%;
    box-sizing: border-box;
  }

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
