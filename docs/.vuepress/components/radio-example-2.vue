<template>
  <div>
    <vigour-radio-group v-model="radioValue">
      <vigour-radio label="male">male</vigour-radio>
      <vigour-radio label="female">female</vigour-radio>
    </vigour-radio-group>
    <div>You are selecting '{{ radioValue }}'</div>
  </div>
</template>

<script>
import radio from '../../../src/components/radio'
import radioGroup from '../../../src/components/radio-group'
export default {
  components: {
    [radio.name]: radio,
    [radioGroup.name]: radioGroup
  },
  data() {
    return {
      radioValue: 'male'
    }
  }
}
</script>