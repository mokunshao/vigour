<template>
  <div style="padding-top: 0.5em;">
    <vigour-toggle v-model="toggleValue">text</vigour-toggle>
    <vigour-toggle v-model="toggleValue" disabled>text</vigour-toggle>
  </div>
</template>

<script>
import toggle from '../../../src/components/toggle';

export default {
  components: {
    [toggle.name]: toggle
  },
  data() {
    return {
      toggleValue: true,
    }
  }
}
</script>