<template>
  <div class="vigour-cascader-content">
    <div class="vigour-cascader-content-column">
      <div
        class="vigour-cascader-content-tab"
        v-for="option in options"
        :key="option.name"
        @click="() => select(option)"
      >
        {{ option.name }}
      </div>
    </div>
    <vigour-cascader-content
      v-if="subColumn && subColumn.length"
      class="vigour-cascader-content-sub-column"
      :options="subColumn"
      :value="value"
      :level="level + 1"
      @change="change"
    ></vigour-cascader-content>
  </div>
</template>

<script>
export default {
  name: 'vigour-cascader-content',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
  },
  computed: {
    subColumn() {
      return this.value[this.level] && this.value[this.level].children;
    },
  },
  methods: {
    select(option) {
      const valueCopy = JSON.parse(JSON.stringify(this.value));
      valueCopy[this.level] = option;
      valueCopy.splice(this.level + 1);
      this.$emit('change', valueCopy);
    },
    change(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-cascader-content {
  display: flex;
  flex-direction: row;
  align-items: stretch;

  &-column {
    height: 200px;
    overflow-y: scroll;
  }

  &-sub-column {
    border-left: 1px solid black;
  }

  &-tab {
    padding: $padding;
    cursor: pointer;
    border-bottom: 1px solid black;
  }
}
</style>
