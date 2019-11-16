<template>
  <div class="vigour-cascader">
    <div class="vigour-cascader-trigger" @click="visible = !visible">input</div>
    <div class="vigour-cascader-content" v-show="visible">
      <div class="vigour-cascader-content-level-1">
        <div>111</div>
        <div>111</div>
      </div>
      <div class="vigour-cascader-content-level-2">
        <div>222</div>
        <div>222</div>
        <div>222</div>
      </div>
      <div class="vigour-cascader-content-level-3">
        <div>333</div>
        <div>333</div>
        <div>333</div>
      </div>
      <div class="temp" v-if="false">
        <vigour-cascader-item
          v-for="item in options"
          :key="item.name"
          :option="item"
        ></vigour-cascader-item>
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
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.vigour-cascader {
  color: black;
  position: relative;

  &-content,
  &-trigger {
    border: 1px solid black;
  }

  &-content {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: white;

    &-level-1,
    &-level-2,
    &-level-3 {
      border: 1px solid black;
    }
  }
}
</style>
