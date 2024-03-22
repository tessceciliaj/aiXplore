const Video = ({ src }) => {
    return (
      <div>
        <video width="100%" height="100%" preload="none" autoPlay muted loop>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      )
}

export default Video