import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

export default function TextLoop({ duration = 2000, className, children }) {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const items = React.Children.toArray(children);
  const [currentChild, setCurrentChild] = useState(
    React.Children.toArray(children)[0],
  );

  const { opacity, transform } = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    reset: true,
    config: { tension: 1500, friction: 10 },
  });
  useEffect(() => {
    let startTime = null;

    const updateIndex = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed > duration) {
        setLoading(false);
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
        startTime = timestamp; // Reset start time
      }

      requestAnimationFrame(updateIndex);
    };

    const animationFrameId = requestAnimationFrame(updateIndex);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    setCurrentChild(React.Children.toArray(children)[index]);
  }, [index]);

  return loading ? (
    currentChild
  ) : (
    <animated.div
      style={{ opacity, transform }}
      className={`${className} TextLoop`}>
      {currentChild}
    </animated.div>
  );
}
