<template>
  <div id="app">
    <v-button>Hello</v-button>
    <v-button icon="loading">Loading</v-button>
    <v-button icon="settings" :loading="loading" @click="loading = !loading">Settings</v-button>
    <v-button icon="left">Left</v-button>
    <v-button icon="right" icon-position="right">Right</v-button>
    <v-button-group>
      <v-button icon="thumbs-up" :loading="loading" @click="loading = !loading">Thumbs Up</v-button>
      <v-button icon="upload" :loading="loading" @click="loading = !loading">Upload</v-button>
      <v-button icon="download" :loading="loading" @click="loading = !loading">Download</v-button>
    </v-button-group>
    <v-button icon="loading" icon-position="right">Hello</v-button>
  </div>
</template>

<script>
import button from './components/button.vue';
import buttonGroup from './components/button-group.vue';

export default {
  name: 'app',
  components: {
    'v-button': button,
    'v-button-group': buttonGroup,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>
