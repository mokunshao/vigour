<template>
  <div class="vigour-tag-input">
    <span v-for="tag in tags" :key="tag">
      <span>{{ tag }}</span
      ><button @click="removeTag(tag)">&times;</button>
    </span>
    <input
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
      if (this.newTag.length === 0 || this.tags.includes(this.newTag)) {
        return;
      }
      this.$emit('update', [...this.tags, this.newTag]);
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
.vigour-tag-input {
  border: 1px solid red;
}
</style>
