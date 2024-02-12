import { Link } from "react-router-dom";

interface NavigationItem {
  label: string;
  path: string;
}

const watchList : NavigationItem[] = [
  {
    label: 'All watches',
    path: ''
  },
  {
    label: 'Our Collections',
    path: ''
  },
  {
    label: 'New Releases',
    path: ''
  },{
    label: 'Find a Boutique',
    path: ''
  }
]

const ourWorldList : NavigationItem[] = [
  {
    label: 'Born in Le Brassus',
    path: ''
  },
  {
    label: 'Musée Atelier',
    path: ''
  },
  {
    label: 'AP Chronicles',
    path: ''
  },{
    label: 'Stay connected',
    path: ''
  }
]

const servicesList : NavigationItem[] = [
  {
    label: 'Maintenance Services',
    path: ''
  },
  {
    label: 'Extend your warranty',
    path: ''
  },
  {
    label: 'Contact us',
    path: ''
  },{
    label: 'FAQ',
    path: ''
  }
]

const companyList : NavigationItem[] = [
  {
    label: 'Careers',
    path: ''
  },
  {
    label: 'Press',
    path: ''
  },
  {
    label: 'Foundation',
    path: ''
  },{
    label: 'Commitments',
    path: ''
  }
]

export default function Footer() {
  return (
    <footer className="grid grid-cols-3 p-24 bg-emerald-950 text-white">
      <div className="col-span-1">
        <Link to="">Change language / currency</Link>
      </div>
      <div className="col-span-2 grid grid-cols-4 text-sm leading-7">
        <div className="flex flex-col">
          <label className="font-medium">WATCHES</label>
          {watchList.map(item => <Link to={item.path}>{item.label}</Link>)}
        </div>
        <div className=" flex flex-col">
          <label className="font-medium">OUR WORLD</label>
          {ourWorldList.map(item => <Link to={item.path}>{item.label}</Link>)}
        </div>
        <div className=" flex flex-col">
          <label className="font-medium">SERVICES</label>
          {servicesList.map(item => <Link to={item.path}>{item.label}</Link>)}
        </div>
        <div className=" flex flex-col">
          <label className="font-medium">COMPANY</label>
          {companyList.map(item => <Link to={item.path}>{item.label}</Link>)}
        </div>
      </div>
    </footer>
  )
}
