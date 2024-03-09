export interface ProductDto {
  code: string;
  productName: string;
  detail: string;
  img: string;
}

export enum ProductTabFilter {
  Size = 'Size',
  Collection = 'Collection',
  Complications = 'Complications',
  Material = 'Material',
}

export enum SizeFilterParam {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
}

export enum FilterCollection {
  SpecialEdition = 'Special Edition',
  CurrentCollection = 'Special Collection',
  LegacyWatch = 'Legacy Watches',
}

export enum CollectionFilterParam {
  RoyalOak = 'RoyalOak',
  RoyalOakConcept = 'RoyalOakConcept',
  RoyalOakOffshore = 'RoyalOakOffshore',
  Code1159ByAudemar = 'Code1159ByAudemar',
}

export enum MechanismFilterParam {
  SelfWinding = 'SelfWinding',
  HandWound = 'HandWound',
  Quazt = 'Quazt',
}

export enum FunctionFilterParam {
  WanderingHoursStarWheel = 'WanderingHoursStarWheel',
  MoonPhase = 'MoonPhase',
  HoursMinutes = 'HoursMinutes',
  HoursMinutesSmallsecond = 'HoursMinutesSmallsecond',
  HoursMinutesCentersecond = 'HoursMinutesCentersecond',
  FlybackChrnograph = 'FlybackChrnograph',
  SplitSecondChrnograph = 'SplitSecondChrnograph',
  Chrnograph = 'Chrnograph',
  DualTime = 'DualTime',
  Gmt = 'Gmt',
  PerpetualCalendar = 'PerpetualCalendar',
  SimpleCalender = 'SimpleCalender',
  MinuteRepeater = 'MinuteRepeater',
  FlyingTourBilion = 'FlyingTourBilion',
  TourBilion = 'TourBilion',
}

export enum MaterialFilterParam {
  CarratYellowGold = 'CarratYellowGold',
  CarratWhiteGold = 'CarratWhiteGold',
  WhiteCeramic = 'WhiteCeramic',
  BlackCeramic = 'BlackCeramic',
  BrownCeramic = 'BrownCeramic',
  Ceramic = 'Ceramic',
  BlueCeramic = 'BlueCeramic',
  CaratPinkgold = 'CaratPinkgold',
  CaratSandgold = 'CaratSandgold',
  StainlessSteel = 'StainlessSteel',
  Titanium = 'Titanium',
}

export interface ProductFilter {
  title: string;
  active: boolean;
  description: string;
  qty: number;
  tag: ProductTabFilter;
  img?: string;
  label: string;
}
