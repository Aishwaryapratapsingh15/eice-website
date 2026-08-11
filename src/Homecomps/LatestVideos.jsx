import { getLatestVideos } from "../Youtube/youtubeApi";
import VideoCard from "./subcomps/VideoCard";
import styles from "./Styles/latestVideos.module.css";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@EICETechnology";

export default async function LatestVideos() {
  const videos = await getLatestVideos();

  if (videos.length === 0) return null;

  return (
    <div className={styles.latestVideos}>
      <div className={`${styles.heading} text-[26px] sm:text-[35px]`}>
        Latest Videos
      </div>

      <div className={styles.videoRow}>
        {videos.map((video) => (
          <VideoCard
            key={video.videoId}
            videoId={video.videoId}
            title={video.title}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center py-3 px-8 border border-blue-900 bg-blue-900 text-white font-semibold rounded-md transition duration-200 hover:bg-blue-900/90 hover:shadow-md hover:shadow-bloo/30"
        >
          View More
        </a>
      </div>
    </div>
  );
}
