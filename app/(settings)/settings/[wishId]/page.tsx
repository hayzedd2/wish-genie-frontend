// import prismadb from "@/lib/prismadb";
// import { auth } from "@clerk/nextjs";
// import { redirect, useParams } from "next/navigation";
// import React from "react";


// interface DatabaseProps {
//   params: { id: number };
// }

// const page: React.FC<DatabaseProps> = async () =>{
//   const { userId } = auth();
//   const {params }= useParams<{id:number}>()
//   const wish = await prismadb.wishes.findFirst({
//     where: { id: params.id },
//   });
//   if(!wish){
//     redirect('/yourwishes')
//   }
//   console.log(params.id)
//   return (
//     <div className="text-white text-[2rem]">
//       <h1>HELLO</h1> 
//       <h4>{wish.wish_name}</h4>
//     </div>
//   );
// };

// export default page;
