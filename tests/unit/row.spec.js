import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Row from '@/components/row.vue';
import Col from '@/components/col.vue';

describe('row.vue', () => {
  it('Row 存在', () => {
    expect(Row).to.be.ok;
  });
  it('Row 接受 gutter 属性', () => {
    const gutter = 30;
    const wrapper = mount(Row, {
      propsData: {
        gutter,
      },
      slots: { default: Col },
    });
    const { marginLeft, marginRight } = wrapper.element.style;
    expect(marginLeft).to.be.equal(marginRight);
    // const { paddingLeft, paddingRight } = wrapper.element.children[0].style;
    // expect(paddingLeft).to.be.equal(paddingRight).to.be.equal(`${gutter / 2}px`);
  });
  it('Row 接受 align 属性', () => {
    const wrapper = mount(Row, {
      propsData: {
        align: 'center',
      },
    });
    expect(wrapper.classes('vigour-row-center')).to.be.true;
    wrapper.setProps({ align: 'left' });
    expect(wrapper.classes('vigour-row-left')).to.be.true;
    wrapper.setProps({ align: 'right' });
    expect(wrapper.classes('vigour-row-right')).to.be.true;
  });
});
