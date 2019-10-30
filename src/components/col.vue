<template>
  <div class="vigour-col-wrapper" :class="colClasses" :style="colStyle">
    <div class="vigour-col">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const validator = obj => Object.keys(obj).reduce((pre, key) => ['span', 'offset'].includes(key), false);
const createClasses = (obj, size) => {
  const result = [];
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    Object.entries(obj).forEach(([key, value]) => result.push(`vigour-col-${key}-${size}-${value}`));
  }
  return result;
};
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
      return [
        (span || span === 0) && `vigour-col-span-${span}`,
        (offset || offset === 0) && `vigour-col-offset-${offset}`,
        ...(createClasses(xs, 'xs')),
        ...(createClasses(sm, 'sm')),
        ...(createClasses(md, 'md')),
        ...(createClasses(lg, 'lg')),
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

  @for $i from 0 through 24 {
    &-span-#{$i} {
      width: ($i/24) * 100%;
    }

    &-offset-#{$i} {
      margin-left: ($i/24) * 100%;
    }
  }

  @media (max-width: 1199.98px) {
    @for $i from 0 through 24 {
      &-span-lg-#{$i} {
        width: ($i/24) * 100%;
      }

      &-offset-lg-#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }

  @media (max-width: 991.98px) {
    @for $i from 0 through 24 {
      &-span-md-#{$i} {
        width: ($i/24) * 100%;
      }

      &-offset-md-#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }

  @media (max-width: 767.98px) {
    @for $i from 0 through 24 {
      &-span-sm-#{$i} {
        width: ($i/24) * 100%;
      }

      &-offset-sm-#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }

  @media (max-width: 575.98px) {
    @for $i from 0 through 24 {
      &-span-xs-#{$i} {
        width: ($i/24) * 100%;
      }

      &-offset-xs-#{$i} {
        margin-left: ($i/24) * 100%;
      }
    }
  }
}
</style>
