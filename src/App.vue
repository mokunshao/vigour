<template>
  <div id="app">
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
      <vigour-toggle v-model="toggleValue">text</vigour-toggle>
      <vigour-toggle v-model="toggleValue" disabled>text</vigour-toggle>
    </div>
    <div v-if="false">
      <vigour-button @click="showNotification">show notification</vigour-button>
      <vigour-button @click="showNotification2"
        >show notification2</vigour-button
      >
    </div>
    <div v-if="false">
      <vigour-button @click="dialogVisable = !dialogVisable"
        >show/hide dialog</vigour-button
      >
      <vigour-dialog :visible.sync="dialogVisable">
        <div>hello world</div>
      </vigour-dialog>
    </div>
  </div>
</template>

<script>
import popover from './components/popover.vue';
import collapse from './components/collapse.vue';
import collapseItem from './components/collapse-item.vue';
import cascader from './components/cascader.vue';
import radio from './components/radio.vue';
import radioGroup from './components/radio-group.vue';
import toggle from './components/toggle.vue';
import dialog from './components/dialog.vue';

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
    [popover.name]: popover,
    [collapse.name]: collapse,
    [collapseItem.name]: collapseItem,
    [cascader.name]: cascader,
    [radio.name]: radio,
    [radioGroup.name]: radioGroup,
    [toggle.name]: toggle,
    [dialog.name]: dialog,
  },
  data() {
    return {
      options: [{ label: '广东', children: [{ label: '广州', children: [{ label: '白云' }, { label: '荔湾' }] }, { label: '云浮', children: [{ label: '新兴' }] }] }, { label: '广西', children: [{ label: '南宁', children: [{ label: '江南' }] }, { label: '梧州' }] }],
      selected: [],
      options2: [],
      selected2: [],
      toggleValue: true,
      dialogVisable: true,
    };
  },
  methods: {
    async lazyload(id, callback) {
      const children = await fetchData(id);
      callback(children);
    },
    test() {
      console.log('test');
    },
    // async input(value) {
    // const currentItem = value[value.length - 1];
    // const children = await fetchData(currentItem.id);
    // this.$set(currentItem, 'children', children);
    // currentItem.children = children;
    //   console.log(value, 'top');
    // },
    showNotification() {
      this.$notify({ content: '你好世界', duration: 0 });
    },
    showNotification2() {
      this.$notify({ content: 'Hello World' });
    },
  },
};
</script>
