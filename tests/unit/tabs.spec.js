import { expect } from 'chai';
// import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Tabs from '../../src/components/tabs.vue';
import TabsHead from '../../src/components/tabs-head.vue';
import TabsBody from '../../src/components/tabs-body.vue';
import TabsItem from '../../src/components/tabs-item.vue';
import TabsPane from '../../src/components/tabs-pane.vue';

Vue.component('vigour-tabs-body', TabsBody);
Vue.component('vigour-tabs-head', TabsHead);
Vue.component('vigour-tabs-item', TabsItem);
Vue.component('vigour-tabs-pane', TabsPane);

describe('tabs.vue', () => {
  it('存在', () => {
    expect(Tabs).to.be.ok;
  });
  // it('接受 selected 属性', () => {
  //   const selected = 'tab2';
  //   const wrapper = mount(Tabs, {
  //     propsData: {
  //       selected,
  //     },
  //     slots: {
  //       default:
  //         `<vigour-tabs-head>
  //           <vigour-tabs-item name="tab1">tab 1</vigour-tabs-item>
  //           <vigour-tabs-item name="tab2">tab 2</vigour-tabs-item>
  //           <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
  //         </vigour-tabs-head>
  //         <vigour-tabs-body>
  //           <vigour-tabs-pane name="tab1">tab 1 content</vigour-tabs-pane>
  //           <vigour-tabs-pane name="tab2">tab 2 content</vigour-tabs-pane>
  //           <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
  //         </vigour-tabs-body>`,
  //     },
  //   });
  //   expect(wrapper.element.querySelector('.vigour-tabs-item.vigour-tabs-item-selected')
  // .innerHTML).to.equal('tab 2');
  // });
});
