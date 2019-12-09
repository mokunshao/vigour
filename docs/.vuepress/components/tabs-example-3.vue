<template>
  <div>
    <vigour-tabs :selected.sync="tab" direction="horizontal">
      <vigour-tabs-head>
        <template v-slot:actions>
          <vigour-button>test</vigour-button>
        </template>
        <vigour-tabs-item name="tab1">tab 1</vigour-tabs-item>
        <vigour-tabs-item name="tab2">tab 2</vigour-tabs-item>
        <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
      </vigour-tabs-head>
      <vigour-tabs-body>
        <vigour-tabs-pane name="tab1">tab 1 content</vigour-tabs-pane>
        <vigour-tabs-pane name="tab2">tab 2 content</vigour-tabs-pane>
        <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
      </vigour-tabs-body>
    </vigour-tabs>
  </div>
</template>

<script>
import tabs from '../../../src/components/tabs';
import tabsBody from '../../../src/components/tabs-body';
import tabsHead from '../../../src/components/tabs-head';
import tabsItem from '../../../src/components/tabs-item';
import tabsPane from '../../../src/components/tabs-pane';
import button from '../../../src/components/button';

export default {
  components: {
    [tabs.name]: tabs,
    [tabsBody.name]: tabsBody,
    [tabsHead.name]: tabsHead,
    [tabsItem.name]: tabsItem,
    [tabsPane.name]: tabsPane,
    [button.name]: button,
  },
  data() {
    return {
      tab: 'tab1',
    }
  }
}
</script>