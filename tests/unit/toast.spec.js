import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import Toast from '../../src/components/toast.vue';

describe('toast.vue', () => {
  it('Tosat 存在', () => {
    expect(Toast).to.be.ok;
  });
  describe('props', () => {
    it('接受 autoClose 和 autoCloseDelay', (done) => {
      const wrapper = mount(Toast, {
        slots: {
          default: 'test',
        },
        propsData: {
          autoClose: true,
          autoCloseDelay: 100,
        },
      });
      expect(wrapper.exists()).to.eq(true);

      setTimeout(() => {
        expect(wrapper.exists()).to.eq(false);
        done();
      }, 200);
    });
    it('接受 autoClose 和 autoCloseDelay', (done) => {
      const wrapper = mount(Toast, {
        slots: {
          default: 'test',
        },
        propsData: {
          autoClose: true,
          autoCloseDelay: 100,
        },
      });
      expect(wrapper.exists()).to.eq(true);
      wrapper.vm.$once('hook:destroyed', () => {
        expect(wrapper.exists()).to.eq(false);
        done();
      });
    });
    it('接受 closeButton 参数', () => {
      const callback = sinon.fake();
      const wrapper = mount(Toast, {
        slots: {
          default: 'test',
        },
        propsData: {
          autoClose: false,
          closeButton: {
            text: '关闭',
            callback,
          },
        },
      });
      const button = wrapper.find('.vigour-toast-button');
      expect(button.text()).to.eq('关闭');
      expect(wrapper.exists()).to.eq(true);
      button.trigger('click');
      expect(wrapper.exists()).to.eq(false);
      expect(callback.called).to.be.true;
    });
  });
});
