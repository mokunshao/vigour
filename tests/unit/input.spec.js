import { expect } from 'chai';
import { mount } from '@vue/test-utils';
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
  });
});
