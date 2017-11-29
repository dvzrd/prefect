import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import ForgotPassword from './index';
import Auth from '../../../components/authentication/';

describe('<ForgotPassword />', () => {
  it('renders a <Auth /> component', () => {
    const container = shallow(<ForgotPassword />);
    expect(container.find(Auth)).to.have.length(1);
  });
});
