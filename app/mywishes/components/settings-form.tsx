"use client";
import { Wishes } from "@prisma/client";
import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
import { RotatingLines } from "react-loader-spinner";
import { MdOutlineVideoLibrary } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import axios from "axios";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa6";

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
interface formProps {
  initialData: Wishes;
}
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
});
type settingsFormValues = z.infer<typeof formSchema>;
const SettingsForm: React.FC<formProps> = ({ initialData }) => {
  const form = useForm<settingsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData as settingsFormValues,
  });
  const [loading, setLoading] = useState(false);
  const [open, isOpen] = useState(false);
  const params = useParams();
  const router = useRouter();
  const onSubmit = async (data: settingsFormValues) => {
    try {
      setLoading(true);
      const res = await axios.patch(`/api/wishes/${params.wishId}`, data);
      router.refresh();
      toast("Wish Updated", {
        description: "Success",
        action: {
          label: "Ok",
          onClick: () => console.log("Ok"),
        },
      });
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
  const onDelete = async () => {
    try {
      setLoading(true);
      const res = await axios.delete(`/api/wishes/${params.wishId}`);
      router.refresh();
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
    <section className="pb-8 px-5">
      <div className="xl:container xl:max-w-xl sm:max-w-none mx-auto">
        <div className="heading flex items-end justify-between">
          <div>
            <h1 className="pt-8 text-white text-[1.5rem] font-[600]">
              Manage your Wish
            </h1>
            <p className="text-[1rem] mt-[0.15rem] mb-[0.35rem] text-[#9E9EB8] font-[500]">
              Delete or edit your wish.
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"delete"} size={"icon"}>
                <FaTrash className="text-[1.05rem] text-white" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your wish.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete} disabled={loading}>
                {loading ? (
                  <div className="flex gap-1 items-center opacity-50 justify-center text-[1rem] font-[500]">
                    <RotatingLines
                      visible={true}
                      width="24"
                      strokeWidth="3"
                      strokeColor="white"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                    />{" "}
                    <p >Continue</p>
                  </div>
                ) : (
                  <p className="text-[1rem] font-[500]">Continue</p>
                )}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
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
                        <SelectValue placeholder="Choose a category that best suits your wish" />
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
              <label
                htmlFor="file"
                className="text-white text-[0.9rem] mt-3 cursor-pointer"
              >
                <MdOutlineVideoLibrary className="text-white text-[1.35rem]" />
                <div className="text mt-3">
                  <h2 className="text-white text-[1rem] font-[500]">
                    Optional: Add a Video
                  </h2>
                  <p className="text-[0.9rem] mt-[0.15rem] text-[#9E9EB8] font-[500]">
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

            <div className="flex items-end justify-end gap-3">
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
                    <p>Saving changes</p>
                  </div>
                ) : (
                  <p className="text-[1rem] font-[500]">Save Changes</p>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SettingsForm;
