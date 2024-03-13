import prismadb from '@/lib/prismadb'
import React from 'react'
interface DatabaseProps {
  params :{ id : number}
}
const page: React.FC<DatabaseProps>= async ({ params}) => {
  const wish = await prismadb.wishes.findFirst({
    where :{
      id: params.id
    }
  })
  return (
    <div className='text-white text-[2rem]'>Active Wish === {wish?.wish_name}</div>
  )
}

export default page