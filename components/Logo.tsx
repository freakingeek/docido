import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../public/assets/images/logo.png'

export default function Logo() {
  return (
    <div>
      <Link href="/" className="flex gap-x-2 items-center">
        <Image src={LogoImage} alt="" className="w-20" priority />

        <div className="flex flex-col text-content-low-emphasis text-xl font-extrabold">
          <span>داکیـــدو</span>
          <span>DOCIDO</span>
        </div>
      </Link>
    </div>
  )
}
