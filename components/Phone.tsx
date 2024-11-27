import React from 'react'
import classNames from 'classnames'

type PhoneProps = {
  className?: string
}

export default function Phone({ className }: PhoneProps) {
  return <div className={classNames('max-w-sm mx-auto w-full bg-alabaster', className)}></div>
}
