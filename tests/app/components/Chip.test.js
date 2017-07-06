import React from 'react';
import { shallow } from 'enzyme';

import Chip from '../../../app/components/Chip';

const cross = (() => {
  const a = '<path fill="none" stroke-width="1.06" d="M16,16 L4,4"></path>';
  const b = '<path fill="none" stroke-width="1.06" d="M16,4 L4,16"></path>';
  return `<svg class="ui-chip-remove" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">${a}${b}</svg>`;
})();

describe('<Chip />', () => {
  describe('#remove()', () => {
    it('should state.removed to true', () => {
      const wrapper = shallow(<Chip>Test</Chip>);
      wrapper.instance().remove();
      expect(wrapper.state().removed).toBe(true);
    });
  });

  describe('#render()', () => {
    it('should not render by default', () => {
      const wrapper = shallow(<Chip/>);
      expect(wrapper.html()).toBe(null);
    });

    it('should render <figure> when text is passed as a child', () => {
      const wrapper = shallow(<Chip>Test</Chip>);
      const expected = '<figure class="ui-chip"><figcaption class="ui-chip-label">Test</figcaption></figure>';
      expect(wrapper.html()).toBe(expected);
    });

    it('should not render when children is not text', () => {
      const wrapper = shallow(<Chip><div></div></Chip>);
      expect(wrapper.html()).toBe(null);
    });

    it('should render <figure> with given className', () => {
      const wrapper = shallow(<Chip className="someclass">Test</Chip>);
      const expected = '<figure class="ui-chip someclass"><figcaption class="ui-chip-label">Test</figcaption></figure>';
      expect(wrapper.html()).toBe(expected);
    });


    it('should render <figure> with cross when removable is passed in as attribute', () => {
      const wrapper = shallow(<Chip removable>Test</Chip>);
      const expected = `<figure class="ui-chip"><figcaption class="ui-chip-label">Test</figcaption>${cross}</figure>`;
      expect(wrapper.html()).toBe(expected);
    });

    it('should not render when no child text but contains removable', () => {
      const wrapper = shallow(<Chip removable />);
      expect(wrapper.html()).toBe(null);
    });

    it('should render <figure> with font-size=12 given size=12', () => {
      const wrapper = shallow(<Chip size="12">Test</Chip>);
      const size = 'style="font-size:12px;"';
      const expected = `<figure class="ui-chip" ${size}><figcaption class="ui-chip-label">Test</figcaption></figure>`;
      expect(wrapper.html()).toBe(expected);
    });

    it('should render <figure> given size as string', () => {
      const wrapper = shallow(<Chip size="test">Test</Chip>);
      const expected = '<figure class="ui-chip"><figcaption class="ui-chip-label">Test</figcaption></figure>';
      expect(wrapper.html()).toBe(expected);
    });
  });
});
