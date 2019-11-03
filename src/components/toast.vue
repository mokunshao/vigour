<template>
  <div class="vigour-toast">
    <div class="vigour-toast-text">
      <slot
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum atque,
        inventore itaque aspernatur quod, ullam ex reprehenderit minima fugiat
        voluptates eius consectetur perferendis similique magni provident.
        Distinctio saepe at aperiam?</slot
      >
    </div>
    <div
      v-if="closeButton"
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
      default: false,
    },
    autoCloseDelay: {
      type: Number,
      default: 2000,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: 'X',
          callback() { },
        };
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
      this.closeButton.callback(this);
    },
    removeNode() {
      this.$el.remove();
      this.$destroy();
    },
  },

};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1em;
  border-radius: $borderRadius;
  margin-top: 0.5em;
  background-color: $color3;
  color: white;
  display: flex;
  flex-direction: row;
  box-shadow: $boxShadow;

  .vigour-toast-text {
    padding: $padding;
  }

  .vigour-toast-button {
    padding: $padding;
    white-space: nowrap;
    cursor: pointer;
    border-left: 1px solid white;
    display: flex;
    align-items: center;
  }
}
</style>
