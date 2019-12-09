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
