<template>
  <div>
    <vigour-dropdown>
      <vigour-button>options</vigour-button>
      <template #content="{close}">
        <ul>
          <li v-for="i in 4" :key="i">
            {{ i }}
          </li>
        </ul>
        <vigour-button @click="close">close</vigour-button>
      </template>
    </vigour-dropdown>
  </div>
</template>

<script>
import dropdown from '../../../src/components/dropdown';
import button from '../../../src/components/button';

export default {
  components: {
    [dropdown.name]: dropdown,
    [button.name]: button
  }
}
</script>
