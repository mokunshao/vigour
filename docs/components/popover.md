---
title: Popover
---

# Popover

## Example

<popover-example-1></popover-example-1>

```vue
<vigour-popover position="top" trigger="hover">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Hover</vigour-button>
</vigour-popover>
<vigour-popover position="bottom" trigger="hover">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Hover</vigour-button>
</vigour-popover>
<vigour-popover position="left" trigger="hover">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Hover</vigour-button>
</vigour-popover>
<vigour-popover position="right" trigger="hover">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Hover</vigour-button>
</vigour-popover>
```

<popover-example-2></popover-example-2>

```vue
<vigour-popover position="top">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Click</vigour-button>
</vigour-popover>
<vigour-popover position="bottom">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Click</vigour-button>
</vigour-popover>
<vigour-popover position="left">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Click</vigour-button>
</vigour-popover>
<vigour-popover position="right">
  <template v-slot:content>
    <div>
      test test test test test test test test test test test test test test
      test test test test test test test
    </div>
    <div>test</div>
  </template>
  <vigour-button>Click</vigour-button>
</vigour-popover>
```

<popover-example-3></popover-example-3>

```vue
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


