"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'


const formSchema = z.object({
    wish_name : z.string().min(1),
    wish_description : z.string().min(1),
    wish_category : z.string().min(1)
})


const AddWish = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),
        defaultValues :{
            wish_name: "",
            wish_category : "",
            wish_description : "",
        }
    })

    const onSubmit = async(values : z.infer<typeof formSchema>)=>{
        // onsubmit function
    }


  return (
  <section className='bg-primary min-h-screen py-10 px-5'>
    <div className="container max-w-7xl mx-auto"></div>

  </section>
  )
}

export default AddWish;