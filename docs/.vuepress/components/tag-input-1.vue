<template>
  <div style="padding-top: 0.5em;">
    <vigour-tag-input v-model="tags"></vigour-tag-input>
  </div>
</template>

<script>
import tagInput from '../../../src/components/tag-input';

export default {
  components: {
    [tagInput.name]: tagInput
  },
  data() {
    return {
      tags: ['美食', '博客']
    }
  }
}
</script>
