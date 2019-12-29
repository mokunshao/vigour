<template>
  <div>
    <vigour-layout class="layout">
      <vigour-header class="header">header</vigour-header>
      <vigour-layout>
        <vigour-content class="content">content</vigour-content>
        <vigour-aside class="aside">aside</vigour-aside>
      </vigour-layout>
      <vigour-footer class="footer">footer</vigour-footer>
    </vigour-layout>
  </div>
</template>

<script>
import { Layout, Footer, Header, Aside, Content } from '../../../src/components/layout'

export default {
  components: {
    [Layout.name]: Layout,
    [Footer.name]: Footer,
    [Header.name]: Header,
    [Aside.name]: Aside,
    [Content.name]: Content,
  }
}

</script>

<style lang="scss" scoped>
.layout {
  padding: 2em 0;
  height: 40vh;
}

.content {
  background-color: #f4f3f3;
  padding: 0.5em;
}

.header {
  background-color: #dfdfdf;
  padding: 0.5em;
}

.footer {
  background-color: #bfd8d5;
  padding: 0.5em;
}

.aside {
  background-color: #b1bed5;
  padding: 0.5em;
}
</style>