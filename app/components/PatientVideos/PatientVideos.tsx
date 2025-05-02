"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import "./PatientVideos.css";

// Define interfaces
interface VideoItem {
  id: number;
  src: string;
  poster: string;
}

const VideoPlayer = ({ src, poster }: VideoItem) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPoster, setShowPoster] = useState(true);

  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowPoster(false);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Handle video loaded
  const handleVideoLoaded = () => {
    setIsLoaded(true);
  };

  // Update progress bar
  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () => {
      if (video) {
        const value = (video.currentTime / video.duration) * 100;
        setProgress(value);
      }
    };

    video?.addEventListener("timeupdate", updateProgress);
    return () => video?.removeEventListener("timeupdate", updateProgress);
  }, []);

  // Seek video when clicking progress bar
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newTime = clickPosition * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="video-container">
      {showPoster && (
        <div className="poster-container" onClick={togglePlay}>
          <div className="poster-wrapper">
            <Image 
              src={poster} 
              alt="Video thumbnail" 
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="play-overlay">
              <Play size={50} />
            </div>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        playsInline
        onClick={togglePlay}
        preload="none"
        onLoadedData={handleVideoLoaded}
        className={`${isLoaded ? "video-loaded" : "video-loading"} ${showPoster ? "hidden" : ""}`}
      />
      <div className={`video-controls ${showPoster ? "hidden" : ""}`}>
        <div className="controls-wrapper">
          <button onClick={togglePlay} className="control-btn">
            {isPlaying ? <Pause size={22} /> : <Play size={22} />}
          </button>
          <button onClick={toggleMute} className="control-btn">
            {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
          </button>
        </div>
        <div className="progress-container" onClick={handleProgressClick}>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
      {!isPlaying && !showPoster && (
        <div className="play-overlay" onClick={togglePlay}>
          <Play size={50} />
        </div>
      )}
    </div>
  );
};

function PatientVideos() {
  const videos: VideoItem[] = [
    { id: 1, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/reels/Patientsix.mp4", poster: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/thumb/Siddharth%20(Spinal%20Cord%20Injury).jpg" },
    { id: 2, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/reels/VID-20250207-WA0001.mp4", poster: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/thumb/Rakshit%20(GBS).jpg" },
    { id: 3, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/reels/Patientseven.mp4", poster: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/thumb/Bhavika%20(Developmental%20Delay).jpg" },
  ];

  const reels: VideoItem[] = [
    { id: 1, src: "/assets/Ad reel FINAL.mov", poster: "/assets/inform0.jpg" },
    { id: 2, src: "/assets/VID-20250207-WA0001.mp4", poster: "/assets/inform.jpg" },
    { id: 3, src: "/assets/c1.mp4", poster: "/assets/inform2.jpg" },
  ];

  return (
    <div className="patient-videos">
      <h1 className="title">Success Stories</h1>
      <div className="videos-container">
        {videos.map((video) => (
          <VideoPlayer
            key={video.id}
            id={video.id}
            src={video.src}
            poster={video.poster}
          />
        ))}
      </div>

      {/* <h1 className="title reels-title">Informative Videos</h1>
      <div className="videos-container">
        {reels.map((video) => (
          <VideoPlayer
            key={video.id}
            id={video.id}
            src={video.src}
            poster={video.poster}
          />
        ))}
      </div> */}
    </div>
  );
}

export default PatientVideos;