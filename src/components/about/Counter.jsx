import React, { useState, useEffect } from "react";

function Counter({ start, end, duration, label }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = performance.now();
    let animationFrameId;

    function updateCounter(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    }

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [start, end, duration]);

  return (
    <div className="ac-item">
      <h2 className="ab-count">{count}</h2>
      <p>{label}</p>
    </div>
  );
}

export default Counter;
