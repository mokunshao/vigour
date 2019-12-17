<template>
  <!-- <div id="app" style="margin-top: 100vh; margin-bottom: 100vh;"> -->
  <div id="app">
    <div v-if="false">
      <vigour-cascader
        placeholder="选择地点"
        v-model="selected"
        :options="options"
      >
      </vigour-cascader>
      <div>123</div>
      <vigour-cascader
        placeholder="选择地点"
        v-model="selected2"
        :options.sync="options2"
        :lazyload="lazyload"
      >
      </vigour-cascader>
      <div>123</div>
    </div>
    <div v-if="false">
      <vigour-dropdown>
        <button>options</button>
        <template #content="{close}">
          <div
            style="border-bottom: 1px solid red;"
            v-for="i in 4"
            :key="i"
            @click="close"
          >
            {{ i }}
          </div>
        </template>
      </vigour-dropdown>
      <br />
      <vigour-dropdown>
        <button>options</button>
        <template #content="{close}">
          <h1>hello world</h1>
        </template>
      </vigour-dropdown>
    </div>
    <div>
      <vigour-formatted-input v-model="n1"></vigour-formatted-input>
      <br />
      <vigour-formatted-input
        v-model="n2"
        template="XXX.XXX.XXX.XXX"
      ></vigour-formatted-input>
      <br />
      <vigour-formatted-input
        v-model="n3"
        template="XXX-XXX-XXX-XXX"
      ></vigour-formatted-input>
    </div>
    <div></div>
  </div>
</template>

<script>
import cascader from './components/cascader.vue';
import cityList from './components/data.json';
import dropdown from './components/dropdown.vue';
import formattedInput from './components/formatted-input.vue';

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
    [cascader.name]: cascader,
    [dropdown.name]: dropdown,
    [formattedInput.name]: formattedInput,
  },
  data() {
    return {
      options: [{ label: '广东', children: [{ label: '广州', children: [{ label: '白云' }, { label: '荔湾' }] }, { label: '云浮', children: [{ label: '新兴' }] }] }, { label: '广西', children: [{ label: '南宁', children: [{ label: '江南' }] }, { label: '梧州' }] }],
      selected: [],
      options2: [],
      selected2: [],
      dialogVisable: true,
      n1: '121211212',
      n2: '',
      n3: '',
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
  },
};
</script>
