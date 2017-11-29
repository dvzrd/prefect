import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import Authentication from './index';
import Form from '../form/';

describe('<Authentication />', () => {
  it('renders a <Main /> component', () => {
    const wrapper = shallow(<Authentication />);
    expect(wrapper.find(Main)).to.have.length(1);
  });

  it('renders a <Frame /> component', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(Frame)).to.have.length(1);
  });

  it('renders a <Heading /> component', () => {
    const container = shallow(<Frame />);
    expect(container.find(Heading)).to.have.length(1);
  });

  it('renders a <Form /> component', () => {
    const container = shallow(<Frame />);
    expect(container.find(Form)).to.have.length(1);
  });
});
