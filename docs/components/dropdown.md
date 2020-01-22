---
title: Dropdown 下拉框
---

# Dropdown 下拉框

```javascript
import { dropdown } from 'vigour';
// dropdown.name === 'vigour-dropdown'
```

## Example

### Basic Usage

<dropdown-example-1></dropdown-example-1>

```html
<vigour-dropdown>
  <vigour-button>options</vigour-button>
  <template #content>
    <h1>hello world</h1>
  </template>
</vigour-dropdown>
<br />
<vigour-dropdown>
  <a>click this text</a>
  <template #content>
    <h1>hello world</h1>
  </template>
</vigour-dropdown>
```

### Slot Scope

You can get a function that can close Dropdown through the Slot Scope, provided by a named slot named `content`.

通过名为 `content` 的命名插槽提供的 Slot Scope，你可以获取能够关闭 Dropdown 的函数。

<dropdown-example-2></dropdown-example-2>

```html
<vigour-dropdown>
  <vigour-button>options</vigour-button>
  <template #content="{close}">
    <ul>
      <li v-for="i in 4" :key="i">
        {{ i }}
      </li>
    </ul>
    <vigour-button @click="close">close</vigour-button>
  </template>
</vigour-dropdown>
```

<style>
.vigour-dropdown-content {
  z-index: 1;
}
</style>