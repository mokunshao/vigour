import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Col from '@/components/col.vue';

describe('col.vue', () => {
  it('Col 存在', () => {
    expect(Col).to.be.ok;
  });
  it('Col 接受 span 参数', () => {
    const span = 5;
    const wrapper = mount(Col, {
      propsData: {
        span,
      },
    });
    expect(wrapper.classes(`vigour-col-span-${span}`)).to.be.true;
  });
  it('Col 接受 offset 参数', () => {
    const offset = 5;
    const wrapper = mount(Col, {
      propsData: {
        offset,
      },
    });
    expect(wrapper.classes(`vigour-col-offset-${offset}`)).to.be.true;
  });
  it('Col 接受 xs 参数', () => {
    const xs = { offset: 1, span: 2 };
    const wrapper = mount(Col, {
      propsData: {
        xs,
      },
    });
    Object.entries(xs).forEach(([key, value]) => {
      expect(wrapper.classes(`vigour-col-${key}-xs-${value}`)).to.be.true;
    });
  });
  it('Col 接受 sm 参数', () => {
    const sm = { offset: 1, span: 2 };
    const wrapper = mount(Col, {
      propsData: {
        sm,
      },
    });
    Object.entries(sm).forEach(([key, value]) => {
      expect(wrapper.classes(`vigour-col-${key}-sm-${value}`)).to.be.true;
    });
  });
  it('Col 接受 md 参数', () => {
    const md = { offset: 1, span: 2 };
    const wrapper = mount(Col, {
      propsData: {
        md,
      },
    });
    Object.entries(md).forEach(([key, value]) => {
      expect(wrapper.classes(`vigour-col-${key}-md-${value}`)).to.be.true;
    });
  });
  it('Col 接受 lg 参数', () => {
    const lg = { offset: 1, span: 2 };
    const wrapper = mount(Col, {
      propsData: {
        lg,
      },
    });
    Object.entries(lg).forEach(([key, value]) => {
      expect(wrapper.classes(`vigour-col-${key}-lg-${value}`)).to.be.true;
    });
  });
});
