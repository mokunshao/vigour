---
title: Tag Input
---

# Tag Input

## Example

```javascript
import { tagInput } from 'vigour';
// tagInput.name === 'vigour-tag-input'
```

### Basic

When you typed the tag you want to add, don't forget to press the `Enter` key to finish adding the tag.

当你输入你想要添加的 tag 后，请别忘记按 `Enter` 键以完成添加 tag。

<tag-input-example-1></tag-input-example-1>

```html
<div style="padding-top: 0.5em;">
  <vigour-tag-input v-model="tags"></vigour-tag-input>
</div>
```

```javascript
data() {
  return {
    tags: ['美食', '博客']
  }
}
```

### Placeholder

By default, the value of `placeholder` attribute is `'Add tag...'`. You can change the placeholder by setting this attribute.

默认情况下，`placeholder` 属性的值为 `'Add tag...'`，你可以通过设置该属性改变 placeholder。

<tag-input-example-2></tag-input-example-2>

```html
<div style="padding-top: 0.5em;">
  <vigour-tag-input
    placeholder="请输入 tag"
    v-model="tags"
  ></vigour-tag-input>
</div>
```
## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| v-model | `array<string>` | - | - |
| placeholder | `string` | `'Add tag...'` | - |