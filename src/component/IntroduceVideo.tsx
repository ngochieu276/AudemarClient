import HeroVideo from '../assets/video/hero-mainpage.mp4';
import Intro from './ui-component/intro';
import VideoPlay from './ui-component/video-play';

interface IntroVideProps {
  title1?: string;
  title2?: string;
  description?: string;
  btnMoreLabel?: string;
}

export default function IntroduceVideo(props: IntroVideProps) {
  return (
    <div className="introduce-video relative max-h-screen min-h-160 flex justify-center items-center overflow-hidden">
      <VideoPlay link={HeroVideo} autoPlay loop />
      <div className="absolute bottom-8 left-8 md:bottom-1/2 md:translate-y-1/2 ">
        <Intro
          title1={props.title1}
          title2={props.title2}
          description={props.description}
          btnMoreLabel={props.btnMoreLabel}
        />
      </div>
    </div>
  );
}
