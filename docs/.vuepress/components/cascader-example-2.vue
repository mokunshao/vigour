<template>
  <div>
    <vigour-cascader
      placeholder="选择地点"
      v-model="selected"
      :options.sync="options"
      :lazyload="lazyload"
    >
    </vigour-cascader>
  </div>
</template>

<script>
import cityList from './data.json';
import cascader from '../../../src/components/cascader';

function fetchData(pid) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cityList.filter(item => item.pid === pid));
    }, 1);
  });
}

export default {
  components: {
    [cascader.name]: cascader
  },
  async mounted() {
    this.options = await fetchData('0');
  },
  data() {
    return {
      options: [],
      selected: [],
    }
  },
  methods: {
    async lazyload(id, callback) {
      const children = await fetchData(id);
      callback(children);
    },
  }
}
</script>
