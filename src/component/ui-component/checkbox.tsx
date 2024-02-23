interface CheckboxProps {
  checked: boolean;
  onChanged: (checked: boolean) => void;
}

export default function Checkbox(props: CheckboxProps) {
  const getCheckBg = () => {
    return props.checked ? 'bg-slate-900' : 'bg-slate-50';
  };
  return (
    <div
      className="checkbox group relative border border-black h-7 w-7 cursor-pointer"
      onClick={() => props.onChanged(props.checked)}
    >
      <div
        className={` absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 ${getCheckBg()} group-hover:bg-slate-300 duration-300`}
      ></div>
    </div>
  );
}
