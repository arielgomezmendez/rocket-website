import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
import store from "../../redux/store";
import Launches from "./Launches";

/*
Use render and getByTestId functions from the @testing-library/react library 
to get the web page element that has the data-testid of "loader".
*/

/*
The Launches component is wrapped in a Redux Provider provider
so that the state of the Redux application can be accessed during testing.
*/
test("renders loader when there are no launches", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Launches />
    </Provider>
  );
  /*Use the toBeInTheDocument function of the @testing-library/jest-dom/extend-expect library
   to make sure that the fetched item exists in the document */
  const loader = getByTestId("loader");
  expect(loader).toBeInTheDocument();
});
