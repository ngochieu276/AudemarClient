import { Search } from '../../assets/svg/common';
import useWindowDimensions from '../../hook/useWindowDimention';
import { getIconScaleByWBreakpoint } from '../../utils';

export default function Products() {
  const { width } = useWindowDimensions();

  return (
    <section className="products ps-4 md:ps-8 lg:px-16">
      <div className=" relative w-full py-4 mb-16">
        <input
          placeholder="Search for watches"
          className=" py-2 w-full border-b border-black outline-none font-thin md:text-5xl"
        />
        <i className=" absolute top-1/2 right-0 md:right-4 -translate-y-1/2">
          <Search
            color="black"
            scale={getIconScaleByWBreakpoint({ datas: { 768: 125, 1024: 200 }, currentBreakpoint: width })}
          />
        </i>
      </div>
      <div className="tabs">tabs</div>
      <h2></h2>
    </section>
  );
}
