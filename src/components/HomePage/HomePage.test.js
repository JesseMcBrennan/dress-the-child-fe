import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  let mockLocation;
  let wrapper;
  beforeEach(() => {
    mockLocation = {
      pathname: '/'
    };
    wrapper = shallow(<HomePage location={mockLocation} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
