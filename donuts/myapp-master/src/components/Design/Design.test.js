import React from 'react';
import Design from './Design';
import { shallow, mount } from 'enzyme';
import '../../data/setupTests';
import { Provider } from 'react-redux';
import { store } from '../../store';

it('renders without crashing', () => {
    // let store ={};
    let props={
        mydata:{
            "title": "Task Status",
            "summary":[{
                "title": "Completed",
                "value": 2
            },
                {
                    "title": "On Target",
                    "value": 155
                },
            ],
            "total": 160
        }
    };
    store.getState().myproject   = {
        userData:{},
    }
    let wrapper = mount(
        <Provider store={store}>
            <Design
                {...props}
            />
        </Provider>);
    expect(wrapper.find('.Design').length).toBe(1);
});

describe( 'ProgerssLayout Card', () => {
        let props={
            mydata:{
                "title": "Task Status",
                "summary":[{
                    "title": "Completed",
                    "value": 2
                },
                    {
                        "title": "On Target",
                        "value": 155
                    },
                ],
                "total": 160
            }
        };
        store.getState().myproject   = {
            userData:{},
        }
        let wrapper = mount(
            <Provider store={store}>
                <Design
                    {...props}
                />
            </Provider>);

        it('should have CircularProgressbar', () => {
            expect(wrapper.find('.CircularProgressbar').length).toBe(1);
        });
        it('should have footer section', () => {
            expect(wrapper.find('.footer').length).toBe(2);
        });
        it('should have footerTitle', () => {
            expect(wrapper.find('.footerTitle').length).toBe(2);
        });
        it('should have footerValue', () => {
            expect(wrapper.find('.footerValue').length).toBe(2);
        });
}
);
