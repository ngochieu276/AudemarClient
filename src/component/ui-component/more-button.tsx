interface ButtonMoreProps {
  label?: string
}

export default function ButtonMore(props: ButtonMoreProps) {
  return (
    <div className='flex justify-start items-center'>
      <div className='group flex justify-end items-center w-48 gap-2 cursor-pointer'>
        <div className='bg-white h-0.5 w-4 flex-1 group-hover:flex-initial duration-300'></div>
        <p className='text-white'>{props.label || 'Discover more'}</p>
      </div>
    </div>
  );
}
