<template>
  <div>
    <vigour-button @click="dialogVisable = !dialogVisable"
      >show/hide dialog</vigour-button
    >
    <vigour-dialog :visible.sync="dialogVisable">
      <div>hello world</div>
      <template v-slot:footer>
        <div>
          <vigour-button @click="dialogVisable = !dialogVisable"
            >Yes</vigour-button
          >
          <vigour-button @click="dialogVisable = !dialogVisable"
            >No</vigour-button
          >
        </div>
      </template>
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