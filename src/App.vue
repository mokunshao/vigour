<template>
  <div id="app">
    <v-button>Hello</v-button>
    <v-button icon="loading">Loading</v-button>
    <v-button icon="settings">Settings</v-button>
    <v-button icon="left">Left</v-button>
    <v-button icon="right">Right</v-button>
    <v-button icon="thumbs-up">Thumbs Up</v-button>
    <v-button icon="upload">Upload</v-button>
    <v-button icon="download">Download</v-button>
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
