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
    <div v-if="false">
      <vigour-button @click="showToast">Show Top Toast</vigour-button>
      <vigour-button @click="showToast2">Show Center Toast</vigour-button>
      <vigour-button @click="showToast3">Show Bottom Toast</vigour-button>
      <vigour-toast :autoClose="true">message</vigour-toast>
    </div>
    <div v-if="false">
      <vigour-tabs :selected.sync="tab" direction="horizontal">
        <vigour-tabs-head>
          <template v-slot:actions>
            <vigour-button>test</vigour-button>
          </template>
          <vigour-tabs-item name="tab1"
            ><vigour-icon name="settings" />tab 1</vigour-tabs-item
          >
          <vigour-tabs-item name="tab2">tab 2</vigour-tabs-item>
          <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
        </vigour-tabs-head>
        <vigour-tabs-body>
          <vigour-tabs-pane name="tab1">tab 1 content</vigour-tabs-pane>
          <vigour-tabs-pane name="tab2">tab 2 content</vigour-tabs-pane>
          <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
        </vigour-tabs-body>
      </vigour-tabs>
    </div>
    <div v-if="false">
      <div :style="{ padding: '10vh' }">
        <vigour-popover position="top" trigger="hover">
          <template v-slot:content>
            <div>
              test test test test test test test test test test test test test
              test test test test test test test test
            </div>
            <div>test</div>
          </template>
          <vigour-button>点击</vigour-button>
        </vigour-popover>
        <vigour-popover position="bottom" trigger="hover">
          <template v-slot:content>
            <div>
              test test test test test test test test test test test test test
              test test test test test test test test
            </div>
            <div>test</div>
          </template>
          <vigour-button>点击</vigour-button>
        </vigour-popover>
        <vigour-popover position="left" trigger="hover">
          <template v-slot:content>
            <div>
              test test test test test test test test test test test test test
              test test test test test test test test
            </div>
            <div>test</div>
          </template>
          <vigour-button>点击</vigour-button>
        </vigour-popover>
        <vigour-popover position="right" trigger="hover">
          <template v-slot:content>
            <div>
              test test test test test test test test test test test test test
              test test test test test test test test
            </div>
            <div>test</div>
          </template>
          <vigour-button>点击</vigour-button>
        </vigour-popover>
      </div>
      <div :style="{ padding: '10vh' }">
        <vigour-popover position="top">
          <template v-slot:content>
            <div>
              test test test test test test test test test test test test test
              test test test test test test test test
            </div>
            <div>test</div>
          </template>
          <vigour-button>点击</vigour-button>
        </vigour-popover>
        <vigour-popover position="bottom">
          <template v-slot:content>
            <div>
              test test test test test test test test test test test test test
              test test test test test test test test
            </div>
            <div>test</div>
          </template>
          <vigour-button>点击</vigour-button>
        </vigour-popover>
        <vigour-popover position="left">
          <template v-slot:content>
            <div>
              test test test test test test test test test test test test test
              test test test test test test test test
            </div>
            <div>test</div>
          </template>
          <vigour-button>点击</vigour-button>
        </vigour-popover>
        <vigour-popover position="right">
          <template v-slot:content>
            <div>
              test test test test test test test test test test test test test
              test test test test test test test test
            </div>
            <div>test</div>
          </template>
          <vigour-button>点击</vigour-button>
        </vigour-popover>
      </div>
      <div :style="{ padding: '10vh' }">
        <vigour-popover position="top">
          <template v-slot:content="{ close }">
            <div>test</div>
            <vigour-button @click="close">close</vigour-button>
          </template>
          <vigour-button>点击</vigour-button>
        </vigour-popover>
        <vigour-popover position="top">
          <template v-slot:content="slotProps">
            <div>test</div>
            <vigour-button @click="slotProps.close">close</vigour-button>
          </template>
          <vigour-button>点击</vigour-button>
        </vigour-popover>
      </div>
    </div>
    <div v-if="false">
      <div>
        <vigour-collapse v-model="unfold" single>
          <vigour-collapse-item title="title 1">content 1</vigour-collapse-item>
          <vigour-collapse-item title="title 2">content 2</vigour-collapse-item>
          <vigour-collapse-item title="title 3">content 3</vigour-collapse-item>
        </vigour-collapse>
        <blockquote>
          <pre>{{ unfold }}</pre>
        </blockquote>
      </div>
      <div>
        <vigour-collapse v-model="unfold2">
          <vigour-collapse-item title="title 1">content 1</vigour-collapse-item>
          <vigour-collapse-item title="title 2">content 2</vigour-collapse-item>
          <vigour-collapse-item title="title 3">content 3</vigour-collapse-item>
        </vigour-collapse>
        <blockquote>
          <pre>{{ unfold2 }}</pre>
        </blockquote>
      </div>
    </div>
    <div v-if="false">
      <vigour-cascader v-model="selected" :options="options"> </vigour-cascader>
      <div>123</div>
      <vigour-cascader
        v-model="selected2"
        :options.sync="options2"
        :lazyload="lazyload"
      >
      </vigour-cascader>
      <div>123</div>
    </div>
    <div v-if="false">
      <vigour-checkbox v-model="checkboxValue">123</vigour-checkbox>
      <vigour-checkbox v-model="checkboxValue" disabled>123</vigour-checkbox>
    </div>
    <div>
      <vigour-radio label="one" v-model="radioValue">one</vigour-radio>
      <vigour-radio label="two" v-model="radioValue">two</vigour-radio>
      <vigour-radio label="three" disabled v-model="radioValue"
        >three</vigour-radio
      >
      <div>{{ radioValue }}</div>
      <vigour-radio-group v-model="radioValue2">
        <vigour-radio label="male">male</vigour-radio>
        <vigour-radio label="female">female</vigour-radio>
      </vigour-radio-group>
      {{ radioValue2 }}
    </div>
  </div>
