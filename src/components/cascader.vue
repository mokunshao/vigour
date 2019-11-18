<template>
  <div class="vigour-cascader" v-click-outside="close">
    <div class="vigour-cascader-trigger" @click="visible = !visible">input</div>
    <div class="vigour-cascader-content-wrapper" v-if="visible">
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
    selected: {
      type: Array,
      default() { return []; },
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
  },
  directives: {
    clickOutside: {
      inserted(el, bindings) {
        document.addEventListener('click', (e) => {
          if (e.target === el || el.contains(e.target)) {
            return;
          }
          bindings.value();
        });
      },
    },
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
    border: 1px solid black;
  }
}
</style>
