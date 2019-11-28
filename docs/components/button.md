---
title: Button
---

# Button

## Example

### Kinds

<ClientOnly>
  <button-example-1></button-example-1>
</ClientOnly>

```vue
<vigour-button>Default</vigour-button>
<vigour-button kind="primary">Primary</vigour-button>
<vigour-button kind="normal">Normal</vigour-button>
```

### Icons

For more icon names, refer to the Icon component.

<ClientOnly>
  <button-example-2></button-example-2>
</ClientOnly>

```vue
<vigour-button icon="loading">Loading</vigour-button>
<vigour-button icon="settings">Settings</vigour-button>
<vigour-button icon="download" kind="primary">Download</vigour-button>
```

### Icon Position

<ClientOnly>
  <button-example-3></button-example-3>
</ClientOnly>

```vue    
<vigour-button icon="thumbs-up">Thumbs Up</vigour-button>
<vigour-button icon="upload" icon-position="left" kind="primary">Upload</vigour-button>
<vigour-button icon="upload" icon-position="right">Upload</vigour-button>
<vigour-button icon="loading" icon-position="right">Hello</vigour-button>
```

### Loading

<ClientOnly>
  <button-example-4></button-example-4>
</ClientOnly>

```vue
<vigour-button icon="loading">Loading</vigour-button>
<vigour-button
  icon="settings"
  :loading="loading"
  @click="loading = !loading"
  >Settings</vigour-button
>
<vigour-button
  icon="thumbs-up"
  kind="primary"
  icon-position="right"
  :loading="loading"
  @click="loading = !loading"
  >Thumbs Up</vigour-button
>
<vigour-button icon="upload" :loading="loading" @click="loading = !loading"
  >Upload</vigour-button
>
<vigour-button
  icon="download"
  :loading="loading"
  @click="loading = !loading"
  >Download</vigour-button
>
```

### Button Group

<ClientOnly>
  <button-example-5></button-example-5>
</ClientOnly>

```vue
<vigour-button-group>
  <vigour-button icon="thumbs-up" icon-position="right"
    >Thumbs Up</vigour-button
  >
  <vigour-button icon="upload">Upload</vigour-button>
  <vigour-button icon="download">Download</vigour-button>
</vigour-button-group>
```

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| kind | `string` | `'normal'` |`'primary'`,`'normal'` |
| icon | `string` | - | - |
| icon-position | `string` | `'left'` |`'left'`,`'right'` |
| loading | `boolean` | `true` | - |