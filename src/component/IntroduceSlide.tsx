import Slide from "./Slide";
import ButtonMore from "./ui-component/more-button";

interface IntroSlideProps {
  title1?: string;
  title2?: string;
  description?: string;
  slideArray?: any;
  btnMoreLabel?: string;
}

export default function IntroduceSlide(props: IntroSlideProps) {
  return (
    <div className="introduce-slide relative w-full bg-black py-16 grid grid-cols-3 gap-8">
      <div className='col-span-1 ps-24'>
        <h2 className='font-raleway text-6xl text-white font-thin whitespace-pre-line'>{props.title1}</h2>
        <h2 className='font-lora text-6xl text-white font-normal italic mb-8 whitespace-pre-line'>{props.title2}</h2>
        <p className='text-white w-full mb-8 whitespace-pre-line'>{props.description}</p>
        <ButtonMore label={props.btnMoreLabel}/>
      </div>
      <div className="col-span-2">
        <Slide >
          {props.slideArray}
        </Slide>
      </div>
    </div>
  );
}
