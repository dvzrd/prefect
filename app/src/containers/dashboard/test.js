import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import Dashboard from './index';
import Dash from '../../components/dashboard/';

describe('<Dashboard />', () => {
  it('renders a <Dash /> component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(Dash)).to.have.length(1);
  });
});
