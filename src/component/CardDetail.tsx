import ButtonMore from './ui-component/more-button';

interface CardDetailProps {
  link: string;
  title?: string;
  description?: string;
  onlyImage?: boolean;
  buttonMoreLabel?: string;
}

export default function CardDetail(props: CardDetailProps) {
  return (
    <div className="card-detail">
      <div className="mb-6">
        <img src={props.link} alt="card-img" />
      </div>
      {!props.onlyImage && (
        <div className="text-white">
          <p className="font-medium mb-6">{props.title}</p>
          <p className="font-extralight mb-12">{props.description}</p>
          <ButtonMore label={props.buttonMoreLabel} />
        </div>
      )}
    </div>
  );
}
