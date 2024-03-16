interface SpecificationProductProps {
  img?: string;
  details?: any;
  reverse?: boolean;
}

export default function SpecificationProduct(props: SpecificationProductProps) {
  return (
    <div className="specification-product grid grid-cols-1 md:grid-cols-2 bg-black py-8 md:py-16">
      <div className={`${props.reverse ? 'col-start-1' : 'col-start-2'} row-start-1`}>
        <img src={props.img} alt="product-img" />
      </div>
      <div className=" text-white row-start-2 md:row-start-1 flex items-center px-8 md:px-36">{props.details}</div>
    </div>
  );
}
