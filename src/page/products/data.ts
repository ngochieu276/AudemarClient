import {
  CollectionFilterParam,
  FunctionFilterParam,
  MaterialFilterParam,
  MechanismFilterParam,
  ProductFilter,
  ProductTabFilter,
  SizeFilterParam,
} from 'dto/product.dto';

export const productList = [
  {
    code: '26398BC.OO.D002CR.04',
    productName: 'Ultra-Complication Universelle (RD#4)',
    detail: '42mm, 18-carat white gold',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010430AA/importer/standup.png.transform.approductmain.png',
  },
  {
    code: '26398BC.OO.D002CR.04',
    productName: 'Ultra-Complication Universelle (RD#4)',
    detail: '42mm, 18-carat pink gold',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010434AA/importer/standup.png.transform.approductmain.png',
  },
  {
    code: '26398BC.OO.D002CR.99',
    productName: 'Ultra-Complication Universelle (RD#4)',
    detail: '42mm, 18-carat white gold',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009178.00/importer/standup.png.transform.approductmain.png',
  },
  {
    code: '26398OR.OO.D002CR.99',
    productName: 'Tourbillon Openworked',
    detail: '42mm, 18-carat pink gold',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010431AA/importer/standup.png.transform.approductmain.png',
  },
  {
    code: '26398OR.OO.D002CR.99',
    productName: 'Grande Sonnerie Carillon Supersonnerie',
    detail: '42mm, 18-carat pink gold',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009826.00/importer/standup.png.transform.approductmain.png',
  },
  {
    code: '26398OR.OO.D002CR.99',
    productName: 'Grande Sonnerie Carillon Supersonnerie',
    detail: '42mm, 18-carat pink gold',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010565AA/importer/standup.png.transform.approductmain.png',
  },
  {
    code: '26398OR.OO.D002CR.99',
    productName: 'Selfwinding Flying Tourbillon',
    detail: '42mm, 18-carat pink gold',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010566AA/importer/standup.png.transform.approductmain.png',
  },
  {
    code: '26398OR.OO.D002CR.99',
    productName: 'Selfwinding Flying Tourbillon',
    detail: '42mm, 18-carat pink gold',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010567AA/importer/standup.png.transform.approductmain.png',
  },
  {
    code: '26398OR.OO.D002CR.99',
    productName: 'Selfwinding Chronograph',
    detail: '42mm, 18-carat pink gold',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010600AA/importer/standup.png.transform.approductmain.png',
  },
  {
    code: '26398OR.OO.D002CR.99',
    productName: 'Perpetual Calendar',
    detail: '42mm, 18-carat pink gold',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009705.00/importer/standup.png.transform.approductmain.png',
  },
];

export const MechanismFilterLabel = {
  [MechanismFilterParam.SelfWinding]: 'SELFWINDING',
  [MechanismFilterParam.HandWound]: 'HAND-WOUND',
  [MechanismFilterParam.Quazt]: 'QUARZT',
};

export const CollectionFilterLabel = {
  [CollectionFilterParam.RoyalOak]: 'ROYAL OAK',
  [CollectionFilterParam.RoyalOakConcept]: 'ROYAL OAK CONCEPT',
  [CollectionFilterParam.RoyalOakOffshore]: 'ROYAL OAK OFFSHORE',
  [CollectionFilterParam.Code1159ByAudemar]: 'CODE 11.59 BY AUDEMARS PIGUET',
};

