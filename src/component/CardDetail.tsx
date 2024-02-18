import ButtonMore from './ui-component/more-button';

interface CardDetailProps {
  link: string;
  title?: string;
  description?: string;
  onlyImage?: boolean;
  buttonMoreLabel?: string;
  whiteMode?: boolean;
  bgImg?: string;
  hightlightImg?: string;
}

export default function CardDetail(props: CardDetailProps) {
  return (
    <div className="card-detail">
      <div className="py-6 flex justify-center items-center">
        <img src={props.link} alt="card-img" className=" z-10" />
        {props.bgImg && (
          <img src={props.bgImg} alt="img-bg" className=" absolute inset-x-0 inset-y-0 z-0 h-full w-full" />
        )}
        {props.hightlightImg && (
          <img
            src={props.hightlightImg}
            alt="img-bg"
            className=" absolute left-1/2 -translate-x-1/2 top-2/3 -translate-y-1/2 z-20 w-1/2"
          />
        )}
      </div>
      {!props.onlyImage && (
        <div className={`${props.whiteMode ? 'text-black' : 'text-white'}`}>
          <p className="font-medium mb-6">{props.title}</p>
          <p className="font-extralight mb-12">{props.description}</p>
          <ButtonMore label={props.buttonMoreLabel} />
        </div>
      )}
    </div>
  );
}
