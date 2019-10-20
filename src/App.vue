<template>
  <div id="app">
    <v-button>Hello</v-button>
    <v-button icon="loading">Hello</v-button>
    <v-button icon="loading" icon-position="right">Hello</v-button>
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
