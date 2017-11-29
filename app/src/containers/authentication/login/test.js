import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import Login from './index';
import Auth from '../../../components/authentication/';

describe('<Login />', () => {
  it('renders a <Auth /> component', () => {
    const container = shallow(<Login />);
    expect(container.find(Auth)).to.have.length(1);
  });
});
