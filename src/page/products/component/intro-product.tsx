import Button from 'component/ui-component/button';
import Intro from 'component/ui-component/intro';

interface IntroImageProps {
  title1?: string;
  title2?: string;
  description?: string;
  img?: string;
  btnMoreLabel?: string;
  reverse?: boolean;
  imgScale?: string;
  whiteMode?: boolean;
}

export default function IntroduceProduct(props: IntroImageProps) {
  const getImageWidth = (scale?: string) => {
    return scale ? `w-${scale}` : '';
  };

  const getColorMode = (whiteMode?: boolean) => {
    if (whiteMode) {
      return { bg: 'bg-white', text: 'text-black' };
    } else {
      return { bg: 'bg-black', text: 'text-white' };
    }
  };

  const appointment = (
    <>
      <Button label="Plan an Appointment" color="white" bg="inherit" borderColor="white" />
      <p className=" mt-16 lg lg:mt-16">
        Building on three generations of R&D innovations, the Universelle regroups the manufacture’s horological
        savoir-faire into a single movement comprised of over 1,100 components.
      </p>
    </>
  );

  return (
    <div
      className={`intro-product relative w-full ${getColorMode(props.whiteMode).bg} ${getColorMode(props.whiteMode).text} p-8 lg:p-24 grid grid-cols-6 gap-8`}
    >
      <div className="col-span-6 lg:col-span-2">
        <Intro
          title1={props.title1}
          title2={props.title2}
          description={props.description}
          whiteMode={props.whiteMode}
          btnMoreLabel={props.btnMoreLabel}
          hideBtnMore
        />
        <div className="col-span-6 lg:col-span-2 hidden lg:block">{appointment}</div>
      </div>
      <div className="col-span-6 lg:col-span-4 flex justify-center items-center object-contain">
        <img src={props.img} alt="introduce" className={`${getImageWidth()}`} />
      </div>
      <div className="col-span-6 lg:col-span-2 block lg:hidden">{appointment}</div>
    </div>
  );
}
