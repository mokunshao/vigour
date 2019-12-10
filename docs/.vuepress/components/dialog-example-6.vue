<template>
  <div>
    <vigour-button @click="dialogVisable = !dialogVisable"
      >show/hide dialog</vigour-button
    >
    <vigour-dialog title="Attention" :visible.sync="dialogVisable">
      <div>hello world</div>
    </vigour-dialog>
  </div>
</template>

<script>
import dialog from '../../../src/components/dialog';
import button from '../../../src/components/button';

export default {
  components: {
    [dialog.name]: dialog,
    [button.name]: button
  },
  data() {
    return {
      dialogVisable: false
    }
  }
}
</script>