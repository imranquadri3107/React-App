import React from 'react';
import MyChart from './MyChart';
import { mount } from 'enzyme';
import '../../data/setupTests';
import { Provider } from 'react-redux';
import { store } from '../../store';
import data from '../../data/givenData';

it('renders without crashing', () => {
    // let store ={};
    let props={
        getMyProjectData: jest.fn(),
        userValues:{}
    };
    store.getState().myproject   = {
        data:[],
    }
    let wrapper = mount(
        <Provider store={store}>
        <MyChart
            {...props}
        />
    </Provider>);
    expect(wrapper.find('.MyChart').length).toBe(1);
});



it('Should have Design compoents', () => {
    // let store ={};
    let props={
        getMyProjectData: jest.fn(),
        userValues:{}
    };
    store.getState().myproject   = {
        ...data
    }

    let wrapper = mount(
        <Provider store={store}>
            <MyChart
                {...props}
            />
        </Provider>);
    expect(wrapper.find('Design').length).toBe(5);
});