export const FunctionFilterLabel = {
  [FunctionFilterParam.WanderingHoursStarWheel]: 'Wandering Hours Starwheel',
  [FunctionFilterParam.MoonPhase]: 'Moon Phase',
  [FunctionFilterParam.HoursMinutes]: 'Hours, minutes',
  [FunctionFilterParam.HoursMinutesSmallsecond]: 'Hours, minutes, small seconds',
  [FunctionFilterParam.HoursMinutesCentersecond]: 'Hours, minutes, centre seconds',
  [FunctionFilterParam.FlybackChrnograph]: 'Flyback chronograph',
  [FunctionFilterParam.SplitSecondChrnograph]: 'Split-seconds chronograph',
  [FunctionFilterParam.Chrnograph]: 'Chrnograph',
  [FunctionFilterParam.DualTime]: 'DualTime',
  [FunctionFilterParam.Gmt]: 'Gmt',
  [FunctionFilterParam.PerpetualCalendar]: 'Perpetual Calendar',
  [FunctionFilterParam.SimpleCalender]: 'Simple Calender',
  [FunctionFilterParam.MinuteRepeater]: 'Minute Repeater',
  [FunctionFilterParam.FlyingTourBilion]: 'Flying TourBilion',
  [FunctionFilterParam.TourBilion]: 'TourBilion',
};

export const MaterialFilterLabel = {
  [MaterialFilterParam.CarratYellowGold]: '18-CARAT YELLOW GOLD',
  [MaterialFilterParam.CarratWhiteGold]: '18-CARAT WHITE GOLD',
  [MaterialFilterParam.WhiteCeramic]: 'WHITE CERAMIC',
  [MaterialFilterParam.BlackCeramic]: 'BLACK CERAMIC',
  [MaterialFilterParam.BrownCeramic]: 'BROWN CERAMIC',
  [MaterialFilterParam.Ceramic]: 'CERAMIC',
  [MaterialFilterParam.BlueCeramic]: 'BLUE CERAMIC',
  [MaterialFilterParam.CaratPinkgold]: '18-CARAT PINK GOLD',
  [MaterialFilterParam.CaratSandgold]: '18-CARAT SAND GOLD',
  [MaterialFilterParam.StainlessSteel]: 'STAINLESS STEEL',
  [MaterialFilterParam.Titanium]: 'TITANIUM',
};

export const sizeFilterData: ProductFilter[] = [
  {
    title: SizeFilterParam.Large,
    active: false,
    description: '42 MM AND UP',
    qty: 51,
    tag: ProductTabFilter.Size,
    label: SizeFilterParam.Large,
  },
  {
    title: SizeFilterParam.Medium,
    active: false,
    description: '38 - 41 MM',
    qty: 23,
    tag: ProductTabFilter.Size,
    label: SizeFilterParam.Medium,
  },
  {
    title: SizeFilterParam.Small,
    active: false,
    description: '42 MM AND UP',
    qty: 48,
    tag: ProductTabFilter.Size,
    label: SizeFilterParam.Small,
  },
];

export const collectionFilterData: ProductFilter[] = [
  {
    title: CollectionFilterParam.RoyalOakConcept,
    active: false,
    description: '',
    qty: 51,
    tag: ProductTabFilter.Collection,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/collections/collection-RO.jpg',
    label: CollectionFilterLabel[CollectionFilterParam.RoyalOakConcept],
  },
  {
    title: CollectionFilterParam.RoyalOak,
    active: false,
    description: '',
    qty: 23,
    tag: ProductTabFilter.Collection,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/collections/collection-ROC.jpg',
    label: CollectionFilterLabel[CollectionFilterParam.RoyalOak],
  },
  {
    title: CollectionFilterParam.RoyalOakOffshore,
    active: false,
    description: '',
    qty: 48,
    tag: ProductTabFilter.Collection,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/collections/collection-ROO.jpg',
    label: CollectionFilterLabel[CollectionFilterParam.RoyalOakOffshore],
  },
  {
    title: CollectionFilterParam.Code1159ByAudemar,
    active: false,
    description: '',
    qty: 48,
    tag: ProductTabFilter.Collection,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/collections/collection-11.59.jpg',
    label: CollectionFilterLabel[CollectionFilterParam.Code1159ByAudemar],
  },
];

export const mechanismFilterData: ProductFilter[] = [
  {
    title: MechanismFilterParam.SelfWinding,
    active: false,
    description: '',
    qty: 198,
    tag: ProductTabFilter.Complications,
    label: MechanismFilterParam.SelfWinding,
  },
  {
    title: MechanismFilterParam.HandWound,
    active: false,
    description: '',
    qty: 52,
    tag: ProductTabFilter.Complications,
    label: MechanismFilterParam.HandWound,
  },
  {
    title: MechanismFilterParam.Quazt,
    active: false,
    description: '',
    qty: 102,
    tag: ProductTabFilter.Complications,
    label: MechanismFilterParam.Quazt,
  },
];

