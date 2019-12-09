<template>
  <div class="vigour-tabs" :class="{ isVertical }">
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
  computed: {
    isVertical() { return this.direction === 'vertical'; },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'vigour-tabs-head') {
        vm.$children.forEach((vm2) => {
          if (vm2.$options.name === 'vigour-tabs-item') {
            if (vm2.$props.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, vm2);
            }
          }
        });
      }
    });

    this.eventBus.$on('update:selected', (selected) => {
      this.$emit('update:selected', selected);
    });
  },
};
</script>

<style lang="scss" scoped>
.vigour-tabs {
  display: flex;
  flex-direction: column;
}

.isVertical {
  flex-direction: row;
}
</style>
