---
title: Layout 布局
---

# Layout 布局

## Example

```javascript
import { layout, header, content, aside, footer } from 'vigour';
// layout.name === 'vigour-layout'
// header.name === 'vigour-header'
// content.name === 'vigour-content'
// aside.name === 'vigour-aside'
// footer.name === 'vigour-footer'
```

### Layout 1

<layout-example-1></layout-example-1>

```vue
<vigour-layout class="layout">
  <vigour-header class="header">header</vigour-header>
  <vigour-content class="content">content</vigour-content>
  <vigour-footer class="footer">footer</vigour-footer>
</vigour-layout>
```

### Layout 2

<layout-example-2></layout-example-2>

```vue
<vigour-layout class="layout">
  <vigour-header class="header">header</vigour-header>
  <vigour-layout>
    <vigour-aside class="aside">aside</vigour-aside>
    <vigour-content class="content">content</vigour-content>
  </vigour-layout>
  <vigour-footer class="footer">footer</vigour-footer>
</vigour-layout>
```

### Layout 3

<layout-example-3></layout-example-3>

```vue
<vigour-layout class="layout">
  <vigour-header class="header">header</vigour-header>
  <vigour-layout>
    <vigour-content class="content">content</vigour-content>
    <vigour-aside class="aside">aside</vigour-aside>
  </vigour-layout>
  <vigour-footer class="footer">footer</vigour-footer>
</vigour-layout>
```

### Layout 4

<layout-example-4></layout-example-4>

```vue
<vigour-layout class="layout">
  <vigour-aside class="aside">aside</vigour-aside>
  <vigour-layout>
    <vigour-header class="header">header</vigour-header>
    <vigour-content class="content">content</vigour-content>
    <vigour-footer class="footer">footer</vigour-footer>
  </vigour-layout>
</vigour-layout>
```
