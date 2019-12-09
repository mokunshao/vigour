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
        'vigour-tabs-item-disabled': this.disabled,
      };
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.eventBus.$emit('update:selected', this.name, this);
        this.$emit('click', this);
      }
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
  cursor: pointer;
  padding: $padding;
  display: flex;
  align-items: center;

  &-disabled {
    cursor: not-allowed;
    color: gray;
  }
}
</style>
