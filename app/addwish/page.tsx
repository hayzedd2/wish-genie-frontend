"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { MdOutlineVideoLibrary } from "react-icons/md";
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
  const [loading, setLoading] = useState(false);
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
    try {
      setLoading(true);
      const res = await axios.post("/api/wishes", values);
      toast("Wish created!",  {
        description: "Your wish has been created",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
    } catch (error) {
      toast("Something went wrong", {
        description: "Please try again",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    } finally {
      setLoading(false);
    }
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
                    <Input
                      disabled={loading}
                      placeholder="I wish for..."
                      {...field}
                    />
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
                      disabled={loading}
                      placeholder="Say Something about this wish"
                      {...field}
                    />
                  </FormControl>
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
                      <SelectTrigger className="w-[100%]">
                        <SelectValue placeholder="Choose a category that best suits your wish" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {wishCategories.map((wish, index) => (
                        <SelectItem
                          disabled={loading}
                          value={wish.id}
                          key={index}
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
              <label
                htmlFor="file"
                className="text-white text-[0.9rem] mt-3 cursor-pointer"
              >
                <MdOutlineVideoLibrary className="text-white text-[1.35rem]" />
                <div className="text mt-3">
                  <h2 className="text-white text-[0.95rem] font-[500]">
                    Optional: Add a Video
                  </h2>
                  <p className="text-[0.9rem] mt-[0.15rem]">
                    Upload a video to tell your story. (Max 2 mins)
                  </p>
                </div>
                <input
                  type="file"
                  disabled={loading}
                  name="file"
                  id="file"
                  className="hidden"
                />
              </label>
            </div>

            <div className="flex items-end justify-end">
              <Button variant={"primary"} disabled={loading}>
                {loading ? (
                  <div className="flex gap-1 items-center justify-center">
                    <RotatingLines
                    visible={true}
                    width="24"
                    strokeWidth="3"
                    strokeColor="white"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                  /> <p>Submit</p>
                  </div>
                ) : (
                  <p className="text-[0.9rem]">Submit</p>
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
