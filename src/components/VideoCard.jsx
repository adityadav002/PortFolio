/** @format */

import React, { useRef } from "react";

const VideoCard = ({ videoSrc, posterSrc, linkUrl }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset time
      videoRef.current.load(); // Reload to show poster again
    }
  };

  const handleClick = () => {
    window.location.href = linkUrl; // Or use navigate from react-router
  };

  return (
    <div
      className="video-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ cursor: "pointer", width: "300px" }}>
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        muted
        preload="metadata"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
};

export default VideoCard;
