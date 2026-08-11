"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import styles from "../Styles/latestVideos.module.css";

export default function VideoCard({ videoId, title, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className={styles.videoCard}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoFrame}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label={`Play video: ${title}`}
      className={styles.videoCard}
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={thumbnail}
        alt={title}
        className={styles.videoThumbnail}
        loading="lazy"
        width="480"
        height="360"
      />
      <span className={styles.playOverlay}>
        <FaPlay />
      </span>
      <span className={styles.videoTitle}>{title}</span>
    </button>
  );
}
