import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import Loader from './index';

describe('<Loader />', () => {
  it('renders a <Wrapper /> component', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find(Wrapper)).to.have.length(1);
  });

  it('renders a <Spinner /> component', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.find(Spinner)).to.have.length(1);
  });

  it('renders a <InnerSpinner /> component', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find(InnerSpinner)).to.have.length(1);
  });
});
