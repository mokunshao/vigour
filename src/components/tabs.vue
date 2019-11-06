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
  mounted() {
    this.eventBus.$emit('update:selected', this.selected);
    this.eventBus.$on('update:selected', (selected) => {
      this.$emit('update:selected', selected);
    });
  },
};
</script>

<style lang="scss" scoped>
.vigour-tabs {
  border: 1px solid black;
}
</style>
