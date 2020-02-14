import { mount } from '@vue/test-utils';
import Rating from '../../src/components/rating.vue';

describe('Rating', () => {
  it('Rating 存在', () => {
    expect(Rating).toBeTruthy();
  });
  test('renders correctly', () => {
    const wrapper = mount(Rating, {
      propsData: {
        value: 3,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
    wrapper.setProps({ value: 1 });
    expect(wrapper.element).toMatchSnapshot();
  });
});
