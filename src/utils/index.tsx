interface IconSizeByBreakpoint {
  [key: number]: number;
}

interface getIconSizeByWBreakpointParams {
  datas: IconSizeByBreakpoint;
  currentBreakpoint?: number;
}

export const getIconScaleByWBreakpoint = (param: getIconSizeByWBreakpointParams) => {
  let findSize;
  for (const breakpoint in param.datas) {
    if ((param.currentBreakpoint || 0) > Number(breakpoint)) {
      findSize = param.datas[breakpoint];
    }
  }
  if (findSize) {
    return findSize;
  } else {
    return 1;
  }
};
