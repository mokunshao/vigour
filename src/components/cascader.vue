<template>
  <div class="vigour-cascader">
    <div class="vigour-cascader-trigger" @click="visible = !visible">input</div>
    <div class="vigour-cascader-content-wrapper" v-show="visible">
      <vigour-cascader-content :options="options"></vigour-cascader-content>
    </div>
  </div>
</template>

<script>
import cascaderContent from './cascader-content.vue';

export default {
  name: 'vigour-cascader',
  components: { [cascaderContent.name]: cascaderContent },
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
@import "../common.scss";

.vigour-cascader {
  position: relative;

  &-trigger {
    border: 1px solid black;
  }

  &-content-wrapper {
    position: absolute;
    background-color: white;
    // border: 1px solid black;
    box-shadow: $box-shadow;
  }
}
</style>
