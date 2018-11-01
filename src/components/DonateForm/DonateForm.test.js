import React from 'react';
import { shallow } from 'enzyme';
import { DonateForm } from './DonateForm';

describe('MissionPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DonateForm />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('handleChange', () => {
  it('should update state', () => {
    let wrapper = shallow(<handleChange />);
    const mockFirstNameEvent = {
      target: { name: 'firstName', value: 'Kurtious' }
    };
    const mockLastNameEvent = {
      target: { name: 'lastName', value: 'Kurtains' }
    };
    const mockAmountEvent = { target: { name: 'amount', value: '600' } };
    const mockPhoneEvent = { target: { name: 'phone', value: '5128675309' } };
    const mockEmailEvent = {
      target: { name: 'email', value: 'kurtious.kurtains@gmail.com' }
    };
    const mockPasswordEvent = {
      target: { name: 'email', value: 'kurtious.kurtains@gmail.com' }
    };
  });
});
