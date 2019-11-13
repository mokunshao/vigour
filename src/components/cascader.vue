<template>
  <div class="vigour-cascader">
    <div class="trigger"><slot></slot></div>
    <div class="content">
      <vigour-cascader-item
        v-for="item in options"
        :key="item.name"
        :option="item"
      ></vigour-cascader-item>
    </div>
  </div>
</template>

<script>
import cascaderItem from './cascader-item.vue';

export default {
  name: 'vigour-cascader',
  components: { [cascaderItem.name]: cascaderItem },
  props: {
    options: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.vigour-cascader {
  color: red;
}
</style>
