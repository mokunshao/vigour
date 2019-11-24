<template>
  <label class="vigour-radio">
    <input
      type="radio"
      :name="name"
      :value="label"
      :disabled="disabled"
      v-model="theValue"
      class="vigour-radio-input"
      @change="change"
    />
    <span class="vigour-radio-checkmark" />
    <div class="vigour-radio-children">
      <slot></slot>
    </div>
  </label>
</template>

<script>
export default {
  name: 'vigour-radio',
  methods: {
    change(e) {
      this.$emit('input', e.target.value);
    },
  },
  computed: {
    theValue: {
      get() {
        return this.value;
      },
      set(value) {
        return value;
      },
    },
  },
  props: {
    name: {
      type: String,
    },
    value: {},
    label: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    checked: {
      type: Boolean,
    },
    defaultChecked: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &-checkmark {
    display: inline-flex;
    box-sizing: border-box;
    height: 1em;
    width: 1em;
    margin-right: 0.2em;
    margin-left: 0.2em;
    background-color: $white;
    border: 2px solid $black;
    border-radius: 50%;
    cursor: pointer;
    transition: border 200ms;
  }

  &-input {
    visibility: hidden;
    height: 0;
    width: 0;
  }

  &:hover &-checkmark {
    background-color: $grey;
  }

  &-input:checked ~ &-checkmark {
    background-color: $white;
    border: 0.3em solid $black;
  }

  &-input:disabled ~ &-checkmark {
    background-color: $grey2;
    border-color: $grey2;
  }

  &-input:disabled ~ &-children,
  &-input:disabled ~ &-checkmark {
    cursor: not-allowed;
  }

  &-input:checked:disabled ~ &-checkmark {
    background-color: #afafaf;
    border-color: $grey;
  }
}
</style>
