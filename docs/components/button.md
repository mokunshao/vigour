---
title: Button 按钮
---

# Button 按钮

## Example 例子

<ClientOnly>
  <button-example></button-example>
</ClientOnly>

```vue
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
```

## Attributes 属性
