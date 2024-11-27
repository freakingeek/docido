import Link from 'next/link'
import classNames from 'classnames'
import Logo from '@/components/Logo'
import { Settings, Search, ChevronDown, ShoppingBag, User } from 'react-feather'

type HeaderProps = {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  const links = [
    {
      id: 0,
      title: 'کتابخانه های عضو',
      link: '/',
    },
    {
      id: 1,
      title: 'کتاب الکتریک',
      link: '/',
    },
    {
      id: 2,
      title: 'کتاب صوتی',
      link: '/',
    },
    {
      id: 3,
      title: 'مجله',
      link: '/',
    },
    {
      id: 4,
      title: 'نسخه ی خطی',
      link: '/',
    },
    {
      id: 5,
      title: 'اسناد و مدارک',
      link: '/',
    },
  ]

  const options = [
    { value: '1.', label: 'کتابخانه مرکزی' },
    { value: '2.', label: 'کتابخانه صوتی' },
  ]

  return (
    <header className={classNames('flex items-start justify-between isolate', className)}>
      <Logo />

      <div>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="نام کتاب، نویسنده، ناشر و..."
            className="w-[849px] h-[72px] rounded-3xl outline-none placeholder-content-high pr-6 text-base font-medium shadow-md"
          />

          <div className="absolute left-6 flex gap-x-3 items-center">
            <select className="flex justify-center items-center w-36 h-11 pr-3 outline-none transition-all appearance-none text-nowrap rounded-xl text-content-low text-sm font-bold bg-lightAlb hover:bg-black-haze cursor-pointer">
              {options.map((option) => (
                <option key={option.value} className="w-full">
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute left-20 top-3 text-content-low pointer-events-none" />
            <Search className="text-content-low" />
            <Settings className="text-content-low" />
          </div>
        </div>

        <nav>
          <ul className="flex gap-x-2 justify-center font-semibold mt-5">
            {links.map((link) => (
              <li key={link.id} className="rounded-2xl transition hover:bg-black-haze">
                <Link href={link.link} className="block leading-[18px] p-4">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Product ID - First Design: Empty Shopping Cart */}
      <div className="flex gap-x-3 mt-3">
        <Link
          href="/"
          className="w-12 h-12 flex justify-center items-center text-white bg-darkBlue rounded-2xl"
        >
          <ShoppingBag />
        </Link>
        <Link
          href="/dashboard"
          className="w-12 h-12 flex justify-center items-center pb-1 bg-orange text-white text-2xl font-bold rounded-2xl"
        >
          ج
        </Link>

        <div className="flex gap-y-1 flex-col">
          <Link href="/" className="text-content-high font-bold">
            علی جواهرزاده
          </Link>
          <span className="text-content-low font-medium text-sm">امتیـــاز ۴۵۰</span>
        </div>
      </div>

      {/* Product ID - First design: Full shopping cart */}
      {/* <div className="flex gap-x-3 mt-3">
        <Link
          href="/"
          className=" relative w-12 h-12 flex justify-center items-center text-white bg-lightRed rounded-2xl"
        >
          <ShoppingBag />
          <span className="absolute flex justify-center items-center top-5 left-8 border-2 border-lightRed bg-alabaster text-lightRed rounded-full w-8 h-8">
            5
          </span>
        </Link>
        <Link
          href="/dashboard"
          className="w-12 h-12 flex justify-center items-center pb-1 bg-orange text-white text-2xl font-bold rounded-2xl"
        >
          ج
        </Link>

        <div className="flex gap-y-1 flex-col">
          <Link href="/" className="text-content-high font-bold">
            علی جواهرزاده
          </Link>
          <span className="text-content-low font-medium text-sm">امتیـــاز ۴۵۰</span>
        </div>
      </div> */}

      {/* Product ID - Second Design */}
      {/* <div className="flex shrink-0 justify-between gap-x-12 mt-3">
        <div className="flex gap-x-3">
          <Link
            href="/dashboard"
            className="w-12 h-12 flex justify-center items-center pb-1 bg-orange text-white text-2xl font-bold rounded-2xl"
          >
            ج
          </Link>

          <div className="flex gap-y-1 flex-col">
            <Link href="/" className="text-content-high font-bold">
              علی جواهرزاده
            </Link>
            <span className="text-content-low font-medium text-sm">امتیـــاز ۴۵۰</span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-3">
          <Link
            href="/"
            className="flex justify-center items-center w-12 h-12 rounded-2xl bg-ashwood"
          >
            <User className="text-content-low" />
          </Link>
          <Link href="/">
            <span className="text-base font-medium text-content-high">ورود/ثبت نام</span>
          </Link>
        </div>
      </div> */}

      {/* Product ID - Third Design */}
    </header>
  )
}
