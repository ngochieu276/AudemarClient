import { useState } from 'react';
import { Search } from 'assets/svg/common';
import useWindowDimensions from 'hook/useWindowDimention';
import { getIconScaleByWBreakpoint } from 'utils';
import {
  CollectionFilterLabel,
  FunctionFilterLabel,
  MaterialFilterLabel,
  MechanismFilterLabel,
  collectionFilterData,
  functionFilterData,
  materialFilterData,
  mechanismFilterData,
  productList,
  sizeFilterData,
} from './data';
import ProductCard from './product-card';
import { CloseOutlined, DownOutlined } from '@ant-design/icons';
import Checkbox from 'component/ui-component/checkbox';
import ImgCheckbox from 'component/ui-component/img-checkbox';
import {
  CollectionFilterParam,
  FilterCollection,
  MechanismFilterParam,
  ProductFilter,
  ProductTabFilter,
  SizeFilterParam,
  FunctionFilterParam,
  MaterialFilterParam,
} from 'dto/product.dto';

const productFilterData: ProductFilter[] = [
  ...sizeFilterData,
  ...collectionFilterData,
  ...mechanismFilterData,
  ...functionFilterData,
  ...materialFilterData,
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
    productParam:
      | SizeFilterParam
      | CollectionFilterParam
      | MechanismFilterParam
      | FunctionFilterParam
      | MaterialFilterParam,
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
          {filterBy === ProductTabFilter.Material && (
            <div>
              <h6 className=" font-extralight text-2xl">CASE</h6>
              <div className=" flex flex-wrap gap-2">
                {productFilter
                  .filter((product) => product.tag === ProductTabFilter.Material)
                  .map((filter) => {
                    return (
                      <div className=" w-32 lg:w-40" key={filter.title}>
                        <ImgCheckbox
                          checked={filter.active}
                          onChanged={(value) => {
                            handleSetProductFilter(filter.title as MaterialFilterParam, value);
                          }}
                          img={filter.img}
                        />
                        <div className=" text-base font-semibold">
                          {MaterialFilterLabel[filter.title as MaterialFilterParam]}
                          <span className=" font-thin ms-3">{filter.qty}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
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
