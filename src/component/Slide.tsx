import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Slide({children} : {children: any}) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={12}
        className="swiper"
      >
        {children}
      </Swiper>
    </>
  );
}