import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import Input from '@/components/input.vue';

describe('input.vue', () => {
  it('Input 存在', () => {
    expect(Input).to.be.ok;
  });
  describe('props', () => {
    it('接收 value', () => {
      const wrapper = mount(Input, {
        propsData: {
          value: '1234',
        },
      });
      const inputElement = wrapper.find('input').element;
      expect(inputElement.value).to.equal('1234');
    });

    it('接收 disabled', () => {
      const wrapper = mount(Input, {
        propsData: {
          disabled: true,
        },
      });
      const inputElement = wrapper.find('input').element;
      expect(inputElement.disabled).to.equal(true);
    });
    it('接收 readonly', () => {
      const wrapper = mount(Input, {
        propsData: {
          readonly: true,
        },
      });
      const inputElement = wrapper.find('input').element;
      expect(inputElement.readOnly).to.equal(true);
    });
    it('接收 error', () => {
      const errorMessage = 'error message';
      const wrapper = mount(Input, {
        propsData: {
          error: errorMessage,
        },
      });
      const icon = wrapper.find('use').element;
      expect(icon.getAttribute('xlink:href')).to.equal('#icon-info');
      const errorText = wrapper.find('.vigour-input-error-message');
      expect(errorText.text()).to.be.equal(errorMessage);
    });
  });
  describe('事件', () => {
    it('支持 change/input/focus/blur 事件', () => {
      const { vm } = mount(Input);
      const callback = sinon.fake();
      ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
        vm.$on(eventName, callback);
        vm.$emit(eventName, 12);
        sinon.assert.calledWith(callback, 12);
      });
    });
  });
});
