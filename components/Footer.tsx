import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './Logo'

type FooterProps = {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  const footerNavigation = [
    {
      id: 0,
      title: 'داکیــدو',
      link: [
        { text: 'تماس با ما', href: '/contact' },
        { text: 'درباره ما', href: '/about' },
        { text: 'حریم خصوصی', href: '/privacy' },
        { text: 'قوانین استفاده', href: '/rules' },
        { text: 'پشتیبانی و سوال های متداول', href: '/question' },
        { text: 'ورود و عضویت کتابخانه ها و ناشران', href: '/user' },
      ],
    },
    {
      id: 1,
      title: 'دسته های پیشنهادی',
      link: [
        { text: 'کتاب های رایگان', href: '/book' },
        { text: 'شعر عاشقانه', href: '/book' },
        { text: 'کتاب های صوتی داستانی', href: '/book' },
        { text: 'کتاب های داستان و رمان', href: '/book' },
        { text: 'کتاب های روانشناسی', href: '/book' },
        { text: 'کتاب های تخصصی', href: '/book' },
      ],
    },
    {
      id: 2,
      title: 'کتابخانه ها و ناشران',
      link: [
        { text: 'کتابخانه تخصصی تاریخ اسلام و ایران', href: '/book' },
        { text: ' کتابخانه تخصصی ادبیات', href: '/book' },
        { text: 'کتابخانه تخصصی تفسیر و علوم قرآنی', href: '/book' },
        { text: 'نشر مورخ', href: '/book' },
        { text: 'نشر علم', href: '/book' },
        { text: 'نشر ادبیات', href: '/book' },
      ],
    },
  ]

  return (
    // {footer}
    <div className="footer">
      <footer className={classNames('bg-WhiteCoffee text-content-high h-[572px] p-14', className)}>
        <div className="flex justify-between items-center">
          {footerNavigation.map((section) => (
            <div key={section.id}>
              <span className="text-xl font-bold leading-10">{section.title}</span>
              <ul>
                {section.link.map((link, index) => (
                  <li key={index} className="leading-8">
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col mt-8">
            <div className="flex justify-between w-[603px] h-32 items-center rounded-[40px] gap-x-5 p-8 bg-alabaster ">
              <Link href="/" className="flex items-center p-4">
                <Logo />
              </Link>

              <div className="flex justify-between rounded-2xl gap-x-5">
                <Link
                  href="/"
                  className="flex items-center p-4 bg-LightAlb border border-black-haze rounded-2xl"
                >
                  <Image src="/assets/images/Apple.png" alt="Apple" width={27} height={34} />
                </Link>
                <Link
                  href="/"
                  className="flex items-center p-4 bg-LightAlb border border-black-haze rounded-2xl"
                >
                  <Image
                    src="/assets/images/GooglePlay.png"
                    alt="GooglePlay"
                    width={28}
                    height={34}
                  />
                </Link>
                <Link
                  href="/"
                  className="flex items-center p-4 bg-LightAlb border border-black-haze rounded-2xl"
                >
                  <Image src="/assets/images/Bazar.png" alt="Bazar" width={85} height={34} />
                </Link>
              </div>
            </div>

            <div className="flex justify-center gap-5 mt-5">
              <Link
                href="/"
                className="flex justify-center items-center bg-alabaster rounded-2xl w-32 h-32"
              >
                <Image src="/assets/images/kasbokar.png" alt="kasbokar" width={60} height={70} />
              </Link>
              <Link
                href="/"
                className="flex justify-center items-center bg-alabaster rounded-2xl w-32 h-32"
              >
                <Image src="/assets/images/rezi.png" alt="rezi" width={78} height={90} />
              </Link>
              <Link
                href="/"
                className="flex justify-center items-center bg-alabaster rounded-2xl w-32 h-32"
              >
                <Image src="/assets/images/eNemad.png" alt="eNemad" width={70} height={83} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <span className="leading-9 font-bold text-xl">پشتیبانی</span>
          <div className="flex">
            <span className="text-lg leading-8 text-content-low font-normal">
              شنبه تا چهارشنبه ساعت 9 الی 16
            </span>
            <span className="text-lg font-normal leading-8 mx-5">0098 935 492 6410</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
