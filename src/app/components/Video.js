// pages/videoPlayer.js
export default function VideoPlayer() {
    return (
      <div className="relative w-full h-screen bg-black">
        {/* Full-screen YouTube Video Embed */}
        <iframe
          className="w-full h-full"
          src="/app/video/tutorial.mp4"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    );
  }
  