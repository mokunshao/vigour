<template>
  <div class="vigour-rating">
    <span
      :key="n"
      v-for="n in max"
      :class="{ active: n <= value }"
      @click="rate(n)"
      class="vigour-rating-star"
    >
      ★
    </span>
  </div>
</template>

<script>
export default {
  name: 'vigour-rating',
  props: {
    value: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      default: 5,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    rate(value) {
      if (this.value === value) {
        if (this.clearable) {
          this.$emit('input', 0);
        }
        return;
      }
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped lang="scss">
$active-color: #f3d23e;

.vigour-rating {
  font-size: 1em;
  color: #a7a8a8;
  user-select: none;
  display: inline-block;

  &-star {
    cursor: pointer;

    &.active {
      color: $active-color;
    }
  }
}
</style>
