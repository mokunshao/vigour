<template>
  <div style="padding-top: 0.5em;">
    <vigour-checkbox v-model="value1">Agree?</vigour-checkbox>
    <vigour-checkbox v-model="value2"></vigour-checkbox>
    <vigour-checkbox v-model="value3" disabled></vigour-checkbox>
  </div>
</template>

<script>
import checkbox from '../../../src/components/checkbox';

export default {
  components: {
    [checkbox.name]: checkbox
  },
  data() {
    return {
      value1: true,
      value2: false,
      value3: false,
    };
  }
}
</script>