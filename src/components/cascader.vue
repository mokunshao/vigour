<template>
  <div class="vigour-cascader" v-click-outside="close">
    <div class="vigour-cascader-trigger" @click="toggle">
      <vigour-input
        type="text"
        :value="result"
        readonly
        clearable
        @input="clearInput"
        v-bind="$attrs"
        v-on="$listeners"
      />
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
import input from './input.vue';

export default {
  name: 'vigour-cascader',
  components: {
    [cascaderContent.name]: cascaderContent,
    [input.name]: input,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
    lazyload: {
      type: Function,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    clearInput() {
      this.$emit('input', []);
    },
    close() {
      this.visible = false;
    },
    toggle() {
      this.visible = !this.visible;
    },
    appendChildren(id, children) {
      const optionsCopy = JSON.parse(JSON.stringify(this.options));
      let stack = [...optionsCopy];
      let index = 0;
      let current = stack[index];
      while (current) {
        if (current.id !== id) {
          if (current.children) {
            stack = stack.concat(current.children);
          }
        } else {
          break;
        }
        current = stack[index += 1];
      }
      if (current) {
        current.children = children;
        this.$emit('update:options', optionsCopy);
      }
    },
    change(value) {
      if (this.lazyload) {
        const lastItem = value[value.length - 1];
        const { id } = lastItem;
        this.lazyload(id, (children) => { this.appendChildren(id, children); });
      }
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
  display: inline-flex;

  &-content-wrapper {
    box-shadow: $box-shadow;
    top: 100%;
    width: max-content;
    position: absolute;
    background-color: white;
    border: 2px solid black;
  }
}
</style>
