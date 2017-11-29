import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import Form from './index';
import Notification from '../notification/';

describe('<Form />', () => {
  it('renders a <Container /> component', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find(Container)).to.have.length(1);
  });

  it('renders an <Notification /> component to display errors', () => {
    const container = shallow(<Container />);
    expect(container.find(Notification)).to.have.length(1);
  });

  it('renders an <Notification /> component to display message', () => {
    const container = shallow(<Container />);
    expect(container.find(Notification)).to.have.length(1);
  });

  it('renders a <Button /> component', () => {
    const container = shallow(<Form />);
    expect(container.find(Button)).to.have.length(1);
  });
});
