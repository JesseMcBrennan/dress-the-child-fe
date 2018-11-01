import React from 'react';
import { shallow } from 'enzyme';
import { DonateForm } from './DonateForm';

import { CardElement, injectStripe } from 'react-stripe-elements';

const tokenData = {
  name: `Kurt Kurtains`,
  address_city: `Kurtious`,
  address_state: `Kurtainia`,
  address_line2: `kurt.kurtains@gmail.com`
};

// jest.mock('react-stripe-elements', () => ({
//   createToken: () => token
// }));

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
    let wrapper = shallow(<DonateForm />);
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
    const mockCityEvent = {
      target: { name: 'city', value: 'Kuratainia' }
    };
    const mockStateEvent = {
      target: { name: 'state', value: 'Illinois' }
    };
    wrapper.instance().handleChange(mockFirstNameEvent);
    expect(wrapper.state('firstName')).toEqual(mockFirstNameEvent.target.value);
    wrapper.instance().handleChange(mockLastNameEvent);
    expect(wrapper.state('lastName')).toEqual(mockLastNameEvent.target.value);
    wrapper.instance().handleChange(mockAmountEvent);
    expect(wrapper.state('amount')).toEqual(mockAmountEvent.target.value);
    wrapper.instance().handleChange(mockPhoneEvent);
    expect(wrapper.state('phone')).toEqual(mockPhoneEvent.target.value);
    wrapper.instance().handleChange(mockEmailEvent);
    expect(wrapper.state('email')).toEqual(mockEmailEvent.target.value);
    wrapper.instance().handleChange(mockCityEvent);
    expect(wrapper.state('city')).toEqual(mockCityEvent.target.value);
    wrapper.instance().handleChange(mockStateEvent);
    expect(wrapper.state('state')).toEqual(mockStateEvent.target.value);
  });
});
