<template>
  <div :style="{ padding: '10vh' }">
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