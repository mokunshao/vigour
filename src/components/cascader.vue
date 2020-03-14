<template>
  <div class="vigour-cascader" v-click-outside="clickOutside">
    <div class="vigour-cascader-trigger" ref="trigger" @click="toggle">
      <vigour-input
        type="text"
        :value="result"
        readonly
        clearable
        v-bind="$attrs"
        v-on="{
          ...$listeners,
          input() {
            clearInput();
          }
        }"
      />
    </div>
    <div class="vigour-cascader-content-wrapper" ref="content" v-if="visible">
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
  inheritAttrs: false,
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
    setPosition() {
      this.$nextTick(() => {
        document.body.appendChild(this.$refs.content);
        const { left, top, height } = this.$refs.trigger.getBoundingClientRect();
        this.$refs.content.style.left = `${left + window.scrollX}px`;
        this.$refs.content.style.top = `${top + height + window.scrollY}px`;
      });
    },
    open() {
      this.visible = true;
      this.setPosition();
    },
    close() {
      this.visible = false;
    },
    clickOutside() {
      return {
        refs: this.$refs,
        close: this.close,
      };
    },
    toggle() {
      if (this.visible) {
        this.close();
      } else {
        this.open();
      }
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
      current.children = children;
      this.$emit('update:options', optionsCopy);
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
        let refs; let close;
        document.addEventListener('click', (e) => {
          if (!refs || !close) {
            const { refs: r, close: c } = bindings.value();
            refs = r;
            close = c;
          }
          const { content } = refs;
          if (!content) return;
          if (e.target === el || el.contains(e.target)) return;
          if (e.target === content || content.contains(e.target)) return;
          close();
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
    width: max-content;
    position: absolute;
    background-color: white;
    border: 2px solid black;
  }
}
</style>
