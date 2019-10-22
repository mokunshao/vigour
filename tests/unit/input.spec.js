import { expect } from 'chai';
import Vue from 'vue';
import Input from '@/components/input.vue';

describe('input.vue', () => {
  it('Input 存在', () => {
    expect(Input).to.be.ok;
  });
  describe('props', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });
    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234',
        },
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.value).to.equal('1234');
    });

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true,
        },
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).to.equal(true);
    });
    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true,
        },
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.readOnly).to.equal(true);
    });
  });
});
