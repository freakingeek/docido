'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function HomePage() {
  return (
    <>
      <Header className="mt-10" />

      <main>
        <Swiper spaceBetween={16} className="h-96 mt-20">
          <SwiperSlide className="w-full h-full relative">
            <div>
              <Image
                fill
                alt=""
                sizes="1536px"
                className="rounded-[50px]"
                src="https://fastly.picsum.photos/id/161/1800/400.jpg?hmac=kbzNpgQNcp-oZK6IpMevfqr4s7gRv2XKdgm8dpRlSN0"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="w-full h-full relative">
            <Image
              fill
              alt=""
              sizes="1536px"
              className="rounded-[50px]"
              src="https://fastly.picsum.photos/id/112/1800/400.jpg?hmac=Sqldq12aR-NiAByftsl24oYae-GghQtZx_S0ENOuKIE"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full h-full relative">
            <Image
              fill
              alt=""
              sizes="1536px"
              className="rounded-[50px]"
              src="https://fastly.picsum.photos/id/490/1800/400.jpg?hmac=biLv_lkFMxKWCxK3kmdUN-0s9gRozTH1CU8AwpuGLT8"
            />
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  )
}
