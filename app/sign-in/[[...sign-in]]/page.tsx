import React from 'react'
import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] w-full">
      <SignIn />
    </div>
  )
}

export default page