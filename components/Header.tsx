import Link from 'next/link'
import classNames from 'classnames'
import Logo from '@/components/Logo'
import { Settings, Search } from 'lucide-react'

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

  return (
    <header className={classNames('flex items-start justify-between', className)}>
      <Logo />

      <div>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="نام کتاب، نویسنده، ناشر و..."
            className="w-[849px] h-[72px] rounded-3xl outline-none placeholder-content-low pr-6 text-base font-medium"
          />

          <div className="absolute left-6 flex gap-x-3 items-center">
            <select className="flex justify-center items-center w-36 h-12 transition-all text-nowrap rounded-xl text-content-low text-sm font-bold bg-alabaster hover:bg-black-haze cursor-pointer">
              <option value="0">انتخاب کتابخانه</option>
              <option value="1">کتابخانه مرکزی</option>
            </select>

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

      <div className="flex gap-x-3 mt-3">
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
    </header>
  )
}
