const Video = ({src}) => {
    return (
        <video width="320" height="240" controls preload="none">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
}

export default Video