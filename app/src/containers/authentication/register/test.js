import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import Register from './index';
import Auth from '../../../components/authentication/';

describe('<Register />', () => {
  it('renders a <Auth /> component', () => {
    const container = shallow(<Register />);
    expect(container.find(Auth)).to.have.length(1);
  });
});
