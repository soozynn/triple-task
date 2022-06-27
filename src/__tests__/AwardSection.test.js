import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import badgeTripleSrc from "../images/awardSection/badgeTriple.png";
import AwardSection from "../components/Home/AwardSection/index";

afterEach(() => {
  cleanup();
});

describe("AwardSection component test", () => {
  it("Check default styles", () => {
    const { getByTestId } = render(<AwardSection />);

    expect(getByTestId("application-award")).toBeInTheDocument();
    expect(getByTestId("application-award")).toHaveTextContent(
      "2021년 12월 기준"
    );
    expect(getByTestId("application-award")).toHaveStyleRule(
      "background-image",
      `url(badgeTriple.png)`
    );
    expect(getByTestId("application-award")).toHaveStyleRule(
      "text-align",
      "center"
    );
    expect(getByTestId("application-award")).toHaveStyleRule(
      "color",
      "var(--color-gray700)"
    );
    expect(getByTestId("application-award")).toHaveStyleRule(
      "transform",
      'translateY("10px")'
    );

    expect(getByTestId("application-award")).toHaveStyleRule(
      "position",
      "absolute",
      {
        media: "(min-width: 1142px)",
      }
    );
    expect(getByTestId("application-award")).toHaveStyleRule("top", "150px", {
      media: "(min-width: 1142px)",
    });
    expect(getByTestId("application-award")).toHaveStyleRule("width", "400px", {
      media: "(min-width: 1142px)",
    });
    expect(getByTestId("application-award")).toHaveStyleRule(
      "height",
      "338px",
      {
        media: "(min-width: 1142px)",
      }
    );
    expect(getByTestId("application-award")).toHaveStyleRule(
      "background-size",
      "400px 338px",
      {
        media: "(min-width: 1142px)",
      }
    );
    expect(getByTestId("application-award")).toHaveStyleRule(
      "padding-top",
      "280px",
      {
        media: "(min-width: 1142px)",
      }
    );
    expect(getByTestId("application-award")).toHaveStyleRule(
      "font-size",
      "15px",
      {
        media: "(min-width: 1142px)",
      }
    );

    expect(getByTestId("application-award")).toHaveStyleRule("width", "200px", {
      media: "(max-width: 1141px)",
    });
    expect(getByTestId("application-award")).toHaveStyleRule(
      "height",
      "169px",
      {
        media: "(max-width: 1141px)",
      }
    );
    expect(getByTestId("application-award")).toHaveStyleRule(
      "margin",
      "80px auto 20px",
      {
        media: "(max-width: 1141px)",
      }
    );
    expect(getByTestId("application-award")).toHaveStyleRule(
      "background-size",
      "200px 169px",
      {
        media: "(max-width: 1141px)",
      }
    );
    expect(getByTestId("application-award")).toHaveStyleRule(
      "padding-top",
      "137px",
      {
        media: "(max-width: 1141px)",
      }
    );
    expect(getByTestId("application-award")).toHaveStyleRule(
      "font-size",
      "10px",
      {
        media: "(max-width: 1141px)",
      }
    );
  });
});
