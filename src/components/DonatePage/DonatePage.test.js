import React from 'react';
import { shallow } from 'enzyme';
import { DonatePage } from './DonatePage';

describe('DonatePage', () => {
  let mockLocation;
  let wrapper;
  beforeEach(() => {
    mockLocation = {
      pathname: '/donate'
    };
    wrapper = shallow(<DonatePage location={mockLocation} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
