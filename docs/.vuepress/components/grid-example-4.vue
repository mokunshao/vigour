<template>
  <div style="padding-top: 0.5em;">
    <vigour-row gutter="20">
      <vigour-col span="4">
        <div class="color3">1</div>
      </vigour-col>
      <vigour-col span="5" offset="3">
        <div class="color4">2</div>
      </vigour-col>
    </vigour-row>
  </div>
</template>

<script>
import col from '../../../src/components/col'
import row from '../../../src/components/row'

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