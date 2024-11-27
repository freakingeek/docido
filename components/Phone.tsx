import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { ShoppingBag, Settings, Search } from 'react-feather'

type PhoneProps = {
  className?: string
}

export default function Phone({ className }: PhoneProps) {
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
    </div>
  )
}
