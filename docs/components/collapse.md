---
title: Collapse
---

# Collapse

## Example

<collapse-example-1></collapse-example-1>

```vue
<vigour-collapse v-model="unfold2">
  <vigour-collapse-item title="title 1">content 1</vigour-collapse-item>
  <vigour-collapse-item title="title 2">content 2</vigour-collapse-item>
  <vigour-collapse-item title="title 3">content 3</vigour-collapse-item>
</vigour-collapse>
<blockquote>
  {{ unfold2 }}
</blockquote>
```

```javascript
export default {
  data() {
    return {
      unfold2: ['title 1', 'title 2'],
    }
  }
}
```

<collapse-example-2></collapse-example-2>

```vue
<vigour-collapse v-model="unfold" single>
  <vigour-collapse-item title="title 1">content 1</vigour-collapse-item>
  <vigour-collapse-item title="title 2">content 2</vigour-collapse-item>
  <vigour-collapse-item title="title 3">content 3</vigour-collapse-item>
</vigour-collapse>
<blockquote>
  {{ unfold }}
</blockquote>
```

```javascript
export default {
  data() {
    return {
      unfold: ['title 1'],
    }
  }
}
```

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| v-model | `array<string>` | - | - |
| single | `boolean` | `false` | - |
