import React from 'react';
import { mount } from 'enzyme';

import { SearchEngine } from '../../../app/components/SearchEngine';

describe('<SearchEngine />', () => {
  const event = {};

  beforeAll(() => {
    event.preventDefault = jest.fn();
  });

  afterAll(() => {
    if (event.preventDefault && jest.isMockFunction(event.preventDefault)) {
      event.preventDefault.mockReset();
      event.preventDefault.mockRestore();
    }
  });

  describe('#render()', () => {
    it('should render at least 1 <li> if result array with length > 1 is passed in', () => {
      const result = [{
        logo: '',
        name: '',
        location: { text: '' },
      }];
      const wrapper = mount(<SearchEngine result={result} />);
      wrapper.instance().setState(prev => ({ isBlurred: false }));
      expect(wrapper.find('li')).toHaveLength(1);
    });
  });

  describe('#searchByName()', () => {
    it('should still call dispatch with a string passed in', () => {
      const dispatch = jest.fn();
      const wrapper = mount(<SearchEngine dispatch={dispatch} />);

      wrapper.instance().searchByName('');

      expect(dispatch).toHaveBeenCalled();

      dispatch.mockReset();
      dispatch.mockRestore();
    });

    it('should still call dispatch with no string passed in', () => {
      const dispatch = jest.fn();
      const wrapper = mount(<SearchEngine dispatch={dispatch} />);

      wrapper.instance().searchByName();

      expect(dispatch).toHaveBeenCalled();

      dispatch.mockReset();
      dispatch.mockRestore();
    });
  });


  describe('#onClick()', () => {
    it('should focus its <input> element', () => {
      const wrapper = mount(<SearchEngine />);
      event.preventDefault = event.preventDefault || jest.fn();
      wrapper.instance().onClick(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(wrapper.instance().inputField).toBe(document.activeElement);
    });
  });

  describe('#onFocus()', () => {
    it('should be not be in blurred state', () => {
      const wrapper = mount(<SearchEngine result={[]} />);
      event.preventDefault = event.preventDefault || jest.fn();
      wrapper.instance().onFocus(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(wrapper.instance().state.isBlurred).toBe(false);
    });
  });

  describe('#onOverlayClick()', () => {
    it('should be be in blurred state', () => {
      const wrapper = mount(<SearchEngine />);
      event.preventDefault = event.preventDefault || jest.fn();
      wrapper.instance().onOverlayClick(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(wrapper.instance().state.isBlurred).toBe(true);
    });
  });

  describe('#onKeyUp()', () => {
    it('should be in blurred state when pressing ESC', () => {
      const wrapper = mount(<SearchEngine result={[]} />);

      event.preventDefault = event.preventDefault || jest.fn();
      event.keyCode = 27;

      wrapper.instance().onKeyUp(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(wrapper.instance().state.isBlurred).toBe(true);
    });

    it('should be in blurred state when pressing ESC even with focused input field', () => {
      const wrapper = mount(<SearchEngine result={[]} />);

      event.preventDefault = event.preventDefault || jest.fn();
      event.keyCode = 27;

      wrapper.instance().inputField.focus();

      wrapper.instance().onKeyUp(event);

      const searchEngineElements = [wrapper.instance().inputField, ...wrapper.instance().result.childNodes];

      expect(event.preventDefault).toHaveBeenCalled();
      expect(searchEngineElements).not.toContainEqual(document.activeElement);
      expect(wrapper.instance().state.isBlurred).toBe(true);
    });

    it('should be focus either input or result when pressing up', () => {
      const wrapper = mount(<SearchEngine result={[]} />);

      event.preventDefault = event.preventDefault || jest.fn();
      event.keyCode = 38;

      wrapper.instance().onKeyUp(event);

      const searchEngineElements = [wrapper.instance().inputField, ...wrapper.instance().result.childNodes];

      expect(event.preventDefault).toHaveBeenCalled();
      expect(searchEngineElements).toContainEqual(document.activeElement);
    });

    it('should be in blurred state when pressing up even with focused input field', () => {
      const wrapper = mount(<SearchEngine result={[]} />);

      event.preventDefault = event.preventDefault || jest.fn();
      event.keyCode = 38;

      wrapper.instance().inputField.focus();

      wrapper.instance().onKeyUp(event);

      const searchEngineElements = [wrapper.instance().inputField, ...wrapper.instance().result.childNodes];

      expect(event.preventDefault).toHaveBeenCalled();
      expect(searchEngineElements).toContainEqual(document.activeElement);
    });

    it('should be focus either input or result when pressing down', () => {
      const wrapper = mount(<SearchEngine result={[]} />);

      event.preventDefault = event.preventDefault || jest.fn();
      event.keyCode = 40;

      wrapper.instance().onKeyUp(event);

      const searchEngineElements = [wrapper.instance().inputField, ...wrapper.instance().result.childNodes];

      expect(event.preventDefault).toHaveBeenCalled();
      expect(searchEngineElements).toContainEqual(document.activeElement);
    });

    it('should be in blurred state when pressing down even with focused input field', () => {
      const wrapper = mount(<SearchEngine result={[]} />);

      event.preventDefault = event.preventDefault || jest.fn();
      event.keyCode = 40;

      wrapper.instance().inputField.focus();

      wrapper.instance().onKeyUp(event);

      const searchEngineElements = [wrapper.instance().inputField, ...wrapper.instance().result.childNodes];

      expect(event.preventDefault).toHaveBeenCalled();
      expect(searchEngineElements).toContainEqual(document.activeElement);
    });

    it('should attempt to search by name on default', () => {
      const dispatch = jest.fn();
      const wrapper = mount(<SearchEngine result={[]} dispatch={dispatch}/>);

      event.preventDefault = event.preventDefault || jest.fn();
      event.keyCode = undefined;

      wrapper.instance().onKeyUp(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalled();

      dispatch.mockReset();
      dispatch.mockRestore();
    });
  });
});
