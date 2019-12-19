<template>
  <div>
    <div style="margin: 0.5em 0;">
      <vigour-formatted-input v-model="n1"></vigour-formatted-input>
    </div>
    <div style="margin: 0.5em 0;">
      <vigour-formatted-input
        v-model="n2"
        template="XXX.XXX.XXX.XXX"
      ></vigour-formatted-input>
    </div>
    <div style="margin: 0.5em 0;">
      <vigour-formatted-input
        v-model="n3"
        template="XXX-XXX-XXX-XXX"
      ></vigour-formatted-input>
    </div>
  </div>
</template>

<script>
import formattedInput from '../../../src/components/formatted-input';

export default {
  components: {
    [formattedInput.name]: formattedInput
  },
  data() {
    return {
      n1: '',
      n2: '',
      n3: '',
    }
  }
}
</script>
