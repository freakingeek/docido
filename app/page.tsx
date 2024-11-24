'use client'
// import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Star, Headphones, BookOpenText, Paperclip } from 'lucide-react'

export default function HomePage() {
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

  const books = [
    {
      id: 0,
      img: 'https://fastly.picsum.photos/id/545/220/330.jpg?hmac=egrVNjBuoylYBf7A5wfd-7D7J5xUtvZgb0FEtvsU7sQ',
      link: '/',
    },
    {
      id: 1,
      img: 'https://fastly.picsum.photos/id/545/220/330.jpg?hmac=egrVNjBuoylYBf7A5wfd-7D7J5xUtvZgb0FEtvsU7sQ',
      link: '/',
    },
    {
      id: 2,
      img: 'https://fastly.picsum.photos/id/545/220/330.jpg?hmac=egrVNjBuoylYBf7A5wfd-7D7J5xUtvZgb0FEtvsU7sQ',
      link: '/',
    },
  ]

  return (
    <>
      <Header className="mt-10" />

      <main>
        <Swiper spaceBetween={16} className="h-96 mt-20">
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id} className="w-full h-full relative">
              <div>
                <Image
                  fill
                  alt={slider.link}
                  sizes="1536px"
                  className="rounded-[50px]"
                  src={slider.img}
                />
              </div>
              <div className="absolute top-48 left-32 flex flex-col">
                <span className="text-white text-3xl font-black leading-[54px]">
                  {slider.title}
                </span>
                {slider.title && (
                  <span className="text-white text-sm font-normal">{slider.description}</span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <div className="mt-36">
            <span className="text-content-high font-bold text-2xl">دیگر آثار این ناشر</span>
          </div>

          <Swiper spaceBetween={16} className="h-96 mt-20">
            {books.map((book) => (
              <SwiperSlide key={book.id} className="w-full h-full relative">
                <div id="slide">
                  <div className="relative w-56 h-80  rounded-3xl overflow-hidden">
                    <img src={book.img} alt={book.link} className="w-full h-full rounded-3xl" />
                    <span className="absolute flex justify-center items-center w-14 h-14 top-[-8px] right-[179px] bg-red rounded-2xl">
                      <Paperclip size={20} className=" text-white ml-3 mt-3" />
                    </span>
                    <span className="absolute top-[270px] right-2 flex justify-center items-center opacity-85 rounded-2xl bg-alabaster hover:flex ">
                      <BookOpenText size={20} className="text-content-high m-2.5" />
                    </span>
                  </div>

                  <div></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  )
}
