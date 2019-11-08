import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Popover from '../../src/components/popover.vue';

describe('Popover.vue', () => {
  it('Popover 存在', () => {
    expect(Popover).to.be.ok;
  });
  it('接受 position 参数', () => {
    const wrapper = mount(Popover, {
      propsData: {
        position: 'left',
      },
      slots: {
        default: '<button id="button">button</button>',
        content: '<div id="content">content</div>',
      },
    });
    wrapper.setData({ visible: true });
    expect(wrapper.vm.$refs.content.classList.contains('vigour-popover-content-left')).to.be.true;
  });
});
