import { mount } from '@vue/test-utils';
import { Tree } from '../../src/components/tree/index';

const json = [
  {
    label: '家用电器',
    isExpanded: true,
    id: 1,
    children: [
      {
        label: '电视',
        id: 11,
        isExpanded: true,
      },
    ],
  },
];

describe('Tree', () => {
  it('Tree 存在', () => {
    expect(Tree).toBeTruthy();
  });
  test('renders correctly', () => {
    const wrapper = mount(Tree, {
      propsData: {
        data: json,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
