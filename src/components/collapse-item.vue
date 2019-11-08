<template>
  <div class="vigour-collapse-item">
    <div class="vigour-collapse-item-title" @click="show = !show">
      {{ title }}
    </div>
    <div class="vigour-collapse-item-content" v-show="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigour-collapse-item',
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-collapse-item {
  &-title {
    border: 1px solid $color1;
    margin-top: -1px;
    margin-right: -1px;
    margin-left: -1px;
    margin-bottom: -1px;
    padding: $padding;
    cursor: pointer;
  }

  &-content {
    padding: $padding;
  }
}
</style>
