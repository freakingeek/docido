import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import Logo from './Logo'
import { ShoppingBag, Settings, Search } from 'react-feather'

type PhoneProps = {
  className?: string
}

export default function Phone({ className }: PhoneProps) {
  const sliders = [
    {
      id: 0,
      link: '/',
      img: 'https://fastly.picsum.photos/id/161/1800/400.jpg?hmac=kbzNpgQNcp-oZK6IpMevfqr4s7gRv2XKdgm8dpRlSN0',
      title: 'جای شما و کتابخانه ما خالی....',
      description: 'بیش از 2.000.00 کتاب دیجیتال و 100.000 کتاب صوتی',
    },
    {
      id: 1,
      link: '/',
      img: 'https://fastly.picsum.photos/id/112/1800/400.jpg?hmac=Sqldq12aR-NiAByftsl24oYae-GghQtZx_S0ENOuKIE',
      title: 'جای شما و کتابخانه ما خالی....',
      description: 'بیش از 2.000.00 کتاب دیجیتال و 100.000 کتاب صوتی',
    },
    {
      id: 2,
      link: '/',
      img: 'https://fastly.picsum.photos/id/490/1800/400.jpg?hmac=biLv_lkFMxKWCxK3kmdUN-0s9gRozTH1CU8AwpuGLT8',
      title: 'جای شما و کتابخانه ما خالی....',
      description: 'بیش از 2.000.00 کتاب دیجیتال و 100.000 کتاب صوتی',
    },
  ]

  return (
    <div className={classNames('max-w-sm mx-auto w-full bg-alabaster p-4', className)}>
      <header className="flex flex-col">
        <div className="flex justify-between">
          <Logo />
          <div className="flex gap-x-2">
            <Link
              href="/"
              className="flex justify-center items-center w-8 h-8 text-white bg-darkBlue rounded-xl"
            >
              <ShoppingBag size={15} />
            </Link>
            <Link
              href="/"
              className="flex justify-center items-center w-8 h-8  bg-orange rounded-xl"
            >
              <span className="text-base font-bold text-white mb-1">ج</span>
            </Link>
          </div>
        </div>
        <div className="relative flex items-center mt-5">
          <Search
            size={16}
            className="absolute text-content-low right-3 flex gap-x-3 items-center"
          />
          <input
            type="text"
            placeholder="نام کتاب، نویسنده، ناشر و..."
            className="w-full h-11 rounded-2xl outline-none placeholder-content-low pr-9 text-xs font-medium shadow-md"
          />
          <Settings
            size={16}
            className="absolute left-3 flex gap-x-3 items-center text-content-low"
          />
        </div>
      </header>
      <main>
        {/* Banner slider */}
        <Swiper spaceBetween={16} className="h-28 mt-5">
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id} className="w-full h-full relative">
              <div>
                <Image
                  fill
                  alt={slider.link}
                  sizes="1536px"
                  className="rounded-2xl"
                  src={slider.img}
                />
              </div>
              <div className="absolute top-11 left-5 flex flex-col">
                <span className="text-white text-xs font-black leading-5">{slider.title}</span>
                {slider.title && (
                  <span className="text-white text-[7px] font-normal">{slider.description}</span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  )
}
