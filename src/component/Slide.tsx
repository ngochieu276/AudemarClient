import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import useWindowDimensions from '../hook/useWindowDimention';

enum Breakpoint {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  '2xl' = 1536,
}

interface SlidePerviewBreakpoint {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

interface SlideProps {
  breakpoint?: SlidePerviewBreakpoint;
  children: JSX.Element | JSX.Element[];
}

const defaultProps = {
  breakpoint: {
    sm: 1.25,
    md: 1.5,
    lg: 1.75,
    xl: 2.25,
    '2xl': 2.25,
  },
};

const Slide: React.FC<SlideProps> = (props) => {
  const { width } = useWindowDimensions();

  const getSliderPerview = (windowWidth?: number) => {
    if (!windowWidth) {
      return props.breakpoint?.sm;
    }
    if (windowWidth >= Breakpoint.sm && windowWidth < Breakpoint.md) {
      return props.breakpoint?.sm;
    } else if (windowWidth >= Breakpoint.md && windowWidth < Breakpoint.lg) {
      return props.breakpoint?.md;
    } else if (windowWidth >= Breakpoint.lg && windowWidth < Breakpoint.xl) {
      return props.breakpoint?.lg;
    } else if (windowWidth >= Breakpoint.xl && windowWidth < Breakpoint['2xl']) {
      return props.breakpoint?.xl;
    } else if (windowWidth >= Breakpoint['2xl']) {
      return props.breakpoint?.['2xl'];
    } else {
      return props.breakpoint?.sm;
    }
  };

  return (
    <>
      <Swiper slidesPerView={getSliderPerview(width)} spaceBetween={12} className="swiper">
        {props.children}
      </Swiper>
    </>
  );
};

Slide.defaultProps = defaultProps;

export default Slide;
