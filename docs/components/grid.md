---
title: Grid
---

# Grid

## Example

<grid-example-1></grid-example-1>

```vue
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

<grid-example-2></grid-example-2>

```vue
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

<grid-example-3></grid-example-3>

```vue
<vigour-row>
  <vigour-col span="4" class="color1">1</vigour-col>
  <vigour-col span="5" offset="3" class="color2">2</vigour-col>
</vigour-row>
```

<grid-example-4></grid-example-4>

```vue
<vigour-row gutter="20">
  <vigour-col span="4">
    <div class="color3">1</div>
  </vigour-col>
  <vigour-col span="5" offset="3">
    <div class="color4">2</div>
  </vigour-col>
</vigour-row>
```

<grid-example-5></grid-example-5>

```vue
<vigour-row align="left">
  <vigour-col span="4">1</vigour-col>
  <vigour-col span="6" offset="3">2</vigour-col>
</vigour-row>
<vigour-row align="center">
  <vigour-col span="4">1</vigour-col>
  <vigour-col span="6" offset="3">2</vigour-col>
</vigour-row>
<vigour-row align="right">
  <vigour-col span="4">1</vigour-col>
  <vigour-col span="6" offset="3">2</vigour-col>
</vigour-row>
```

<grid-example-6></grid-example-6>

```vue
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
