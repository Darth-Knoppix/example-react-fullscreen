import React from "react";
import useFullscreenStatus from "./utils/useFullscreenStatus";

export default function MaximizableView({ children, backgroundColor }) {
  const maximizableElement = React.useRef(null);
  let isFullscreen, setIsFullscreen;
  let errorMessage;

  try {
    [isFullscreen, setIsFullscreen] = useFullscreenStatus(maximizableElement);
  } catch (e) {
    errorMessage = "Fullscreen not supported";
    isFullscreen = false;
    setIsFullscreen = undefined;
  }

  const handleExitFullscreen = () => document.exitFullscreen();

  return (
    <div
      ref={maximizableElement}
      className={`maximizable-container ${
        isFullscreen ? "fullscreen" : "default"
      }`}
      style={{ backgroundColor: isFullscreen ? backgroundColor : null }}
    >
      <div className="maximizable-content">{children}</div>
      <div className="maximizable-actions">
        {errorMessage ? (
          <button
            onClick={() =>
              alert(
                "Fullscreen is unsupported by this browser, please try another browser."
              )
            }
          >
            {errorMessage}
          </button>
        ) : isFullscreen ? (
          <button onClick={handleExitFullscreen}>Exit Fullscreen</button>
        ) : (
          <button onClick={setIsFullscreen}>Fullscreen</button>
        )}
      </div>
    </div>
  );
}
