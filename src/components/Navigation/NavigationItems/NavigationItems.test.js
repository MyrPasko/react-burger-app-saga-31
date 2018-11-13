import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it("should render two <NavigationItem /> elements if not authenticated", () => {
        // const wrapper = shallow(<NavigationItems />);         // first variant, without beforeEach
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it("should render three <NavigationItem /> elements if authenticated", () => {
        // const wrapper = shallow(<NavigationItems isAuthenticated />);       // first variant, without beforeEach
        // wrapper = shallow(<NavigationItems isAuthenticated />);       // second variant, just change value of variable to necessary value
        wrapper.setProps({isAuthenticated: true});                                   // third variant, add necessary props by internal enzyme method
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it("should render <NavigationItem /> to Logout if authenticated", () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>));
    });
});
