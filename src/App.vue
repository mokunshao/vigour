<template>
  <div id="app">
    <div v-if="false">
      <vigour-button>Hello</vigour-button>
      <vigour-button icon="loading">Loading</vigour-button>
      <vigour-button
        icon="settings"
        :loading="loading"
        @click="loading = !loading"
        >Settings</vigour-button
      >
      <vigour-button icon="left">Left</vigour-button>
      <vigour-button icon="right" icon-position="right">Right</vigour-button>
      <vigour-button-group>
        <vigour-button
          icon="thumbs-up"
          :loading="loading"
          @click="loading = !loading"
          >Thumbs Up</vigour-button
        >
        <vigour-button
          icon="upload"
          :loading="loading"
          @click="loading = !loading"
          >Upload</vigour-button
        >
        <vigour-button
          icon="download"
          :loading="loading"
          @click="loading = !loading"
          >Download</vigour-button
        >
      </vigour-button-group>
      <vigour-button icon="loading" icon-position="right">Hello</vigour-button>
    </div>
    <div v-if="false">
      <vigour-input value="111"></vigour-input>
      <vigour-input value="222" disabled></vigour-input>
      <vigour-input value="333" readonly></vigour-input>
      <vigour-input v-model="num" error="N/A"></vigour-input>
    </div>
    <div v-if="false">
      <vigour-row>
        <vigour-col>1</vigour-col>
        <vigour-col>2</vigour-col>
      </vigour-row>
      <vigour-row>
        <vigour-col>1</vigour-col>
        <vigour-col>2</vigour-col>
        <vigour-col>3</vigour-col>
        <vigour-col>4</vigour-col>
      </vigour-row>
      <vigour-row>
        <vigour-col span="2"></vigour-col>
        <vigour-col></vigour-col>
      </vigour-row>
      <vigour-row>
        <vigour-col span="3"></vigour-col>
        <vigour-col span="21"></vigour-col>
      </vigour-row>
      <vigour-row>
        <vigour-col span="4"></vigour-col>
        <vigour-col span="6"></vigour-col>
      </vigour-row>
      <vigour-row>
        <vigour-col span="4"></vigour-col>
        <vigour-col span="5" offset="3"></vigour-col>
      </vigour-row>
      <vigour-row gutter="20">
        <vigour-col span="4"></vigour-col>
        <vigour-col span="5" offset="3"></vigour-col>
      </vigour-row>
      <vigour-row align="left">
        <vigour-col span="4"></vigour-col>
        <vigour-col span="6" offset="3"></vigour-col>
      </vigour-row>
      <vigour-row align="center">
        <vigour-col span="4"></vigour-col>
        <vigour-col span="6" offset="3"></vigour-col>
      </vigour-row>
      <vigour-row align="right">
        <vigour-col span="4"></vigour-col>
        <vigour-col span="6" offset="3"></vigour-col>
      </vigour-row>
    </div>
    <div v-if="false">
      <vigour-row gutter="30">
        <vigour-col
          span="2"
          offset="3"
          :lg="{ span: 12 }"
          :md="{ span: 6 }"
          :sm="{ span: 3, offset: 4 }"
          :xs="{ span: 24, offset: 0 }"
          >1</vigour-col
        >
        <vigour-col
          span="2"
          offset="3"
          :lg="{ span: 12 }"
          :md="{ span: 6 }"
          :sm="{ span: 3, offset: 4 }"
          :xs="{ span: 24, offset: 0 }"
          >2</vigour-col
        >
      </vigour-row>
    </div>
    <div v-if="false">
      <vigour-layout class="layout-common" style="height: 50vh;">
        <vigour-header class="layout-common">header</vigour-header>
        <vigour-content class="layout-common">content</vigour-content>
        <vigour-footer class="layout-common">footer</vigour-footer>
      </vigour-layout>
      <vigour-layout class="layout-common" style="height: 50vh;">
        <vigour-header class="layout-common">header</vigour-header>
        <vigour-layout>
          <vigour-aside class="layout-common">aside</vigour-aside>
          <vigour-content class="layout-common">content</vigour-content>
        </vigour-layout>
        <vigour-footer class="layout-common">footer</vigour-footer>
      </vigour-layout>
      <vigour-layout class="layout-common" style="height: 50vh;">
        <vigour-header class="layout-common">header</vigour-header>
        <vigour-layout>
          <vigour-content class="layout-common">content</vigour-content>
          <vigour-aside class="layout-common">aside</vigour-aside>
        </vigour-layout>
        <vigour-footer class="layout-common">footer</vigour-footer>
      </vigour-layout>
      <vigour-layout class="layout-common" style="height: 50vh;">
        <vigour-aside class="layout-common">aside</vigour-aside>
        <vigour-layout>
          <vigour-header class="layout-common">header</vigour-header>
          <vigour-content class="layout-common">content</vigour-content>
          <vigour-footer class="layout-common">footer</vigour-footer>
        </vigour-layout>
      </vigour-layout>
    </div>
    <div>
      <vigour-button @click="showToast">Show Top Toast</vigour-button>
      <vigour-button @click="showToast2">Show Center Toast</vigour-button>
      <vigour-button @click="showToast3">Show Bottom Toast</vigour-button>
      <vigour-toast :autoClose="true">message</vigour-toast>
    </div>
  </div>
</template>

<script>
import button from './components/button.vue';
import buttonGroup from './components/button-group.vue';
import input from './components/input.vue';
import row from './components/row.vue';
import col from './components/col.vue';
import layout from './components/layout.vue';
import header from './components/header.vue';
import content from './components/content.vue';
import footer from './components/footer.vue';
import aside from './components/aside.vue';


export default {
  name: 'app',
  components: {
    [button.name]: button,
    [buttonGroup.name]: buttonGroup,
    [input.name]: input,
    [row.name]: row,
    [col.name]: col,
    [layout.name]: layout,
    [header.name]: header,
    [content.name]: content,
    [footer.name]: footer,
    [aside.name]: aside,
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
    showToast() {
      this.$toast(<i>Attention <strong>please</strong></i>, {
        closeButton: {
          text: '关闭',
          callback(vm) {
            console.log(vm);
            console.log('已经关闭');
          },
        },
        autoClose: false,
        position: 'top',
      });
    },
    showToast2() {
      this.$toast(<i>Attention <strong>please</strong></i>, {
        closeButton: {
          text: '关闭',
          callback(vm) {
            console.log(vm);
            console.log('已经关闭');
          },
        },
        autoClose: false,
        position: 'center',
      });
    },
    showToast3() {
      this.$toast(<i>Attention <strong>please</strong></i>, {
        closeButton: {
          text: '关闭',
          callback(vm) {
            console.log(vm);
            console.log('已经关闭');
          },
        },
        autoClose: false,
        position: 'bottom',
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  .vigour-col {
    border: 1px solid grey;
    height: 50px;
  }

  .layout-common {
    border: 1px solid grey;
    padding: 2em;
  }
}
</style>
