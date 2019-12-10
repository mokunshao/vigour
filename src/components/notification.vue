<template>
  <div class="vigour-notification">
    <div
      class="vigour-notification-content"
      v-for="item in list"
      :key="item.id"
    >
      {{ item.content }}
      <vigour-button
        class="vigour-notification-content-button"
        @click="remove(item.id)"
        >close</vigour-button
      >
    </div>
  </div>
</template>

<script>
import button from './button.vue';

let id = 0;

function getId() {
  const result = `notification_${id}`;
  id += 1;
  return result;
}

export default {
  name: 'vigour-notification',
  components: {
    [button.name]: button,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    add(notice) {
      const addId = getId();
      const newNotice = { ...notice, id: addId };
      this.list.push(newNotice);
      if (newNotice.duration === 0) {
        return;
      }
      setTimeout(() => {
        this.remove(addId);
      }, newNotice.duration || 3000);
    },
    remove(removeId) {
      this.list.forEach((item, index) => {
        if (item.id === removeId) {
          this.list.splice(index, 1);
        }
      });
    },
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
    display: flex;
    align-items: center;

    &-button {
      margin-left: 0.5em;
    }
  }
}
</style>
