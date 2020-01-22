<template>
  <div style="padding-top: 0.5em;">
    <vigour-row align="left">
      <vigour-col span="4" class="color1">1</vigour-col>
      <vigour-col span="6" class="color2">2</vigour-col>
    </vigour-row>
    <vigour-row align="center">
      <vigour-col span="4" class="color3">1</vigour-col>
      <vigour-col span="6" class="color4">2</vigour-col>
    </vigour-row>
    <vigour-row align="right">
      <vigour-col span="4" class="color3">1</vigour-col>
      <vigour-col span="6" class="color4">2</vigour-col>
    </vigour-row>
  </div>
</template>

<script>
import col from '../../../src/components/col';
import row from '../../../src/components/row';

export default {
  components: {
    [col.name]: col,
    [row.name]: row
  }
}
</script>

<style lang="scss" scoped>
.color1 {
  background-color: #f4f3f3;
}

.color2 {
  background-color: #dfdfdf;
}

.color3 {
  background-color: #bfd8d5;
}

.color4 {
  background-color: #b1bed5;
}
</style>