import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import CompletionFormScreen from "./completionFormScreen";
import Button from "./../UI/button/button";

configure({ adapter: new Adapter() });

describe("<CompletionFormScreen/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompletionFormScreen />);
  });

  it("should render one <Button> item when props.back is sent", () => {
    wrapper.setProps({ back: true });
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("should render one <Button> item when props.back is sent", () => {
    expect(wrapper.find(Button)).toHaveLength(0);
  });
});
