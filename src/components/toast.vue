<template>
  <div class="vigour-toast" :class="toastClasses">
    <div class="vigour-toast-text">
      <slot></slot>
    </div>
    <div
      v-if="closeButton.text"
      class="vigour-toast-button"
      @click="onClickCloseButton"
    >
      {{ closeButton.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigour-toast',
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 2000,
    },
    closeButton: {
      type: Object,
      validator(obj) {
        if (obj.text && typeof obj.text !== 'string' && typeof obj.text !== 'number') return false;
        if (obj.callback && typeof obj.callback !== 'function') return false;
        return true;
      },
    },
    position: {
      type: String,
      validator(value) {
        return ['top', 'center', 'bottom'].indexOf(value) > -1;
      },
    },
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.removeNode();
      }, this.autoCloseDelay);
    }
  },
  methods: {
    onClickCloseButton() {
      this.removeNode();
      if (typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this);
      }
    },
    removeNode() {
      this.$el.remove();
      this.$destroy();
    },
  },
  computed: {
    toastClasses() {
      return { [this.position ? `vigour-toast-${this.position}` : 'vigour-toast-top']: true };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

$animation-duration: 500ms;

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slide-up {
  0% {
    transform: translate(-50%, 100%);
  }

  100% {
    transform: translate(-50%, 0%);
  }
}

@keyframes slide-down {
  0% {
    transform: translate(-50%, -100%);
  }

  100% {
    transform: translate(-50%, 0%);
  }
}

.vigour-toast {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0%);
  font-size: 1em;
  border-radius: $borderRadius;
  background-color: $color3;
  color: white;
  display: flex;
  flex-direction: row;
  box-shadow: $boxShadow;
  top: 0;

  &-top {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    animation: slide-down $animation-duration;
    top: 0;
  }

  &-center {
    animation: fade-in $animation-duration;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &-bottom {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    animation: slide-up $animation-duration;
    top: auto;
    bottom: 0;
  }

  .vigour-toast-text {
    padding: $padding;
  }

  .vigour-toast-button {
    padding: $padding;
    cursor: pointer;
    border-left: 1px solid white;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
}
</style>
