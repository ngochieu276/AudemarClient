interface VideoplayProps {
  link: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  scale?: string;
}

export default function VideoPlay(props: VideoplayProps) {
  const getScale = (ratio?: string) => {
    return ratio ? `scale-${ratio}` : ''
  }
  return (
    <video
      autoPlay={props.autoPlay || false}
      loop={props.loop || false}
      muted={props.muted || true}
      className={`video-play z-1 max-w-none ${getScale(props.scale)}`}>
      <source
        src={props.link}
        type='video/mp4'
      />
    </video>
  )
}
