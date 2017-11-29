import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import Input from './index';

describe('<Input />', () => {
  it('renders a <Fieldset /> component', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find(Fieldset)).to.have.length(1);
  });

  it('renders an <Label /> component', () => {
    const container = shallow(<Fieldset />);
    expect(container.find(Label)).to.have.length(1);
  });

  it('renders an <Field /> component', () => {
    const container = shallow(<Fieldset />);
    expect(container.find(Field)).to.have.length(1);
  });

  it('renders a <Error /> component', () => {
    const container = shallow(<Fieldset />);
    expect(container.find(Error)).to.have.length(1);
  });
});
