<template>
  <button
    type="text"
    class="vigour-button"
    :class="[`vigour-button-${iconPosition}`, `vigour-button-${kind}`]"
    v-bind="$attrs"
    v-on="{
      ...$listeners,
      click(e) {
        onClick(e);
      }
    }"
  >
    <v-icon
      v-if="loading"
      class="vigour-button-icon-loading vigour-button-icon"
      name="loading"
    />
    <v-icon
      class="vigour-button-icon"
      v-if="icon && !loading"
      :name="icon"
      :class="{ 'vigour-button-icon-loading': icon === 'loading' }"
    />
    <div class="vigour-button-text">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import icon from './icon.vue';

export default {
  name: 'vigour-button',
  components: {
    'v-icon': icon,
  },
  props: {
    icon: {
      type: String,
      required: false,
    },
    'icon-position': {
      type: String,
      default: 'left',
      required: false,
      validator(value) {
        return ['left', 'right'].indexOf(value) !== -1;
      },
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    kind: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['primary', 'normal', 'danger'].includes(value);
      },
    },
  },
  methods: {
    onClick(e) {
      e.currentTarget.blur();
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.vigour-button {
  appearance: none;
  outline: none;
  padding: 0.3em 0.5em;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  transition: all 500ms;
  font-size: 1em;

  &-normal {
    color: $black;
    background-color: $grey;
    border: 1px solid $grey;

    &:hover,
    &:focus {
      background-color: $grey2;
      border: 1px solid $grey2;
    }
  }

  &-primary {
    color: $white;
    background-color: $black;
    border: 1px solid $black;

    &:hover,
    &:focus {
      background-color: $black2;
      border: 1px solid $black2;
    }
  }

  &-danger {
    color: $white;
    background-color: $red;
    border: 1px solid $red;
  }

  &-right &-icon {
    order: 2;
  }

  &-right &-text {
    order: 1;
  }

  &-icon-loading {
    animation: spin 1s infinite linear;
  }

  &[disabled] {
    cursor: not-allowed;
    color: #ccc;
    background-color: $grey;
    border-color: $grey;
  }
}
</style>
