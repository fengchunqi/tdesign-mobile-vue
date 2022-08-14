/**
 * 该文件为由脚本 `npm run test:demo` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

import { mount } from '@vue/test-utils';
import customVue from '@/result/demos/custom.vue';
import mobileVue from '@/result/demos/mobile.vue';
import themeVue from '@/result/demos/theme.vue';

const mapper = {
  customVue,
  mobileVue,
  themeVue,
};

describe('Result', () => {
  Object.keys(mapper).forEach((demoName) => {
    it(`Result ${demoName} demo works fine`, () => {
      const wrapper = mount(mapper[demoName]);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
