import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import ImageCarousel from "../ImageCarousel.js";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <ImageCarousel />
    </Provider>
  );
});
