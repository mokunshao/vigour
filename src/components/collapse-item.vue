<template>
  <div
    class="vigour-collapse-item"
    :class="{ [`vigour-collapse-item-show`]: show }"
  >
    <div class="vigour-collapse-item-title" @click="click">
      {{ title }}
      <vigour-icon
        class="vigour-collapse-item-title-icon"
        name="right"
      ></vigour-icon>
    </div>
    <transition
      name="expand"
      @beforeEnter="beforeEnter"
      @enter="enter"
      @beforeLeave="beforeLeave"
      @leave="leave"
    >
      <div class="vigour-collapse-item-content" v-show="show" ref="content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import icon from './icon.vue';

export default {
  name: 'vigour-collapse-item',
  components: {
    [icon.name]: icon,
  },
  props: {
    title: {
      type: String,
    },
  },
  computed: {
    show() {
      return this.$parent.$props.value.includes(this.title);
    },
  },
  mounted() {
    const el = this.$refs.content;
    if (this.show) {
      el.style.height = `${el.scrollHeight}px`;
    }
  },
  methods: {
    click() { this.$emit('click', this.title); },
    beforeEnter(el) {
      el.style.height = '0';
    },
    enter(el) {
      el.style.height = `${el.scrollHeight}px`;
    },
    beforeLeave(el) {
      el.style.height = `${el.scrollHeight}px`;
    },
    leave(el) {
      el.style.height = '0';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-collapse-item {
  &-title {
    border-top: 1px solid $black2;
    padding: $padding;
    cursor: pointer;
    display: flex;
    align-items: center;

    &-icon {
      margin-left: auto;
      transition: all 300ms;
    }
  }

  &-content {
    padding: $padding;
    transition: height 0.3s linear;
  }

  &-show &-title-icon {
    transform: rotate(90deg);
  }
}

.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
}
</style>
