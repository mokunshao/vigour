<template>
  <div class="vigour-tabs-item" @click="handleClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-tabs-item',
  props: {
    disabled: {
      type: Boolean,
    },
    name: {
      type: String,
    },
  },
  inject: ['eventBus'],
  data() {
    return {
      selected: false,
    };
  },
  computed: {
    classes() {
      return {
        'vigour-tabs-item-selected': this.selected,
      };
    },
  },
  methods: {
    handleClick() {
      this.eventBus.$emit('update:selected', this.name, this);
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

.vigour-tabs-item {
  border: 1px solid black;
  cursor: pointer;
  padding: $padding;
  display: flex;
  align-items: center;

  &-selected {
    color: red;
  }
}
</style>
