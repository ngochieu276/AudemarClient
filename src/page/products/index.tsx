import { useState } from 'react';
import { Search } from '../../assets/svg/common';
import useWindowDimensions from '../../hook/useWindowDimention';
import { getIconScaleByWBreakpoint } from '../../utils';
import { productList } from './data';
import ProductCard from './product-card';
import { CloseOutlined, DownOutlined } from '@ant-design/icons';
import Checkbox from '../../component/ui-component/checkbox';
import ImgCheckbox from '../../component/ui-component/img-checkbox';

enum ProductTabFilter {
  Size = 'Size',
  Collection = 'Collection',
  Complications = 'Complications',
  Material = 'Material',
}

enum SizeFilterParam {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
}

enum FilterCollection {
  SpecialEdition = 'Special Edition',
  CurrentCollection = 'Special Collection',
  LegacyWatch = 'Legacy Watches',
}

enum CollectionFilterParam {
  RoyalOak = 'RoyalOak',
  RoyalOakConcept = 'RoyalOakConcept',
  RoyalOakOffshore = 'RoyalOakOffshore',
  Code1159ByAudemar = 'Code1159ByAudemar',
}

enum MechanismFilterParam {
  SelfWinding = 'SelfWinding',
  HandWound = 'HandWound',
  Quazt = 'Quazt',
}

