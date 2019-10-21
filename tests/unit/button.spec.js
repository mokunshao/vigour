import { expect } from 'chai';
import Vue from 'vue';
import { shallowMount, mount } from '@vue/test-utils';
import Button from '@/components/button.vue';

describe('button.vue', () => {
  it('存在', () => {
    expect(Button).to.be.ok;
  });
  it('可以设置 icon', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      },
    }).$mount();
    const useElement = vm.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.equal('#icon-settings');
    vm.$destroy();
  });
  it('可以设置 loading', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true,
      },
    }).$mount();
    const useElements = vm.$el.querySelectorAll('use');
    expect(useElements.length).to.equal(1);
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading');
    vm.$destroy();
  });
  it('按钮显示文字', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'abc',
      },
    });
    expect(wrapper.text()).eq('abc');
  });
  it('按钮可以在右边', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'upload',
        iconPosition: 'right',
      },
    });
    expect(wrapper.classes('vigour-button-right')).to.be.true;
  });
});
