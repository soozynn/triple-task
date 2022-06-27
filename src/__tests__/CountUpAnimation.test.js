import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import CountUpAnimation from "../components/CountUpAnimation/index";

afterEach(() => {
  cleanup();
});

describe("CountUpAnimation component test", () => {
  it("should count up children number", async () => {
    const { container } = render(<CountUpAnimation>300</CountUpAnimation>);

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("0");

    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(container).toHaveTextContent("300");
  });
});
