<template>
  <div class="vigour-layout" :class="layoutClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-layout',
  data() {
    return { layoutClasses: { 'vigour-layout-has-aside': false } };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'vigour-aside') {
        this.layoutClasses['vigour-layout-has-aside'] = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.vigour-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &-has-aside {
    flex-direction: row;
  }
}
</style>
