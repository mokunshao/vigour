---
title: Grid 网格
---

# Grid 网格

```javascript
import { row, col } from 'vigour';
// row.name === 'vigour-row'
// col.name === 'vigour-col'
```

## Example

### Basic Usage

By default, each `vigour-col` in `vigour-row` has the same width.

默认情况下，在 `vigour-row` 里的每个 `vigour-col` 的宽度是一样的。

<grid-example-1></grid-example-1>

```html
<vigour-row>
  <vigour-col class="color1">1</vigour-col>
  <vigour-col class="color2">2</vigour-col>
</vigour-row>
<vigour-row>
  <vigour-col class="color1">1</vigour-col>
  <vigour-col class="color2">2</vigour-col>
  <vigour-col class="color3">3</vigour-col>
  <vigour-col class="color4">4</vigour-col>
</vigour-row>
```

### Span

The `span` attribute determines how much space should be occupied horizontally by `vigour-col`, this value can be between 0 and 24.

`span` 属性用来决定 `vigour-col` 应该水平地占据多少空间，该值可以为 0 至 24。

<grid-example-2></grid-example-2>

```html
<vigour-row>
  <vigour-col span="2" class="color1">1</vigour-col>
  <vigour-col class="color2">2</vigour-col>
</vigour-row>
<vigour-row>
  <vigour-col span="3" class="color3">1</vigour-col>
  <vigour-col span="21" class="color4">2</vigour-col>
</vigour-row>
<vigour-row>
  <vigour-col span="4" class="color1">1</vigour-col>
  <vigour-col span="6" class="color2">2</vigour-col>
</vigour-row>
```

### Offset

The `offset` attribute determines how much space `vigour-col` should move horizontally to the right. The value can be 0 to 24.

`offset` 属性决定 `vigour-col` 应该水平地往右移动多少空间，该值可以为 0 至 24。

<grid-example-3></grid-example-3>

```html
<vigour-row>
  <vigour-col span="4" class="color1">1</vigour-col>
  <vigour-col span="5" offset="3" class="color2">2</vigour-col>
</vigour-row>
```

### Gutter

The `gutter` attribute of `vigour-row` can specify the interval between `vigour-col`. The default interval is 0.

`vigour-row` 的 `gutter` 属性可以指定 `vigour-col` 之间的间隔，默认间隔为 0。

<grid-example-4></grid-example-4>

```html
<vigour-row gutter="20">
  <vigour-col>
    <div class="color3">1</div>
  </vigour-col>
  <vigour-col>
    <div class="color4">2</div>
  </vigour-col>
  <vigour-col>
    <div class="color3">3</div>
  </vigour-col>
  <vigour-col>
    <div class="color4">4</div>
  </vigour-col>
</vigour-row>
```

### Align

The `align` attribute of `vigour-row` can determine the horizontal alignment direction of `vigour-col`. Its values can be `'left'`, `'right'` and `'center'`.

`vigour-row` 的 `align` 属性可以决定 `vigour-col` 的水平对齐方向。它的值可以是 `'left'`，`'right'` 和 `'center'`。

<grid-example-5></grid-example-5>

```html
<vigour-row align="left">
  <vigour-col span="4">1</vigour-col>
  <vigour-col span="6">2</vigour-col>
</vigour-row>
<vigour-row align="center">
  <vigour-col span="4">1</vigour-col>
  <vigour-col span="6">2</vigour-col>
</vigour-row>
<vigour-row align="right">
  <vigour-col span="4">1</vigour-col>
  <vigour-col span="6">2</vigour-col>
</vigour-row>
```

### Responsive

The `span` and `offset` attributes of `vigour-col` under different screen widths can be set through the values of `lg`, `md`, `sm` and `xs` attributes.

通过 `lg`、`md`、`sm`、`xs` 属性可以设置在不同屏幕宽度下的 `vigour-col` 的 `span` 和 `offset` 属性。

<grid-example-6></grid-example-6>

```html
<vigour-row>
  <vigour-col
    span="12"
    offset="0"
    :lg="{ span: 11, offset: 0 }"
    :md="{ span: 6, offset: 0 }"
    :sm="{ span: 3, offset: 0 }"
    :xs="{ span: 12, offset: 0 }"
  >
    <div class="color3">1</div>
  </vigour-col>
  <vigour-col
    span="12"
    offset="0"
    :lg="{ span: 11, offset: 2 }"
    :md="{ span: 6, offset: 0 }"
    :sm="{ span: 3, offset: 4 }"
    :xs="{ span: 12, offset: 0 }"
  >
    <div class="color4">2</div>
  </vigour-col>
</vigour-row>
```
## Props

### Row

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| gutter | `number` | - | `0~24` |
| align | `string` | - | `'left','center','right'` |

### Col

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| span | `number` | - | `0~24` |
| offset | `number` | - | `0~24` |
| lg | `{span?:number,offset?:number}` | - | - |
| md | `{span?:number,offset?:number}` | - | - |
| sm | `{span?:number,offset?:number}` | - | - |
| xs | `{span?:number,offset?:number}` | - | - |
