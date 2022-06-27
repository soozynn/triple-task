import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const easeOutQuad = (time) => time * (2 - time);
const frameDuration = 1000 / 60;

export default function CountUpAnimation({ children }) {
  const animationDuration = 1000;
  const countNumber = parseInt(children, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const totalFrames = Math.round(animationDuration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countNumber * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, []);

  return Math.floor(count);
}

CountUpAnimation.propTypes = {
  children: PropTypes.string.isRequired,
};
