"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { MdOutlineVideoLibrary } from "react-icons/md";
import supabase, { supabaseUrlConfig } from "@/lib/supabaseClient";
import * as z from "zod";
import axios from "axios";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
  wish_name: z.string().min(1, {
    message: "Name is required",
  }),
  wish_description: z.string().min(1, {
    message: "Description is required",
  }),
  wish_category: z.string().min(1, {
    message: "Category is required",
  }),
  // wish_image: z.string(),
});

const AddWish = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<File>();
  const [globalUrl, setGlobalUrl] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wish_name: "",
      wish_description: "",
      wish_category: "",
    },
  });


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      // if (imageUrl) {
      //   handleImageUpload(imageUrl);
      // }
      const res = await axios.post("/api/wishes", values);
      form.reset();
      window.location.assign(`/yourwishes`);
      console.log(res.data);
    } catch (error) {
      toast("Something went wrong", {
        description: "Please try again",
        action: {
          label: "Ok",
          onClick: () => console.log("Ok"),
        },
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="pb-8 xl:px-5 sm:px-5">
      <div className="xl:container xl:max-w-xl sm:max-w-none mx-auto">
        <h1 className="py-8 text-white text-[1.5rem] myman font-[600]">New Wish</h1>
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
                    <Input
                      disabled={loading}
                      placeholder="I wish for..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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
                      disabled={loading}
                      placeholder="Say Something about this wish"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wish_category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="bg-[#1C1C25]">
                      <SelectTrigger className="w-[100%] SelectTrigger">
                        <SelectValue  placeholder="Choose a category that best suits your wish" />
                      </SelectTrigger>
                    </FormControl>
                    <FormMessage />
                    <SelectContent>
                      {wishCategories.map((wish, index) => (
                        <SelectItem
                          disabled={loading}
                          value={wish.id}
                          key={wish.id}
                        >
                          {wish.catName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <div className="text-[#9E9EB8] bg-[#1C1C25] w-full cursor-pointer rounded-md outline-none border-2 border-[#3d3d54] px-5 py-5 text-[1.05rem]">
              {/* <FormField
                control={form.control}
                name="wish_description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={loading}
                        type="file"
                        onChange={(e) => setImageUrl(e.target.files?.[0])}
                        name="file"
                        accept="video/*, image/png, image/gif, image/jpeg"
                        id="file"
                        className="hidden"
                        placeholder="Say Something about this wish"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <label
                htmlFor="file"
                className="text-white text-[0.9rem] mt-3 cursor-pointer"
              >
                <MdOutlineVideoLibrary className="text-white text-[1.35rem]" />
                <div className="text mt-3">
                  {imageUrl ? (
                    <Image
                      src={URL.createObjectURL(imageUrl)}
                      width={600}
                      height={300}
                      alt="uploaded image"
                    ></Image>
                  ) : null}
                  <h2 className="text-white text-[1rem] font-[500]">
                    Optional: Upload an image
                  </h2>
                  <p className="text-[0.9rem] mt-[0.15rem] text-[#9E9EB8] font-[500]">
                    Upload an image to better describe your wish.
                  </p>
                </div>
                <input
                  type="file"
                  onChange={(e) => setImageUrl(e.target.files?.[0])}
                  disabled={loading}
                  name="file"
                  accept="video/*, image/png, image/gif, image/jpeg"
                  id="file"
                  className="hidden"
                />
              </label>
            </div>

            <div className="flex items-end justify-end">
              <Button variant={"primary"} size={"lg"} disabled={loading}>
                {loading ? (
                  <div className="flex gap-1 items-center justify-center text-[1rem] font-[500]">
                    <RotatingLines
                      visible={true}
                      width="24"
                      strokeWidth="3"
                      strokeColor="white"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                    />{" "}
                    <p>Submitting</p>
                  </div>
                ) : (
                  <p className="text-[1rem] font-[500]">Submit</p>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default AddWish;
