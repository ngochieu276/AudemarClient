import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Tiktok,
  Wechat,
  Weibo,
  Whatsapp,
  Youtube,
} from 'assets/svg/social-network';
import { Global } from 'assets/svg/common';
import { watchList, ourWorldList, servicesList, companyList, policyList } from './navigation-labels';

export default function Footer() {
  return (
    <footer className="grid grid-cols-3 gap-8 p-8 lg:p-24 bg-emerald-950 text-white">
      <div className="col-span-3 2xl:col-span-1">
        <Link to="" className="flex items-center gap-4 pb-24">
          <Global />
          Change language / currency
        </Link>
      </div>
      <div className="col-span-3 2xl:col-span-2 grid grid-cols-4 text-sm leading-7">
        <div className="flex flex-col col-span-4 md:col-span-1 mb-4">
          <label className="font-semibold border-b-white border-b mb-4 md:border-0">WATCHES</label>
          {watchList.map((item) => (
            <Link to={item.path} className="hover:opacity-75">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col col-span-4 md:col-span-1 mb-4 md:border-0">
          <label className="font-semibold border-b-white border-b mb-4 md:border-0">OUR WORLD</label>
          {ourWorldList.map((item) => (
            <Link to={item.path} className="hover:opacity-75">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col col-span-4 md:col-span-1 mb-4 md:border-0">
          <label className="font-semibold border-b-white border-b mb-4 md:border-0">SERVICES</label>
          {servicesList.map((item) => (
            <Link to={item.path} className="hover:opacity-75">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col col-span-4 md:col-span-1 mb-4 md:border-0">
          <label className="font-semibold border-b-white border-b mb-4 md:border-0">COMPANY</label>
          {companyList.map((item) => (
            <Link to={item.path} className="hover:opacity-75">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-3 2xl:col-span-1 flex items-center justify-center md:justify-start gap-4">
        <Instagram />
        <Facebook />
        <Youtube />
        <Tiktok />
        <LinkedIn />
        <Pinterest />
        <Weibo />
        <Wechat />
        <Whatsapp />
      </div>
      <div className="col-span-3 2xl:col-span-2 flex flex-col-reverse md:flex-row md:justify-between gap-8">
        <div className="flex items-center justify-center gap-4 md:gap-16 text-xs font-semibold">
          {policyList.map((item) => (
            <Link to={item.path}>{item.label}</Link>
          ))}
        </div>
        <div className="flex justify-center">© 2024 Audemars Piguet</div>
      </div>
    </footer>
  );
}
