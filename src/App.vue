<template>
  <div id="app">
    <div v-show="false">
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
    <div v-show="false">
      <v-input value="111"></v-input>
      <v-input value="222" disabled></v-input>
      <v-input value="333" readonly></v-input>
      <v-input v-model="num" error="N/A"></v-input>
    </div>
    <div>
      <v-row>
        <v-col>1</v-col>
        <v-col>2</v-col>
      </v-row>
      <v-row>
        <v-col>1</v-col>
        <v-col>2</v-col>
        <v-col>3</v-col>
        <v-col>4</v-col>
      </v-row>
      <v-row>
        <v-col span="2"></v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col span="3"></v-col>
        <v-col span="21"></v-col>
      </v-row>
      <v-row>
        <v-col span="4"></v-col>
        <v-col span="6"></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import button from './components/button.vue';
import buttonGroup from './components/button-group.vue';
import input from './components/input.vue';
import row from './components/row.vue';
import col from './components/col.vue';

export default {
  name: 'app',
  components: {
    'v-button': button,
    'v-button-group': buttonGroup,
    'v-input': input,
    'v-row': row,
    'v-col': col,
  },
  data() {
    return {
      num: '10',
      loading: false,
    };
  },
  methods: {
    change(e) {
      console.log(e.target.value);
    },
  },
};
</script>
