import Layout from '../layout.vue';
import Header from '../header.vue';
import Content from '../content.vue';
import Footer from '../footer.vue';

describe('Layout', () => {
  it('存在', () => {
    expect(Layout).toBeTruthy();
    expect(Header).toBeTruthy();
    expect(Content).toBeTruthy();
    expect(Footer).toBeTruthy();
  });
});
