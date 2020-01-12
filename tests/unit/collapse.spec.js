import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Collapse from '@/components/collapse.vue';
import CollapseItem from '@/components/collapse-item.vue';

Vue.component(CollapseItem.name, CollapseItem);
describe('collapse.vue', () => {
  it('存在', () => {
    expect(Collapse).toBeTruthy();
    expect(CollapseItem).toBeTruthy();
  });
  it('接受 selected 属性', () => {
    const unfolds = ['title 1', 'title 2'];
    const wrapper = mount(Collapse, {
      propsData: {
        value: unfolds,
      },
      slots: {
        default: `<vigour-collapse-item id='t1' title="title 1">content 1</vigour-collapse-item>
        <vigour-collapse-item id='t2' title="title 2">content 2</vigour-collapse-item>
        <vigour-collapse-item id='t3' title="title 3">content 3</vigour-collapse-item>`,
      },
    });
    expect(wrapper.find('#t1 .vigour-collapse-item-content').isVisible()).toBeTruthy();
    expect(wrapper.find('#t2 .vigour-collapse-item-content').isVisible()).toBeTruthy();
    expect(wrapper.find('#t3 .vigour-collapse-item-content').exists()).toBeFalsy();
  });
  it('接受 single 属性', () => {
    const unfolds = ['title 2'];
    const wrapper = mount(Collapse, {
      propsData: {
        value: unfolds,
        single: true,
      },
      slots: {
        default: `<vigour-collapse-item id='t4' title="title 1">content 1</vigour-collapse-item>
        <vigour-collapse-item id='t5' title="title 2">content 2</vigour-collapse-item>`,
      },
    });
    expect(wrapper.find('#t4 .vigour-collapse-item-content').exists()).toBeFalsy();
    expect(wrapper.find('#t5 .vigour-collapse-item-content').isVisible()).toBeTruthy();
  });
});
