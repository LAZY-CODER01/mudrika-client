import React, { useEffect, useRef } from "react";

export function Lottie({ link, wid, hig, to }) {
  const ref = useRef(null);

  useEffect(() => {
    // Dynamically load the lottie-player component
    import("@lottiefiles/lottie-player").catch((error) => {
      console.error("Failed to load lottie-player:", error);
    });
  }, []);

  return (
    <lottie-player
      ref={ref}
      autoplay
      loop
      mode="normal"
      src={link}
      style={{
        width: wid,
        height: hig,
        top: to,
        position: "absolute", // Ensure it's relative to the parent container
      }}
    ></lottie-player>
  );
}
