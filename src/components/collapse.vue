<template>
  <div class="vigour-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-collapse',
  props: {
    value: {
      type: Array,
    },
    single: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    event: 'change',
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.$on('click', (value) => {
        if (this.single) {
          const newValue = this.value.includes(value) ? [] : [value];
          this.$emit('change', newValue);
        } else {
          const newValue = JSON.parse(JSON.stringify(this.value));
          const index = newValue.indexOf(value);
          if (index === -1) {
            newValue.push(value);
          }
          if (index >= 0) {
            newValue.splice(index, 1);
          }
          this.$emit('change', newValue);
        }
      });
    });
  },
};
</script>

<style lang="scss" >
@import "../common.scss";

.vigour-collapse {
  border-bottom: 1px solid $black2;
  border-left: 1px solid $black2;
  border-right: 1px solid $black2;
}
</style>
