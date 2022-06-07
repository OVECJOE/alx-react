import React from 'react';
import { mount, shallow } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';

describe('Test App.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Renders App without crashing', () => {
    expect(wrapper.exists());
  });

  it('App component contains Notifications component', () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('App component contains Header component', () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('App component contains Login component', () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it('App component contains Footer component', () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true}/>);
  });

  it("the Login component is not included", () => {
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it(" the CourseList component is included", () => {
    expect(wrapper.find('CourseList').exists());
  });
});

describe("Testing <App logOut={func} />", () => {
  if ("Tests that ctrl+h is pressed on event") {
    const wrapper = mount(<App logOut={() => console.log("ctrl and h are pressed")} />);
    window.alert = jest.fn();
    const inst = wrapper.instance();
    const logOut = jest.spyOn(inst, 'logOut');
    const alert = jest.spyOn(inst, 'alert');
    const event = new KeyboardEvent('keydown', {bubbles: true, ctrlKey: true, key: 'h'});
    document.dispatchEvent(event);
    expect(alert).toBeCalledWith('Logging you out');
    expect(logOut).toBeCalled();
    alert.mockRestore();
  }
})