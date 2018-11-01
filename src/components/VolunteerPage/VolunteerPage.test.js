import React from 'react';
import { shallow } from 'enzyme';
import { VolunteerPage } from './VolunteerPage';

describe('VolunteerPage', () => {
  let mockLocation;
  let wrapper;
  beforeEach(() => {
    mockLocation = {
      pathname: '/volunteer'
    };
    wrapper = shallow(<VolunteerPage location={mockLocation} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
