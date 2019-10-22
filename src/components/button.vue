<template>
  <button
    type="text"
    class="vigour-button"
    :class="[`vigour-button-${iconPosition}`]"
    @click="onClick"
  >
    <v-icon v-if="loading" :class="'vigour-button-icon-loading'" name="loading" />
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
  },
  methods: {
    onClick(e) {
      e.currentTarget.blur();
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss">
@import '../common.scss';

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.vigour-button {
  -webkit-appearance: none;
  outline: none;
  padding: 0.3em 0.5em;
  color: $color1;
  border: 1px solid $color1;
  cursor: pointer;
  border-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  transition: all 500ms;
  font-size: 1em;

  &-right &-icon {
    order: 2;
  }

  &-right &-text {
    order: 1;
  }

  &:hover {
    background-color: $color2;
    color: $color4;
  }

  &:focus {
    box-shadow: 0 0 0 2px lighten($color: $color2, $amount: 10%);
    background-color: $color1;
    color: $color4;
  }

  &-icon-loading {
    animation: spin 1s infinite linear;
  }
}
</style>
