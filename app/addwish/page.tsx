"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineVideoLibrary } from "react-icons/md";
import * as z from "zod";

const wishCategories = [
  {
    catName: "Travel",
    id: "travel",
  },
  {
    catName: "Education",
    id: "education",
  },
  {
    catName: "Health & Wellness",
    id: "health and wellness",
  },
  {
    catName: "Tech",
    id: "tech",
  },
  {
    catName: "Other",
    id: "other",
  },
];
const formSchema = z.object({
  wish_name: z.string().min(1),
  wish_description: z.string().min(1),
  wish_category: z.string().min(1),
});

const AddWish = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wish_name: "",
      wish_description: "",
      wish_category: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // onsubmit function
  };

  return (
    <section className="pb-8 px-5">
      <div className="container max-w-xl mx-auto">
        <h1 className="py-8 text-white text-[1.5rem] font-[600]">New Wish</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="wish_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="I wish for..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wish_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Say Something about this wish"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="pills-container flex gap-3">
              {wishCategories.map((wish) => (
                <div
                  className="bg-[#1C1C25] text-white shadow text-[0.95rem] px-3 py-2 rounded-md cursor-pointer"
                  id={wish.id}
                >
                  {wish.catName}
                </div>
              ))}
            </div>
            <div className="text-[#9E9EB8] bg-[#1C1C25] w-full cursor-pointer rounded-md outline-none border-2 border-[#3d3d54] px-5 py-5 text-[1.05rem]">
              <MdOutlineVideoLibrary className="text-white text-[1.35rem]" />
              <div className="text mt-3">
                <h2 className="text-white text-[0.95rem] font-[500]">
                  Optional: Add a Video
                </h2>
                <p className="text-[0.9rem] mt-[0.15rem]">
                  Upload a video to tell your story. (Max 2 mins)
                </p>
              </div>
              {/* <input type="file" name="" id="" /> */}
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default AddWish;
