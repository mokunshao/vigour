---
title: Rating 评分
---

# Rating 评分

```javascript
import { rating } from 'vigour';
// rating.name === 'vigour-rating'
```

## Example

### Basic usage

<rating-example-1></rating-example-1>

```html
<vigour-rating v-model="val" />
```

### Max

The `max` attribute determines how many stars there should be, and the default value for this property is `5`.

`max` 属性决定应该有多少个星星，该属性默认值为 `5`。

<rating-example-2></rating-example-2>

```html
<vigour-rating v-model="val" :max="6" />
```

### Clearable

The `clearable` attribute determines whether the value should be cleared to zero after repeatedly clicking on a star, which defaults to `false`.

`clearable` 属性决定是否应该在重复点击某个星星后把值清零，该属性默认值为 `false`。

<rating-example-3></rating-example-3>

```html
<vigour-rating v-model="val" clearable />
```

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| v-model | `number` | - | - |
| max | `number` | `5` | - |
| clearable | `boolean` | `false` | - |
