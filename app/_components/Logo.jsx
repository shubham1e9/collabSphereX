import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='flex gap-2 item-center'>
        <Image src="/ppp.svg" alt="logo" width={35} height={35} />
        <h2 className='text-xl font-bold'>CollabSphere</h2>
    </div>
  )
}

export default Logo