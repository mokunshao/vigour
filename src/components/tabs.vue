<template>
  <div class="vigour-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'vigour-tabs',
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
};
</script>

<style lang="scss" scoped>
.vigour-tabs {
  border: 1px solid black;
}
</style>
