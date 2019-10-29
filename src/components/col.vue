<template>
  <div class="vigour-col-wrapper" :class="colClasses" :style="colStyle">
    <div class="vigour-col">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const validator = obj => Object.keys(obj).reduce((pre, key) => ['span', 'offset'].includes(key), false);

export default {
  name: 'vigour-col',
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
    xs: {
      type: Object,
      validator,
    },
    sm: {
      type: Object,
      validator,
    },
    md: {
      type: Object,
      validator,
    },
    lg: {
      type: Object,
      validator,
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
      const {
        span,
        offset,
        xs,
        sm,
        md,
        lg,
      } = this;
      console.log(xs, sm, md, lg);
      return [
        span && `vigour-col-span-${span}`,
        offset && `vigour-col-offset-${offset}`,
        ...(xs ? [xs.span && `vigour-col-span-xs-${xs.span}`, xs.offset && `vigour-col-offset-xs-${xs.offset}`] : []),
        ...(sm ? [sm.span && `vigour-col-span-sm-${sm.span}`, sm.offset && `vigour-col-offset-sm-${sm.offset}`] : []),
        ...(md ? [md.span && `vigour-col-span-md-${md.span}`, md.offset && `vigour-col-offset-md-${md.offset}`] : []),
        ...(lg ? [lg.span && `vigour-col-span-lg-${lg.span}`, lg.offset && `vigour-col-offset-lg-${lg.offset}`] : []),
      ];
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

  @media (max-width: 1199.98px) {
    background-color: yellowgreen;
  }

  @media (max-width: 991.98px) {
    background-color: blue;
  }

  @media (max-width: 767.98px) {
    background-color: yellow;
  }

  @media (max-width: 575.98px) {
    background-color: red;
  }
}
</style>
