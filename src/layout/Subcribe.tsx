import Button from "../component/ui-component/button";

export default function Subcribe() {
  return (
    <div className='grid grid-cols-3 gap-8 p-8 lg:p-24 place-items-end'>
      <div className='col-span-3 md:col-span-2 lg: lg:col-span-1 justify-self-start'>
        <h2 className='font-raleway text-4xl lg:text-5xl font-thin whitespace-pre-line w-full'>
          GET THE
        </h2>
        <h2 className='font-lora text-4xl lg:text-5xl font-normal italic whitespace-pre-line w-full'>
          LATEST NEWS
        </h2>
      </div>
      <div className='max-w-96 col-span-3 md:col-span-2 lg:col-span-1'>
        Be the first to receive the latest news on our brand, products and upcoming events.
      </div>
      <div className='col-span-3 md:col-span-1'>
        <Button label='Subcribe' />
      </div>
    </div>
  );
}
