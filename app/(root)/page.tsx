import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className="p-4">
        <UserButton afterSignOutUrl='/'/>
        <Button>change</Button>

    </div>
  )
}

export default page