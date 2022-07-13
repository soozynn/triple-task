import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function easeOutQuad(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function CountUpAnimation({ delay, children }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const delayCountUp = () => {
      const animationDuration = 2000;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(animationDuration / frameDuration);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const countNumber = parseInt(children, 10);
        const progress = easeOutQuad(frame / totalFrames);
        setCount(countNumber * progress);

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      });
    };

    // props로 넘어오는 delay 값 이후에 애니메이션을 작동시키고 싶다면 어떻게 할 수 있을까?
    // 답: setTimeout 함수를 이용하여 delay를 줄 것이다.

    // 개선이 필요했던 부분: useEffect의 동작 부분에서 return이 정확히 어떻게 동작하는지

    // 라이브코딩 예시에서는 inputValue가 변화함에 따라 카운트 애니메이션 업데이트에 버그가 생겼는데
    // 이를 어떻게 처리할 수 있었는지 -> setInterval이 두번 동작을 하게 되기 때문에
    // 다음 setInterval 이 실행이 되었을지 이전의 setInterval을 중지 시켜줘야함
    // -> 이를 위해 useEffect 내에서 return 구문에서 다시 clearInterval을 시켜줌.

    setTimeout(() => {
      delayCountUp();
    }, delay);

    return () => {
      delayCountUp();
    };
  }, [delay, children]);

  return Math.floor(count);
}

CountUpAnimation.propTypes = {
  children: PropTypes.string.isRequired,
};
