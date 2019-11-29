---
title: Input
---

# Input

## Example

### Basic

<input-example-1></input-example-1>

```vue
<vigour-input v-model="value"></vigour-input>
```

### Clearable

<input-example-2></input-example-2>

```vue
<vigour-input v-model="value" clearable></vigour-input>
```

### Placeholder

<input-example-3></input-example-3>

```vue
<vigour-input v-model="value" placeholder="请输入内容"></vigour-input>
```

### Types

<input-example-4></input-example-4>

```vue
<vigour-input
  v-model="value"
  placeholder="请输入密码"
  type="password"
  clearable
></vigour-input>
```

## Props