enum FunctionFilterParam {
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

const MechanismFilterLabel = {
  [MechanismFilterParam.SelfWinding]: 'SELFWINDING',
  [MechanismFilterParam.HandWound]: 'HAND-WOUND',
  [MechanismFilterParam.Quazt]: 'QUARZT',
};

const CollectionFilterLabel = {
  [CollectionFilterParam.RoyalOak]: 'ROYAL OAK',
  [CollectionFilterParam.RoyalOakConcept]: 'ROYAL OAK CONCEPT',
  [CollectionFilterParam.RoyalOakOffshore]: 'ROYAL OAK OFFSHORE',
  [CollectionFilterParam.Code1159ByAudemar]: 'CODE 11.59 BY AUDEMARS PIGUET',
};

const FunctionFilterLabel = {
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

interface ProductFilter {
  title: string;
  active: boolean;
  description: string;
  qty: number;
  tag: ProductTabFilter;
  img?: string;
  label: string;
}

const sizeFilterData: ProductFilter[] = [
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

const collectionFilterData: ProductFilter[] = [
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

const mechanismFilterData: ProductFilter[] = [
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

const functionFilterData: ProductFilter[] = [
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

const productFilterData: ProductFilter[] = [
  ...sizeFilterData,
  ...collectionFilterData,
  ...mechanismFilterData,
  ...functionFilterData,
];

export default function Products() {
  const { width } = useWindowDimensions();
  const [filterBy, setFilterBy] = useState<ProductTabFilter | null>(null);
  const [filterCollection, setFilterCollection] = useState<FilterCollection>(FilterCollection.CurrentCollection);
  const [showFilterCollection, setShowFilterCollection] = useState<boolean>(false);
  const [productFilter, setProductFilter] = useState<ProductFilter[]>(productFilterData);

  const hightLightFilter = (currentFilter: ProductTabFilter | null, filter: ProductTabFilter) => {
    if (!!currentFilter) {
      return currentFilter === filter;
    }
  };

  const handleSetProductFilter = (
    productParam: SizeFilterParam | CollectionFilterParam | MechanismFilterParam | FunctionFilterParam,
    active: boolean
  ) => {
    const newFilter = [...productFilter].map((product) => {
      if (product.title === productParam) {
        return {
          ...product,
          active: !active,
        };
      } else {
        return product;
      }
    });

    setProductFilter(newFilter);
  };

  return (
    <section className="products px-4 md:px-4 lg:px-16">
      <div className=" relative w-full py-4 mb-16">
        <input
          placeholder="Search for watches"
          className=" py-2 w-full border-b border-black outline-none font-thin md:text-5xl"
        />
        <i className=" absolute top-1/2 right-0 md:right-4 -translate-y-1/2">
          <Search
            color="black"
            scale={getIconScaleByWBreakpoint({ datas: { 768: 125, 1024: 150 }, currentBreakpoint: width })}
          />
        </i>
      </div>
      <div className="tabs">
        <div className="tab-header relative border-b flex items-center flex-wrap text-sm">
          <div className=" py-4">Filter By</div>
          <div className=" flex">
            {Object.values(ProductTabFilter).map((key) => {
              return (
                <div
                  className={` py-4 mx-4 px-2 flex justify-center font-semibold relative after:block cursor-pointer 
                    after:absolute after:bottom-0 after:h-0.5 after:w-full after:bg-${hightLightFilter(filterBy, key) ? 'black' : 'transparent'} hover:after:bg-black after:duration-500`}
                  onClick={() => setFilterBy(key)}
                >
                  {key}
                </div>
              );
            })}
          </div>
          <div
            className={` absolute right-0 -top-1/2 md:top-1/2 -translate-y-6 bg-${showFilterCollection ? 'white' : 'transparent'}`}
          >
            <div className={` flex flex-col items-end border-${showFilterCollection ? 2 : 0} p-4 pe-0`}>
              <div
                onClick={() => setShowFilterCollection(!showFilterCollection)}
                className=" me-8 relative cursor-pointer"
              >
                Show <span className=" font-semibold ">{filterCollection}</span>
                <i className=" absolute -right-6 top-1/2 -translate-y-1/2 flex items-center">
                  <DownOutlined />
                </i>
              </div>
              {Object.values(FilterCollection)
                .filter((key) => key !== filterCollection)
                .map((key) => {
                  return (
                    <div className=" me-8 cursor-pointer">
                      <span
                        className={` font-semibold opacity-80  ${showFilterCollection ? 'visible' : 'invisible'}`}
                        onClick={() => {
                          setFilterCollection(key);
                          setShowFilterCollection(false);
                        }}
                      >
                        {key}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="tab-contents">
          <div className="my-2 pb-2 flex items-center gap-4 md:w-full overflow-x-auto">
            {productFilter
              .filter((map) => map.active)
              .map((filter) => {
                return (
                  <div
                    className=" py-1 px-3 border cursor-pointer hover:opacity-80 font-semibold flex items-center gap-4 min-w-max"
                    onClick={() => handleSetProductFilter(filter.title as SizeFilterParam, filter.active)}
                  >
                    {filter.label}
                    <i className="flex items-center">
                      <CloseOutlined style={{ fontSize: '8px' }} />
                    </i>
                  </div>
                );
              })}
            {productFilter.filter((product) => product.active).length >= 2 && (
              <div
                className=" font-semibold hover:opacity-80 text-sm cursor-pointer min-w-max"
                onClick={() => setProductFilter(productFilterData)}
              >
                Clear all
              </div>
            )}
          </div>
          {filterBy === ProductTabFilter.Size && (
            <div className=" my-8">
              <h6 className=" font-extralight text-2xl">CASE DIAMETER</h6>
              {productFilter
                .filter((product) => product.tag === ProductTabFilter.Size)
                .map((filter) => {
                  return (
                    <div className=" flex gap-4 my-4" key={filter.title}>
                      <Checkbox
                        checked={filter.active}
                        onChanged={(value) => {
                          handleSetProductFilter(filter.title as SizeFilterParam, value);
                        }}
                      />
                      <div>
                        <div className=" text-base font-semibold">
                          {filter.title.toUpperCase()} <span className=" font-thin ms-3">51</span>
                        </div>
                        <p className=" text-xs font-semibold opacity-80">{filter.description}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
          {filterBy === ProductTabFilter.Collection && (
            <div className=" my-8 grid grid-cols-4 gap-2">
              {productFilter
                .filter((product) => product.tag === ProductTabFilter.Collection)
                .map((filter) => {
                  return (
                    <div className=" col-span-4 md:col-span-2 lg:col-span-1" key={filter.title}>
                      <ImgCheckbox
                        checked={filter.active}
                        onChanged={(value) => {
                          handleSetProductFilter(filter.title as CollectionFilterParam, value);
                        }}
                        img={filter.img}
                      />
                      <div className=" text-base font-semibold">
                        {CollectionFilterLabel[filter.title as CollectionFilterParam]}
                        <span className=" font-thin ms-3">{filter.qty}</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
          {filterBy === ProductTabFilter.Complications && (
            <div className=" my-8 grid grid-cols-8">
              <div className=" col-span-3 md:col-span-2">
                <h6 className=" font-extralight text-2xl">MECHANISM</h6>
                {productFilter
                  .filter(
                    (product) =>
                      product.tag === ProductTabFilter.Complications &&
                      Object.values(MechanismFilterParam).includes(product.title as MechanismFilterParam)
                  )
                  .map((filter) => {
                    return (
                      <div className=" flex gap-4 my-4" key={filter.title}>
                        <Checkbox
                          checked={filter.active}
                          onChanged={(value) => {
                            handleSetProductFilter(filter.title as MechanismFilterParam, value);
                          }}
                        />
                        <div>
                          <div className=" text-base font-semibold">
                            {MechanismFilterLabel[filter.title as MechanismFilterParam]}{' '}
                            <span className=" font-thin ms-3">{filter.qty}</span>
                          </div>
                          <p className=" text-xs font-semibold opacity-80">{filter.description}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className=" col-span-5 md:col-span-6">
                <h6 className=" font-extralight text-2xl">FUNCTIONS</h6>
                <div className=" grid grid-cols-1 lg:grid-cols-3">
                  {productFilter
                    .filter(
                      (product) =>
                        product.tag === ProductTabFilter.Complications &&
                        Object.values(FunctionFilterParam).includes(product.title as FunctionFilterParam)
                    )
                    .map((filter) => {
                      return (
                        <div className=" flex gap-4 my-4" key={filter.title}>
                          <Checkbox
                            checked={filter.active}
                            onChanged={(value) => {
                              handleSetProductFilter(filter.title as FunctionFilterParam, value);
                            }}
                          />
                          <div>
                            <div className=" text-base font-semibold">
                              {FunctionFilterLabel[filter.title as FunctionFilterParam]}{' '}
                              <span className=" font-thin ms-3">{filter.qty}</span>
                            </div>
                            <p className=" text-xs font-semibold opacity-80">{filter.description}</p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
          {filterBy === ProductTabFilter.Material && <div>Mate</div>}
        </div>
      </div>
      <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-4">
        {productList.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </section>
  );
}
