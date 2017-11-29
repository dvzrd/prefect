import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import Nav from './index';

describe('<Navigation />', () => {
  it('renders a <Nav /> component', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find(Nav)).to.have.length(1);
  });

  it('renders a <Menu /> component', () => {
    const container = shallow(<Nav />);
    expect(container.find(Menu)).to.have.length(1);
  });
});
