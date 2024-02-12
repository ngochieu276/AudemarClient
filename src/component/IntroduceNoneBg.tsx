import ButtonMore from "./ui-component/more-button";

interface IntroSlideProps {
  title1?: string;
  title2?: string;
  description?: string;
  bgColor?: string;
  btnMoreLabel?: string;
}

export default function IntroduceNoneBG(props: IntroSlideProps) {

  const getBGColor = (color?: string) => {
    if (color === 'black') {
      return 'bg-black'
    } else if (color === 'white') {
      return 'bg-white'
    } else return 'bg-black'
  }

  return (
    <div className={`introduce-slide relative w-full ${getBGColor(props.bgColor)} py-16 grid`}>
      <div className='ps-24'>
        <h2 className='font-raleway text-6xl text-white font-thin whitespace-pre-line'>{props.title1}</h2>
        <h2 className='font-lora text-6xl text-white font-normal italic mb-8 whitespace-pre-line'>{props.title2}</h2>
        <p className='text-white w-full mb-8 whitespace-pre-line ms-36'>{props.description}</p>
        <div className="ms-36">
          <ButtonMore label={props.btnMoreLabel}/>
        </div>
      </div>
    </div>
  );
}
