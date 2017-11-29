import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import Notification from './index';

describe('<Notification />', () => {
  it('renders a <Wrapper /> component', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find(Wrapper)).to.have.length(1);
  });

  it('renders a <Container /> component', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.find(Container)).to.have.length(1);
  });

  it('renders a <Icon /> component', () => {
    const container = shallow(<Container />);
    expect(container.find(Icon)).to.have.length(1);
  });
});
