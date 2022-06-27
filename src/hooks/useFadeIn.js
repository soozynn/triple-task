import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function useFadeIn(duration, delay) {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
}

useFadeIn.propTypes = {
  duration: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
};
