<template>
  <div :style="{ padding: '10vh' }">
    <vigour-popover>
      <template v-slot:content>
        <div>test</div>
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