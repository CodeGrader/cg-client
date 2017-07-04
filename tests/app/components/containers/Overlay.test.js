import React from 'react';
import { mount } from 'enzyme';

import Overlay from '../../../../app/components/containers/Overlay';

describe('<Overlay/>', () => {
  const event = {};

  describe('#hide()', () => {
    it('should change its root element\'s className to \'overlay overlay-hide\'', () => {
      const wrapper = mount(<Overlay/>);
      wrapper.instance().hide(event);
      expect(wrapper.find('.overlay').hasClass('overlay-hide')).toBe(true);
    });

    it('should call onClick passed in through props', () => {
      const onClick = jest.fn();
      const wrapper = mount(<Overlay onClick={onClick}/>);
      wrapper.instance().hide(event);
      expect(wrapper.find('.overlay').hasClass('overlay-hide')).toBe(true);
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('#render()', () => {
    it('should have element with className \'overlay-hide\' by default', () => {
      const wrapper = mount(<Overlay />);
      expect(wrapper.find('div').hasClass('overlay')).toBe(true);
      expect(wrapper.find('.overlay').hasClass('overlay-hide')).toBe(true);
    });

    it('should have element with className \'overlay-show\' when isVisible=true', () => {
      const wrapper = mount(<Overlay isVisible={true}/>);
      expect(wrapper.find('div').hasClass('overlay')).toBe(true);
      expect(wrapper.find('.overlay').hasClass('overlay-show')).toBe(true);
    });
  });
});
