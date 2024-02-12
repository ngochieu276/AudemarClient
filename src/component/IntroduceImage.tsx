import ButtonMore from "./ui-component/more-button";

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
      <div className={`introduce-slide relative w-full ${getColorMode(props.whiteMode).bg} ${getColorMode(props.whiteMode).text} p-24 grid grid-cols-3 gap-24`}>
        <div className="col-span-1">
          <h2 className='font-raleway text-6xl font-thin whitespace-pre-line'>{props.title1}</h2>
          <h2 className='font-lora text-6xl font-normal italic mb-8 whitespace-pre-line'>{props.title2}</h2>
          <p className=' w-full mb-8 whitespace-pre-line'>{props.description}</p>
          <ButtonMore label={props.btnMoreLabel} whiteMode={props.whiteMode}/>
        </div>
        <div className='col-span-2 flex justify-center items-center object-contain'>
          <img src={props.img} alt='introduce' className={`${getImageWidth(props.imgScale)}`} />
        </div>
      </div>
    );
  }
  return (
    <div className={`introduce-slide relative w-full ${getColorMode(props.whiteMode).bg} ${getColorMode(props.whiteMode).text} p-24 grid grid-cols-3 gap-24`}>
      <div className='col-span-2 flex justify-center items-center object-contain'>
        <img src={props.img} alt='introduce' className={`${getImageWidth()}`}/>
      </div>
      <div className="col-span-1">
        <h2 className='font-raleway text-6xl font-thin whitespace-pre-line'>{props.title1}</h2>
        <h2 className='font-lora text-6xl font-normal italic mb-8 whitespace-pre-line'>{props.title2}</h2>
        <p className='w-full mb-8 whitespace-pre-line'>{props.description}</p>
        <ButtonMore label={props.btnMoreLabel} whiteMode={props.whiteMode}/>
      </div>
    </div>
  );
}
