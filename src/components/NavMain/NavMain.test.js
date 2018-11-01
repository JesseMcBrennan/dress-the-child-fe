import React from 'react';
import { shallow } from 'enzyme';
import { NavMain } from './NavMain';

describe('NavMain', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<NavMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
