<template>
  <div id="app">
    <div v-show="true">
      <v-button>Hello</v-button>
      <v-button icon="loading">Loading</v-button>
      <v-button icon="settings" :loading="loading" @click="loading = !loading">Settings</v-button>
      <v-button icon="left">Left</v-button>
      <v-button icon="right" icon-position="right">Right</v-button>
      <v-button-group>
        <v-button icon="thumbs-up" :loading="loading" @click="loading = !loading"
          >Thumbs Up</v-button
        >
        <v-button icon="upload" :loading="loading" @click="loading = !loading">Upload</v-button>
        <v-button icon="download" :loading="loading" @click="loading = !loading">Download</v-button>
      </v-button-group>
      <v-button icon="loading" icon-position="right">Hello</v-button>
    </div>
    <div>
      <v-input
        value="111"
        @input="change"
        @change="change"
        @focus="change"
        @blur="change"
      ></v-input>
      <v-input value="222" disabled></v-input>
      <v-input value="333" readonly></v-input>
      <v-input value="444" error="N/A"></v-input>
    </div>
  </div>
</template>

<script>
import button from './components/button.vue';
import buttonGroup from './components/button-group.vue';
import input from './components/input.vue';

export default {
  name: 'app',
  components: {
    'v-button': button,
    'v-button-group': buttonGroup,
    'v-input': input,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    change(e) {
      console.log(e.currentTarget.value);
    },
  },
};
</script>
