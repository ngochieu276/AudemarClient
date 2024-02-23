interface CheckboxProps {
  checked: boolean;
  onChanged: (checked: boolean) => void;
  img?: string;
}

export default function ImgCheckbox(props: CheckboxProps) {
  const getCheckStyle = () => {
    return {
      center: props.checked ? 'opacity-100' : 'opacity-0',
      layer: props.checked ? 'opacity-50' : 'opacity-0',
    };
  };
  return (
    <div
      className="img-checkbox group relative cursor-pointer hover:opacity-60 duration-300"
      onClick={() => props.onChanged(props.checked)}
    >
      <img src={props.img} alt="checkbox-img" className="" />
      <div
        className={` absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-7 w-7 border border-white duration-100 flex items-center justify-center ${getCheckStyle().center} group-hover:opacity-100 z-30`}
      >
        <div className="w-3 h-3 bg-white"></div>
      </div>
      <div className={` absolute top-0 left-0 w-full h-full bg-black ${getCheckStyle().layer}`}></div>
    </div>
  );
}
