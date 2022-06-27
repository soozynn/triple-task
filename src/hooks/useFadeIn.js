import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function useFadeIn(duration, delay) {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.opacity = 1;
      current.style.transform = "translateY(0%)";
      current.style.transition = `all ${duration}ms ease-in-out ${delay}ms`;
    }
  }, [duration, delay]);

  return {
    ref: element,
    style: { opacity: 0, transform: "translateY(10px)" },
  };
}

useFadeIn.propTypes = {
  duration: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
};
