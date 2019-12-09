<template>
  <div :style="{ padding: '10vh' }">
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
  </div>
</template>

<script>
import popover from '../../../src/components/popover';
import button from '../../../src/components/button';

export default {
  components: {
    [popover.name]: popover,
    [button.name]: button
  }
}
</script>