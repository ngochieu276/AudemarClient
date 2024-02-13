interface buttonProps {
  label: string;
}

export default function Button(props: buttonProps) {
  return (
    <div className='px-20 py-4 bg-black text-white opacity-100 hover:opacity-75 cursor-pointer flex justify-center items-center'>
      {props.label}
    </div>
  );
}
