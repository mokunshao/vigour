<template>
  <div>
    <vigour-rating v-model="val" clearable />
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
      val: 4,
    };
  },
};
</script>