</template>

<script>
import button from './components/button.vue';
import icon from './components/icon.vue';
import buttonGroup from './components/button-group.vue';
import input from './components/input.vue';
import row from './components/row.vue';
import col from './components/col.vue';
import layout from './components/layout.vue';
import header from './components/header.vue';
import content from './components/content.vue';
import footer from './components/footer.vue';
import aside from './components/aside.vue';
import tabs from './components/tabs.vue';
import tabsHead from './components/tabs-head.vue';
import tabsBody from './components/tabs-body.vue';
import tabsItem from './components/tabs-item.vue';
import tabsPane from './components/tabs-pane.vue';
import popover from './components/popover.vue';
import collapse from './components/collapse.vue';
import collapseItem from './components/collapse-item.vue';
import cascader from './components/cascader.vue';
import checkbox from './components/checkbox.vue';
import radio from './components/radio.vue';
import radioGroup from './components/radio-group.vue';

import cityList from './components/data.json';

function fetchData(pid) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cityList.filter(item => item.pid === pid));
    }, 1);
  });
}

export default {
  async mounted() {
    this.options2 = await fetchData('0');
  },
  name: 'app',
  components: {
    [button.name]: button,
    [buttonGroup.name]: buttonGroup,
    [icon.name]: icon,
    [input.name]: input,
    [row.name]: row,
    [col.name]: col,
    [layout.name]: layout,
    [header.name]: header,
    [content.name]: content,
    [footer.name]: footer,
    [aside.name]: aside,
    [tabs.name]: tabs,
    [tabsHead.name]: tabsHead,
    [tabsBody.name]: tabsBody,
    [tabsItem.name]: tabsItem,
    [tabsPane.name]: tabsPane,
    [popover.name]: popover,
    [collapse.name]: collapse,
    [collapseItem.name]: collapseItem,
    [cascader.name]: cascader,
    [checkbox.name]: checkbox,
    [radio.name]: radio,
    [radioGroup.name]: radioGroup,
  },
  data() {
    return {
      num: '10',
      loading: false,
      tab: 'tab1',
      unfold: ['title 1'],
      unfold2: ['title 1', 'title 2'],
      options: [{ label: '广东', children: [{ label: '广州', children: [{ label: '白云' }, { label: '荔湾' }] }, { label: '云浮', children: [{ label: '新兴' }] }] }, { label: '广西', children: [{ label: '南宁', children: [{ label: '江南' }] }, { label: '梧州' }] }],
      selected: [],
      options2: [],
      selected2: [],
      checkboxValue: true,
      radioValue: 'two',
      radioValue2: 'female',
    };
  },
  methods: {
    async lazyload(id, callback) {
      const children = await fetchData(id);
      callback(children);
    },
    // async input(value) {
    // const currentItem = value[value.length - 1];
    // const children = await fetchData(currentItem.id);
    // this.$set(currentItem, 'children', children);
    // currentItem.children = children;
    //   console.log(value, 'top');
    // },
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
