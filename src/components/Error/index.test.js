import React from "react";
import { render, screen } from "@testing-library/react";

import Error from "./index";

describe("Error", () => {
  test("renders Error component and should show error message", () => {
    render(<Error text="This is test" />);

    expect(screen.getByText("This is test")).toBeInTheDocument();
  });
});
