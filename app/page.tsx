'use client'
// import Link from 'next/link'
import '../app/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import 'swiper/css/pagination'
import Header from '@/components/Header'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  BookOpen,
  Paperclip,
  Settings,
  Search,
  ChevronDown,
  ShoppingBag,
  User,
} from 'react-feather'

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
      img: 'https://fastly.picsum.photos/id/645/220/330.jpg?hmac=2fTsi1c4Dlkqc2VCe28et4p2rd1pK8_AvUItJ-_NhCc',
      link: '/',
    },
    {
      id: 2,
      img: 'https://fastly.picsum.photos/id/979/220/330.jpg?hmac=QOt7-jRS3t9J-tWHPaOpw3JhgFsYfBnm_CS5DO1QnG0',
      link: '/',
    },
    {
      id: 3,
      img: 'https://fastly.picsum.photos/id/1041/220/330.jpg?hmac=Upa4V38W63lLkbRrCS69zFq8HU-vOJwMpEmj_nD7fZk',
      link: '/',
    },
    {
      id: 4,
      img: 'https://fastly.picsum.photos/id/788/220/330.jpg?hmac=uCojuT1AtjC0Kv1p-s3t1gGGscZ1wKc5bpzbuyAXFSg',
      link: '/',
    },
    {
      id: 5,
      img: 'https://fastly.picsum.photos/id/515/220/330.jpg?hmac=YTNlaG87z7br18UKBllt29zuRrcwojq0AuAmoCLd1aI',
      link: '/',
    },
    {
      id: 6,
      img: 'https://fastly.picsum.photos/id/981/220/330.jpg?hmac=kwuAR_Qheow1vv0tj3FM_e3LWaN5qcPfQH6lsjntqnk',
      link: '/',
    },
    {
      id: 7,
      img: 'https://fastly.picsum.photos/id/291/220/330.jpg?hmac=tIcryQmGrL3aYuqrQVBG353mfnKA77LSedMANZq8e38',
      link: '/',
    },
    {
      id: 8,
      img: 'https://fastly.picsum.photos/id/777/220/330.jpg?hmac=b4Ysrzz3oGSQ1RM0OleJ4Pvp4lo9WwTrnwRaYuG3AV0',
      link: '/',
    },
    {
      id: 9,
      img: 'https://fastly.picsum.photos/id/788/220/330.jpg?hmac=uCojuT1AtjC0Kv1p-s3t1gGGscZ1wKc5bpzbuyAXFSg',
      link: '/',
    },
  ]

  return (
    <>
      <Header className="mt-10" />

      <main>
        {/* Banner slider */}
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={16}
          className="h-96 mt-14"
        >
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

        {/* Book categories */}
        <div>
          <ul>
            <li>
              <Link href="/"></Link>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between mt-36">
            <span className="text-content-high font-bold text-2xl">دیگر آثار این ناشر</span>
            <button>بیشتر...</button>
          </div>

          <Swiper slidesPerView={6} spaceBetween={24} className="flex w-full mt-14">
            {books.map((book) => (
              <SwiperSlide key={book.id} className="flex w-56">
                <div className="relative w-56 h-80 rounded-3xl overflow-hidden">
                  <img src={book.img} alt={book.link} className="w-full h-full rounded-3xl" />
                  <span className="absolute flex justify-center items-center w-14 h-14 top-[-8px] right-[179px] bg-red rounded-2xl">
                    <Paperclip size={20} className=" text-white ml-3 mt-3" />
                  </span>
                  <span className="absolute flex justify-center items-center top-[270px] right-2 w-auto opacity-85 rounded-2xl bg-alabaster cursor-pointer group">
                    <BookOpen size={20} className="text-content-high m-2.5" />
                    <span className="hidden group-hover:inline ml-2 pl-6 text-sm">
                      کتابخانه تخصصی تاریخ...
                    </span>
                  </span>
                </div>

                <div></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  )
}
