---
title: Icon
---

# Icon

## Example

<icon-example-1></icon-example-1>

```vue
<div :style="{ padding: '1em' }">
  <vigour-icon name="settings"></vigour-icon>
  <vigour-icon name="download"></vigour-icon>
  <vigour-icon name="upload" color="#999"></vigour-icon>
  <vigour-icon name="left" color="yellowgreen"></vigour-icon>
  <vigour-icon name="right" color="red"></vigour-icon>
</div>
```

### Available Icons

<ClientOnly>
  <icon-example-2></icon-example-2>
</ClientOnly>

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| name | `string` | - | - |