<template>
  <div class="vigour-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vigour-button-group',
  mounted() {
    this.$el.children.forEach((element) => {
      if (element.nodeName !== 'BUTTON') {
        console.warn(
          `<v-button-group> 的子元素应全部是 <v-button>, 不能把 <${element.nodeName.toLowerCase()}> 作为子元素`,
        );
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.vigour-button-group {
  display: inline-flex;
  vertical-align: middle;

  .vigour-button {
    border-radius: 0;
    margin-left: -1px;

    &:first-of-type {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    &:last-of-type {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    &:hover,
    &:focus {
      position: relative;
    }
  }
}
</style>
