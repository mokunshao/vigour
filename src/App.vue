<template>
  <div id='app'>
    <v-button />
  </div>
</template>

<script>
import button from './components/button.vue';

export default {
  name: 'app',
  components: {
    'v-button': button,
  },
};
</script>
