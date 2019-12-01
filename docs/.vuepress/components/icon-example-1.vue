<template>
  <div :style="{ padding: '1em' }">
    <vigour-icon name="settings"></vigour-icon>
    <vigour-icon name="download"></vigour-icon>
    <vigour-icon name="upload" color="#999"></vigour-icon>
    <vigour-icon name="left" color="yellowgreen"></vigour-icon>
    <vigour-icon name="right" color="red"></vigour-icon>
  </div>
</template>

<script>
import icon from '../../../src/components/icon';
export default {
  components: {
    [icon.name]: icon
  }
}
</script>
