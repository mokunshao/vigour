<template>
  <div class="vigour-tag-input">
    <span v-for="tag in tags" :key="tag" class="vigour-tag-input-tag">
      <span class="vigour-tag-input-text">{{ tag }}</span
      ><span @click="removeTag(tag)" class="vigour-tag-input-remove">
        &times;
      </span>
    </span>
    <input
      v-on="$listeners"
      v-bind="$attrs"
      class="vigour-tag-input-input"
      :placeholder="placeholder"
      type="text"
      :value="input"
      @input="input = $event.target.value"
      @keydown.enter.prevent="addTag"
      @keydown.backspace="handleBackspace"
    />
  </div>
</template>

<script>
export default {
  name: 'vigour-tag-input',
  model: {
    prop: 'tags',
    event: 'update',
  },
  props: {
    tags: {
      type: Array,
    },
    placeholder: {
      type: String,
      default: 'Add tag...',
    },
  },
  data() {
    return {
      input: '',
    };
  },
  computed: {
    newTag() {
      return this.input.trim();
    },
  },
  methods: {
    addTag() {
      if (this.newTag.length !== 0 && !this.tags.includes(this.newTag)) {
        this.$emit('update', [...this.tags, this.newTag]);
      }
      this.clearInput();
    },
    removeTag(tag) {
      this.$emit('update', this.tags.filter(t => t !== tag));
    },
    handleBackspace() {
      if (this.newTag.length === 0) { this.$emit('update', this.tags.slice(0, -1)); }
    },
    clearInput() {
      this.input = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-tag-input {
  border: 2px solid $black;
  padding: 0.3em;
  display: inline-flex;

  &-tag {
    display: inline-flex;
    background-color: $grey;
    margin-right: 0.1em;
    padding-left: 0.2em;
    padding-right: 0.2em;

    &:not(:first-child) {
      margin-left: 0.1em;
    }

    &:hover {
      background-color: $grey2;
    }
  }

  &-remove {
    cursor: pointer;

    &:hover {
      color: $red;
    }
  }

  &-input {
    border: none;
    outline: none;
    font-size: inherit;
  }
}
</style>
