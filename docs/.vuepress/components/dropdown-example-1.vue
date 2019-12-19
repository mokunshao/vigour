<template>
  <div>
    <vigour-dropdown>
      <vigour-button>options</vigour-button>
      <template #content>
        <h1>hello world</h1>
      </template>
    </vigour-dropdown>
    <br />
    <vigour-dropdown>
      <a>click this text</a>
      <template #content>
        <h1>I like to code.</h1>
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
