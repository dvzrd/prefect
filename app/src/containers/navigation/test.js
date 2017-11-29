import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import Navigation from './index';
import Nav from '../../components/navigation/';

describe('<Navigation />', () => {
  it('renders a <Nav /> component', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find(Nav)).to.have.length(1);
  });
});
