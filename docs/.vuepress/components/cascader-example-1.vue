<template>
  <div>
    <vigour-cascader
      placeholder="选择地点"
      v-model="selected"
      :options="options"
    >
    </vigour-cascader>
  </div>
</template>

<script>
import cascader from '../../../src/components/cascader';

export default {
  components: {
    [cascader.name]: cascader
  },
  data() {
    return {
      options: [{ label: '广东', children: [{ label: '广州', children: [{ label: '白云' }, { label: '荔湾' }] }, { label: '云浮', children: [{ label: '新兴' }] }] }, { label: '广西', children: [{ label: '南宁', children: [{ label: '江南' }] }, { label: '梧州' }] }],
      selected: [],
    }
  },
}
</script>
