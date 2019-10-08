import React from "react";
import useFullscreenStatus from "./utils/useFullscreenStatus";

export default function MaximizableView({ children, backgroundColor }) {
  const maximizableElement = React.useRef(null);
  const [isFullscreen, setIsFullscreen] = useFullscreenStatus(
    maximizableElement
  );

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
        {isFullscreen ? (
          <button onClick={handleExitFullscreen}>Exit Fullscreen</button>
        ) : (
          <button onClick={setIsFullscreen}>Fullscreen</button>
        )}
      </div>
    </div>
  );
}
