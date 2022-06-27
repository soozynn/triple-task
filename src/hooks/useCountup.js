import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function useCountup(props) {
  const { number } = props;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 700;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(animationDuration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame += 1;
      // setCount();
      // 작업 필요

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [number, count]);

  return count;
}

useCountup.propTypes = {
  number: PropTypes.number.isRequired,
};
