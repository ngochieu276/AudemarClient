import Slide from './Slide';
import Intro from './ui-component/intro';

interface IntroSlideProps {
  title1?: string;
  title2?: string;
  description?: string;
  slideArray?: any;
  btnMoreLabel?: string;
}

export default function IntroduceSlide(props: IntroSlideProps) {
  return (
    <div className="introduce-slide relative w-full bg-black text-white p-8 lg:p-16 grid grid-cols-3 gap-8">
      <div className="col-span-3 lg:col-span-1">
        <Intro
          title1={props.title1}
          title2={props.title2}
          description={props.description}
          btnMoreLabel={props.btnMoreLabel}
        />
      </div>
      <div className="col-span-3 lg:col-span-2 ">
        <Slide>{props.slideArray}</Slide>
      </div>
    </div>
  );
}
