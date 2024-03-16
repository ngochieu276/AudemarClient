interface buttonProps {
  label: string;
  bg?: string;
  borderColor?: string;
  color?: string;
}

export default function Button(props: buttonProps) {
  const getBgColor = () => {
    return props.bg || 'inherit';
  };

  const getTextColor = () => {
    return props.color || 'white';
  };

  const getBorderColor = () => {
    return props.borderColor || 'transparent';
  };

  return (
    <div
      className={`px-4 md:px-8 xl:px-12 py-4 w-fit bg-${getBgColor()} text-${getTextColor()} border border-${getBorderColor()} opacity-100 hover:opacity-75 cursor-pointer flex justify-center items-center`}
    >
      {props.label}
    </div>
  );
}
