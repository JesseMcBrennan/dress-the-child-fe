import React from 'react';
import { shallow } from 'enzyme';
import { EventsPage } from './EventsPage';

describe('EventsPage', () => {
  let mockLocation;
  let wrapper;
  beforeEach(() => {
    mockLocation = {
      pathname: '/events'
    };
    wrapper = shallow(<EventsPage location={mockLocation} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
