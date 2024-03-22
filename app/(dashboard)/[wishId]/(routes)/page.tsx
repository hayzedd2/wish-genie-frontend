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
    <div className='text-white text-[2rem]'>why</div>
  )}

export default page