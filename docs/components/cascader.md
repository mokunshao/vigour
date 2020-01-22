---
title: Cascader
---

# Cascader

```javascript
import { cascader } from 'vigour';
// cascader.name === 'vigour-cascader'
```

## Example

### Get Static Data

<cascader-example-1></cascader-example-1>

```html
<vigour-cascader
  placeholder="选择地点"
  v-model="selected"
  :options="options"
>
</vigour-cascader>
```

```javascript
export default {
  data() {
    return {
      options: [{ label: '广东', children: [{ label: '广州', children: [{ label: '白云' }, { label: '荔湾' }] }, { label: '云浮', children: [{ label: '新兴' }] }] }, { label: '广西', children: [{ label: '南宁', children: [{ label: '江南' }] }, { label: '梧州' }] }],
      selected: [],
    }
  },
}
```
### Get Async Data

<cascader-example-2></cascader-example-2>

```html
<vigour-cascader
  placeholder="选择地点"
  v-model="selected"
  :options.sync="options"
  :lazyload="lazyload"
>
</vigour-cascader>
```

```javascript
export default {
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
```

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| options | `array` | - | - |
| value | `array` | - | - |
| lazyload | `function` | - | - |

<style>
.vigour-cascader-content-wrapper {
  z-index: 1;
}
</style>