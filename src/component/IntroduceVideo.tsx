import HeroVideo from '../assets/video/hero-mainpage.mp4';
import ButtonMore from './ui-component/more-button';
import VideoPlay from './ui-component/video-play';

interface IntroVideProps {
  title1?: string;
  title2?: string;
  description?: string;
  btnMoreLabel?: string; 
}

export default function IntroduceVideo(props: IntroVideProps) {
  return (
    <div className="introduce-video relative w-full flex justify-center items-center">
      <VideoPlay 
        link={HeroVideo}
        autoPlay
        loop
      />
      <div className='absolute start-8 inset-y-1/3 -translate-y-1/2'>
        <h2 className='font-raleway text-6xl text-white font-thin whitespace-pre-line'>{props.title1}</h2>
        <h2 className='font-lora text-6xl text-white font-normal italic mb-8 whitespace-pre-line'>{props.title2}</h2>
        <p className='text-white w-2/3 mb-8'>{props.description}</p>
        <ButtonMore label={props.btnMoreLabel}/>
      </div>
    </div>
  );
}
