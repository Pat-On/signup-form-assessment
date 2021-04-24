import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import UnorderedList from "./unorderedList";
import ListElement from "./listElement/listElement";

configure({ adapter: new Adapter() });

const keyObjectArr = ["test1", "test2", "test3"];
const formValues = [
  {
    test1: { placeholder: 1, name: 1, value: 1 },
  },
  {
    test2: { placeholder: 2, name: 2, value: 2 },
  },
  {
    test3: { placeholder: 3, name: 3, value: 3 },
  },
];

describe("<ConfirmationFormPage/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <UnorderedList keyObjectArr={keyObjectArr} formValues={formValues} />
    );
  });

  it("should render one <Button> item when props.back is sent", () => {
    expect(wrapper.find(ListElement)).toHaveLength(6);
  });
});
