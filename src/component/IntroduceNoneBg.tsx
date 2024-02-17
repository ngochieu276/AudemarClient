import ButtonMore from './ui-component/more-button';

interface IntroSlideProps {
  title1?: string;
  title2?: string;
  description?: string;
  bgColor?: string;
  btnMoreLabel?: string;
}

export default function IntroduceNoneBG(props: IntroSlideProps) {
  const getColor = (bgColor?: string) => {
    if (bgColor === 'black') {
      return { bg: 'bg-black', text: 'text-white' };
    } else if (bgColor === 'white') {
      return { bg: 'bg-white', text: 'text-black' };
    } else return { bg: 'bg-black', text: 'text-white' };
  };

  return (
    <div
      className={`introduce-slide relative w-full ${getColor(props.bgColor).bg} ${getColor(props.bgColor).text} py-16 grid`}
    >
      <div className="p-8 lg:p-24">
        <h2 className="font-raleway text-4xl lg:text-6xl font-thin">{props.title1}</h2>
        <h2 className="font-lora text-4xl lg:text-6xl font-normal italic mb-4 lg:mb-8">{props.title2}</h2>
        <p className="w-3/4 mb-4 lg:mb-8 ps-0 lg:ps-36 lg:w-1/2">{props.description}</p>
        <div className="ps-0 lg:ps-36">
          <ButtonMore label={props.btnMoreLabel} />
        </div>
      </div>
    </div>
  );
}
