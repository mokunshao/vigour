---
title: Tabs
---

# Tabs

## Example

<tabs-example-1></tabs-example-1>

```vue
<vigour-tabs :selected.sync="tab" direction="horizontal">
  <vigour-tabs-head>
    <vigour-tabs-item name="tab1">tab 1</vigour-tabs-item>
    <vigour-tabs-item name="tab2">tab 2</vigour-tabs-item>
    <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
  </vigour-tabs-head>
  <vigour-tabs-body>
    <vigour-tabs-pane name="tab1">tab 1 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab2">tab 2 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
  </vigour-tabs-body>
</vigour-tabs>
```

<tabs-example-2></tabs-example-2>

```vue
<vigour-tabs :selected.sync="tab" direction="horizontal">
  <vigour-tabs-head>
    <template v-slot:actions>
      <vigour-button>test</vigour-button>
    </template>
    <vigour-tabs-item name="tab1">tab 1</vigour-tabs-item>
    <vigour-tabs-item name="tab2">tab 2</vigour-tabs-item>
    <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
  </vigour-tabs-head>
  <vigour-tabs-body>
    <vigour-tabs-pane name="tab1">tab 1 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab2">tab 2 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
  </vigour-tabs-body>
</vigour-tabs>
```

<tabs-example-3></tabs-example-3>

```vue
<vigour-tabs :selected.sync="tab" direction="vertical">
  <vigour-tabs-head>
    <vigour-tabs-item name="tab1">tab 1</vigour-tabs-item>
    <vigour-tabs-item name="tab2">tab 2</vigour-tabs-item>
    <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
  </vigour-tabs-head>
  <vigour-tabs-body>
    <vigour-tabs-pane name="tab1">tab 1 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab2">tab 2 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
  </vigour-tabs-body>
</vigour-tabs>
```

<tabs-example-4></tabs-example-4>

```vue
<vigour-tabs :selected.sync="tab" direction="vertical">
  <vigour-tabs-head>
    <template v-slot:actions>
      <vigour-button>Button</vigour-button>
    </template>
    <vigour-tabs-item name="tab1">tab 1</vigour-tabs-item>
    <vigour-tabs-item name="tab2">tab 2</vigour-tabs-item>
    <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
  </vigour-tabs-head>
  <vigour-tabs-body>
    <vigour-tabs-pane name="tab1">tab 1 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab2">tab 2 content</vigour-tabs-pane>
    <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
  </vigour-tabs-body>
</vigour-tabs>
```

## Props

### Tabs

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| selected.sync | `string` | - | - |
| direction | `string` | - | `'horizontal', 'vertical'` |
