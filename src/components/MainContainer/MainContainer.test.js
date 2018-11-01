import React from 'react';
import { shallow } from 'enzyme';
import { MainContainer } from './MainContainer';

describe('MainContainer', () => {
  let mockLocation;
  let wrapper;
  beforeEach(() => {
    mockLocation = {
      pathname: '/'
    };
    wrapper = shallow(<MainContainer location={mockLocation} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot if pathname is/donate', () => {
    mockLocation = {
      pathname: '/donate'
    };
    wrapper = shallow(<MainContainer location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot if pathname is /mission', () => {
    mockLocation = {
      pathname: '/mission'
    };
    wrapper = shallow(<MainContainer location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot if pathname is /events', () => {
    mockLocation = {
      pathname: '/events'
    };
    wrapper = shallow(<MainContainer location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot if pathname is /volunteer', () => {
    mockLocation = {
      pathname: '/volunteer'
    };
    wrapper = shallow(<MainContainer location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
});
