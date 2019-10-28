<template>
  <div class="vigour-row"><slot></slot></div>
</template>

<script>
export default {
  name: 'vigour-row',
};
</script>

<style lang="scss">
.vigour-row {
  border: 1px solid green;
  display: flex;

  /*   box-sizing: border-box; */
}
</style>
