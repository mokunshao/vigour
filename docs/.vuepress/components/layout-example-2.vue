<template>
  <div>
    <vigour-layout class="layout">
      <vigour-header class="header">header</vigour-header>
      <vigour-layout>
        <vigour-aside class="aside">aside</vigour-aside>
        <vigour-content class="content">content</vigour-content>
      </vigour-layout>
      <vigour-footer class="footer">footer</vigour-footer>
    </vigour-layout>
  </div>
</template>

<script>
import layout from '../../../src/components/layout'
import footer from '../../../src/components/footer'
import header from '../../../src/components/header'
import aside from '../../../src/components/aside'
import content from '../../../src/components/content'

export default {
  components: {
    [layout.name]: layout,
    [footer.name]: footer,
    [header.name]: header,
    [aside.name]: aside,
    [content.name]: content,
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