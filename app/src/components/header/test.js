import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import Header from './index';

describe('<Header />', () => {
  it('renders a <Wrapper /> component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Wrapper)).to.have.length(1);
  });

  it('renders a <Topbar /> component', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.find(Topbar)).to.have.length(1);
  });

  it('renders a <Logo /> component', () => {
    const container = shallow(<Topbar />);
    expect(container.find(Logo)).to.have.length(1);
  });

  it('renders a <Navigation /> container', () => {
    const container = shallow(<Topbar />);
    expect(container.find(Navigation)).to.have.length(1);
  });
});
