import { Suspense } from "react"
import AddWish from "./AddWish"
import Loading from "@/wishes/Loading"

const AddwishPage = ()=>{
  return (
    <Suspense fallback={<Loading/>}>
      <AddWish/>
    </Suspense>
  )
}
export default AddwishPage