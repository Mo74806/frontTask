"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { PostService } from "@/services/post";
import { useToast } from "@/hooks/use-toast";

const DeleteButton = ({ postId }: { postId: string }) => {
  const router = useRouter();
  const { toast } = useToast();
  console.log(postId);
  const handleDelete = async () => {
    try {
      const response = await PostService.deletePost(postId);

      console.log(response);
      if (response.status === 200) {
        toast({
          color: "green",
          title: "Post Deleted Successfully",
        });
        router.push("/");
      }
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Unable to save the post. Please try again.",
      });
      throw new Error(e);
    }
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          title="Delete"
          className="w-auto rounded-[8px] px-5  bg-red-600 text-white hover:text-red-600"
        >
          Delete{" "}
        </Button>
        {/* <Button variant="outline">Open popover</Button> */}
      </PopoverTrigger>
      <PopoverContent className=" w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-bold px-1 leading-none">Deletion</h4>
            <p className="text-sm text-muted-foreground px-1">are you sure ?</p>
          </div>
        </div>
        <div className="flex gap-x-1 mt-2">
          <Button
            title="yes"
            className="w-auto rounded-[8px] px-5  bg-red-600 text-white hover:text-red-600"
            onClick={handleDelete}
          >
            Yes{" "}
          </Button>
          {/* <Button
          
            title="no"
            className="w-auto rounded-[8px] px-5  bg-black text-white hover:text-black"
          >
            No{" "}
          </Button> */}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DeleteButton;