export const functionFilterData: ProductFilter[] = [
  {
    title: FunctionFilterParam.WanderingHoursStarWheel,
    active: false,
    description: '',
    qty: 18,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.WanderingHoursStarWheel,
  },
  {
    title: FunctionFilterParam.MoonPhase,
    active: false,
    description: '',
    qty: 98,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.MoonPhase,
  },
  {
    title: FunctionFilterParam.HoursMinutes,
    active: false,
    description: '',
    qty: 19,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.HoursMinutes,
  },
  {
    title: FunctionFilterParam.HoursMinutesSmallsecond,
    active: false,
    description: '',
    qty: 67,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.HoursMinutesSmallsecond,
  },
  {
    title: FunctionFilterParam.HoursMinutesCentersecond,
    active: false,
    description: '',
    qty: 198,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.HoursMinutesCentersecond,
  },
  {
    title: FunctionFilterParam.FlybackChrnograph,
    active: false,
    description: '',
    qty: 45,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.FlybackChrnograph,
  },
  {
    title: FunctionFilterParam.SplitSecondChrnograph,
    active: false,
    description: '',
    qty: 12,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.SplitSecondChrnograph,
  },
  {
    title: FunctionFilterParam.Chrnograph,
    active: false,
    description: '',
    qty: 1,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.Chrnograph,
  },
  {
    title: FunctionFilterParam.DualTime,
    active: false,
    description: '',
    qty: 53,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.DualTime,
  },
  {
    title: FunctionFilterParam.Gmt,
    active: false,
    description: '',
    qty: 1,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.Gmt,
  },
  {
    title: FunctionFilterParam.PerpetualCalendar,
    active: false,
    description: '',
    qty: 198,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.PerpetualCalendar,
  },
  {
    title: FunctionFilterParam.SimpleCalender,
    active: false,
    description: '',
    qty: 3,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.SimpleCalender,
  },
  {
    title: FunctionFilterParam.MinuteRepeater,
    active: false,
    description: '',
    qty: 23,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.MinuteRepeater,
  },
  {
    title: FunctionFilterParam.FlyingTourBilion,
    active: false,
    description: '',
    qty: 198,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.FlyingTourBilion,
  },
  {
    title: FunctionFilterParam.TourBilion,
    active: false,
    description: '',
    qty: 43,
    tag: ProductTabFilter.Complications,
    label: FunctionFilterParam.TourBilion,
  },
];

