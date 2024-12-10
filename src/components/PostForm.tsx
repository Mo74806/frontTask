"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { PostService } from "@/services/post";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { PostDataInterface } from "@/types";
import { Skeleton } from "./ui/skeleton";

const PostForm = ({ type, postId }: { type: string; postId?: string }) => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [post, setPost] = useState<PostDataInterface | null>(null);

  const formSchema = z.object({
    title: z.string().min(2, { message: "Title is required" }),
    body: z.string().min(2, { message: "Post is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
    },
    mode: "onChange",
  });
  //fetching post data
  const getPostData = async () => {
    setLoading(true);
    try {
      const response = await PostService.getSinglePost(postId);
      setPost(response);
      form.reset({
        title: response.title,
        body: response.body,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Unable to save the post. Please try again.",
      });
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  //adjust the textarea height while the text change
  const adjustTextareaHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${Math.min(
        textAreaRef.current.scrollHeight,
        300
      )}px`;
    }
  };

  useEffect(() => {
    //if there postid in params then fetch the post data
    if (postId) getPostData().then(() => adjustTextareaHeight());
  }, [postId]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = postId
        ? await PostService.updatePost(
            { ...data, userId: post?.userId! },
            postId
          )
        : await PostService.createPost({ ...data, userId: 1 });
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        toast({
          
          title: postId
            ? "Post Updated Successfully"
            : "Post Created Successfully",
        });
        router.push("/");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Unable to save the post. Please try again.",
      });
      throw new Error(error);
    }
  };

  if (loading) {
    return (
      <Form {...form}>
        <h1 className="text-[22px] font-bold">
          {type === "update" ? "Update" : "Create"} Post
        </h1>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-[8px] flex w-full flex-col"
        >
          <div className="mt-3">
            <Skeleton className="w-[100%] bg-gray-400 h-[40px]  " />
          </div>
          <div className="mt-3">
            <Skeleton className="w-[100%] bg-gray-400 h-[80px]  " />
          </div>
          <div className="mt-10 w-full">
            <Skeleton className="w-[100%] bg-gray-400 h-[40px]  " />
          </div>
        </form>
      </Form>
    );
  }

  return (
    <Form {...form}>
      <h1 className="text-[22px] font-bold">
        {type === "update" ? "Update" : "Create"} Post
      </h1>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-[8px] flex w-full flex-col"
      >
        <div className="mt-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2.5">
                <FormLabel className="text-[16px] font-semibold">
                  Post Title
                </FormLabel>
                <FormControl>
                  <input
                    className={`border-2 h-[40px] ring-offset-black rounded-[8px] px-[10px] ${
                      form.formState.errors.title
                        ? "border-red-600 ring-offset-red-600 outline-red-600"
                        : "border-black"
                    }`}
                    placeholder="Write a Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-600 font-semibold text-[12px]" />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-3">
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2.5">
                <FormLabel className="text-[16px] font-semibold">
                  Post
                </FormLabel>
                <FormControl>
                  <textarea
                    className={`border-2 min-h-[80px] rounded-[8px] ring-offset-black px-[10px] pt-[10px] ${
                      form.formState.errors.body
                        ? "border-red-600 ring-offset-red-600 outline-red-600"
                        : "border-black"
                    }`}
                    placeholder="Write a Post"
                    {...field}
                    ref={(el) => {
                      textAreaRef.current = el;
                      field.ref(el);
                    }}
                    onInput={adjustTextareaHeight}
                  />
                </FormControl>
                <FormMessage className="text-red-600 font-semibold text-[12px]" />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-10 w-full">
          <Button
            type="submit"
            className="text-16 w-full bg-black border-white border rounded-[8px] text-white py-4 font-extrabold transition-all duration-500 hover:bg-white hover:text-black"
          >
            {form.formState.isSubmitting ? (
              <>Submitting...</>
            ) : postId ? (
              "Edit Post"
            ) : (
              "Submit & Publish Post"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
