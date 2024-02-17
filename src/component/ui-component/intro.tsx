import ButtonMore from './more-button';

interface IntroProps {
  title1?: string;
  title2?: string;
  description?: string;
  btnMoreLabel?: string;
  whiteMode?: boolean;
}

export default function Intro(props: IntroProps) {
  return (
    <div className={`${props.whiteMode ? 'text-black' : 'text-white'}`}>
      <h2 className="font-raleway text-4xl lg:text-5xl font-thin whitespace-pre-line w-1/2">{props.title1}</h2>
      <h2 className="font-lora text-4xl lg:text-5xl font-normal italic mb-4 lg:mb-8 whitespace-pre-line w-1/2">
        {props.title2}
      </h2>
      <p className="w-3/4 mb-4 lg:mb-8 whitespace-pre-line">{props.description}</p>
      <ButtonMore label={props.btnMoreLabel} whiteMode={props.whiteMode} />
    </div>
  );
}
