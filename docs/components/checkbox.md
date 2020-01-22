---
title: Checkbox 复选框
---

# Checkbox 复选框

```javascript
import { checkbox } from 'vigour';
// checkbox.name === 'vigour-checkbox'
```

## Example

<checkbox-example-1></checkbox-example-1>

```vue
<vigour-checkbox v-model="value1">Agree?</vigour-checkbox>
<vigour-checkbox v-model="value2"></vigour-checkbox>
<vigour-checkbox v-model="value3" disabled></vigour-checkbox>
```

## Props

| prop | type | default value | available value|
| -----| ---- | ---- | --- | --- |
| v-model | `boolean` | - | - |