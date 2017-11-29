import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';

import ResetPassword from './index';
import Auth from '../../../components/authentication/';

describe('<ResetPassword />', () => {
  it('renders a <Auth /> component', () => {
    const container = shallow(<ResetPassword />);
    expect(container.find(Auth)).to.have.length(1);
  });
});
