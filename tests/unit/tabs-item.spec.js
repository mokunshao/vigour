import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Vue from 'vue';
import sinon from 'sinon';
import Tabs from '../../src/components/tabs.vue';
import TabsHead from '../../src/components/tabs-head.vue';
import TabsBody from '../../src/components/tabs-body.vue';
import TabsItem from '../../src/components/tabs-item.vue';
import TabsPane from '../../src/components/tabs-pane.vue';

Vue.component('vigour-tabs-body', TabsBody);
Vue.component('vigour-tabs-head', TabsHead);
Vue.component('vigour-tabs-item', TabsItem);
Vue.component('vigour-tabs-pane', TabsPane);

describe('tabsItem.vue', () => {
  it('存在', () => {
    expect(TabsItem).to.be.ok;
  });
  it('接受 name 属性', () => {
    const selected = 'tab2';
    const wrapper = mount(Tabs, {
      propsData: {
        selected,
      },
      slots: {
        default:
          `<vigour-tabs-head>
            <vigour-tabs-item name="xxx">tab 1</vigour-tabs-item>
          </vigour-tabs-head>
          <vigour-tabs-body>
            <vigour-tabs-pane name="xxx">tab 1 content</vigour-tabs-pane>
          </vigour-tabs-body>`,
      },
    });
    expect(wrapper.find(TabsItem).props('name')).to.eq('xxx');
  });
  it('接受 disabled 属性', () => {
    const callback = sinon.fake();
    const selected = 'tab2';
    const wrapper = mount(Tabs, {
      propsData: {
        selected,
      },
      slots: {
        default:
          `<vigour-tabs-head>
            <vigour-tabs-item name="tab3" disabled>tab 3</vigour-tabs-item>
          </vigour-tabs-head>
          <vigour-tabs-body>
            <vigour-tabs-pane name="tab3">tab 3 content</vigour-tabs-pane>
          </vigour-tabs-body>`,
      },
    });

    const tabsItemWrapper = wrapper.find(TabsItem);
    expect(tabsItemWrapper.props('disabled')).to.eq(true);
    expect(tabsItemWrapper.classes('vigour-tabs-item-disabled')).to.be.true;
    tabsItemWrapper.vm.$on('click', callback);
    tabsItemWrapper.element.click();
    expect(callback.called).to.false;
    tabsItemWrapper.setProps({ disabled: false });
    expect(tabsItemWrapper.props('disabled')).to.eq(false);
    expect(tabsItemWrapper.classes('vigour-tabs-item-disabled')).to.be.false;
    tabsItemWrapper.element.click();
    expect(callback.called).to.true;
  });
});
