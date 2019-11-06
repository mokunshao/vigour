<template>
  <div class="vigour-tabs-pane" :class="classes" v-show="selected">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-tabs-pane',
  inject: ['eventBus'],
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  computed: {
    classes() {
      return {
        'vigour-tabs-pane-selected': this.selected,
      };
    },
  },
  mounted() {
    this.eventBus.$on('update:selected', (selected) => {
      this.selected = this.name === selected;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-tabs-pane {
  border: 1px solid black;
  padding: $padding;

  &-selected {
    color: red;
  }
}
</style>
