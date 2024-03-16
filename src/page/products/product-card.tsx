import { ProductDto } from 'dto/product.dto';

export default function ProductCard(props: { product: ProductDto }) {
  return (
    <div className="product-card group bg-stone-100 flex flex-col items-center gap-16 p-0 md:p-4 lg:p-8 hover:opacity-80 duration-300">
      <img src={props.product.img} alt="product card img" className=" w-3/4 group-hover:scale-110 duration-1000" />
      <div className=" flex flex-col items-center gap-2 text-center">
        <div>{props.product.code}</div>
        <div className=" font-bold">Code 11.59 by Audemars Piguet</div>
        <div>{props.product.productName}</div>
        <div className=" text-sm text-neutral-600">{props.product.detail}</div>
      </div>
    </div>
  );
}
