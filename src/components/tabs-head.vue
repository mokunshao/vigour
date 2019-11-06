<template>
  <div class="vigour-tabs-head">
    <slot></slot>
    <div class="vigour-tabs-head-underline"></div>
    <div class="vigour-tabs-head-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigour-tabs-head',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (selected, vm) => {
      console.log(selected);
      console.log(vm);
    });
  },
};
</script>

<style lang="scss" scoped>
.vigour-tabs-head {
  border: 1px solid black;
  display: flex;
  position: relative;

  &-underline {
    position: absolute;
    bottom: 0;
    border-bottom: 3px solid red;
    width: 100px;
  }

  &-actions {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
}
</style>
