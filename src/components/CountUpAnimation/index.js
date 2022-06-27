import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function easeOutQuad(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function CountUpAnimation({ children }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 1000;
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
    }, frameDuration);
  }, [children]);

  return Math.floor(count);
}

CountUpAnimation.propTypes = {
  children: PropTypes.string.isRequired,
};
