<template>
  <div>
    <vigour-collapse v-model="unfold" single>
      <vigour-collapse-item title="title 1">content 1</vigour-collapse-item>
      <vigour-collapse-item title="title 2">content 2</vigour-collapse-item>
      <vigour-collapse-item title="title 3">content 3</vigour-collapse-item>
    </vigour-collapse>
    <blockquote>
      {{ unfold }}
    </blockquote>
  </div>
</template>

<script>
import collapse from '../../../src/components/collapse';
import collapseItem from '../../../src/components/collapse-item';

export default {
  components: {
    [collapse.name]: collapse,
    [collapseItem.name]: collapseItem,
  },
  data() {
    return {
      unfold: ['title 1'],
    }
  }
}
</script>
