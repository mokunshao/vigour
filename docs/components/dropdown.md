---
title: Dropdown
---

# Dropdown

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