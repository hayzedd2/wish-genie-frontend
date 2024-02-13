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
import * as z from "zod";

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
      wish_category: "",
      wish_description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // onsubmit function
  };

  return (
    <section className="py-10 px-5">
      <div className="container max-w-xl mx-auto">
        <h1 className="py-3 text-white text-[1.5rem] font-[600]">New Wish</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-10"
          >
            <FormField
              control={form.control}
              name="wish_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="I wish for ..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wish_description"
              render={({ field }) => (
                <FormItem>
                    <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Say Something about this wish"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </section>
  );
};

export default AddWish;
