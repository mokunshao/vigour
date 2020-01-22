<template>
  <div :style="{ padding: '10vh' }">
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