---
title: Button 按钮
---

# Button 按钮

## Example

```javascript
import { button } from 'vigour';
// button.name === 'vigour-button'
```

### Kinds

You can change the style of the button through the `kind` property, which defaults to `kind`.

通过 `kind` 属性，你可以改变按钮的样式，该属性默认是 `normal`。

<button-example-1></button-example-1>

```html
<vigour-button>Default</vigour-button>
<vigour-button kind="primary">Primary</vigour-button>
<vigour-button kind="normal">Normal</vigour-button>
<vigour-button kind="danger">Normal</vigour-button>
```

### Icons

Through the `icon` attribute, you can add icon to the button. For more icon names, please refer to the documentation page of the Icon component.

通过 `icon` 属性，你可以给按钮添加 icon，具体更多 icon 名字请查阅 Icon 组件的文档页面。

<button-example-2></button-example-2>

```html
<vigour-button icon="loading">Loading</vigour-button>
<vigour-button icon="settings">Settings</vigour-button>
<vigour-button icon="download" kind="primary">Download</vigour-button>
```

### Icon Position

Through the `left` attribute, you can set the location where the icon appears, and the default value of this attribute is `left`.

通过 `icon-position` 属性，你可以设置 icon 出现的位置，该属性的默认值为 `left`。

<button-example-3></button-example-3>

```html    
<vigour-button icon="thumbs-up">Thumbs Up</vigour-button>
<vigour-button icon="upload" icon-position="left" kind="primary">Upload</vigour-button>
<vigour-button icon="upload" icon-position="right">Upload</vigour-button>
<vigour-button icon="loading" icon-position="right">Hello</vigour-button>
```

### Loading

When the `loading` attribute is set to `true`, the `icon` attribute will be replaced with `loading`.

设置 `loading` 属性为 `true` 后，`icon` 属性会被替换为 `loading`。

<button-example-4></button-example-4>

```html
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

The `vigour-button- group` component eliminates the gap between buttons and adds `border-radius`.

`vigour-button-group` 组件可以消除按钮间的间隙并且添加 `border-radius`。

<button-example-5></button-example-5>

```javascript
import { buttonGroup } from 'vigour';
// buttonGroup.name === 'vigour-button-group'
```

```html
<vigour-button-group>
  <vigour-button icon="thumbs-up" icon-position="right"
    >Thumbs Up</vigour-button
  >
  <vigour-button icon="upload">Upload</vigour-button>
  <vigour-button icon="download">Download</vigour-button>
</vigour-button-group>
```

### Disabled

<button-example-6></button-example-6>

```html
<vigour-button disabled>hello</vigour-button>
```

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| kind | `string` | `'normal'` |`'primary'`,`'normal'` |
| icon | `string` | - | - |
| icon-position | `string` | `'left'` |`'left'`,`'right'` |
| loading | `boolean` | `true` | - |