<template>
  <div class="vigour-cascader">
    <div class="trigger"><slot></slot></div>
    <div class="content">
      <div v-for="item in options" :key="item.name">
        {{ item.name }}
        <vigour-cascader-item :options="item.children"></vigour-cascader-item>
      </div>
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
