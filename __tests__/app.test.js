/**
 * @jest-environment jsdom
 */
global.Vue = require('vue');
const mount = require('@vue/test-utils').mount;
const app = require('./../lib/js/app.js');


describe('app', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(app.message).toBe("Hello Vue!");
    expect(typeof app.mountTableCharts).toBe("function");
    expect(app._isVue).toBe(true);
  });
});

describe('Mounted app', () => {
  const wrapper = mount(app);
  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
