import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import './data/setupTests';

it('renders without crashing', () => {
  let wrapper = mount(<App />);
  expect(wrapper.find('MyChart').length).toBe(1);
});