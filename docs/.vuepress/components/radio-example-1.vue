<template>
  <div>
    <vigour-radio label="one" v-model="radioValue">one</vigour-radio>
    <vigour-radio label="two" v-model="radioValue">two</vigour-radio>
    <vigour-radio label="three" disabled v-model="radioValue"
      >three</vigour-radio
    >
    <div>You are selecting '{{ radioValue }}'</div>
  </div>
</template>

<script>
import radio from '../../../src/components/radio'
export default {
  components: {
    [radio.name]: radio,
  },
  data() {
    return {
      radioValue: 'one',
    }
  }
}
</script>