export const materialFilterData: ProductFilter[] = [
  {
    title: MaterialFilterParam.CarratYellowGold,
    active: false,
    description: '',
    qty: 36,
    tag: ProductTabFilter.Material,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/materials/image-40@3x.png',
    label: MaterialFilterLabel[MaterialFilterParam.CarratYellowGold],
  },
  {
    title: MaterialFilterParam.CarratWhiteGold,
    active: false,
    description: '',
    qty: 5,
    tag: ProductTabFilter.Material,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/materials/image-39@3x.png',
    label: MaterialFilterLabel[MaterialFilterParam.CarratWhiteGold],
  },
  {
    title: MaterialFilterParam.WhiteCeramic,
    active: false,
    description: '',
    qty: 12,
    tag: ProductTabFilter.Material,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/materials/Ceramic%20white.png',
    label: MaterialFilterLabel[MaterialFilterParam.WhiteCeramic],
  },
  {
    title: MaterialFilterParam.BlackCeramic,
    active: false,
    description: '',
    qty: 47,
    tag: ProductTabFilter.Material,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/materials/image-36@3x.png',
    label: MaterialFilterLabel[MaterialFilterParam.BlackCeramic],
  },
  {
    title: MaterialFilterParam.BrownCeramic,
    active: false,
    description: '',
    qty: 47,
    tag: ProductTabFilter.Material,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/materials/material-fallback.png',
    label: MaterialFilterLabel[MaterialFilterParam.BrownCeramic],
  },
  {
    title: MaterialFilterParam.Ceramic,
    active: false,
    description: '',
    qty: 47,
    tag: ProductTabFilter.Material,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/materials/material-fallback.png',
    label: MaterialFilterLabel[MaterialFilterParam.Ceramic],
  },
  {
    title: MaterialFilterParam.BlueCeramic,
    active: false,
    description: '',
    qty: 47,
    tag: ProductTabFilter.Material,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/materials/Ceramic%20blue.png',
    label: MaterialFilterLabel[MaterialFilterParam.BlueCeramic],
  },
  {
    title: MaterialFilterParam.CaratPinkgold,
    active: false,
    description: '',
    qty: 47,
    tag: ProductTabFilter.Material,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/materials/image-38@3x.png',
    label: MaterialFilterLabel[MaterialFilterParam.CaratPinkgold],
  },
  {
    title: MaterialFilterParam.CaratSandgold,
    active: false,
    description: '',
    qty: 47,
    tag: ProductTabFilter.Material,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/materials/image-41@3x.png',
    label: MaterialFilterLabel[MaterialFilterParam.CaratSandgold],
  },
  {
    title: MaterialFilterParam.StainlessSteel,
    active: false,
    description: '',
    qty: 47,
    tag: ProductTabFilter.Material,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/materials/image-41@3x.png',
    label: MaterialFilterLabel[MaterialFilterParam.StainlessSteel],
  },
  {
    title: MaterialFilterParam.Titanium,
    active: false,
    description: '',
    qty: 47,
    tag: ProductTabFilter.Material,
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/filter-options/materials/image-42@3x.png',
    label: MaterialFilterLabel[MaterialFilterParam.Titanium],
  },
];

export const closeProductDetais = [
  'https://www.audemarspiguet.com/content/dam/ap/com/fragments/code-11-59-first-fragment/26398bc-oo-d002cr-04/car1bis_26398BC.OO.D002CR.04.jpg.transform.apcarouselh.jpg',
  'https://www.audemarspiguet.com/content/dam/ap/com/fragments/code-11-59-first-fragment/26398bc-oo-d002cr-04/car1_26398BC.OO.D002CR.04.jpg.transform.apcarouselh.jpg',
  'https://www.audemarspiguet.com/content/dam/ap/com/fragments/code-11-59-first-fragment/26398bc-oo-d002cr-04/car2_26398BC.OO.D002CR.04.jpg.transform.apcarouselh.jpg',
];

export const complicationData = [
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/fragments/complications/qp.jpg',
    title: "An intuitive 'Super-crown'",
    description:
      'The crown enables the forwards or backwards correction of the month and automatically returns to its neutral position after a rotation in either direction. This ease of use hides highly technical mechanical devices located in both the crown and the movement, as well as a complex security system preventing misuse.',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/fragments/complications/escapement.jpg',
    title: 'Moon phase',
    description:
      'An innovative astronomical moon system conveys a more realistic depiction of the lunar cycle. Two concentric discs, on which six different moon positions are printed, combine to form ten images faithfully representing the transitory stages between the New and Full Moon.',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/fragments/complications/flyback_chrono.jpg',
    title: 'Grande Sonnerie Supersonnerie',
    description:
      'In Calibre 1000 the gongs are now attached to the 0.6mm sapphire crystal membrane acting as a soundboard, while the caseback can be opened by an extra-thin "secret" cover, which also features apertures on the side to let air through and boost sound amplification when the watch sits on the wrist.',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/fragments/complications/crown.jpg',
    title: 'Perpetual calendar',
    description:
      'The calendar functions have been organised to take as little space as possible. Calibre 1000 builds on the Calibre 5133 and the release of the Royal Oak Selfwinding Perpetual Calendar Ultra-Thin RD#2 prototype, which merged the perpetual calendar functions onto one single level. The end-of-the-month cam has been similarly integrated to the date wheel, while the month cam has been combined to the month wheel. Additional calendar functions include a large date and a year indication.',
  },
];
