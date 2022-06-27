import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import badgePlayStoreSrc from "../images/awardSection/badgePlayStore.png";
import AwardItem from "../components/Home/AwardSection/AwardItem";

afterEach(() => {
  cleanup();
});

describe("AwardItem component test", () => {
  it("Check CSS custom properties", () => {
    const { getByTestId } = render(
      <AwardItem
        src={badgePlayStoreSrc}
        title={
          <>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </>
        }
      />
    );

    expect(getByTestId("award-item")).toBeInTheDocument();
    expect(getByTestId("award-item")).toHaveStyleRule(
      "display",
      "inline-block"
    );
    expect(getByTestId("award-item")).toHaveStyleRule(
      "background-image",
      `url(${badgePlayStoreSrc})`
    );
    expect(getByTestId("award-item")).toHaveStyleRule(
      "background-position",
      "left top"
    );
    expect(getByTestId("award-item")).toHaveStyleRule("font-weight", "bold");

    expect(getByTestId("award-item")).toHaveStyleRule("height", "39px", {
      media: "(max-width: 1141px)",
    });
    expect(getByTestId("award-item")).toHaveStyleRule(
      "padding",
      "4px 0px 4px 45px",
      {
        media: "(max-width: 1141px)",
      }
    );
    expect(getByTestId("award-item")).toHaveStyleRule(
      "background-size",
      "39px 39px",
      {
        media: "(max-width: 1141px)",
      }
    );
    expect(getByTestId("award-item")).toHaveStyleRule("font-size", "10px", {
      media: "(max-width: 1141px)",
    });
    expect(getByTestId("award-item")).toHaveStyleRule("line-height", "15px", {
      media: "(max-width: 1141px)",
    });

    expect(getByTestId("award-item")).toHaveStyleRule("height", "54px", {
      media: "(min-width: 1142px)",
    });
    expect(getByTestId("award-item")).toHaveStyleRule(
      "padding",
      "5px 0px 5px 62px",
      {
        media: "(min-width: 1142px)",
      }
    );
    expect(getByTestId("award-item")).toHaveStyleRule("margin-right", "39px", {
      media: "(min-width: 1142px)",
    });
    expect(getByTestId("award-item")).toHaveStyleRule(
      "background-size",
      "54px 54px",
      {
        media: "(min-width: 1142px)",
      }
    );
    expect(getByTestId("award-item")).toHaveStyleRule("font-size", "14px", {
      media: "(min-width: 1142px)",
    });
    expect(getByTestId("award-item")).toHaveStyleRule("line-height", "22px", {
      media: "(min-width: 1142px)",
    });
  });
});
