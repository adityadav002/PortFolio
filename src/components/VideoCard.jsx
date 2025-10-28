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
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };

const handleClick = () => {
  window.open(linkUrl, "_blank", "noopener,noreferrer");
};


  return (
    <div
      className="video-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ cursor: "pointer", width: "300px" }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        muted
        preload="metadata"
        style={{ display: "block", height: "auto", width: "100%" }}
      />
    </div>
  );
};

export default VideoCard;
