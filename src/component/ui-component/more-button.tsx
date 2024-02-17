interface ButtonMoreProps {
  label?: string;
  whiteMode?: boolean;
}

export default function ButtonMore(props: ButtonMoreProps) {
  return (
    <div className="flex justify-start items-center">
      <div className="group flex justify-end items-center w-48 gap-2 cursor-pointer">
        <div
          className={`${props.whiteMode ? 'bg-black' : 'bg-white'} h-0.5 w-4 flex-1 group-hover:flex-initial duration-300`}
        ></div>
        <p className={`${props.whiteMode ? 'text-black' : 'text-white'}`}>{props.label || 'Discover more'}</p>
      </div>
    </div>
  );
}
