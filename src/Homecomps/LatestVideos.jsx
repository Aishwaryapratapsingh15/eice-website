import { getLatestVideos } from "../Youtube/youtubeApi";
import VideoCard from "./subcomps/VideoCard";
import styles from "./Styles/latestVideos.module.css";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@EICETechnology";
const arrow = "https://d3r43jacxrwsrp.cloudfront.net/arrow.svg";

export default async function LatestVideos() {
  const videos = await getLatestVideos();

  if (videos.length === 0) return null;

  return (
    <div className="py-4 sm:py-10">
      <div className={`${styles.latestVideos} max-w-7xl mx-auto px-3 xl:px-4`}>
      <div className={`${styles.heading} text-[24px] sm:text-[32px]`}>
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
          className="inline-flex items-center justify-center py-4 px-7 bg-[#012060] text-white font-semibold rounded-md text-lg transition duration-200 hover:bg-[#1E40AF]"
        >
          Watch All Videos <img src={arrow} alt="" className="ml-2 w-5 h-5" width="20" height="20" />
        </a>
      </div>
    </div>
    </div>
  );
}
