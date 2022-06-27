import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import AwardTitle from "../components/Home/AwardSection/AwardTitle";

afterEach(() => {
  cleanup();
});

describe("AwardTitle component test", () => {
  it("Check CSS custom properties", () => {
    const { getByTestId } = render(
      <AwardTitle
        title={
          <>
            <strong>
              <span>350</span>만 명
            </strong>
            의 여행자
          </>
        }
      />
    );

    expect(getByTestId("award-title")).toBeInTheDocument();
    expect(getByTestId("award-title")).toHaveStyleRule(
      "color",
      "var(--color-basic)"
    );

    expect(getByTestId("award-title")).toHaveStyleRule("font-size", "20px", {
      media: "(max-width: 1141px)",
    });
    expect(getByTestId("award-title")).toHaveStyleRule(
      "letter-spacing",
      "-0.5px",
      {
        media: "(max-width: 1141px)",
      }
    );
    expect(getByTestId("award-title")).toHaveStyleRule(
      "margin-bottom",
      "10px",
      {
        media: "(max-width: 1141px)",
      }
    );

    expect(getByTestId("award-title")).toHaveStyleRule("font-size", "36px", {
      media: "(min-width: 1142px)",
    });
    expect(getByTestId("award-title")).toHaveStyleRule(
      "letter-spacing",
      "-1px",
      {
        media: "(min-width: 1142px)",
      }
    );
    expect(getByTestId("award-title")).toHaveStyleRule(
      "margin-bottom",
      "20px",
      {
        media: "(min-width: 1142px)",
      }
    );
  });
});
