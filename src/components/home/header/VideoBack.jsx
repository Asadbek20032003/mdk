const VideoBack = () => {
  return (
    <div className="video-background">
      <video src="https://mdk.pw/img/finish.mp4" autoPlay muted loop id="bgVideo" width="725" height="813">
        <source src="https://mdk.pw/img/finish.mp4" type="video/mp4" />
        Sizning brauzeringiz video qo`llab-quvvatlamaydi.
      </video>
    </div>
  );
};

export default VideoBack;
