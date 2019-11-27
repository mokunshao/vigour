<template>
  <div class="vigour-notification">
    <div
      class="vigour-notification-content"
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigour-notification',
  data() {
    return {
      list: [],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../common.scss";

.vigour-notification {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  &-content {
    background-color: white;
    box-shadow: $box-shadow;
    border: 1px solid black;
    padding: $padding;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }
}
</style>
