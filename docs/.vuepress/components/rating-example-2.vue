<template>
  <div>
    <vigour-rating v-model="val" :max="6" />
  </div>
</template>

<script>
import rating from '../../../src/components/rating.vue';

export default {
  components: {
    [rating.name]: rating,
  },
  data() {
    return {
      val: 2,
    };
  },
};
</script>
