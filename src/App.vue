<template>
  <div id="app" style="margin-top: 100vh; margin-bottom: 100vh;">
    <!-- <div id="app"> -->
    <div v-if="false">
      <vigour-dropdown>
        <button>options</button>
        <template #content="{close}">
          <div
            style="border-bottom: 1px solid red;"
            v-for="i in 4"
            :key="i"
            @click="close"
          >
            {{ i }}
          </div>
        </template>
      </vigour-dropdown>
      <br />
      <vigour-dropdown>
        <button>options</button>
        <template #content="{close}">
          <h1>hello world</h1>
        </template>
      </vigour-dropdown>
    </div>
    <div v-if="false">
      <vigour-formatted-input v-model="n1"></vigour-formatted-input>
      <br />
      <vigour-formatted-input
        v-model="n2"
        template="XXX.XXX.XXX.XXX"
      ></vigour-formatted-input>
      <br />
      <vigour-formatted-input
        v-model="n3"
        template="XXX-XXX-XXX-XXX"
      ></vigour-formatted-input>
    </div>
    <div></div>
  </div>
</template>

<script>
import dropdown from './components/dropdown.vue';
import formattedInput from './components/formatted-input.vue';


export default {
  name: 'app',
  components: {
    [dropdown.name]: dropdown,
    [formattedInput.name]: formattedInput,
  },
  data() {
    return {
      dialogVisable: true,
      n1: '121211212',
      n2: '',
      n3: '',
    };
  },
  methods: {

    test() {
      console.log('test');
    },
    // async input(value) {
    // const currentItem = value[value.length - 1];
    // const children = await fetchData(currentItem.id);
    // this.$set(currentItem, 'children', children);
    // currentItem.children = children;
    //   console.log(value, 'top');
    // },
  },
};
</script>
