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
  background-color: gray;
  border: 1px solid blue;

  &-span {
    &-1 {
      width: (1/24) * 100%;
    }

    &-2 {
      width: (2/24) * 100%;
    }

    &-3 {
      width: (3/24) * 100%;
    }

    &-4 {
      width: (4/24) * 100%;
    }

    &-5 {
      width: (5/24) * 100%;
    }

    &-6 {
      width: (6/24) * 100%;
    }

    &-7 {
      width: (7/24) * 100%;
    }

    &-8 {
      width: (8/24) * 100%;
    }

    &-9 {
      width: (9/24) * 100%;
    }

    &-10 {
      width: (10/24) * 100%;
    }

    &-11 {
      width: (11/24) * 100%;
    }

    &-12 {
      width: (12/24) * 100%;
    }

    &-13 {
      width: (13/24) * 100%;
    }

    &-14 {
      width: (14/24) * 100%;
    }

    &-15 {
      width: (15/24) * 100%;
    }

    &-16 {
      width: (16/24) * 100%;
    }

    &-17 {
      width: (17/24) * 100%;
    }

    &-18 {
      width: (18/24) * 100%;
    }

    &-19 {
      width: (19/24) * 100%;
    }

    &-20 {
      width: (20/24) * 100%;
    }

    &-21 {
      width: (21/24) * 100%;
    }

    &-22 {
      width: (22/24) * 100%;
    }

    &-23 {
      width: (23/24) * 100%;
    }

    &-24 {
      width: (24/24) * 100%;
    }
  }

  &-offset {
    &-1 {
      margin-left: (1/24) * 100%;
    }

    &-2 {
      margin-left: (2/24) * 100%;
    }

    &-3 {
      margin-left: (3/24) * 100%;
    }

    &-4 {
      margin-left: (4/24) * 100%;
    }

    &-5 {
      margin-left: (5/24) * 100%;
    }

    &-6 {
      margin-left: (6/24) * 100%;
    }

    &-7 {
      margin-left: (7/24) * 100%;
    }

    &-8 {
      margin-left: (8/24) * 100%;
    }

    &-9 {
      margin-left: (9/24) * 100%;
    }

    &-10 {
      margin-left: (10/24) * 100%;
    }

    &-11 {
      margin-left: (11/24) * 100%;
    }

    &-12 {
      margin-left: (12/24) * 100%;
    }

    &-13 {
      margin-left: (13/24) * 100%;
    }

    &-14 {
      margin-left: (14/24) * 100%;
    }

    &-15 {
      margin-left: (15/24) * 100%;
    }

    &-16 {
      margin-left: (16/24) * 100%;
    }

    &-17 {
      margin-left: (17/24) * 100%;
    }

    &-18 {
      margin-left: (18/24) * 100%;
    }

    &-19 {
      margin-left: (19/24) * 100%;
    }

    &-20 {
      margin-left: (20/24) * 100%;
    }

    &-21 {
      margin-left: (21/24) * 100%;
    }

    &-22 {
      margin-left: (22/24) * 100%;
    }

    &-23 {
      margin-left: (23/24) * 100%;
    }

    &-24 {
      margin-left: (24/24) * 100%;
    }
  }
}
</style>
