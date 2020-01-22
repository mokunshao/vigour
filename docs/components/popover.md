---
title: Popover
---

# Popover

## Example

```javascript
import { popover } from 'vigour';
// popover.name === 'vigour-popover'
```

### Basic

By default, the appearance of a Popover needs to be triggered by a click and appears at the top of the content.

默认情况下， Popover 的出现需要通过点击触发，而且出现在内容的上方。

<popover-example-4></popover-example-4>

```html
<vigour-popover>
  <template v-slot:content>
    <div>test</div>
  </template>
  <vigour-button>Click</vigour-button>
</vigour-popover>
```

### Positions

You can set the position where the Popover appears through the `position` attribute. It can be set to `'top'`, `'left'`, `'bottom'`or `'right'`.

通过 `position` 属性可以设置 Popover 出现的位置。它可以设置为 `'top'`, `'left'`, `'bottom'` 或 `'right'`。

<popover-example-2></popover-example-2>

```html
<vigour-popover position="top">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Top</vigour-button>
</vigour-popover>
<vigour-popover position="bottom">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Bottom</vigour-button>
</vigour-popover>
<vigour-popover position="left">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Left</vigour-button>
</vigour-popover>
<vigour-popover position="right">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Right</vigour-button>
</vigour-popover>
```

### Trigger

You can set the trigger method for Popover to appear through the attribute `trigger`. It can be set to `'hover'`, `'click'`. Its default value is `'click'`.

通过 `trigger` 属性可以设置让 Popover 出现的触发方式。它可以设置为 `'hover'`, `'click'`。它的默认值为 `'click'`。

<popover-example-1></popover-example-1>

```html
<vigour-popover position="top" trigger="hover">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Top</vigour-button>
</vigour-popover>
<vigour-popover position="bottom" trigger="hover">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Bottom</vigour-button>
</vigour-popover>
<vigour-popover position="left" trigger="hover">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Left</vigour-button>
</vigour-popover>
<vigour-popover position="right" trigger="hover">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Right</vigour-button>
</vigour-popover>
```

### Slot Scope

You can get a function that can close Popover through the Slot Scope, provided by a named slot named `content`.

通过名为 `content` 的命名插槽提供的 Slot Scope，你可以获取能够关闭 Popover 的函数。

<popover-example-3></popover-example-3>

```html
<vigour-popover position="top">
  <template v-slot:content="{ close }">
    <div>test</div>
    <vigour-button @click="close">close</vigour-button>
  </template>
  <vigour-button>Click</vigour-button>
</vigour-popover>
<vigour-popover position="top">
  <template v-slot:content="slotProps">
    <div>test</div>
    <vigour-button @click="slotProps.close">close</vigour-button>
  </template>
  <vigour-button>Click</vigour-button>
</vigour-popover>
```

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| position | `string` | `'top'` | `'top', 'left', 'bottom', 'right'` |
| trigger | `string` | `'hover'` | `'click', 'hover'` |
