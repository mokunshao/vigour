<template>
  <div class="vigour-collapse-item">
    <div class="vigour-collapse-item-title" @click="click">
      {{ title }}
      <vigour-icon
        class="vigour-collapse-item-title-icon"
        :class="{ [`vigour-collapse-item-title-icon-rotate`]: show }"
        name="right"
      ></vigour-icon>
    </div>
    <div class="vigour-collapse-item-content" v-show="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import icon from './icon.vue';

export default {
  name: 'vigour-collapse-item',
  components: {
    [icon.name]: icon,
  },
  props: {
    title: {
      type: String,
    },
  },
  computed: {
    show() {
      return this.$parent.$props.value.includes(this.title);
    },
  },
  methods: {
    click() { this.$emit('click', this.title); },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-collapse-item {
  &-title {
    border-top: 1px solid $black2;
    padding: $padding;
    cursor: pointer;
    display: flex;
    align-items: center;

    &-icon {
      margin-left: auto;
      transition: all 300ms;

      &-rotate {
        transform: rotate(90deg);
      }
    }
  }

  &-content {
    padding: $padding;
  }
}
</style>
