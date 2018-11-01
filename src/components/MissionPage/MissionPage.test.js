import React from 'react';
import { shallow } from 'enzyme';
import { MissionPage } from './MissionPage';

describe('MissionPage', () => {
  let mockLocation;
  let wrapper;
  beforeEach(() => {
    mockLocation = {
      pathname: '/mission'
    };
    wrapper = shallow(<MissionPage location={mockLocation} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
