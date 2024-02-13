import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import useWindowDimensions from '../hook/useWindowDimention';

export default function Slide({children} : {children: any}) {
  const { width } = useWindowDimensions();

  const getSliderPerview = (windowWidth?: number) => {
    if (!windowWidth) return 1.25;
    if (windowWidth >= 768) {
      return 2.25
    } else return 1.25
  }

  return (
    <>
      <Swiper
        slidesPerView={getSliderPerview(width)}
        spaceBetween={12}
        className="swiper"
      >
        {children}
      </Swiper>
    </>
  );
}