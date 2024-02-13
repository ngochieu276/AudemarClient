import ButtonMore from "./ui-component/more-button";
import Intro from "./ui-component/intro";

interface IntroImageProps {
  title1?: string;
  title2?: string;
  description?: string;
  img?: string;
  btnMoreLabel?: string;
  reverse?: boolean;
  imgScale?: string;
  whiteMode?: boolean;
}

export default function IntroduceImage(props: IntroImageProps) {
  const getImageWidth = (scale?: string) => {
    return scale ? `w-${scale}` : ''
  }

  const getColorMode = (whiteMode?: boolean) => {
    if (whiteMode) {
      return {bg: 'bg-white', text: 'text-black'}
    } else {
      return {bg: 'bg-black', text: 'text-white'}
    }
  }

  if (props.reverse) {
    return (
      <div className={`introduce-slide relative w-full ${getColorMode(props.whiteMode).bg} ${getColorMode(props.whiteMode).text} p-8 lg:p-24 grid grid-cols-3 gap-8 lg:gap-24`}>
        <div className="col-span-3 lg:col-span-1">
          <Intro 
            title1={props.title1}
            title2={props.title2}
            description={props.description}
            whiteMode={props.whiteMode}
            btnMoreLabel={props.btnMoreLabel}
          />
        </div>
        <div className='col-span-3 lg:col-span-2 flex justify-center items-center object-contain'>
          <img src={props.img} alt='introduce' className={`${getImageWidth(props.imgScale)}`} />
        </div>
      </div>
    );
  }
  return (
    <div className={`introduce-slide relative w-full ${getColorMode(props.whiteMode).bg} ${getColorMode(props.whiteMode).text} p-8 lg:p-24 grid grid-cols-3 gap-8 lg:gap-24`}>
      <div className='col-span-3 lg:col-span-2 flex justify-center items-center object-contain'>
        <img src={props.img} alt='introduce' className={`${getImageWidth()}`}/>
      </div>
      <div className="col-span-3 lg:col-span-1 row-start-1">
        <Intro 
          title1={props.title1}
          title2={props.title2}
          description={props.description}
          whiteMode={props.whiteMode}
          btnMoreLabel={props.btnMoreLabel}
        />
      </div>
    </div>
  );
}
