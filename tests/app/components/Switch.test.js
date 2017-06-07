import React from 'react';
import { shallow } from 'enzyme';

import Switch from '../../../app/components/Switch';

describe('<Switch />', () => {
  describe('#render()', () => {
    it('should render <input type="checkbox" class="ui-switch"/> as default', () => {
      const wrapper = shallow(<Switch/>);
      expect(wrapper.html()).toBe('<input type="checkbox" class="ui-switch"/>');
    });

    it('should render <input type="checkbox" class="ui-switch someclass"/> given className=\'someclass\'', () => {
      const wrapper = shallow(<Switch className="someclass"/>);
      expect(wrapper.html()).toBe('<input type="checkbox" class="ui-switch someclass"/>');
    });

    it('should render <input type="checkbox" class="ui-switch" checked=""/> given checked', () => {
      const wrapper = shallow(<Switch checked/>);
      expect(wrapper.html()).toBe('<input type="checkbox" class="ui-switch" checked=""/>');
    });

    it('should render <input type="checkbox" class="ui-switch" checked=""/> given defaultChecked', () => {
      const wrapper = shallow(<Switch defaultChecked={true} />);
      expect(wrapper.html()).toBe('<input type="checkbox" class="ui-switch" checked=""/>');
    });

    it('should render <input type="checkbox" class="ui-switch" checked=""/> given defaultChecked and checked', () => {
      const wrapper = shallow(<Switch defaultChecked={true} checked/>);
      expect(wrapper.html()).toBe('<input type="checkbox" class="ui-switch" checked=""/>');
    });

    it('should render <input type="checkbox" class="ui-switch" style="font-size:12px;"/> given size as 12', () => {
      const wrapper = shallow(<Switch size="12" />);
      expect(wrapper.html()).toBe('<input type="checkbox" class="ui-switch" style="font-size:12px;"/>');
    });

    it('should render <input type="checkbox" class="ui-switch"/> given size as string', () => {
      const wrapper = shallow(<Switch size="test" />);
      expect(wrapper.html()).toBe('<input type="checkbox" class="ui-switch"/>');
    });

    it('should render <input type="checkbox" class="ui-switch"/> given style object exists', () => {
      const wrapper = shallow(<Switch style={{}} />);
      expect(wrapper.html()).toBe('<input type="checkbox" class="ui-switch"/>');
    });

    it('should render <input type="checkbox" style="font-size:..." class="ui-switch"/> given style and size', () => {
      const wrapper = shallow(<Switch style={{}} size="12"/>);
      expect(wrapper.html()).toBe('<input type="checkbox" style="font-size:12px;" class="ui-switch"/>');
    });
  });
});
