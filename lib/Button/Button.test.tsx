import { render } from "@testing-library/react";

import { Button } from "./Button";

describe(`Component: ${Button.name}`, () => {
  it("should render", () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toBeInTheDocument();
  });

  it("renders children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });
});
