<template>
  <div class="vigour-cascader" v-click-outside="close">
    <div class="vigour-cascader-trigger" @click="toggle">
      <!-- <input type="text" :value="result" readonly /> -->
      {{ result }}
    </div>
    <div class="vigour-cascader-content-wrapper" v-if="visible">
      <vigour-cascader-content
        :options="options"
        :value="value"
        :level="0"
        @change="change"
      ></vigour-cascader-content>
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
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
    toggle() {
      this.visible = !this.visible;
    },
    change(value) {
      this.$emit('input', value);
    },
  },
  computed: {
    result() {
      return this.value.map(item => item.label).join('/');
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
    // display: inline-flex;
    border: 1px solid black;
  }

  &-content-wrapper {
    position: absolute;
    background-color: white;
    border: 1px solid black;
  }
}
</style>
